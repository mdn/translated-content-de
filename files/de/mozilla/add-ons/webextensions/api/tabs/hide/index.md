---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verbirgt einen oder mehrere Tabs.

Verborgene Tabs sind im Tabstreifen des Browsers nicht mehr sichtbar. Verborgene Tabs werden nicht automatisch [freigegeben](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): Der Code, der in ihnen läuft, läuft weiter. Sie können Tabs explizit freigeben, wenn Sie sie verbergen: Obwohl dies nicht in allen Situationen geeignet ist, hilft es, die vom Browser genutzten Ressourcen zu reduzieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Nicht alle Tabs können verborgen werden:

- Angepinnte Tabs können nicht verborgen werden.
- Tabs, die den Bildschirm, das Mikrofon oder die Kamera teilen, können nicht verborgen werden.
- Der aktuell aktive Tab kann nicht verborgen werden.
- Tabs, die gerade geschlossen werden, können nicht verborgen werden.

Beim ersten Mal, wenn ein Add-on einen Tab verbirgt, wird der Browser den Benutzer informieren, dass der Tab verborgen wird, ihm zeigen, wie er auf den verborgenen Tab zugreifen kann, und ihm die Option geben, das Add-on stattdessen zu deaktivieren.

Um diese API zu verwenden, müssen Sie die "tabHide" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

## Syntax

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`

  - : `integer` oder `array` von `integer`. Die IDs des oder der zu verbergenden Tabs.

    Wenn einer dieser Tabs nicht berechtigt ist, verborgen zu werden, werden sie nicht verborgen, aber der Aufruf wird weiterhin erfolgreich sein und berechtigte Tabs werden weiterhin verborgen. Wenn Sie beispielsweise `[1, 3]` übergeben und `1` den aktiven Tab identifiziert, wird nur `3` verborgen.

    Wenn jedoch eine der Tab-IDs ungültig ist, wird der Aufruf fehlschlagen und keine Tabs werden verborgen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das die IDs der verborgenen Tabs enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Einen einzelnen Tab verbergen:

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide(2).then(onHidden, onError);
```

Mehrere Tabs verbergen:

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide([15, 14, 1]).then(onHidden, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
