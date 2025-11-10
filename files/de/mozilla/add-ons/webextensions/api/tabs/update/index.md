---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Navigieren Sie den Tab zu einer neuen URL oder ändern Sie andere Eigenschaften des Tabs.

Um diese Funktion zu nutzen, übergeben Sie die ID des Tabs, der aktualisiert werden soll, und ein `updateProperties`-Objekt, das die zu ändernden Eigenschaften enthält. Eigenschaften, die nicht in `updateProperties` angegeben sind, werden nicht modifiziert.

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
  - : `object`. Das Set von Eigenschaften, die für diesen Tab aktualisiert werden sollen. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}} Dokumentation.
    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab aktiv werden soll. Hat keinen Einfluss darauf, ob das Fenster fokussiert ist (siehe {{WebExtAPIRef('windows.update')}}). Wenn `true`, werden nicht-aktive hervorgehobene Tabs nicht mehr hervorgehoben. Wenn `false`, passiert nichts.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch löschen. Der Tab kann jedoch über {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `highlighted` {{optional_inline}}
      - : `boolean`. Fügt den Tab zur aktuellen Auswahl hinzu oder entfernt ihn daraus. Wenn `true` und der Tab nicht hervorgehoben ist, wird er standardmäßig aktiv sein.

        Wenn Sie den Tab nur hervorheben möchten, ohne ihn zu aktivieren, akzeptiert Firefox das Setzen von `highlighted` auf `true` und `active` auf `false`. Andere Browser könnten den Tab in diesem Fall dennoch aktivieren.

    - `loadReplace` {{optional_inline}}
      - : `boolean`. Ob die neue URL die alte URL in der Navigation des Tabs ersetzen soll, wie sie über die "Zurück"-Schaltfläche zugänglich ist.

        Zum Beispiel, wenn der Benutzer einen neuen Tab mit Strg+T erstellt. Standardmäßig würde dies in Firefox "about:newtab" laden. Wenn Ihre Erweiterung dann diese Seite mit `tabs.update` aktualisiert, wird ohne `loadReplace` die "Zurück"-Schaltfläche aktiviert und der Benutzer wird zu "about:newtab" zurückkehren. Wenn die Erweiterung `loadReplace` setzt, wird die "Zurück"-Schaltfläche deaktiviert und es wäre so, als wäre die von der Erweiterung angegebene URL die erste besuchte Seite in diesem Tab.

        Beachten Sie, dass die ursprüngliche URL dennoch in der globalen Historie des Browsers erscheint.

    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der öffnende Tab im selben Fenster wie dieser Tab sein. Setzen Sie auf `-1`, um den gesetzten `openerTabId` zu löschen.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angeheftet werden soll.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Ob der Tab ausgewählt werden soll. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
    - `successorTabId` {{optional_inline}}
      - : `integer`. Die ID des Nachfolgers des Tabs.
    - `url` {{optional_inline}}
      - : `string`. Eine URL, zu der der Tab navigieren soll.

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Das Übergeben einer der folgenden URLs schlägt fehl, wobei {{WebExtAPIRef("runtime.lastError")}} auf eine Fehlermeldung gesetzt wird:
        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Reference/Schemes/data)
        - file: URLs (d.h. Dateien im Dateisystem. Um eine Datei zu verwenden, die innerhalb der Erweiterung gepackt ist, siehe unten)
        - privilegierte about: URLs (z.B. `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Nicht-privilegierte URLs (z.B. `about:blank`) sind erlaubt.

        Um eine Seite zu laden, die mit Ihrer Erweiterung verpackt ist, geben Sie eine absolute URL beginnend ab der manifest.json-Datei der Erweiterung an. Zum Beispiel: '/path/to/my-page.html'. Wenn Sie den führenden '/' weglassen, wird die URL als relative URL behandelt, und verschiedene Browser können verschiedene absolute URLs konstruieren.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den aktualisierten Tab enthält. Das {{WebExtAPIRef('tabs.Tab')}}-Objekt enthält keine `url`, `title` und `favIconUrl`, es sei denn, passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder die `"tabs"`-Berechtigung wurde angefordert. Wenn der Tab nicht gefunden werden kann oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-update) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
