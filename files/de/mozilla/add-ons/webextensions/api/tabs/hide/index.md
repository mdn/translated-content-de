---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Versteckt einen oder mehrere Tabs.

Versteckte Tabs sind im Tabstreifen des Browsers nicht mehr sichtbar. Versteckte Tabs werden nicht automatisch [verworfen](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): der Code, der in ihnen ausgeführt wird, läuft weiter. Sie können Tabs explizit verwerfen, wann immer Sie sie verstecken: obwohl dies nicht in allen Situationen angemessen ist, kann es helfen, die vom Browser genutzten Ressourcen zu reduzieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Nicht alle Tabs können versteckt werden:

- Angeheftete Tabs können nicht versteckt werden.
- Tabs, die den Bildschirm, das Mikrofon oder die Kamera freigeben, können nicht versteckt werden.
- Der aktuell aktive Tab kann nicht versteckt werden.
- Tabs, die gerade geschlossen werden, können nicht versteckt werden.

Wenn eine Erweiterung zum ersten Mal einen Tab versteckt, informiert der Browser den Benutzer darüber, zeigt ihm, wie er auf den versteckten Tab zugreifen kann und gibt ihm die Möglichkeit, die Erweiterung zu deaktivieren.

Um diese API zu verwenden, müssen Sie die "tabHide" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Syntax

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`

  - : `integer` oder `array` von `integer`. Die IDs der Tabs, die versteckt werden sollen.

    Wenn einer dieser Tabs nicht für das Verstecken geeignet ist, werden sie nicht versteckt, aber der Aufruf wird trotzdem erfolgreich sein und geeignete Tabs werden dennoch versteckt. Wenn Sie zum Beispiel `[1, 3]` übergeben und `1` den aktiven Tab identifiziert, wird nur `3` versteckt.

    Wenn jedoch eine der Tab-IDs ungültig ist, schlägt der Aufruf fehl und keine Tabs werden versteckt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das die IDs der versteckten Tabs enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einen einzigen Tab verstecken:

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide(2).then(onHidden, onError);
```

Mehrere Tabs verstecken:

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
