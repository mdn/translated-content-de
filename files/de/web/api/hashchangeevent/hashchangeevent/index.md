---
title: "HashChangeEvent: HashChangeEvent() Konstruktor"
short-title: HashChangeEvent()
slug: Web/API/HashChangeEvent/HashChangeEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Der **`HashChangeEvent()`**-Konstruktor erstellt ein neues {{domxref("HashChangeEvent")}}-Objekt, das vom {{domxref("Window/hashchange_event", "hashchange")}}-Ereignis verwendet wird, das am {{domxref("window")}}-Objekt ausgelöst wird, wenn sich das Fragment der URL ändert.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn {{domxref("Window/hashchange_event", "hashchange")}}-Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new HashChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `hashchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `oldURL` {{optional_inline}}
      - : Ein String, der die alte URL enthält. Sein Standardwert ist der leere String (`""`).
    - `newURL` {{optional_inline}}
      - : Ein String, der die neue URL enthält. Sein Standardwert ist der leere String (`""`).

### Rückgabewert

Ein neues {{domxref("HashChangeEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window/hashchange_event", "hashchange")}}-Ereignis
