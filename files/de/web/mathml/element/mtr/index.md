---
title: <mtr>
slug: Web/MathML/Element/mtr
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`<mtr>`** [MathML](/de/docs/Web/MathML) Element stellt eine Zeile in einer Tabelle oder einer Matrix dar. Es darf nur in einem {{ MathMLElement("mtable") }} Element vorkommen und seine Kinder sind {{ MathMLElement("mtd") }} Elemente, die Zellen darstellen. Dieses Element ist dem {{ HTMLElement("tr") }} Element von [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Die Attribute dieses Elements schließen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) ein. Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
