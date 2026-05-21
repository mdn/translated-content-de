---
title: "BackgroundFetchRegistration: downloaded-Eigenschaft"
short-title: downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`downloaded`**-Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt die in Bytes heruntergeladene Größe zurück, anfangs `0`.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis auf dem zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt die Anzahl der heruntergeladenen Bytes zurück.

```js
console.log(bgFetch.downloaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
