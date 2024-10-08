---
title: clear()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/clear
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.clear()`, um alle Änderungen, die die Erweiterung an der Browsereinstellung vorgenommen hat, zu löschen. Die Browsereinstellung wird auf ihren vorherigen Wert zurückgesetzt.

Die Erweiterung gibt zudem die Kontrolle über die Einstellung auf, sodass eine Erweiterung mit niedrigerer Priorität (also eine Erweiterung, die vor dieser installiert wurde) die Einstellung ändern kann. Siehe [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set), um mehr über die Kontrolle von Einstellungen zu erfahren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Wenn das Löschen des Wertes fehlschlug, wird das Promise mit `false` aufgelöst. Wenn das Löschen des Wertes erfolgreich war, wird es mit `true` aufgelöst.

## Syntax

```js-nolint
let clearing = setting.clear(
  details     // object
)
```

### Parameter

- `details`
  - : Ein leeres Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung gelöscht wurde, `false` andernfalls.

## Browser-Kompatibilität

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

## Beispiel

Löschen Sie die Einstellung `webRTCIPHandlingPolicy`:

```js
function onCleared(result) {
  if (result) {
    console.log("Setting was cleared");
  } else {
    console.log("Setting was not cleared");
  }
}

let clearing = browser.privacy.network.webRTCIPHandlingPolicy.clear({});
clearing.then(onCleared);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.

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
