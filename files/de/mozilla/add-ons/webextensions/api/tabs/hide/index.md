---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verbirgt einen oder mehrere Tabs.

Verborgene Tabs sind nicht mehr in der Tab-Leiste des Browsers sichtbar. Verborgene Tabs werden nicht automatisch [verworfen](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): Der Code, der in ihnen läuft, wird weiterhin ausgeführt. Sie können Tabs ausdrücklich verwerfen, wann immer Sie sie verbergen: Obwohl dies nicht in allen Situationen angemessen ist, hilft es, die vom Browser verwendeten Ressourcen zu reduzieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Nicht alle Tabs können verborgen werden:

- Angepinnte Tabs können nicht verborgen werden.
- Tabs, die den Bildschirm, das Mikrofon oder die Kamera teilen, können nicht verborgen werden.
- Der aktuelle aktive Tab kann nicht verborgen werden.
- Tabs, die gerade geschlossen werden, können nicht verborgen werden.

Das erste Mal, wenn eine Erweiterung einen Tab verbirgt, wird der Browser den Benutzer darüber informieren, dass der Tab verborgen wird, ihm zeigen, wie er auf den verborgenen Tab zugreifen kann, und ihm die Möglichkeit geben, die Erweiterung stattdessen zu deaktivieren.

Um diese API zu verwenden, müssen Sie die "tabHide" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Syntax

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des oder der zu verbergenden Tabs.

    Wenn einer dieser Tabs nicht für das Verbergen geeignet ist, werden sie nicht verborgen, aber der Aufruf wird dennoch erfolgreich sein und geeignete Tabs werden verborgen. Wenn Sie zum Beispiel `[1, 3]` übergeben und `1` den aktiven Tab identifiziert, wird nur `3` verborgen.

    Wenn jedoch eine der Tab-IDs ungültig ist, schlägt der Aufruf fehl und keine Tabs werden verborgen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das die IDs der verborgenen Tabs enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
