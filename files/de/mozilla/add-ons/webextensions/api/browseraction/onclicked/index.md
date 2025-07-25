---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Symbol einer Browser-Aktion angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browser-Aktion ein Popup hat.

Um eine Aktion für einen Rechtsklick zu definieren, verwenden Sie die [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) API mit dem "browser_action" [Kontexttyp](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).

## Syntax

```js-nolint
browser.browserAction.onClicked.addListener(listener)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Symbol angeklickt wurde.
    - `OnClickData`
      - : Ein Objekt, das Informationen über den Klick enthält.
        - `modifiers`
          - : Ein `array`. Die zum Zeitpunkt des Klicks aktiven Tastatur-Modifikatoren sind eines oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Zeigt die Schaltfläche an, die verwendet wurde, um auf das Seitensymbol zu klicken: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z.B. einer von der Tastatur, und `1` für einen Klick mit der mittleren Schaltfläche oder dem Rad. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick konsumiert, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Beispiele

Wenn der Benutzer auf das Symbol der Browser-Aktion klickt, schaltet dieser Code es für den aktiven Tab aus und protokolliert die URL des Tabs:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the browser action for the tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#event-onClicked) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
