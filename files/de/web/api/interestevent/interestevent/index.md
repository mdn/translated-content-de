---
title: "InterestEvent: InterestEvent() Konstruktor"
short-title: InterestEvent()
slug: Web/API/InterestEvent/InterestEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Popover API")}}{{SeeCompatTable}}{{non-standard_header}}

Der **`InterestEvent()`** Konstruktor erstellt ein neues [`InterestEvent`](/de/docs/Web/API/InterestEvent)-Objekt.

## Syntax

```js-nolint
new InterestEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Bei `InterestEvent` ist dies immer `interest` oder `loseinterest`.
- `init` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `source` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), das das interessierende Auslöser-Element darstellt, bei dem Interesse gezeigt oder verloren wurde.

## Beispiele

Normalerweise würden Sie diesen Konstruktor nicht manuell verwenden. Ein neues `InterestEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis eines entsprechenden ausgelösten Ereignisses aufgerufen wird.

Siehe den [Leitfaden zur Verwendung von Interessenauslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers) und die [`interest`](/de/docs/Web/API/HTMLElement/interest_event) Ereignis-Referenzseite für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interessenauslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
