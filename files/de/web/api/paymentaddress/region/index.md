---
title: "PaymentAddress: Eigenschaft region"
short-title: region
slug: Web/API/PaymentAddress/region
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`region`**-Eigenschaft des
[`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces gibt einen String zurück, der die oberste
Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Dies kann zum Beispiel ein Bundesland, eine Provinz, ein Oblast oder eine Präfektur sein.

## Wert

Ein String, der die oberste Verwaltungseinheit innerhalb des
Landes angibt, in dem sich die Adresse befindet. Diese Region hat in
verschiedenen Ländern unterschiedliche Bezeichnungen, wie: Bundesland, Provinz, Oblast, Präfektur oder Landkreis.

## Anwendungshinweise

In einigen Ländern, wie Belgien, ist es unüblich, dass Menschen eine Region als Teil
ihrer Postadresse angeben. In solchen Fällen gibt der Browser einen leeren String als Wert
von `region` zurück. Dennoch sollte die Adresse für den vorgesehenen Zweck (z. B. zur Versendung eines Produkts) weiterhin akzeptabel sein. Überprüfen Sie jedoch immer Adressen, um sicherzustellen, dass das, was der Benutzer angibt, verwendbar ist.

## Browser-Kompatibilität

{{Compat}}
