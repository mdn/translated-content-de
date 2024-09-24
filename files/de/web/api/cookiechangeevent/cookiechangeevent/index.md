---
title: "CookieChangeEvent: CookieChangeEvent() Konstruktor"
short-title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Der **`CookieChangeEvent()`** Konstruktor erstellt ein neues {{domxref("CookieChangeEvent")}}-Objekt, welches der Ereignistyp des {{domxref("CookieStore/change_event", "change")}}-Ereignisses ist, das bei einem {{domxref("CookieStore")}} ausgelöst wird, wenn Änderungen an einem Cookie auftreten.
Dieser Konstruktor wird von dem Browser aufgerufen, wenn ein Änderungsereignis eintritt.

> [!NOTE]
> Dieser Ereignis-Konstruktor wird im Allgemeinen nicht für Produktionswebsites benötigt. Sein primärer Einsatz liegt in Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive und Browser setzen ihn immer auf `change`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das, _zusätzlich zu den Eigenschaften, die in {{domxref("Event/Event", "Event()")}} definiert sind_, die folgenden Eigenschaften haben kann:
    - `changed` {{Optional_Inline}}
      - : Ein Array, das die geänderten Cookies enthält.
    - `deleted` {{Optional_Inline}}
      - : Ein Array, das die gelöschten Cookies enthält.

### Rückgabewert

Ein neues {{domxref("CookieChangeEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
