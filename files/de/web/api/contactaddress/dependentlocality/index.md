---
title: "ContactAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/ContactAddress/dependentLocality
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft des [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Interfaces ist ein String, der eine Orts- oder Unterortbezeichnung innerhalb einer Stadt enthält, wie z. B. ein Stadtviertel, Bezirk oder in Großbritannien eine abhängige Ortschaft. Auch bekannt als _post town_.

## Wert

Ein String, der den Unterortsteil der Adresse angibt. Dieser kann ein leerer String sein, wenn kein Unterort verfügbar oder erforderlich ist. Er wird verwendet, um bei Städten, die Bereiche mit doppelten Straßennamen haben, für Klarheit zu sorgen.

Ein Unterort ist ein Bereich innerhalb einer Stadt, wie ein Stadtviertel, Bezirk oder Distrikt. In Großbritannien wird dies verwendet, um die **post town** (offiziell bekannt durch die Royal Mail als **dependent locality**) anzugeben. Dies ist eine klarstellende Eigenschaft von Adressen in Gebieten, in denen eine Stadt Bereiche mit doppelten Straßennamen haben kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
