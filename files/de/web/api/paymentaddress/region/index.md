---
title: "PaymentAddress: Eigenschaft region"
short-title: region
slug: Web/API/PaymentAddress/region
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`region`** des
{{domxref('PaymentAddress')}}-Interfaces gibt einen String zurück, der die höchste
Verwaltungsunterteilung des Landes enthält, in dem sich die Adresse befindet. Beispielsweise
kann dies ein Bundesland, eine Provinz, Oblast oder Präfektur sein.

## Wert

Ein String, der die höchste Verwaltungsunterteilung innerhalb des
Landes angibt, in dem sich die Adresse befindet. Diese Region hat in
verschiedenen Ländern unterschiedliche Bezeichnungen, wie: Bundesland, Provinz, Oblast,
Präfektur oder Landkreis.

## Nutzungshinweise

In einigen Ländern, wie Belgien, ist es unüblich, dass Menschen eine Region als Teil
ihrer Postadresse angeben. In solchen Fällen gibt der Browser einen leeren String als Wert
für `region` zurück. Die Adresse sollte jedoch dennoch für ihren
beabsichtigten Zweck verwendbar sein (z. B. um ein Produkt zu versenden). Adressen sollten jedoch immer überprüft werden, um sicherzustellen, dass das, was der Benutzer angibt, verwendbar ist.

## Browser-Kompatibilität

{{Compat}}
