---
title: text-anchor
slug: Web/SVG/Reference/Attribute/text-anchor
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`text-anchor`** wird verwendet, um eine Zeichenfolge von vorformatiertem oder automatisch umbrochenem Text relativ zu einem gegebenen Punkt zu auszurichten (Start-, Mittel- oder Endausrichtung), wobei der Umbruchbereich aus der {{cssxref("inline-size")}} Eigenschaft bestimmt wird.

Dieses Attribut ist nicht auf andere Arten von automatisch umbrochenem Text anwendbar. In diesen Fällen sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Zeile.

Das `text-anchor` Attribut wird auf jedes einzelne Textstück innerhalb eines gegebenen {{SVGElement("text")}} Elements angewendet. Jedes Textstück hat eine initiale aktuelle Textposition, die den Punkt im Benutzerkoordinatensystem darstellt, der sich (je nach Kontext) aus der Anwendung der {{SVGAttr("x")}} und {{SVGAttr("y")}} Attribute auf das `<text>` Element ergibt, aus den `x` oder `y` Attributwerten auf einem {{SVGElement("tspan")}} oder {{SVGElement("tref")}} Element, die explizit dem ersten gerenderten Zeichen in einem Textstück zugewiesen sind, oder aus der Bestimmung der initialen aktuellen Textposition für ein {{SVGElement("textPath")}} Element.

> [!NOTE]
> Als Präsentationsattribut hat `text-anchor` auch ein entsprechendes CSS-Eigenschafts-Gegenstück: {{cssxref("text-anchor")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Materialization of anchors -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- Anchors in action -->
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example", "120", "120")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>start</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>start</code> | <code>middle</code> | <code>end</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `start`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass der Anfang der Textzeichenkette an der initialen aktuellen Textposition ist. Bei einem Element mit einer {{cssxref("direction")}} Eigenschaft mit dem Wert `ltr` (typisch für die meisten europäischen Sprachen) wird die linke Seite des Textes an der initialen Textposition gerendert. Bei einem Element mit der Eigenschaft `direction` mit dem Wert `rtl` (typisch für Arabisch und Hebräisch) wird die rechte Seite des Textes an der initialen Textposition gerendert. Bei einem Element mit einer vertikalen primären Textausrichtung (oft typisch für asiatischen Text) wird die obere Seite des Textes an der initialen Textposition gerendert.
- `middle`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition ist. (Bei Text auf einem Pfad wird der Text konzeptuell zuerst in einer geraden Linie ausgelegt. Der Mittelpunkt zwischen dem Anfang und dem Ende der Textzeichenkette wird bestimmt. Dann wird die Textzeichenkette auf den Pfad abgebildet, wobei dieser Mittelpunkt an der aktuellen Textposition platziert wird.)
- `end`
  - : Die gerenderten Zeichen sind so verschoben, dass das Ende des resultierenden gerenderten Textes (die finale aktuelle Textposition vor Anwendung der `text-anchor` Eigenschaft) an der initialen aktuellen Textposition ist. Bei einem Element mit der Eigenschaft `direction` mit dem Wert `ltr` (typisch für die meisten europäischen Sprachen) wird die rechte Seite des Textes an der initialen Textposition gerendert. Bei einem Element mit der Eigenschaft `direction` mit dem Wert `rtl` (typisch für Arabisch und Hebräisch) wird die linke Seite des Textes an der initialen Textposition gerendert. Bei einem Element mit einer vertikalen primären Textausrichtung (oft typisch für asiatischen Text) wird die untere Seite des Textes an der initialen Textposition gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}} Element
- CSS {{cssxref('text-anchor')}} Eigenschaft
