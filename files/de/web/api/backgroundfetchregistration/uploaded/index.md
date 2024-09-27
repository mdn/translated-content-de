---
title: "BackgroundFetchRegistration: uploaded-Eigenschaft"
short-title: uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`uploaded`**-Eigenschaft der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt die erfolgreich gesendete Größe in Bytes zurück, initial `0`.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis am zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt die Anzahl der hochgeladenen Bytes zurück.

```js
console.log(bgFetch.uploaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
