---
title: "MerchantValidationEvent: MerchantValidationEvent() Konstruktor"
short-title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{securecontext_header}}{{non-standard_header}}

Der **`MerchantValidationEvent()`** Konstruktor erstellt ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt. Sie sollten diese Ereignisse nicht selbst erstellen; stattdessen behandeln Sie das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis.

## Syntax

```js-nolint
new MerchantValidationEvent(type)
new MerchantValidationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist Groß-/Kleinschreibung beachten, und Browser setzen ihn immer auf `merchantvalidation`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der den Bezahlmethoden-Identifier für den verwendeten Zahlungshandler enthält. Standardmäßig ist dies ein leerer String.
    - `validationURL` {{optional_inline}}
      - : Die URL, von der spezifische Verifizierungsinformationen des Zahlungshandlers abgerufen werden, um den Händler zu validieren. Standardmäßig ist dies ein leerer String.

### Rückgabewert

Ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt, das die Informationen bereitstellt,
die an den Client-seitigen Code geliefert werden müssen, um sie dem {{Glossary("user_agent", "Benutzeragenten")}} durch Aufrufen von [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) zu präsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der als `validationURL` angegebene String nicht als URL geparst werden konnte.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `methodName` nicht einem bekannten und unterstützten Händler entspricht oder kein gut geformter Standard-Bezahlmethoden-Identifier ist.

## Spezifikationen

_Dieses Feature ist veraltet und gehört zu keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
