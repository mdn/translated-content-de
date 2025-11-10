---
title: "MerchantValidationEvent: MerchantValidationEvent() Konstruktor"
short-title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Payment Request API")}}{{deprecated_header}}{{securecontext_header}}

Der **`MerchantValidationEvent()`** Konstruktor erstellt ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt. Sie sollten diese Ereignisse nicht selbst erstellen müssen; stattdessen sollten Sie das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis behandeln.

## Syntax

```js-nolint
new MerchantValidationEvent(type)
new MerchantValidationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `merchantvalidation`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der die Zahlungsartenkennung für den verwendeten Payment-Handler enthält. Standardmäßig ist dies ein leerer String.
    - `validationURL` {{optional_inline}}
      - : Die URL, von der Zahlungsspezifische Verifizierungsinformationen abgerufen werden, um den Händler zu validieren. Standardmäßig ist dies ein leerer String.

### Rückgabewert

Ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt, das die Informationen bereitstellt, die an den clientseitigen Code übermittelt werden müssen, um sie dem {{Glossary("user_agent", "User Agent")}} durch Aufruf von [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) zu präsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der als `validationURL` angegebene String nicht als URL geparst werden konnte.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das angegebene `methodName` nicht mit einem bekannten und unterstützten Händler übereinstimmt oder keine wohlgeformte Standard-Zahlungsmethodenkennung ist.

## Spezifikationen

_Diese Funktion ist veraltet und Teil keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
