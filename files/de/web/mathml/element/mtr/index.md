---
title: <mtr>
slug: Web/MathML/Element/mtr
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mtr>`**-Element des [MathML](/de/docs/Web/MathML) repräsentiert eine Zeile in einer Tabelle oder einer Matrix. Es darf nur in einem {{ MathMLElement("mtable") }}-Element erscheinen und seine Kinder sind {{ MathMLElement("mtd") }}-Elemente, die Zellen darstellen. Dieses Element ist dem {{ HTMLElement("tr") }}-Element von [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes). Einige Browser unterstützen möglicherweise auch die folgenden Attribute:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die durch das {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die durch das {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
