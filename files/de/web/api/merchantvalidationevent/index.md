---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

Das **`MerchantValidationEvent`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ermöglicht es einem Händler, sich als Berechtigter zur Nutzung eines bestimmten Zahlungshandlers zu verifizieren.

Erfahren Sie mehr über [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Konstruktor

- [`MerchantValidationEvent()`](/de/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt ein neues `MerchantValidationEvent`-Objekt, das ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis beschreibt, das an den Zahlungshandler gesendet wird, um zu verlangen, dass er den Händler validiert.

## Eigenschaften der Instanz

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der eine eindeutige Zahlungsmethodenkennung für den Zahlungshandler bereitstellt, der die Validierung anfordert. Dies kann entweder eine der standardmäßigen Zahlungsmethodenkennungen oder eine URL sein, die sowohl Anfragen für den Zahlungshandler identifiziert als auch verarbeitet, wie beispielsweise `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der eine URL angibt, von der die Website oder App zahlungshandler-spezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Versprechen, das die Validierungsdaten löst) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu validieren, dass die Zahlungsanfrage von einem autorisierten Händler kommt.

## Methoden der Instanz

- [`MerchantValidationEvent.complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Übergeben Sie die von der durch [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) angegebenen URL abgerufenen Daten an `complete()`, um den Validierungsprozess für die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) abzuschließen.

## Browser-Kompatibilität

{{Compat}}
