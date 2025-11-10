---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: 51aed03147472b3883200e4538ff0beec8ff948f
---

Verwenden Sie `BrowserSetting.set()`, um die Browsereinstellungen auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen in der Lage sind, Einstellungen zu ändern:

- Einige Einstellungen sind gesperrt, sodass sie überhaupt nicht von Erweiterungen geändert werden können.
- Wenn mehrere Erweiterungen versuchen, dieselbe Einstellung zu ändern, wird den Erweiterungen eine Vorrangordnung zugewiesen, basierend darauf, wann sie installiert wurden. Neuere Erweiterungen haben Vorrang vor weniger neu installierten Erweiterungen.

Das bedeutet, wenn Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. Allerdings wird die Änderung von X gespeichert und in einer Warteschlange gespeichert, geordnet nach dem Vorrang von X im Vergleich zu anderen Erweiterungen, die versucht haben, die Einstellung zu ändern. Wenn die Einstellung später freigegeben wird, darf die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Andernfalls, wenn keine andere Erweiterung die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und wird dann gesagt, die Einstellung zu "kontrollieren".
3. Andernfalls, wenn eine Erweiterung Y mit niedrigerem Vorrang die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und kontrolliert nun die Einstellung. Allerdings wird die Änderung von Y gespeichert und in einer Vorrang-Warteschlange gespeichert. Wenn X anschließend seinen Wert löscht oder wenn X deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung der Einstellung vornehmen.
4. Andernfalls, wenn eine Erweiterung Z mit höherem Vorrang die Einstellung bereits geändert hat, gelingt es X nicht, die Einstellung zu ändern, aber seine Änderung wird in die Warteschlange eingereiht. Wenn Z anschließend seinen Wert löscht oder wenn Z deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung der Einstellung vornehmen.

Eine Erweiterung kann herausfinden, welches dieser Szenarien zutrifft, indem sie die `levelOfControl`-Eigenschaft überprüft, die von einem Aufruf von [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die `BrowserSetting.set()`-Methode gibt ein Promise zurück, das ein boolean auflöst: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich dazu führt, dass die Einstellung geändert wird (Szenarien 2 und 3 oben), ist der boolean `true`: andernfalls ist er `false`.

## Syntax

```js-nolint
let setting = setting.set(
  details     // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das die folgende Eigenschaft enthalten muss:
    - `value`
      - : `any`. Der Wert, auf den Sie die Einstellung ändern möchten. Sein Typ hängt von der jeweiligen Einstellung ab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung geändert wurde, `false` andernfalls (zum Beispiel, weil die Erweiterung die Einstellung nicht kontrollierte).

## Beispiel

Ändern Sie die Einstellung `hyperlinkAuditingEnabled` (dies erfordert die Berechtigung "privacy"):

```js
function onSet(result) {
  if (result) {
    console.log("Value was updated");
  } else {
    console.log("Value was not updated");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
    value: false,
  });
  setting.then(onSet);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) von Chromium.

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
