---
title: "MutationRecord: attributeNamespace-Eigenschaft"
short-title: attributeNamespace
slug: Web/API/MutationRecord/attributeNamespace
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeNamespace`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist der Namespace des veränderten Attributs im [`MutationRecord`](/de/docs/Web/API/MutationRecord), der von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Wert

Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Datensatzes `attributes` ist, ist die Eigenschaft eine Zeichenkette, die den Namespace des veränderten Attributs des Mutationstargets repräsentiert. Andernfalls ist der Wert `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
