---
title: tabs.MutedInfo
slug: Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Objekt enthält ein boolesches Feld, das angibt, ob der Tab stummgeschaltet ist, sowie den Grund für die letzte Statusänderung.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, die zuletzt den Stummschaltungsstatus geändert hat. Wird nicht gesetzt, wenn eine Erweiterung nicht der Grund für die letzte Änderung des Stummschaltungsstatus war.
- `muted`
  - : `boolean`. Ob der Tab derzeit stummgeschaltet ist. Entspricht dem Zustand, ob das Stummschaltungsanzeige-Symbol angezeigt wird.
- `reason` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfoReason')}}. Der Grund, warum der Tab stummgeschaltet oder die Stummschaltung aufgehoben wurde. Wird nicht gesetzt, wenn der Stummschaltungsstatus des Tabs nie geändert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-MutedInfo) API von Chromium. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
