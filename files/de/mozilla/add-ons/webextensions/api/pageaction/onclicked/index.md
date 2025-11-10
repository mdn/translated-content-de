---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Page-Action-Symbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Seitenaktion ein Popup hat.

Um eine Rechtsklick-Aktion zu definieren, verwenden Sie die {{WebExtAPIRef('contextMenus')}} API mit dem "page_action" {{WebExtAPIRef('contextMenus/ContextType', 'context type', '', 'nocode')}}.

## Syntax

```js-nolint
browser.pageAction.onClicked.addListener(listener)
browser.pageAction.onClicked.removeListener(listener)
browser.pageAction.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beenden Sie die Überwachung dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tab`
      - : Ein {{WebExtAPIRef('tabs.Tab')}} Objekt, das den Tab repräsentiert, dessen Page-Action angeklickt wurde.
    - `OnClickData`
      - : Ein Objekt, das Informationen über den Klick enthält.
        - `modifiers`
          - : Ein `array`. Die Tastaturmodifikatoren, die zum Zeitpunkt des Klicks aktiv sind, eine oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Zeigt die Taste an, mit der das Page-Action-Symbol angeklickt wurde: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z. B. einer von der Tastatur, und `1` für einen mittleren Knopf oder Radklick. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick nutzt, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Beispiele

Wenn der Benutzer auf die Seitenaktion klickt, blenden Sie sie aus und navigieren Sie den aktiven Tab zu "<https://giphy.com/explore/cat>":

```js
let catGifs = "https://giphy.com/explore/cat";

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: catGifs });
});

browser.pageAction.onClicked.addListener(() => {});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#event-onClicked) API. Diese Dokumentation ist abgeleitet von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.

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
