---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}{{non-standard_header}}

Das **`MerchantValidationEvent`**-Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ermöglicht es einem Händler, sich als berechtigt zu verifizieren, einen bestimmten Payment-Handler zu verwenden.

Erfahren Sie mehr über die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Konstruktor

- [`MerchantValidationEvent()`](/de/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erzeugt ein neues `MerchantValidationEvent`-Objekt, das ein [`merchantvalidation`](/de/docs/Web/API/PaymentRequest/merchantvalidation_event)-Ereignis beschreibt, das an den Payment-Handler gesendet wird, um ihn aufzufordern, den Händler zu validieren.

## Instanz-Eigenschaften

- [`MerchantValidationEvent.methodName`](/de/docs/Web/API/MerchantValidationEvent/methodName) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der eine eindeutige Zahlungsmethodenkennung für den Payment-Handler angibt, der eine Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsmethoden-Identifikationsstrings sein oder eine URL, die sowohl den Payment-Handler identifiziert als auch Anfragen für diesen verarbeitet, wie z.B. `https://apple.com/apple-pay`.
- [`MerchantValidationEvent.validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Ein String, der eine URL angibt, von der die Website oder App spezifische Validierungsinformationen des Payment-Handlers abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Versprechen, das sich in die Validierungsdaten auflöst) in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, um zu validieren, dass die Zahlunganfrage von einem autorisierten Händler stammt.

## Instanz-Methoden

- [`MerchantValidationEvent.complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Übergeben Sie die Daten, die von der durch [`validationURL`](/de/docs/Web/API/MerchantValidationEvent/validationURL) angegebenen URL abgerufen wurden, in `complete()`, um den Validierungsprozess für die [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) abzuschließen.

## Browser-Kompatibilität

{{Compat}}
