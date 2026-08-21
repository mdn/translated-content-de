---
title: "PaymentAddress: region-Eigenschaft"
short-title: region
slug: Web/API/PaymentAddress/region
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`region`**-Eigenschaft des [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Interfaces gibt einen String zurück, der die oberste Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Zum Beispiel kann dies ein Staat, eine Provinz, ein Oblast oder eine Präfektur sein.

## Wert

Ein String, der die oberste Verwaltungseinheit innerhalb des Landes spezifiziert, in dem sich die Adresse befindet. Diese Region hat in verschiedenen Ländern unterschiedliche Bezeichnungen, wie: Staat, Provinz, Oblast, Präfektur oder Landkreis.

## Hinweise zur Verwendung

In einigen Ländern, wie Belgien, ist es unüblich, dass Personen eine Region als Teil ihrer Postadresse angeben. In solchen Fällen gibt der Browser einen leeren String als Wert der `region` zurück. Die Adresse sollte jedoch dennoch für den vorgesehenen Zweck akzeptabel sein (z.B. für den Versand eines Produkts). Dennoch sollten Adressen immer überprüft werden, um sicherzustellen, dass das, was der Benutzer angibt, verwendbar ist.

## Browser-Kompatibilität

{{Compat}}
