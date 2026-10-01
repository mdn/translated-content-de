---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
l10n:
  sourceCommit: ac295ae8d3435f587b5233a9fe46bb55d92c1a5d
---

Bricht alle aktiven Alarme ab.

## Syntax

```js-nolint
browser.alarms.clearAll()
```

### Parameter

Keine.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit `undefined` erfüllt wird.

> [!NOTE]
> Vor Firefox 157 wurde die Promise mit einem booleschen Wert erfüllt: `true`, wenn Alarme gelöscht wurden, andernfalls `false`. Chrome erfüllt die Promise mit `true` und Safari mit `undefined`. Verlassen Sie sich nicht auf den Wert, mit dem die Promise erfüllt wird. Weitere Informationen finden Sie unter [w3c/webextensions#1055](https://github.com/w3c/webextensions/issues/1055).

## Beispiele

Löschen Sie alle von der Erweiterung geplanten Alarme und protokollieren Sie anschließend, dass die Alarme gelöscht wurden:

```js
async function clearAllAlarms() {
  await browser.alarms.clearAll();
  console.log("All alarms cleared");
}

clearAllAlarms();
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API.
