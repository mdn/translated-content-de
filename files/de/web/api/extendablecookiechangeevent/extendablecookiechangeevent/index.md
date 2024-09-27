---
title: "ExtendableCookieChangeEvent: ExtendableCookieChangeEvent() Konstruktor"
short-title: ExtendableCookieChangeEvent()
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Der **`ExtendableCookieChangeEvent()`** Konstruktor erstellt ein neues [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) Objekt, welches der Ereignistyp ist, der an das [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) Ereignis übergeben wird, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgelöst wird, wenn Änderungen an Cookies auftreten, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmen. Dieser Konstruktor wird vom Browser aufgerufen, wenn ein Änderungsereignis auftritt.

> [!NOTE]
> Dieser Ereigniskonstruktor wird im Allgemeinen nicht für Produktionswebsites benötigt. Seine primäre Verwendung ist für Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `cookiechange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `changed` {{optional_inline}}
      - : Ein Array, das ein geändertes Cookie enthält.
    - `deleted` {{optional_inline}}
      - : Ein Array, das ein gelöschtes Cookie enthält.

### Rückgabewert

Ein neues [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
