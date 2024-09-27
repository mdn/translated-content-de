---
title: "ContactAddress: region-Eigenschaft"
short-title: region
slug: Web/API/ContactAddress/region
l10n:
  sourceCommit: fffaf01b3968b14820cdefdd988daecaf58fb286
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

Die schreibgeschützte **`region`**-Eigenschaft des [`ContactAddress`](/de/docs/Web/API/ContactAddress)-Interfaces gibt eine Zeichenkette zurück, die die oberste Verwaltungseinheit des Landes enthält, in dem sich die Adresse befindet. Dies kann ein Staat, eine Provinz, ein Oblast oder ein Präfektur sein.

## Wert

Eine Zeichenkette, die die oberste Verwaltungseinheit innerhalb des Landes angibt, in dem sich die Adresse befindet. Diese Region hat in verschiedenen Ländern unterschiedliche Namen, wie z.B.: Staat, Provinz, Oblast, Präfektur oder County.

## Hinweise zur Nutzung

In einigen Ländern, wie Belgien, ist es unüblich, dass Personen eine Region als Teil ihrer Postanschrift angeben. In solchen Fällen gibt der Browser eine leere Zeichenkette als Wert der `region` zurück. Die Adresse sollte jedoch trotzdem für den beabsichtigten Zweck akzeptabel sein (z.B. zum Versand eines Produkts). Es sollte jedoch immer überprüft werden, ob die angegebenen Adressen nutzbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
