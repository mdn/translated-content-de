---
title: <mtr>
slug: Web/MathML/Reference/Element/mtr
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mtr>`**-Element von [MathML](/de/docs/Web/MathML) stellt eine Zeile in einer Tabelle oder einer Matrix dar. Es darf nur in einem {{ MathMLElement("mtable") }}-Element erscheinen und seine Kinder sind {{ MathMLElement("mtd") }}-Elemente, die Zellen repräsentieren. Dieses Element ist ähnlich dem {{ HTMLElement("tr") }}-Element von [HTML](/de/docs/Web/HTML).

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes). Einige Browser können auch die folgenden Attribute unterstützen:

- `columnalign` {{Non-standard_Inline}}
  - : Überschreibt die horizontale Ausrichtung der Zellen, die vom {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mehrere durch Leerzeichen getrennte Werte sind erlaubt und gelten für die entsprechenden Spalten (z.B. `columnalign="left center right"`). Mögliche Werte sind: `left`, `center` und `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Überschreibt die vertikale Ausrichtung der Zellen, die vom {{ MathMLElement("mtable") }} für diese Zeile festgelegt wurde. Mögliche Werte sind: `axis`, `baseline`, `bottom`, `center` und `top`.

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
