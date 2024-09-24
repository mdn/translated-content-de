---
title: "ContactAddress: Eigenschaft region"
short-title: region
slug: Web/API/ContactAddress/region
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`region`**-Eigenschaft des {{domxref("ContactAddress")}}-Interfaces gibt einen String zurück, der die höchste Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Dies kann ein Bundesland, eine Provinz, ein Oblast oder eine Präfektur sein.

## Wert

Ein String, der die höchste Verwaltungseinheit innerhalb des Landes angibt, in dem sich die Adresse befindet. Diese Region hat in verschiedenen Ländern unterschiedliche Bezeichnungen, wie: Bundesland, Provinz, Oblast, Präfektur oder Grafschaft.

## Nutzungshinweise

In einigen Ländern, wie Belgien, ist es unüblich, dass Menschen eine Region als Teil ihrer Postadresse angeben. In solchen Fällen gibt der Browser einen leeren String als Wert von `region` zurück. Die Adresse sollte jedoch immer noch für ihren vorgesehenen Zweck (z. B. zur Lieferung eines Produkts) nutzbar sein. Überprüfen Sie jedoch immer Adressen, um sicherzustellen, dass das, was der Benutzer angibt, verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
