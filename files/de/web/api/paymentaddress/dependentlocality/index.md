---
title: "PaymentAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/PaymentAddress/dependentLocality
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle ist ein String, der eine Sublokalitätsbezeichnung innerhalb einer Stadt enthält, wie zum Beispiel ein Viertel, Stadtbezirk oder, im Vereinigten Königreich, eine abhängige Lokalität. Auch bekannt als _post town_.

## Wert

Ein String, der den Sublokalitätsanteil der Adresse angibt. Dieser kann ein leerer String sein, wenn keine Sublokalität verfügbar oder erforderlich ist. Er wird verwendet, um Unklarheiten zu beseitigen, wenn eine Stadt Bereiche enthält, die Straßennamen duplizieren.

Eine Sublokalität ist ein Bereich innerhalb einer Stadt, wie ein Viertel, Stadtbezirk oder Distrikt. Im Vereinigten Königreich wird dies verwendet, um die **post town** im Vereinigten Königreich anzugeben (offiziell durch die Royal Mail als **dependent locality** bekannt). Dies ist eine Funktion zur Beseitigung von Unklarheiten bei Adressen in Gebieten, in denen eine Stadt Bereiche mit gleichen Straßennamen haben kann.

## Browser-Kompatibilität

{{Compat}}
