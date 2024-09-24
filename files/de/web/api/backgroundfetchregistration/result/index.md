---
title: "BackgroundFetchRegistration: result-Eigenschaft"
short-title: result
slug: Web/API/BackgroundFetchRegistration/result
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`result`** schreibgeschützte Eigenschaft der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle gibt einen String zurück, der angibt, ob das Hintergrund-Fetch erfolgreich war oder fehlgeschlagen ist.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Ereignis am zugehörigen {{domxref("BackgroundFetchRegistration")}}-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Das Fetch ist aktiv, daher gibt es kein Ergebnis.
- `"success"`
  - : Das Hintergrund-Fetch war erfolgreich.
- `"failure"`
  - : Das Hintergrund-Fetch ist fehlgeschlagen. Dies erscheint nur, wenn der Browser nicht in der Lage ist, es erneut zu versuchen.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt einen String zurück, der den Status anzeigt, oder einen leeren String, wenn das Fetch noch aktiv ist.

```js
console.log(bgFetch.result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
