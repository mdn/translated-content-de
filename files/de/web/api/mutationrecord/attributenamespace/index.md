---
title: "MutationRecord: Eigenschaft attributeNamespace"
short-title: attributeNamespace
slug: Web/API/MutationRecord/attributeNamespace
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`attributeNamespace`** von {{domxref("MutationRecord")}} gibt den Namensraum des mutierten Attributs in dem durch einen {{domxref("MutationObserver")}} beobachteten {{domxref("MutationRecord")}} an.

## Wert

Wenn der `type` des Datensatzes [`attributes`](/de/docs/Web/API/MutationRecord/type) ist, ist die Eigenschaft eine Zeichenkette, die den Namensraum des mutierten Attributs des Mutation-Ziels darstellt. Andernfalls ist der Wert `null`.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
