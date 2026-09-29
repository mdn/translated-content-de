---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

Die **`MerchantValidationEvent`**-Schnittstelle der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ermöglicht es einem Händler, nachzuweisen, dass er zur Verwendung eines bestimmten Zahlungsdienstes berechtigt ist.

Erfahren Sie mehr über die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Konstruktor

- [`MerchantValidationEvent()`](/de/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt ein neues `MerchantValidationEvent`-Objekt, das ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis beschreibt. Dieses wird an den Zahlungsdienst gesendet, um ihn zur Validierung des Händlers aufzufordern.

## Instanzeigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Zeichenfolge mit einer eindeutigen Kennung der Zahlungsmethode für den Zahlungsdienst, der eine Validierung verlangt. Dies kann entweder eine der standardisierten Kennungen für Zahlungsmethoden oder eine URL sein, die den Zahlungsdienst identifiziert und Anfragen an ihn verarbeitet, beispielsweise `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Eine Zeichenfolge, die eine URL angibt, unter der die Website oder App validierungsspezifische Informationen für den Zahlungsdienst abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Promise, das mit den Validierungsdaten erfüllt wird) an [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu bestätigen, dass die Zahlungsanfrage von einem autorisierten Händler stammt.

## Instanzmethoden

- [`MerchantValidationEvent.complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Übergeben Sie die von der durch [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) angegebenen URL abgerufenen Daten an `complete()`, um den Validierungsvorgang für die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) abzuschließen.

## Browser-Kompatibilität

{{Compat}}
