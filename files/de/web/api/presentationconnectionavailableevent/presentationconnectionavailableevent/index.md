---
title: "PresentationConnectionAvailableEvent: PresentationConnectionAvailableEvent() Konstruktor"
short-title: PresentationConnectionAvailableEvent()
slug: Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PresentationConnectionAvailableEvent()`** Konstruktor erstellt ein neues [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent) Objekt.

## Syntax

```js-nolint
new PresentationConnectionAvailableInit(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `connectionavailable`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `connection`
      - : Das zugeordnete [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) Objekt.

### Rückgabewert

Ein neues [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
