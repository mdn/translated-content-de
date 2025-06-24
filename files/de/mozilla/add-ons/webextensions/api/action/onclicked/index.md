---
title: action.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/action/onClicked
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Symbol für eine Browseraktion angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browseraktion ein Popup hat.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Um eine Rechtsklickaktion zu definieren, verwenden Sie die [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) API mit dem "browser_action" [Kontexttyp](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).

## Syntax

```js-nolint
browser.action.onClicked.addListener(listener)
browser.action.onClicked.removeListener(listener)
browser.action.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Symbol angeklickt wurde.
    - `OnClickData`
      - : Ein Objekt, das Informationen über den Klick enthält.
        - `modifiers`
          - : Ein `Array`. Die beim Klick aktiven Tastaturmodifikatoren, bestehend aus einem oder mehreren von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `Integer`. Gibt die Taste an, mit der das Seitensymbol angeklickt wurde: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus in Verbindung steht, wie z.B. von der Tastatur, und `1` für einen Mittelknopf- oder Raddruck. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick verwendet, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Beispiele

Wenn der Benutzer auf das Symbol klickt, deaktivieren Sie es für den aktiven Tab und loggen Sie die URL des Tabs:

```js
browser.action.onClicked.addListener((tab) => {
  // disable the active tab
  browser.action.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#event-onClicked) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
