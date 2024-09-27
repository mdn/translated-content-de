---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Verbirgt einen oder mehrere Tabs.

Verborgene Tabs sind nicht mehr in der Tab-Leiste des Browsers sichtbar. Verborgene Tabs werden nicht automatisch [entladen](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): der Code, der in ihnen läuft, wird weiterhin ausgeführt. Sie können Tabs explizit entladen, wann immer Sie sie verbergen: Obwohl dies nicht in allen Situationen angemessen ist, hilft es, die vom Browser verwendeten Ressourcen zu reduzieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Nicht alle Tabs sind geeignet, um verborgen zu werden:

- Tabs, die angeheftet sind, können nicht verborgen werden.
- Tabs, die den Bildschirm, das Mikrofon oder die Kamera teilen, können nicht verborgen werden.
- Der aktuell aktive Tab kann nicht verborgen werden.
- Tabs, die dabei sind, geschlossen zu werden, können nicht verborgen werden.

Das erste Mal, wenn eine Erweiterung einen Tab verbirgt, wird der Browser dem Benutzer mitteilen, dass der Tab verborgen wird, ihm zeigen, wie er auf den verborgenen Tab zugreifen kann, und ihm die Möglichkeit geben, die Erweiterung stattdessen zu deaktivieren.

Um diese API nutzen zu können, müssen Sie die "tabHide" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

## Syntax

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`

  - : `integer` oder `array` von `integer`. Die IDs des oder der Tabs, die verborgen werden sollen.

    Wenn einer dieser Tabs nicht für das Verbergen geeignet ist, werden sie nicht verborgen, aber der Aufruf wird dennoch erfolgreich sein und die geeigneten Tabs werden dennoch verborgen. Wenn Sie zum Beispiel `[1, 3]` übergeben und `1` den aktiven Tab identifiziert, wird nur `3` verborgen.

    Wenn jedoch eine der Tab-IDs ungültig ist, wird der Aufruf fehlschlagen und keine Tabs werden verborgen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das die IDs der Tabs enthält, die verborgen wurden. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
