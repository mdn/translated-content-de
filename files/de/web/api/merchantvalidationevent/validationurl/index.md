---
title: "MerchantValidationEvent: validationURL Eigenschaft"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{non-standard_header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent) Eigenschaft **`validationURL`** ist ein schreibgeschützter Zeichenfolgenwert, der die URL bereitstellt, über die die payment handler-spezifischen Daten abgerufen werden können, die zur Validierung des Händlers benötigt werden.

Diese Daten sollten in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) Methode übergeben werden, damit der Benutzeragent die Transaktion abschließen kann.

## Wert

Eine schreibgeschützte Zeichenfolge, die die URL angibt, von der die payment handler-spezifischen Daten geladen werden müssen, die zur Durchführung des Händlerverifizierungsprozesses benötigt werden. Sobald diese geladen sind, sollten sie entweder direkt oder unter Verwendung eines Promises in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden.

Siehe [Händlervalidierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation), um mehr über den Prozess zu erfahren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
