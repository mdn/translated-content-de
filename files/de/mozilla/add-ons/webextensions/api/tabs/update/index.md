---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
l10n:
  sourceCommit: a3a52b0f278b81ca2638a8662a6e82a4447c5485
---

{{AddonSidebar}}

Navigieren Sie den Tab zu einer neuen URL oder ändern Sie andere Eigenschaften des Tabs.

Um diese Funktion zu verwenden, übergeben Sie die ID des zu aktualisierenden Tabs und ein `updateProperties`-Objekt, das die zu ändernden Eigenschaften enthält. Eigenschaften, die nicht in `updateProperties` angegeben sind, werden nicht modifiziert.

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

  - : `object`. Die Menge der Eigenschaften, die für diesen Tab aktualisiert werden sollen. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}} Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab aktiv werden soll. Beeinflusst nicht, ob das Fenster fokussiert ist (siehe {{WebExtAPIRef('windows.update')}}). Wenn `true`, werden nicht-aktive hervorgehobene Tabs nicht mehr hervorgehoben. Wenn `false`, passiert nichts.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Dennoch kann der Tab durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `highlighted` {{optional_inline}}

      - : `boolean`. Fügt den Tab zur aktuellen Auswahl hinzu oder entfernt ihn. Wenn `true` und der Tab nicht hervorgehoben ist, wird er standardmäßig aktiv.

        Wenn Sie den Tab nur hervorheben möchten, ohne ihn zu aktivieren, akzeptiert Firefox die Einstellung von `highlighted` auf `true` und `active` auf `false`. Andere Browser könnten den Tab in diesem Fall dennoch aktivieren.

    - `loadReplace` {{optional_inline}}

      - : `boolean`. Ob die neue URL die alte URL in der Navigationshistorie des Tabs ersetzen soll, wie über die "Zurück"-Schaltfläche zugänglich.

        Zum Beispiel, wenn der Benutzer einen neuen Tab mit Strg+T erstellt. Standardmäßig würde in Firefox "about:newtab" geladen. Wenn Ihre Erweiterung dann diese Seite mit `tabs.update` aktualisiert, wird ohne `loadReplace` die "Zurück"-Schaltfläche aktiviert sein und den Benutzer zurück zu "about:newtab" führen. Wenn die Erweiterung `loadReplace` setzt, wird die "Zurück"-Schaltfläche deaktiviert, und es wird so sein, als ob die vom Add-on angegebene URL die erste besuchte Seite in diesem Tab wäre.

        Beachten Sie jedoch, dass die ursprüngliche URL weiterhin in der globalen Verlauf des Browsers erscheint.

    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der eröffnende Tab im selben Fenster wie dieser Tab sein. Auf `-1` setzen, um die gesetzte `openerTabId` zu löschen.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angeheftet werden soll.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Ob der Tab ausgewählt werden soll. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
    - `successorTabId` {{optional_inline}}
      - : `integer`. Die ID des Nachfolgetabs.
    - `url` {{optional_inline}}

      - : `string`. Eine URL, zu der der Tab navigieren soll.

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Das Übergeben einer der folgenden URLs wird fehlschlagen, wobei {{WebExtAPIRef("runtime.lastError")}} mit einer Fehlermeldung gesetzt wird:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Schemes/data)
        - file: URLs (d. h. Dateien auf dem Dateisystem. Um jedoch eine im Add-on enthaltene Datei zu verwenden, siehe unten)
        - privilegierte about: URLs (z.B. `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Nicht-privilegierte URLs (z.B. `about:blank`) sind erlaubt.

        Um eine Seite zu laden, die mit Ihrem Add-on gepackt ist, geben Sie eine absolute URL an, die bei der Datei manifest.json des Add-ons beginnt. Zum Beispiel: '/path/to/my-page.html'. Wenn Sie den führenden '/', weglassen, wird die URL als relative URL behandelt und verschiedene Browser könnten unterschiedliche absolute URLs konstruieren.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den aktualisierten Tab enthält. Das {{WebExtAPIRef('tabs.Tab')}}-Objekt enthält keine `url`, `title` und `favIconUrl`, es sei denn, übereinstimmende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder die `"tabs"`-Berechtigung wurden angefordert. Wenn der Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-update) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
