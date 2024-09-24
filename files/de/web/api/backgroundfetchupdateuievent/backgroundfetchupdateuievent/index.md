---
title: "BackgroundFetchUpdateUIEvent: BackgroundFetchUpdateUIEvent() Konstruktor"
short-title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`BackgroundFetchUpdateUIEvent()`** Konstruktor erstellt ein neues {{domxref("BackgroundFetchUpdateUIEvent")}} Objekt. Dieser Konstruktor wird typischerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie den Hintergrundabruf-Ereignisrückrufen bereitstellt.

## Syntax

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungssensitiv und die Browser setzen ihn auf `backgroundfetchsuccess` oder `backgroundfetchfail`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definiert sind_, die folgenden Eigenschaften hat:
    - `registration`
      - : Ein {{domxref("BackgroundFetchRegistration")}} Objekt.

### Rückgabewert

Ein neues {{domxref("BackgroundFetchUpdateUIEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
