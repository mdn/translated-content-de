---
title: "MerchantValidationEvent: validationURL-Eigenschaft"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die {{domxref("MerchantValidationEvent")}}-Eigenschaft **`validationURL`** ist ein schreibgeschützter Zeichenfolgenwert, der die URL angibt, von der die zahlungsspezifischen Daten abgerufen werden müssen, die zur Validierung des Händlers benötigt werden.

Diese Daten sollten in die {{domxref("MerchantValidationEvent.complete", "complete()")}}-Methode übergeben werden, um dem Benutzeragenten zu ermöglichen, die Transaktion abzuschließen.

## Wert

Eine schreibgeschützte Zeichenfolge, die die URL angibt, von der die zahlungsspezifischen Daten geladen werden müssen, die für den Abschluss des Händlerverifizierungsprozesses erforderlich sind. Sobald diese geladen sind, sollten sie entweder direkt oder unter Verwendung eines Promises in {{domxref("MerchantValidationEvent.complete", "complete()")}} übergeben werden.

Siehe [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation), um mehr über den Prozess zu erfahren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
