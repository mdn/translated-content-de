---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Navigieren Sie den Tab zu einer neuen URL oder ändern Sie andere Eigenschaften des Tabs.

Um diese Funktion zu verwenden, übergeben Sie die ID des zu aktualisierenden Tabs und ein `updateProperties`-Objekt, das die Eigenschaften enthält, die Sie aktualisieren möchten. Eigenschaften, die im `updateProperties`-Objekt nicht angegeben sind, werden nicht geändert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.tabs.update(
  tabId,              // optional integer
  updateProperties    // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Standardmäßig der ausgewählte Tab des aktuellen Fensters.
- `updateProperties`

  - : `object`. Das Set der Eigenschaften, die für diesen Tab aktualisiert werden sollen. Um mehr über diese Eigenschaften zu erfahren, lesen Sie die {{WebExtAPIRef("tabs.Tab")}} Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab aktiv werden soll. Beeinflusst nicht, ob das Fenster im Fokus steht (siehe {{WebExtAPIRef('windows.update')}}). Wenn `true`, werden nicht-aktive, hervorgehobene Tabs nicht mehr hervorgehoben. Bei `false` passiert nichts.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wird er auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `highlighted` {{optional_inline}}

      - : `boolean`. Fügt den Tab der aktuellen Auswahl hinzu oder entfernt ihn daraus. Wenn `true` und der Tab nicht hervorgehoben ist, wird er standardmäßig aktiv.

        Wenn Sie den Tab nur hervorheben möchten, ohne ihn zu aktivieren, akzeptiert Firefox das Setzen von `highlighted` auf `true` und `active` auf `false`. Andere Browser könnten den Tab in diesem Fall trotzdem aktivieren.

    - `loadReplace` {{optional_inline}}

      - : `boolean`. Ob die neue URL die alte URL in der Navigationshistorie des Tabs ersetzen soll, wie sie über die Schaltfläche "Zurück" zugänglich ist.

        Beispielsweise, wenn der Benutzer einen neuen Tab mit Strg+T erstellt. Standardmäßig würde in Firefox "about:newtab" geladen werden. Wenn Ihre Erweiterung diese Seite dann mit `tabs.update` aktualisiert, ohne `loadReplace`, wird die Schaltfläche "Zurück" aktiviert und führt den Benutzer zurück zu "about:newtab". Wenn die Erweiterung `loadReplace` setzt, wird die Schaltfläche "Zurück" deaktiviert, und es ist so, als ob die von der Erweiterung bereitgestellte URL die erste besuchte Seite in diesem Tab wäre.

        Beachten Sie jedoch, dass die ursprüngliche URL immer noch in der globalen Historie des Browsers erscheint.

    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der öffnende Tab im selben Fenster wie dieser Tab sein. Setzen Sie `-1`, um die gesetzte `openerTabId` zu löschen.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angepinnt werden soll.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Ob der Tab ausgewählt werden soll. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
    - `successorTabId` {{optional_inline}}
      - : `integer`. Die ID des Nachfolgers des Tabs.
    - `url` {{optional_inline}}

      - : `string`. Eine URL, zu der der Tab navigiert werden soll.

        Aus Sicherheitsgründen darf es in Firefox keine privilegierte URL sein. Daher wird das Übergeben einer der folgenden URLs fehlschlagen, wobei {{WebExtAPIRef("runtime.lastError")}} auf eine Fehlermeldung gesetzt wird:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Reference/Schemes/data)
        - file: URLs (d.h. Dateien im Dateisystem. Um jedoch eine im Add-on verpackte Datei zu verwenden, siehe unten)
        - privilegierte about: URLs (z. B. `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Nicht-privilegierte URLs (z. B. `about:blank`) sind erlaubt.

        Um eine Seite zu laden, die mit Ihrem Add-on verpackt ist, geben Sie eine absolute URL, beginnend bei der manifest.json-Datei des Add-ons, an. Zum Beispiel: '/path/to/my-page.html'. Wenn Sie das führende '/' weglassen, wird die URL als relative URL behandelt, und unterschiedliche Browser können unterschiedliche absolute URLs konstruieren.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}} Objekt erfüllt wird, das Details über den aktualisierten Tab enthält. Das {{WebExtAPIRef('tabs.Tab')}} Objekt enthält keine `url`, `title` und `favIconUrl`, es sei denn, passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder die `"tabs"` Berechtigung wurde angefordert. Wenn der Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Navigieren Sie den aktiven Tab im aktuellen Fenster zu `https://developer.mozilla.org`:

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let updating = browser.tabs.update({ url: "https://developer.mozilla.org" });
updating.then(onUpdated, onError);
```

Aktivieren Sie den ersten Tab im aktuellen Fenster und navigieren Sie ihn zu `https://developer.mozilla.org`:

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function updateFirstTab(tabs) {
  let updating = browser.tabs.update(tabs[0].id, {
    active: true,
    url: "https://developer.mozilla.org",
  });
  updating.then(onUpdated, onError);
}

let querying = browser.tabs.query({ currentWindow: true });
querying.then(updateFirstTab, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-update) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Quellcode.

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
