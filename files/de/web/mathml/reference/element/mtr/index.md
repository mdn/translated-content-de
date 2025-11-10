---
title: <mtr>
slug: Web/MathML/Reference/Element/mtr
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`<mtr>`** [MathML](/de/docs/Web/MathML) Element repräsentiert eine Zeile in einer Tabelle oder einer Matrix. Es darf nur in einem {{ MathMLElement("mtable") }} Element erscheinen und seine Kinder sind {{ MathMLElement("mtd") }} Elemente, die Zellen darstellen. Dieses Element ist dem {{ HTMLElement("tr") }} Element in [HTML](/de/docs/Web/HTML) ähnlich.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes). Einige Browser können auch die folgenden Attribute unterstützen:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile spezifiziert sind. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die durch {{ MathMLElement("mtable") }} für diese Zeile spezifiziert sind. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

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
