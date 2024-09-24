---
title: "BackgroundFetchRegistration: heruntergeladene Eigenschaft"
short-title: heruntergeladen
slug: Web/API/BackgroundFetchRegistration/downloaded
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`downloaded`** der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle gibt die Größe in Bytes zurück, die heruntergeladen wurde, anfangs `0`.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis beim zugehörigen {{domxref("BackgroundFetchRegistration")}}-Objekt ausgelöst.

## Wert

Eine {{jsxref("number")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt die Anzahl der heruntergeladenen Bytes zurück.

```js
console.log(bgFetch.downloaded);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
