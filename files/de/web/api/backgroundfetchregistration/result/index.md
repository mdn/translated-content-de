---
title: "BackgroundFetchRegistration: result-Eigenschaft"
short-title: result
slug: Web/API/BackgroundFetchRegistration/result
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`result`** schreibgeschützte Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Interfaces gibt einen String zurück, der angibt, ob der Hintergrundabruf erfolgreich war oder fehlgeschlagen ist.

Wenn sich der Wert dieser Eigenschaft ändert, wird das [progress](/de/docs/Web/API/BackgroundFetchRegistration/progress_event)-Event am zugehörigen [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt ausgelöst.

## Wert

Einer der folgenden Strings:

- `""`
  - : Der Abruf ist aktiv, daher gibt es kein Ergebnis.
- `"success"`
  - : Der Hintergrundabruf war erfolgreich.
- `"failure"`
  - : Der Hintergrundabruf ist fehlgeschlagen. Dies erscheint nur, wenn der Browser keine Möglichkeit zum Wiederholen hat.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt einen String zurück, der den Status angibt, oder einen leeren String, wenn der Abruf noch aktiv ist.

```js
console.log(bgFetch.result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
