---
title: "MerchantValidationEvent: MerchantValidationEvent() Konstruktor"
short-title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{deprecated_header}}{{securecontext_header}}{{non-standard_header}}

Der **`MerchantValidationEvent()`**-Konstruktor erstellt ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent)-Objekt. Sie sollten diese Events nicht selbst erstellen; stattdessen behandeln Sie einfach das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Event.

## Syntax

```js-nolint
new MerchantValidationEvent(type)
new MerchantValidationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `merchantvalidation`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der die Zahlungsartenkennung für den verwendeten Zahlungshandler enthält. Standardmäßig ist dies ein leerer String.
    - `validationURL` {{optional_inline}}
      - : Die URL, von der spezifische Verifizierungsinformationen des Zahlungshandlers abgerufen werden, die zur Validierung des Händlers verwendet werden. Standardmäßig ist dies ein leerer String.

### Rückgabewert

Ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent)-Objekt, das die Informationen bereitstellt, die an den clientseitigen Code geliefert werden müssen, um dem {{Glossary("user_agent", "user agent")}} durch Aufruf von [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) zu präsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der als `validationURL` angegebene String nicht als URL geparst werden konnte.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `methodName` nicht einem bekannten und unterstützten Händler entspricht oder keine wohlgeformte Standard-Zahlartkennung ist.

## Spezifikationen

_Diese Funktion ist veraltet und Teil keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment-Verarbeitungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
