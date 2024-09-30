---
title: "MerchantValidationEvent: validationURL-Eigenschaft"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent)-Eigenschaft **`validationURL`** ist ein schreibgeschützter Zeichenfolgenwert, der die URL bereitstellt, von der die zahlungshandlerspezifischen Daten abgerufen werden müssen, die zur Validierung des Händlers benötigt werden.

Diese Daten sollten in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode übergeben werden, um es dem Benutzeragenten zu ermöglichen, die Transaktion abzuschließen.

## Wert

Eine schreibgeschützte Zeichenfolge, die die URL angibt, von der die zahlungshandlerspezifischen Daten geladen werden, die benötigt werden, um den Verifizierungsprozess des Händlers abzuschließen. Nachdem diese geladen wurden, sollten sie entweder direkt oder über ein Versprechen in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden.

Siehe [Händler-Verifizierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation), um mehr über den Prozess zu erfahren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsabwicklungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
