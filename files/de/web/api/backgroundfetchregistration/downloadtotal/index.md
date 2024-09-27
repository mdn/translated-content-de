---
title: "BackgroundFetchRegistration: downloadTotal-Eigenschaft"
short-title: downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`downloadTotal`**-Eigenschaft der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt die Gesamtgröße dieses Downloads in Bytes zurück. Diese wird festgelegt, wenn der Hintergrundabruf registriert wird, oder ist `0` wenn nicht festgelegt.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt die Gesamtgröße dieses Downloads in Bytes zurück.

```js
console.log(bgFetch.downloadTotal);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
