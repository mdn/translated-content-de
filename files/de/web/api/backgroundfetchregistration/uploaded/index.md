---
title: "BackgroundFetchRegistration: uploaded-Eigenschaft"
short-title: uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`uploaded`** schreibgeschützte Eigenschaft der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt die Größe in Bytes zurück, die erfolgreich gesendet wurde, anfänglich `0`.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis am zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Wenn Sie diese Eigenschaft in der Konsole protokollieren, wird die Anzahl der hochgeladenen Bytes zurückgegeben.

```js
console.log(bgFetch.uploaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
