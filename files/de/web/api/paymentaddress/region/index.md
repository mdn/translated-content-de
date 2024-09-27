---
title: "PaymentAddress: region-Eigenschaft"
short-title: region
slug: Web/API/PaymentAddress/region
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`region`**-Eigenschaft der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle gibt einen String zurück, der die oberste Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Dies kann beispielsweise ein Bundesland, eine Provinz, eine Oblast oder eine Präfektur sein.

## Wert

Ein String, der die oberste Verwaltungseinheit innerhalb des Landes angibt, in dem sich die Adresse befindet. Diese Region hat in verschiedenen Ländern unterschiedliche Bezeichnungen, wie beispielsweise: Bundesland, Provinz, Oblast, Präfektur oder Landkreis.

## Anwendungshinweise

In einigen Ländern, wie Belgien, ist es unüblich, dass Personen eine Region als Teil ihrer Postadresse angeben. In solchen Fällen gibt der Browser einen leeren String als Wert von `region` zurück. Die Adresse sollte jedoch dennoch für ihren vorgesehenen Zweck verwendbar sein (z. B. um ein Produkt zu versenden). Überprüfen Sie jedoch immer Adressen, um sicherzustellen, dass das, was der Benutzer angibt, verwendbar ist.

## Browser-Kompatibilität

{{Compat}}
