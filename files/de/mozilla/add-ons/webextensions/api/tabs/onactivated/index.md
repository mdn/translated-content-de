---
title: tabs.onActivated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onActivated
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich der aktive Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise nicht festgelegt ist, wenn dieses Ereignis ausgelöst wird. Sie können jedoch {{WebExtAPIRef("tabs.onUpdated")}}-Ereignisse abhören, um benachrichtigt zu werden, wenn eine URL festgelegt wird.

## Syntax

```js-nolint
browser.tabs.onActivated.addListener(listener)
browser.tabs.onActivated.removeListener(listener)
browser.tabs.onActivated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es abgehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `activeInfo`
      - : `object`. ID des Tabs, der aktiv gemacht wurde, und ID seines Fensters. Siehe den Abschnitt [activeInfo](#activeinfo_2) für weitere Details.

## Zusätzliche Objekte

### activeInfo

- `previousTabId`
  - : `integer`. Die ID des zuvor aktivierten Tabs, falls dieser Tab noch geöffnet ist.
- `tabId`
  - : `integer`. Die ID des Tabs, der aktiv geworden ist.
- `windowId`
  - : `integer`. Die ID des Fensters des Tabs.

## Beispiele

Ereignisse der Tab-Aktivierung abhören und protokollieren:

```js
function handleActivated(activeInfo) {
  console.log(`Tab ${activeInfo.tabId} was activated`);
}

browser.tabs.onActivated.addListener(handleActivated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onActivated). Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
