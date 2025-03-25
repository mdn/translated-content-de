---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Ruft alle Tabs ab, die die angegebenen Eigenschaften aufweisen, oder alle Tabs, wenn keine Eigenschaften festgelegt sind.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let querying = browser.tabs.query(queryInfo)
```

### Parameter

- `queryInfo`

  - : `object`. Die `query()`-Funktion ruft die Tabs ab, deren Eigenschaften mit den hier enthaltenen Eigenschaften übereinstimmen.

    Siehe die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}, um mehr über diese Eigenschaften zu erfahren.

    - `active` {{optional_inline}}
      - : `boolean`. Ob die Tabs in ihren Fenstern aktiv sind.
    - `attention` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabs Aufmerksamkeit erregen.
    - `audible` {{optional_inline}}
      - : `boolean`. Ob die Tabs hörbar sind.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `cookieStoreId` {{optional_inline}}
      - : `string` oder `array` von `string`. Verwendet dies, um Tabs zurückzugeben, deren `tab.cookieStoreId` mit einem der `cookieStoreId`-Strings übereinstimmt. Diese Option ist nur verfügbar, wenn das Add-on die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
    - `currentWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im aktuellen Fenster sind.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob die Tabs verworfen sind. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entfernt wurde, aber immer noch in der Tab-Leiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
    - `hidden` {{optional_inline}}
      - : `boolean`. Ob die Tabs versteckt sind.
    - `highlighted` {{optional_inline}}
      - : `boolean`. Ob die Tabs hervorgehoben sind.
    - `index` {{optional_inline}}
      - : `integer`. Die Position der Tabs innerhalb ihrer Fenster.
    - `muted` {{optional_inline}}
      - : `boolean`. Ob die Tabs stummgeschaltet sind.
    - `lastFocusedWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im zuletzt fokussierten Fenster sind.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob die Tabs angepinnt sind.
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Ob die Tabs das Laden abgeschlossen haben.
    - `title` {{optional_inline}}
      - : `string`. Übereinstimmung von Seitentiteln mit einem Muster. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Tab zur Übereinstimmung.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`. Übereinstimmung von Tabs mit einem oder mehreren [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Beachten Sie, dass Fragment-Identifikatoren nicht übereinstimmen. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Tab zur Übereinstimmung.
    - `windowId` {{optional_inline}}
      - : `integer`. Die `id` des übergeordneten Fensters oder {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} für das aktuelle Fenster.
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Der Fenstertyp, in dem sich die Tabs befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('tabs.Tab')}} Objekten erfüllt wird, das Informationen über jeden übereinstimmenden Tab enthält.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Alle Tabs abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({}).then(logTabs, onError);
```

Alle Tabs im aktuellen Fenster abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ currentWindow: true }).then(logTabs, onError);
```

Den aktiven Tab im aktuellen Fenster abrufen:

```js
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  console.log(tabs[0].url);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs
  .query({ currentWindow: true, active: true })
  .then(logTabs, onError);
```

Tabs für alle HTTP- und HTTPS-URLs unter `"mozilla.org"` oder einer seiner Subdomains abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ url: "*://*.mozilla.org/*" }).then(logTabs, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
