---
title: "BackgroundFetchRegistration: downloadTotal-Eigenschaft"
short-title: downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`downloadTotal`**-Eigenschaft des {{domxref("BackgroundFetchRegistration")}}-Interfaces gibt die Gesamtgröße in Bytes dieses Downloads zurück. Diese wird festgelegt, wenn der Hintergrundabruf registriert wurde, oder `0`, wenn sie nicht festgelegt ist.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt die Gesamtgröße in Bytes dieses Downloads zurück.

```js
console.log(bgFetch.downloadTotal);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
