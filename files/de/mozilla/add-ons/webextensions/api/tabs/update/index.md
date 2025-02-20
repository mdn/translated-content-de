---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{AddonSidebar}}

Rufen Sie einen neuen URL auf oder ändern Sie andere Eigenschaften des Tabs.

Um diese Funktion zu verwenden, übergeben Sie die ID des zu aktualisierenden Tabs und ein `updateProperties`-Objekt, das die zu ändernden Eigenschaften enthält. Eigenschaften, die im `updateProperties`-Objekt nicht angegeben sind, werden nicht geändert.

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

  - : `object`. Die Menge von Eigenschaften, die in diesem Tab aktualisiert werden sollen. Weitere Informationen zu diesen Eigenschaften finden Sie in der {{WebExtAPIRef("tabs.Tab")}}-Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab aktiv werden soll. Hat keinen Einfluss darauf, ob das Fenster fokussiert wird (siehe {{WebExtAPIRef('windows.update')}}). Wenn `true`, werden nicht-aktive hervorgehobene Tabs nicht mehr hervorgehoben. Wenn `false`, passiert nichts.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab durch den Browser verworfen werden kann. Der Standardwert ist `true`. Wenn `false` gesetzt ist, kann der Tab nicht automatisch verworfen werden. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `highlighted` {{optional_inline}}

      - : `boolean`. Fügt den Tab zur aktuellen Auswahl hinzu oder entfernt ihn daraus. Wenn `true` und der Tab nicht hervorgehoben ist, wird er standardmäßig aktiv.

        Wenn Sie den Tab nur hervorheben möchten, ohne ihn zu aktivieren, akzeptiert Firefox das Setzen von `highlighted` auf `true` und `active` auf `false`. Andere Browser könnten den Tab auch in diesem Fall aktivieren.

    - `loadReplace` {{optional_inline}}

      - : `boolean`. Ob die neue URL die alte URL in der Navigationshistorie des Tabs, wie sie über die "Zurück"-Taste erreichbar ist, ersetzen soll.

        Beispielsweise erstellt der Benutzer mit Strg+T einen neuen Tab. Standardmäßig würde in Firefox "about:newtab" geladen. Wenn Ihre Erweiterung anschließend diese Seite mithilfe von `tabs.update` aktualisiert, ohne `loadReplace`, wird die "Zurück"-Taste aktiviert sein und den Benutzer zu "about:newtab" zurückbringen. Wenn die Erweiterung `loadReplace` setzt, wird die "Zurück"-Taste deaktiviert, und es wird so sein, als ob der von der Erweiterung angegebene URL die erste aufgerufene Seite in diesem Tab wäre.

        Beachten Sie jedoch, dass der ursprüngliche URL weiterhin in der globalen Browser-Historie erscheint.

    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der öffnende Tab im selben Fenster sein wie dieser Tab. Setzen Sie den Wert auf `-1`, um den gesetzten `openerTabId` zu löschen.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angeheftet werden soll.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Ob der Tab ausgewählt werden soll. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
    - `successorTabId` {{optional_inline}}
      - : `integer`. Die ID des Nachfolgers dieses Tabs.
    - `url` {{optional_inline}}

      - : `string`. Eine URL, zu der der Tab navigiert werden soll.

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Das Übergeben eines der folgenden URLs schlägt fehl, wobei {{WebExtAPIRef("runtime.lastError")}} auf eine Fehlermeldung gesetzt wird:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Reference/Schemes/data)
        - file: URLs (d.h. Dateien aus dem Dateisystem. Um jedoch eine in die Erweiterung gepackte Datei zu verwenden, siehe unten)
        - privilegierte about: URLs (zum Beispiel `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Nicht privilegierte URLs (z.B. `about:blank`) sind erlaubt.

        Um eine Seite zu laden, die in Ihrer Erweiterung enthalten ist, geben Sie eine absolute URL ausgehend von der Manifest-Datei `manifest.json` an. Zum Beispiel: '/path/to/my-page.html'. Wenn der führende '/' weggelassen wird, wird die URL als relative URL behandelt, und verschiedene Browser könnten unterschiedliche absolute URLs daraus konstruieren.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den aktualisierten Tab enthält. Das {{WebExtAPIRef('tabs.Tab')}}-Objekt enthält keinen `url`, `title` und `favIconUrl`, es sei denn, es wurden passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder die Berechtigung `"tabs"` angefordert. Wenn der Tab nicht gefunden werden kann oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-update)-API von Chromium. Diese Dokumentation wurde von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
