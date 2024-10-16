/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  RefreshIcon,
  ShareIcon,
  EyeOffIcon,
  EyeIcon,
} from '@heroicons/react/outline';
import {CheckIcon} from '@heroicons/react/solid';
import clsx from 'clsx';
import Link from 'next/link';
import {useSnackbar} from 'notistack';
import {useState} from 'react';
import {defaultStore} from '../lib/defaultStore';
import {IconGitHub} from './Icons/IconGitHub';
import Logo from './Logo';
import {useStore, useStoreDispatch} from './StoreContext';
import Legend from './Legend/Legend';

export default function Header(): JSX.Element {
  const store = useStore();
  const {isVisibleLegend} = store;
  const [showCheck, setShowCheck] = useState(false);
  const dispatchStore = useStoreDispatch();
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();

  const handleToggleSteps = () => {
    dispatchStore({
      type: 'setIntermediateSteps',
    });
  };

  const handleToggleLegend = () => {
    dispatchStore({
      type: 'setLegend',
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the playground?')) {
      /**
       * Close open snackbars if any. This is necessary because when displaying
       * outputs (Preview or not), we only close previous snackbars if we received
       * new messages, which is needed in order to display "Bad URL" or success
       * messages when loading Playground for the first time. Otherwise, messages
       * such as "Bad URL" will be closed by the outputs calling `closeSnackbar`.
       */
      closeSnackbar();
      dispatchStore({type: 'setStore', payload: {store: defaultStore}});
    }
  };

  const handleShare: () => void = () => {
    navigator.clipboard.writeText(location.href).then(() => {
      enqueueSnackbar('URL copied to clipboard');
      setShowCheck(true);
      // Show the check mark icon briefly after URL is copied
      setTimeout(() => setShowCheck(false), 1000);
    });
  };

  return (
    <div
      className={`fixed z-10 flex flex-col items-center justify-between bg-white border-b border-gray-200 ${isVisibleLegend ? 'h-32' : 'h-20'}`}>
      <div className="flex items-center justify-between w-screen px-5 py-5">
        <div className="flex items-center flex-none h-full gap-2 text-lg">
          <Logo
            className={clsx(
              'w-8 h-8 text-link',
              process.env.NODE_ENV === 'development' && 'text-yellow-600',
            )}
          />
          <p className="hidden select-none sm:block">
            React Compiler Playground Clone 🌀
            <span className="pl-3 text-base text-link">
              by Mickaël et Lucas
            </span>
          </p>
        </div>
        <div className="flex items-center text-[15px] gap-4">
          {store.isVisibleSteps && (
            <button
              title="Hide steps"
              aria-label="Hiude steps"
              className="flex items-center gap-1 transition-colors duration-150 ease-in text-link p-3 cursor-pointer hover:bg-blue-10 rounded-md"
              onClick={handleToggleLegend}>
              {store.isVisibleLegend ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
              <p className="hidden sm:block font-bold">
                {store.isVisibleLegend ? 'Hide categories' : 'Show categories'}
              </p>
            </button>
          )}
          <button
            title="Hide steps"
            aria-label="Hiude steps"
            className="flex items-center gap-1 transition-colors duration-150 ease-in text-link p-3 mr-3 cursor-pointer hover:bg-blue-10 rounded-md"
            onClick={handleToggleSteps}>
            {store.isVisibleSteps ? (
              <EyeOffIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
            <p className="hidden sm:block font-bold">
              {store.isVisibleSteps
                ? 'Hide intermediate steps'
                : 'Show intermediate steps'}
            </p>
          </button>
          <button
            title="Reset Playground"
            aria-label="Reset Playground"
            className="flex items-center gap-1 transition-colors duration-150 ease-in text-secondary cursor-pointer hover:text-link"
            onClick={handleReset}>
            <RefreshIcon className="w-5 h-5" />
            <p className="hidden sm:block">Reset</p>
          </button>
          <button
            title="Copy sharable URL"
            aria-label="Copy sharable URL"
            className="flex items-center gap-1 transition-colors duration-150 ease-in text-secondary cursor-pointer hover:text-link"
            onClick={handleShare}
            disabled={showCheck}>
            {!showCheck ? (
              <ShareIcon className="w-5 h-5" />
            ) : (
              <CheckIcon className="w-5 h-5 fill-blue-50" />
            )}
            <p className="hidden sm:block">Share</p>
          </button>
          <Link
            href="https://github.com/facebook/react"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open on GitHub"
            className="flex items-center gap-1 transition-colors duration-150 ease-in text-secondary hover:text-link">
            <IconGitHub />
          </Link>
        </div>
      </div>
      {isVisibleLegend && <Legend />}
    </div>
  );
}
