---
title: "ContactAddress: country-Eigenschaft"
short-title: country
slug: Web/API/ContactAddress/country
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`country`** der [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Schnittstelle ist eine Zeichenkette, die das Land der Adresse anhand des [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standards identifiziert. Die Zeichenkette ist immer in ihrer kanonischen Großbuchstabenform.

Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.

## Wert

Eine Zeichenkette, die den ISO3166-1 alpha-2-Code enthält, der das Land identifiziert, in dem sich die Adresse befindet, oder eine leere Zeichenkette, wenn kein Land verfügbar ist. Häufig kann dies als "gleiches Land wie der Website-Betreiber" interpretiert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
