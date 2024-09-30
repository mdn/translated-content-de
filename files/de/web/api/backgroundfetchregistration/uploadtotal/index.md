---
title: "BackgroundFetchRegistration: uploadTotal-Eigenschaft"
short-title: uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`uploadTotal`** des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt die Gesamtzahl der Bytes zurück, die an den Server gesendet werden sollen.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Wenn Sie diese Eigenschaft in die Konsole protokollieren, wird die Gesamtanzahl dieses Uploads zurückgegeben.

```js
console.log(bgFetch.uploadTotal);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
