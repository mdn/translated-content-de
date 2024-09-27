---
title: <mtr>
slug: Web/MathML/Element/mtr
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`<mtr>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert eine Zeile in einer Tabelle oder Matrix. Es darf nur in einem {{ MathMLElement("mtable") }}-Element erscheinen und seine Kinder sind {{ MathMLElement("mtd") }}-Elemente, die Zellen darstellen. Dieses Element ist dem {{ HTMLElement("tr") }}-Element von [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die vom {{ MathMLElement("mtable") }} für diese Zeile angegeben wurde. Mehrere durch Leerzeichen getrennte Werte sind zulässig und gelten für die entsprechenden Spalten (z.B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die vom {{ MathMLElement("mtable") }} für diese Zeile angegeben wurde. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
