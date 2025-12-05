---
title: "InterestEvent: InterestEvent() Konstruktor"
short-title: InterestEvent()
slug: Web/API/InterestEvent/InterestEvent
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("Popover API")}}

Der **`InterestEvent()`**-Konstruktor erstellt ein neues [`InterestEvent`](/de/docs/Web/API/InterestEvent)-Objekt.

## Syntax

```js-nolint
new InterestEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Für `InterestEvent` ist dies immer `interest` oder `loseinterest`.
- `init` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `source` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), das das Interesse auslösende Element darstellt, bei dem Interesse gezeigt oder verloren wurde.

## Beispiele

Normalerweise würden Sie diesen Konstruktor nicht manuell verwenden. Ein neues `InterestEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens eines relevanten Ereignisses aufgerufen wird.

Siehe den [Leitfaden zur Verwendung von Interesse-Auslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers) und die Referenzseite des [`interest`](/de/docs/Web/API/HTMLElement/interest_event)-Ereignisses für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [Verwendung von Interesse-Auslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers)
