---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{SVGRef}}

Das **`text-anchor`** Attribut wird verwendet, um eine Zeichenkette von vorformatiertem oder automatisch umbrechendem Text auszurichten (Start-, Mittel- oder Ende-Ausrichtung), wobei der Umbruchbereich von der {{cssxref("inline-size")}} Eigenschaft relativ zu einem bestimmten Punkt bestimmt wird.

Dieses Attribut ist nicht anwendbar auf andere Arten von automatisch umbrechendem Text. Für diese Fälle sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Zeile.

Das `text-anchor` Attribut wird auf jedes einzelne Textstück innerhalb eines gegebenen {{SVGElement("text")}} Elements angewendet. Jedes Textstück hat eine anfängliche aktuelle Textposition, die den Punkt im Benutzerkoordinatensystem darstellt, der sich aus dem (abhängig vom Kontext) Anwenden der {{SVGAttr("x")}} und {{SVGAttr("y")}} Attribute auf das `<text>` Element ergibt, aus den `x` oder `y` Attributwerten auf einem {{SVGElement("tspan")}} oder {{SVGElement("tref")}} Element, die explizit dem ersten gerenderten Zeichen in einem Textstück zugewiesen sind, oder aus der Bestimmung der anfänglichen aktuellen Textposition für ein {{SVGElement("textPath")}} Element.

> [!NOTE]
> Als Präsentationsattribut kann `text-anchor` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('text-anchor')}} für mehr.

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

## Anmerkungen zur Verwendung

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
  - : Die gerenderten Zeichen sind so ausgerichtet, dass der Beginn der Textzeichenkette an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem {{cssxref("direction")}} Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die linke Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einem Eigenschaftswert `rtl` (typisch für Arabisch und Hebräisch) wird die rechte Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einer vertikalen primären Textrichtung (oft typisch für asiatischen Text) wird die Oberseite des Textes an der anfänglichen Textposition gerendert.
- `middle`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition liegt. (Für Text auf einem Pfad wird konzeptionell die Textzeichenkette zunächst in einer geraden Linie ausgelegt. Der Mittelpunkt zwischen dem Beginn und dem Ende der Textzeichenkette wird bestimmt. Dann wird die Textzeichenkette so auf den Pfad abgebildet, dass dieser Mittelpunkt an der aktuellen Textposition liegt.)
- `end`
  - : Die gerenderten Zeichen werden so verschoben, dass das Ende des resultierenden gerenderten Textes (die endgültige aktuelle Textposition, bevor die `text-anchor` Eigenschaft angewendet wird) an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem `direction` Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die rechte Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einem `direction` Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die linke Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einer vertikalen primären Textrichtung (oft typisch für asiatischen Text) wird das Ende des Textes an der anfänglichen Textposition gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}} Element
- CSS {{cssxref('text-anchor')}} Eigenschaft
