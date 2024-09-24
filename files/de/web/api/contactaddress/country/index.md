---
title: "ContactAddress: Ländereigenschaft"
short-title: Land
slug: Web/API/ContactAddress/country
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die **`country`**-Eigenschaft des {{domxref("ContactAddress")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Zeichenfolge darstellt, welche das Land der Adresse gemäß dem [ISO 3166-1 Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Standard identifiziert. Die Zeichenfolge ist stets in ihrer kanonischen Großschreibungsform.

Einige Beispiele für gültige `country`-Werte: `"US"`, `"GB"`, `"CN"` oder `"JP"`.

## Wert

Eine Zeichenfolge, die den ISO3166-1 Alpha-2-Code enthält, der das Land identifiziert, in dem sich die Adresse befindet, oder eine leere Zeichenfolge, wenn kein Land verfügbar ist, was häufig bedeutet, "gleiches Land wie der Eigentümer der Seite."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
