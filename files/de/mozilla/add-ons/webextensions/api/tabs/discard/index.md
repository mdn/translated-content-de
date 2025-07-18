---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwirft einen oder mehrere Tabs.

Einige Browser "verwerfen" automatisch ungenutzte Tabs, um Speicher freizugeben. Verwarfene Tabs bleiben im Tabstreifen sichtbar. Der Browser merkt sich den Zustand des Tabs und stellt ihn wieder her, wenn der Benutzer den Tab auswählt. Die Einzelheiten, wann und was verworfen wird, sind browserspezifisch.

Sie können steuern, ob der Browser oder diese API einen Tab verwirft, indem Sie seine `autoDiscardable`-Eigenschaft in {{WebExtAPIRef("tabs.update")}} auf `false` setzen. Diese Einstellung verhindert, dass der Browser den Tab verwirft. Der Tab kann dann nur mit dieser API verworfen werden.

Es ist nicht möglich, den aktiven Tab oder einen Tab, dessen Dokument einen [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Listener enthält, der eine Aufforderung anzeigen würde, zu verwerfen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let discarding = browser.tabs.discard(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des Tabs oder der Tabs, die verworfen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle angegebenen Tabs verworfen wurden. Wenn ein Fehler auftritt (zum Beispiel ungültige Tab-IDs), wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn die ID des aktiven Tabs übergeben wird, wird dieser nicht verworfen, aber das Promise wird erfüllt und alle anderen übergebenen Tabs werden verworfen.

## Beispiele

Einen einzelnen Tab verwerfen:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

Mehrere Tabs verwerfen:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-discard)-API von Chromium.
