---
title: "PaymentAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/PaymentAddress/dependentLocality
l10n:
  sourceCommit: a5d90e4c36c0155024621fe00e15ae61f3697d88
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle ist ein String, der eine Sublokalitätsbezeichnung innerhalb einer Stadt enthält, wie etwa ein Stadtviertel, Bezirk, Distrikt oder, im Vereinigten Königreich, eine abhängige Lokalität. Auch bekannt als _post town_.

## Wert

Ein String, der den Sublokalitätsteil der Adresse angibt. Dieser kann ein leerer String sein, wenn keine Sublokalität verfügbar oder erforderlich ist. Er wird verwendet, um Klarheit zu schaffen, wenn eine Stadt Gebiete mit doppelten Straßennamen enthalten kann.

Eine Sublokalität ist ein Gebiet innerhalb einer Stadt, wie ein Stadtviertel, Bezirk oder Distrikt. Im Vereinigten Königreich wird dies verwendet, um die **post town** im Vereinigten Königreich anzuzeigen (offiziell von der Royal Mail als **dependent locality** bekannt). Dies ist eine disambiguierende Funktion von Adressen in Gegenden, in denen eine Stadt Gebiete mit doppelten Straßennamen haben kann.

## Browser-Kompatibilität

{{Compat}}
