/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {EditorProps} from '@monaco-editor/react';

export const monacoOptions: Partial<EditorProps['options']> = {
  theme: "zzzz-theme",
  fontSize: 20,
  padding: {top: 10},
  scrollbar: {
    vertical: 'hidden',
    alwaysConsumeMouseWheel: false,
  },
  minimap: {
    enabled: false,
  },
  formatOnPaste: true,
  formatOnType: true,
  fontFamily: '"Source Code Pro", monospace',
  glyphMargin: true,

  autoClosingBrackets: 'languageDefined',
  autoClosingDelete: 'always',
  autoClosingOvertype: 'always',

  automaticLayout: true,
  wordWrap: 'on',
  wrappingIndent: 'deepIndent',

  hideCursorInOverviewRuler: true,
  overviewRulerBorder: false,
};
