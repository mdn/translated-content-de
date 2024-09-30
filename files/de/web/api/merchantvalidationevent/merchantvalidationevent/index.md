---
title: "MerchantValidationEvent: MerchantValidationEvent() Konstruktor"
short-title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{deprecated_header}}{{securecontext_header}}{{APIRef}}

Der **`MerchantValidationEvent()`** Konstruktor erstellt ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt. Sie sollten diese Ereignisse nicht selbst erstellen; behandeln Sie stattdessen einfach das [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event) Ereignis.

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
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `methodName` {{optional_inline}}
      - : Ein String, der die Zahlungsartenkennung für den verwendeten Zahlungsdienst enthält. Dies ist standardmäßig ein leerer String.
    - `validationURL` {{optional_inline}}
      - : Die URL, von der spezifische Verifizierungsinformationen des Zahlungsdienstes abgerufen werden, um den Händler zu validieren. Dies ist standardmäßig ein leerer String.

### Rückgabewert

Ein neues [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Objekt, das die Informationen bereitstellt, die dem clientseitigen Code zur Verfügung gestellt werden müssen, um sie dem [User-Agent](/de/docs/Glossary/user_agent) durch Aufruf von [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) zu präsentieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der als `validationURL` angegebene String nicht als URL geparst werden konnte.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene `methodName` nicht einem bekannten und unterstützten Händler entspricht oder keine korrekt formatierte standardisierte Zahlungsartenkennung ist.

## Spezifikationen

_Dieses Feature ist veraltet und gehört zu keiner Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
