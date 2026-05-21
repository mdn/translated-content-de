---
title: "BackgroundFetchRegistration: uploadTotal-Eigenschaft"
short-title: uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`uploadTotal`** des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt die Gesamtanzahl der Bytes zurück, die an den Server gesendet werden sollen.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

Wenn diese Eigenschaft in die Konsole protokolliert wird, gibt sie die Gesamtanzahl der Bytes dieses Uploads zurück.

```js
console.log(bgFetch.uploadTotal);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
