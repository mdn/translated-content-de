---
title: "ExtendableCookieChangeEvent: ExtendableCookieChangeEvent() Konstruktor"
short-title: ExtendableCookieChangeEvent()
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Der **`ExtendableCookieChangeEvent()`** Konstruktor erstellt ein neues [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) Objekt, welches der Ereignistyp ist, der an das [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) Ereignis übergeben wird. Dieses tritt im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) auf, wenn Änderungen an Cookies auftreten, die der Abonnementliste der Dienstarbeiter für Cookie-Änderungen entsprechen. Dieser Konstruktor wird vom Browser aufgerufen, wenn ein Änderungsereignis auftritt.

> [!NOTE]
> Dieser Ereigniskonstruktor wird im Allgemeinen nicht für Produktionswebsites benötigt. Sein primärer Nutzen liegt in Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitiv und Browser setzen es immer auf `cookiechange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definiert sind_, die folgenden Eigenschaften haben kann:
    - `changed` {{optional_inline}}
      - : Ein Array mit einem geänderten Cookie.
    - `deleted` {{optional_inline}}
      - : Ein Array mit einem gelöschten Cookie.

### Rückgabewert

Ein neues [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
