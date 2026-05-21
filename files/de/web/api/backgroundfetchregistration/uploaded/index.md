---
title: "BackgroundFetchRegistration: uploaded-Eigenschaft"
short-title: uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`uploaded`**-Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt die Größe in Bytes zurück, die erfolgreich gesendet wurden, anfangs `0`.

Falls sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis beim zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt die Anzahl der hochgeladenen Bytes zurück.

```js
console.log(bgFetch.uploaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
