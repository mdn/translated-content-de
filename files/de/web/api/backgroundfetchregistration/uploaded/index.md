---
title: "BackgroundFetchRegistration: Eigenschaft uploaded"
short-title: uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`uploaded`** schreibgeschützte Eigenschaft des {{domxref("BackgroundFetchRegistration")}}-Interfaces gibt die in Bytes erfolgreich gesendete Größe zurück, anfangs `0`.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [Fortschrittsereignis](/de/docs/Web/API/BackgroundFetchRegistration/progress_event) beim zugehörigen {{domxref("BackgroundFetchRegistration")}}-Objekt ausgelöst.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt die Anzahl der hochgeladenen Bytes zurück.

```js
console.log(bgFetch.uploaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
