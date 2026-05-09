---
title: "MerchantValidationEvent: validationURL-Eigenschaft"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}{{non-standard_header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Eigenschaft **`validationURL`** ist ein schreibgeschützter Zeichenfolgenwert, der die URL bereitstellt, von der die zahlungsspezifischen Daten abgerufen werden müssen, die zur Validierung des Händlers benötigt werden.

Diese Daten sollten in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode übergeben werden, um dem Benutzeragenten die Transaktion abzuschließen.

## Wert

Eine schreibgeschützte Zeichenfolge, die die URL angibt, von der die zahlungsspezifischen Daten geladen werden müssen, die zum Abschluss des Händlerverifizierungsprozesses benötigt werden. Sobald diese geladen wurden, sollten sie entweder direkt oder unter Verwendung eines Promise in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden.

Siehe [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation), um mehr über den Prozess zu erfahren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
