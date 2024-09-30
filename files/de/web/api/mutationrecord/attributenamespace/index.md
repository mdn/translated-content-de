---
title: "MutationRecord: attributeNamespace-Eigenschaft"
short-title: attributeNamespace
slug: Web/API/MutationRecord/attributeNamespace
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeNamespace`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) gibt den Namensraum des mutierten Attributs im [`MutationRecord`](/de/docs/Web/API/MutationRecord) an, der von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Wert

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Datensatzes `attributes` ist, ist die Eigenschaft ein String, der den Namensraum des mutierten Attributs des Mutationsziels darstellt. Andernfalls ist der Wert `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
