---
title: "ContactAddress: country-Eigenschaft"
short-title: country
slug: Web/API/ContactAddress/country
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`country`**-Schreibgeschützte Eigenschaft des [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Interfaces ist ein String, der das Land der Adresse unter Verwendung des [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)-Standards angibt. Der String ist immer in seiner kanonischen Großbuchstabenschreibweise.

Einige Beispiele für gültige `country`-Werte sind: `"US"`, `"GB"`, `"CN"` oder `"JP"`.

## Wert

Ein String, der den ISO3166-1 alpha-2-Code enthält, der das Land identifiziert, in dem sich die Adresse befindet, oder ein leerer String, wenn kein Land verfügbar ist, was häufig bedeuten kann "gleiches Land wie der Seitenbetreiber."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
