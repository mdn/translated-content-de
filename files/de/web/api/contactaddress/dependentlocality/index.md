---
title: "ContactAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/ContactAddress/dependentLocality
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft der [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Schnittstelle ist eine Zeichenkette, die eine Lokalität oder Sublokalität innerhalb einer Stadt enthält, wie zum Beispiel ein Viertel, eine Borough, ein Stadtteil oder im Vereinigten Königreich eine abhängige Lokalität. Auch bekannt als _Post town_.

## Wert

Eine Zeichenkette, die den Sublokalitätsteil der Adresse angibt. Diese kann eine leere Zeichenkette sein, wenn keine Sublokalität verfügbar oder erforderlich ist. Sie wird verwendet, um eine Unterscheidung zu ermöglichen, wenn eine Stadt Bereiche mit doppelten Straßennamen umfasst.

Eine Sublokalität ist ein Bereich innerhalb einer Stadt, wie zum Beispiel ein Viertel, eine Borough oder ein Stadtteil. Im Vereinigten Königreich wird dies verwendet, um den **Post town** anzugeben (offiziell bekannt bei der Royal Mail als die **dependent locality**). Dies ist eine Unterscheidungsfunktion von Adressen an Orten, an denen eine Stadt Bereiche mit doppelten Straßennamen haben kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
