---
title: "BackgroundFetchEvent: BackgroundFetchEvent() Konstruktor"
short-title: BackgroundFetchEvent()
slug: Web/API/BackgroundFetchEvent/BackgroundFetchEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`BackgroundFetchEvent()`**-Konstruktor erzeugt ein neues [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie den Rückruffunktionen für Hintergrundabrufereignisse bereitstellt.

## Syntax

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `backgroundfetchabort` oder `backgroundfetchclick`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definiert sind_, die folgenden Eigenschaften enthält:
    - `registration`
      - : Ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt.

### Rückgabewert

Ein neues [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
