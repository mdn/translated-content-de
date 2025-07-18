---
title: tabs.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermittelt die Hauptsprache des Inhalts in einem Tab mit dem [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let detecting = browser.tabs.detectLanguage(
  tabId,                  // optional integer
  callback                // optional function
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.
- `callback` {{optional_inline}}
  - : `function`. Wenn derzeit eine `tabId` angegeben ist, verwendet diese Methode diesen Callback, um die Ergebnisse zurückzugeben, anstatt ein Promise zu retournieren. Der Callback erhält als einziges Eingabeparameter einen String, der den erkannten Sprachcode wie `en` oder `fr` enthält.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der einen ISO-Sprachcode wie `en` oder `fr` darstellt. Für eine vollständige Liste der von dieser Methode unterstützten Sprachen siehe [kLanguageInfoTable](https://source.chromium.org/chromium/chromium/src/+/main:third_party/ced/src/util/languages/languages.cc;l=35). Für eine unbekannte Sprache wird `"und"` zurückgegeben (siehe jedoch [Bug 1288263](https://bugzil.la/1288263)). Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Ermitteln und protokollieren Sie die Sprache des aktiven Tabs, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
function onLanguageDetected(lang) {
  console.log(`Language is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.detectLanguage().then(onLanguageDetected, onError);
});
```

Ermitteln und protokollieren Sie die Sprache jedes offenen Tabs, wenn der Benutzer auf eine Browser-Aktion klickt (beachten Sie, dass dieses Beispiel die Berechtigung "tabs" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) erfordert):

```js
function onLanguageDetected(url, lang) {
  console.log(`Language in ${url} is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function detectLanguages(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .detectLanguage(tab.id)
      .then((lang) => onLanguageDetected(tab.url, lang), onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({}).then(detectLanguages, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-detectLanguage). Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
