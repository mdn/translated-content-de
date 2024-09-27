---
title: "MerchantValidationEvent: validationURL-Eigenschaft"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

Die [`MerchantValidationEvent`](/de/docs/Web/API/MerchantValidationEvent)-Eigenschaft **`validationURL`** ist ein schreibgeschützter String-Wert, der die URL bereitstellt, von der die zahlungsspezifischen Daten abgerufen werden müssen, um den Händler zu validieren.

Diese Daten sollten in die [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete)-Methode übernommen werden, um dem Nutzeragenten das Abschließen der Transaktion zu ermöglichen.

## Wert

Ein schreibgeschützter String, der die URL angibt, von der zahlungsspezifische Daten geladen werden müssen, um den Händler-Verifikationsprozess abzuschließen. Sobald diese geladen sind, sollten sie in [`complete()`](/de/docs/Web/API/MerchantValidationEvent/complete) übergeben werden, entweder direkt oder mittels eines Promises.

Siehe [Händler-Validierung](/de/docs/Web/API/Payment_Request_API/Concepts#merchant_validation), um mehr über den Prozess zu erfahren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Zahlungsabwicklungskonzepte](/de/docs/Web/API/Payment_Request_API/Concepts)
