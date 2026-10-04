---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
l10n:
  sourceCommit: 04a38e9eb73401ea6169282080151f7475873466
---

Löscht alle aktiven Alarme.

## Syntax

```js-nolint
browser.alarms.clearAll()
```

### Parameter

Keine.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit `undefined` erfüllt wird.

> [!NOTE]
> Vor Firefox 157 wurde die Promise mit einem booleschen Wert erfüllt: `true`, wenn Alarme gelöscht wurden, andernfalls `false`. Vor Chrome 157 wurde die Promise immer mit `true` erfüllt. Safari erfüllt die Promise immer mit `undefined`. Verlassen Sie sich nicht auf den Wert, mit dem die Promise erfüllt wird. Weitere Informationen finden Sie unter [w3c/webextensions#1055](https://github.com/w3c/webextensions/issues/1055).

## Beispiele

Löschen Sie alle Alarme, die die Erweiterung geplant hat, und protokollieren Sie anschließend, dass die Alarme gelöscht wurden:

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.
