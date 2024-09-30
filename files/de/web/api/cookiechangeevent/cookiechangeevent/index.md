---
title: "CookieChangeEvent: CookieChangeEvent()-Konstruktor"
short-title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

Der **`CookieChangeEvent()`**-Konstruktor erstellt ein neues [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Objekt,
welches der Ereignistyp des [`change`](/de/docs/Web/API/CookieStore/change_event)-Ereignisses ist, das bei einem [`CookieStore`](/de/docs/Web/API/CookieStore) ausgelöst wird, wenn Änderungen an einem Cookie erfolgen.
Dieser Konstruktor wird vom Browser aufgerufen, wenn ein Änderungsereignis auftritt.

> [!NOTE]
> Dieser Ereignis-Konstruktor wird in der Regel nicht für Produktionswebsites benötigt. Seine primäre Verwendung ist für Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist case-sensitive und Browser setzen ihn immer auf `change`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `changed` {{Optional_Inline}}
      - : Ein Array, das die geänderten Cookies enthält.
    - `deleted` {{Optional_Inline}}
      - : Ein Array, das die gelöschten Cookies enthält.

### Rückgabewert

Ein neues [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
