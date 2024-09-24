---
title: tabs.verbergen()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Verbirgt einen oder mehrere Tabs.

Verborgene Tabs sind im Registerkartenbereich des Browsers nicht mehr sichtbar. Verborgene Tabs werden nicht automatisch [entladen](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): Der in ihnen laufende Code wird weiterhin ausgeführt. Sie können Tabs explizit entladen, wann immer Sie sie verbergen: Obwohl dies nicht in allen Situationen angemessen ist, hilft es dabei, die vom Browser verwendeten Ressourcen zu reduzieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Nicht alle Tabs können verborgen werden:

- Angepinnte Tabs können nicht verborgen werden.
- Tabs, die den Bildschirm, das Mikrofon oder die Kamera freigeben, können nicht verborgen werden.
- Der aktuell aktive Tab kann nicht verborgen werden.
- Tabs, die im Begriff sind, geschlossen zu werden, können nicht verborgen werden.

Beim ersten Mal, wenn eine Erweiterung einen Tab verbirgt, wird der Browser dem Benutzer mitteilen, dass der Tab verborgen wird, ihm zeigen, wie er auf den verborgenen Tab zugreifen kann, und ihm die Möglichkeit geben, die Erweiterung stattdessen zu deaktivieren.

Um diese API zu nutzen, müssen Sie die Berechtigung "tabHide" besitzen. [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`

  - : `integer` oder `array` von `integer`. Die IDs des Tabs oder der Tabs, die verborgen werden sollen.

    Wenn einer dieser Tabs nicht geeignet ist, verborgen zu werden, wird er nicht verborgen, aber der Aufruf wird trotzdem erfolgreich sein und geeignete Tabs werden dennoch verborgen. Zum Beispiel, wenn Sie `[1, 3]` übergeben, und `1` den aktiven Tab identifiziert, dann wird nur `3` verborgen.

    Wenn jedoch eine der Tab-IDs ungültig ist, wird der Aufruf fehlschlagen und keine Tabs werden verborgen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das die IDs der verborgen Tabs enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einzelnen Tab verbergen:

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
