---
title: <mtr>
slug: Web/MathML/Element/mtr
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mtr>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert eine Zeile in einer Tabelle oder einer Matrix. Es darf nur in einem {{ MathMLElement("mtable") }}-Element erscheinen, und seine Kinder sind {{ MathMLElement("mtd") }}-Elemente, die Zellen darstellen. Dieses Element ähnelt dem {{ HTMLElement("tr") }}-Element von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements schließen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) ein. Einige Browser können auch die folgenden Attribute unterstützen:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z. B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
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
