---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert die Eigenschaften eines Fensters. Verwenden Sie dies, um ein Fenster zu verschieben, zu ändern und den Fokus zu setzen oder zu entfernen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.windows.update(
  windowId,              // integer
  updateInfo             // object
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, das aktualisiert werden soll.
- `updateInfo`

  - : `object`. Objekt, das die zu aktualisierenden Eigenschaften enthält.

    - `drawAttention` {{optional_inline}}
      - : `boolean`. Wenn `true` wird das Fenster so angezeigt, dass es die Aufmerksamkeit des Benutzers auf sich zieht, ohne das fokussierte Fenster zu ändern. Der Effekt hält an, bis der Benutzer den Fokus auf das Fenster ändert. Diese Option hat keinen Effekt, wenn das Fenster bereits den Fokus hat. Setzen Sie `false`, um eine vorherige `drawAttention`-Anfrage zu stornieren.
    - `focused` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das Fenster nach vorne gebracht. Wenn `false`, wird das nächste Fenster in der Z-Reihenfolge nach vorne gebracht.
    - `height` {{optional_inline}}
      - : `integer`. Die Höhe, auf die das Fenster in Pixeln geändert werden soll. Dieser Wert wird bei Panels ignoriert.
    - `left` {{optional_inline}}
      - : `integer`. Der Versatz vom linken Rand des Bildschirms, zu dem das Fenster in Pixeln verschoben werden soll. Dieser Wert wird bei Panels ignoriert.
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}}. Der neue Zustand des Fensters. Die Zustände `minimized`, `maximized` und `fullscreen` können nicht mit `left`, `top`, `width` oder `height` kombiniert werden.
    - `titlePreface` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um dem Titel des Browserfensters einen String voranzustellen. Je nach zugrunde liegendem Betriebssystem funktioniert dies möglicherweise nicht bei Browserfenstern, die keinen Titel haben (zum Beispiel about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Der Versatz vom oberen Rand des Bildschirms, zu dem das Fenster in Pixeln verschoben werden soll. Dieser Wert wird bei Panels ignoriert.
    - `width` {{optional_inline}}
      - : `integer`. Die Breite, auf die das Fenster in Pixeln geändert werden soll. Dieser Wert wird bei Panels ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das die Details des aktualisierten Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Symbol einer Browser-Aktion klickt, wird das Fenster in die obere linke Ecke verschoben:

```js
function onUpdated(windowInfo) {
  console.log(`Updated window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let updating = browser.windows.update(tab.windowId, {
    left: 0,
    top: 0,
  });
  updating.then(onUpdated, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-update) API. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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
