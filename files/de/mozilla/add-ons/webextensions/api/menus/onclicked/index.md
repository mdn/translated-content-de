---
title: menus.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Menüpunkt angeklickt wird.

Zur Kompatibilität mit anderen Browsern stellt Firefox dieses Ereignis sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` zur Verfügung.

## Syntax

```js-nolint
browser.menus.onClicked.addListener(listener)
browser.menus.onClicked.removeListener(listener)
browser.menus.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er aktiv lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `info`
      - : {{WebExtAPIRef('menus.OnClickData')}}. Informationen über das angeklickte Element und den Kontext, in dem der Klick erfolgt ist.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Die Details des Tabs, in dem der Klick stattgefunden hat. Falls der Klick nicht in oder auf einem Tab erfolgte, fehlt dieses Parameter.

## Beispiele

Dieses Beispiel hört auf Klicks auf ein Menüelement und protokolliert dann die ID des Elements und die Tab-ID:

```js
browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(`Item ${info.menuItemId} clicked in tab ${tab.id}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#event-onClicked) API von Chromium. Diese Dokumentation ist abgeleitet von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
