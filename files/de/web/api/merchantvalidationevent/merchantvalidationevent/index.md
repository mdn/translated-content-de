---
title: "MerchantValidationEvent: MerchantValidationEvent() Konstruktor"
short-title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{deprecated_header}}{{securecontext_header}}{{APIRef}}

Der **`MerchantValidationEvent()`** Konstruktor erstellt ein neues {{domxref("MerchantValidationEvent")}}-Objekt. Sie sollten diese Ereignisse nicht selbst erstellen müssen; stattdessen sollten Sie einfach das {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}}-Ereignis behandeln.

## Syntax

```js-nolint
new MerchantValidationEvent(type)
new MerchantValidationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungssensitiv und Browser setzen ihn immer auf `merchantvalidation`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der den Zahlungsidentifikator für den verwendeten Payment-Handler enthält. Standardmäßig ist dies ein leerer String.
    - `validationURL` {{optional_inline}}
      - : Die URL, von der spezifische Verifizierungsinformationen des Payment-Handlers abgerufen werden, um den Händler zu validieren. Standardmäßig ist dies ein leerer String.

### Rückgabewert

Ein neues {{domxref("MerchantValidationEvent")}}-Objekt, das die Informationen bereitstellt, die dem Client-seitigen Code übermittelt werden müssen, um sie dem {{Glossary("user agent")}} durch Aufruf von {{domxref("MerchantValidationEvent.complete", "complete()")}} zu präsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der als `validationURL` angegebene String nicht als URL geparst werden konnte.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `methodName` nicht einem bekannten und unterstützten Händler entspricht oder kein gut formulierter Standard-Zahlungsidentifikator ist.

## Spezifikationen

_Diese Funktion ist veraltet und gehört nicht zu einer Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
