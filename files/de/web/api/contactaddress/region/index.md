---
title: "ContactAddress: region-Eigenschaft"
short-title: region
slug: Web/API/ContactAddress/region
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`region`**-Eigenschaft der [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Schnittstelle liefert eine Zeichenfolge, die die oberste Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Dies kann ein Staat, eine Provinz, ein Oblast oder eine Präfektur sein.

## Wert

Eine Zeichenfolge, die die oberste Verwaltungseinheit des Landes angibt, in dem sich die Adresse befindet. Diese Region hat in verschiedenen Ländern unterschiedliche Bezeichnungen, wie: Staat, Provinz, Oblast, Präfektur oder Kreis.

## Nutzungshinweise

In einigen Ländern, wie Belgien, ist es ungewöhnlich, dass Personen eine Region als Teil ihrer Postadresse angeben. In solchen Fällen gibt der Browser eine leere Zeichenfolge als Wert von `region` zurück. Die Adresse sollte jedoch trotzdem für den vorgesehenen Zweck verwendet werden können (z. B. um ein Produkt zu versenden). Überprüfen Sie jedoch immer die Adressen, um sicherzustellen, dass das, was der Benutzer bereitstellt, verwendbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
