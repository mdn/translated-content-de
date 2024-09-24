---
title: "ContactAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/ContactAddress/dependentLocality
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft des {{domxref("ContactAddress")}}-Interfaces ist ein String, der eine Orts- oder Unterortbezeichnung innerhalb einer Stadt enthält, wie z. B. ein Viertel, ein Bezirk oder, im Vereinigten Königreich, eine abhängige Örtlichkeit. Auch bekannt als _Poststadt_.

## Wert

Ein String, der den Unterortsteil der Adresse angibt. Dies kann ein leerer String sein, falls kein Unterort verfügbar oder erforderlich ist. Er wird zur Klärung verwendet, wenn eine Stadt Bereiche enthalten kann, die Straßennamen duplizieren.

Ein Unterort ist ein Bereich innerhalb einer Stadt, wie ein Viertel, Bezirk oder Distrikt. Im Vereinigten Königreich wird dies verwendet, um die **Poststadt** im Vereinigten Königreich anzugeben (offiziell von der Royal Mail als **abhängige Örtlichkeit** bekannt). Dies ist ein klärendes Merkmal von Adressen in Orten, in denen eine Stadt Bereiche haben kann, die Straßennamen duplizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
