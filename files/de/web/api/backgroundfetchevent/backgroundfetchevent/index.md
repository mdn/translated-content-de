---
title: "BackgroundFetchEvent: BackgroundFetchEvent()-Konstruktor"
short-title: BackgroundFetchEvent()
slug: Web/API/BackgroundFetchEvent/BackgroundFetchEvent
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`BackgroundFetchEvent()`**-Konstruktor erstellt ein neues {{domxref("BackgroundFetchEvent")}}-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet, da der Browser diese Objekte selbst erstellt und sie den Hintergrundabruf-Event-Callbacks bereitstellt.

## Syntax

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Events enthält.
    Er ist case-sensitiv, und Browser setzen ihn auf `backgroundfetchabort` oder `backgroundfetchclick`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften_, die folgenden Eigenschaften hat:
    - `registration`
      - : Ein {{domxref("BackgroundFetchRegistration")}}-Objekt.

### Rückgabewert

Ein neues {{domxref("BackgroundFetchEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
