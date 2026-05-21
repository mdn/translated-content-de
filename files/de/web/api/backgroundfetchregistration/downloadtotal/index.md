---
title: "BackgroundFetchRegistration: downloadTotal-Eigenschaft"
short-title: downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`downloadTotal`** schreibgeschützte Eigenschaft der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt die Gesamtgröße dieses Downloads in Bytes zurück. Diese wird gesetzt, wenn der Hintergrundabruf registriert wurde, oder `0`, wenn nicht gesetzt.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt die Gesamtgröße dieses Downloads in Bytes zurück.

```js
console.log(bgFetch.downloadTotal);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
