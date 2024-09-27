---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dupliziert einen Tab anhand seiner ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let duplicating = browser.tabs.duplicate(
  tabId,              // integer
  duplicateProperties // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. Die ID des zu duplizierenden Tabs.
- `duplicateProperties` {{optional_inline}}

  - : `object`. Ein Objekt, das beschreibt, wie der Tab dupliziert wird. Es enthält folgende Eigenschaften:

    - `index` {{optional_inline}}
      - : `integer`. Die Position des neuen Tabs im Fenster. Der Wert ist auf den Bereich von null bis zur Anzahl der Tabs im Fenster beschränkt.
    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab im Fenster zum aktiven Tab wird. Beeinflusst nicht, ob das Fenster fokussiert wird. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den duplizierten Tab enthält. Das `Tab`-Objekt enthält nur `url`, `title` und `favIconUrl`, wenn die Erweiterung die Berechtigung [`"tabs"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Ab Firefox 68 wird das Promise, das von browser.tabs.duplicate() zurückgegeben wird, aufgelöst, sobald der Tab dupliziert wurde. Zuvor wurde das Promise erst aufgelöst, wenn der Tab vollständig geladen war.

## Beispiele

Duplizieren Sie den ersten Tab und protokollieren Sie dann die ID des neu erstellten Tabs:

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// Duplicate the first tab in the array
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    let duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// Query for all open tabs
let querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-duplicate). Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
