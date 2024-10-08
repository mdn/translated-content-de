---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Das **`MerchantValidationEvent`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ermöglicht es einem Händler, sich als berechtigt zu verifizieren, um einen bestimmten Zahlungsabwickler zu nutzen.

Erfahren Sie mehr über die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Konstruktor

- [`MerchantValidationEvent()`](/de/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent) {{Deprecated_Inline}}
  - : Erstellt ein neues `MerchantValidationEvent`-Objekt, das ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis beschreibt, das an den Zahlungsabwickler gesendet wird, um diesen zur Validierung des Händlers aufzufordern.

## Instanz-Eigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName) {{Deprecated_Inline}}
  - : Ein String, der einen eindeutigen Zahlungsmethoden-Identifikator für den Zahlungsabwickler bereitstellt, der eine Validierung erfordert. Dies kann entweder einer der Standard-Zahlungsmethoden-Identifikatoren sein oder eine URL, die sowohl identifiziert als auch Anfragen für den Zahlungsabwickler bearbeitet, wie z.B. `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) {{Deprecated_Inline}}
  - : Ein String, der eine URL angibt, von der die Website oder App spezifische Validierungsinformationen des Zahlungsabwicklers abrufen kann. Sobald diese Daten abgerufen sind, sollten die Daten (oder ein Promise, das sich zu den Validierungsdaten auflöst) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu validieren, dass die Zahlungsanfrage von einem autorisierten Händler stammt.

## Instanz-Methoden

- [`MerchantValidationEvent.complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) {{Deprecated_Inline}}
  - : Übergeben Sie die von der durch [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) angegebenen URL abgerufenen Daten in `complete()`, um den Validierungsprozess für die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) abzuschließen.

## Browser-Kompatibilität

{{Compat}}
