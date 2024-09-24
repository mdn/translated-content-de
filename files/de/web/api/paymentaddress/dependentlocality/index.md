---
title: "PaymentAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/PaymentAddress/dependentLocality
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`dependentLocality`**
Eigenschaft der {{domxref('PaymentAddress')}}-Schnittstelle ist ein String, der eine
Sublokalitätsbezeichnung innerhalb einer Stadt enthält, wie zum Beispiel ein Viertel, Bezirk oder, im Vereinigten Königreich, eine untergeordnete Lokalität. Auch bekannt als _post
town_.

## Wert

Ein String, der den Sublokalitätsanteil der Adresse angibt. Dieser kann
ein leerer String sein, wenn keine Sublokalität verfügbar oder erforderlich ist. Er wird verwendet, um
eine Klarstellung bereitzustellen, wenn eine Stadt Bereiche mit ähnlichen Straßennamen umfassen kann.

Eine Sublokalität ist ein Bereich innerhalb einer Stadt, wie ein Viertel, Bezirk oder Stadtteil.
Im Vereinigten Königreich wird dies verwendet, um die **post town** im
Vereinigten Königreich anzugeben (offiziell von der Royal Mail als **dependent
locality** bekannt). Dies ist ein klärendes Merkmal von Adressen in Gebieten, in denen
eine Stadt Bereiche mit ähnlichen Straßennamen haben kann.

## Browser-Kompatibilität

{{Compat}}
