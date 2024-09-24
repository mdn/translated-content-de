---
title: "PresentationConnectionAvailableEvent: PresentationConnectionAvailableEvent() Konstruktor"
short-title: PresentationConnectionAvailableEvent()
slug: Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PresentationConnectionAvailableEvent()`** Konstruktor erstellt ein neues {{domxref("PresentationConnectionAvailableEvent")}} Objekt.

## Syntax

```js-nolint
new PresentationConnectionAvailableInit(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `connectionavailable`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `connection`
      - : Das zugeordnete {{domxref("PresentationConnection")}} Objekt.

### Rückgabewert

Ein neues {{domxref("PresentationConnectionAvailableEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
