---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Das **`MerchantValidationEvent`** Interface der [Payment Request API](/de/docs/Web/API/Payment_Request_API) ermöglicht einem Händler, sich als berechtigt zur Nutzung eines bestimmten Zahlungshandlers zu verifizieren.

Erfahren Sie mehr über die [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Konstruktor

- {{domxref("MerchantValidationEvent.MerchantValidationEvent()","MerchantValidationEvent()")}} {{Deprecated_Inline}}
  - : Erzeugt ein neues `MerchantValidationEvent` Objekt, das ein {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} Ereignis beschreibt, welches an den Zahlungshandler gesendet wird, um die Validierung des Händlers anzufordern.

## Instanzeigenschaften

- {{domxref("MerchantValidationEvent.methodName")}} {{Deprecated_Inline}}
  - : Ein String, der eine eindeutige Zahlungsartenkennung für den Zahlungshandler bereitstellt, der eine Validierung erfordert. Dies kann entweder einer der standardmäßigen Zahlungsmethoden-Identifikator-Strings oder eine URL sein, die sowohl die Identifizierung als auch die Anforderung für den Zahlungshandler abwickelt, wie z.B. `https://apple.com/apple-pay`.
- {{domxref("MerchantValidationEvent.validationURL")}} {{Deprecated_Inline}}
  - : Ein String, der eine URL angibt, von der die Website oder App zahlungshandlerspezifische Validierungsinformationen abrufen kann. Sobald diese Daten abgerufen wurden, sollten die Daten (oder ein Versprechen, das zu den Validierungsdaten führt) in {{domxref("MerchantValidationEvent.complete", "complete()")}} übergeben werden, um zu validieren, dass die Zahlungsanforderung von einem autorisierten Händler stammt.

## Instanzmethoden

- {{domxref("MerchantValidationEvent.complete()")}} {{Deprecated_Inline}}
  - : Übergeben Sie die von der durch {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} angegebenen URL abgerufenen Daten in `complete()`, um den Validierungsprozess für den {{domxref("PaymentRequest")}} abzuschließen.

## Browser-Kompatibilität

{{Compat}}
