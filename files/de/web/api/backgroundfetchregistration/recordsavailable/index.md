---
title: "BackgroundFetchRegistration: recordsAvailable-Eigenschaft"
short-title: recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`recordsAvailable`** der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle gibt `true` zurück, wenn Anfragen und Antworten abgerufen werden können. Wenn dies `false` ergibt, können {{domxref("BackgroundFetchRegistration.match()","match()")}} und {{domxref("BackgroundFetchRegistration.matchAll()","matchAll()")}} nicht verwendet werden.

## Wert

Ein {{jsxref("boolean")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole ergibt `true` oder `false`, um anzuzeigen, ob Datensätze vorhanden sind.

```js
console.log(bgFetch.recordsAvailable);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
