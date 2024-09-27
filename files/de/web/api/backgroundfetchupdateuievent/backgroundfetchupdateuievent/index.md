---
title: "BackgroundFetchUpdateUIEvent: BackgroundFetchUpdateUIEvent() Konstruktor"
short-title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`BackgroundFetchUpdateUIEvent()`** Konstruktor erstellt ein neues [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie an Hintergrundabruf-Ereignis-Callbacks weitergibt.

## Syntax

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Diese sind groß-/kleinbuchstabenunempfindlich und Browser setzen ihn auf `backgroundfetchsuccess` oder `backgroundfetchfail`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `registration`
      - : Ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt.

### Rückgabewert

Ein neues [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
