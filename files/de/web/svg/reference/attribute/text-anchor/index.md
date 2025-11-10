---
title: text-anchor
slug: Web/SVG/Reference/Attribute/text-anchor
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`text-anchor`** Attribut wird verwendet, um eine Zeichenkette von vorformatiertem oder automatisch umbrochenem Text auszurichten (Start-, Mittel- oder Endausrichtung), wobei der Umbruchbereich von der {{cssxref("inline-size")}} Eigenschaft relativ zu einem gegebenen Punkt bestimmt wird.

Dieses Attribut ist nicht auf andere Arten von automatisch umbrochenem Text anwendbar. Für diese Fälle sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Linie separat.

Das `text-anchor` Attribut wird auf jedes einzelne Textfragment innerhalb eines gegebenen {{SVGElement("text")}} Elements angewendet. Jedes Textfragment hat eine initiale aktuelle Textposition, die den Punkt im Benutzerkoordinatensystem darstellt, der sich ergibt aus (je nach Kontext) der Anwendung der {{SVGAttr("x")}} und {{SVGAttr("y")}} Attribute auf das `<text>` Element, jeglichen `x` oder `y` Attributwerten auf einem {{SVGElement("tspan")}} Element, die explizit dem ersten gerenderten Zeichen in einem Textfragment zugewiesen sind, oder der Bestimmung der initialen aktuellen Textposition für ein {{SVGElement("textPath")}} Element.

> [!NOTE]
> Als Präsentationsattribut hat `text-anchor` auch ein entsprechendes CSS-Attribut: {{cssxref("text-anchor")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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

## Nutzungshinweise

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
      <td>diskrete</td>
    </tr>
  </tbody>
</table>

- `start`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass der Anfang der Textzeichenkette an der initialen aktuellen Textposition liegt. Für ein Element mit einem {{cssxref("direction")}} Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die linke Seite des Textes an der initialen Textposition gerendert. Für ein Element mit einem Eigenschaftswert `rtl` (typisch für Arabisch und Hebräisch) wird die rechte Seite des Textes an der initialen Textposition gerendert. Für ein Element mit vertikaler Textausrichtung (oft typisch für asiatische Texte) wird die Oberseite des Textes an der initialen Textposition gerendert.
- `middle`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition liegt. (Für Text auf einem Pfad wird konzeptionell die Textzeichenkette zuerst in einer geraden Linie ausgelegt. Der Mittelpunkt zwischen Anfang und Ende der Textzeichenkette wird bestimmt. Dann wird die Textzeichenkette auf den Pfad abgebildet, wobei dieser Mittelpunkt an der aktuellen Textposition liegt.)
- `end`
  - : Die gerenderten Zeichen sind so verschoben, dass das Ende des resultierenden gerenderten Textes (die finale aktuelle Textposition vor Anwendung der `text-anchor` Eigenschaft) an der initialen aktuellen Textposition liegt. Für ein Element mit einem `direction` Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die rechte Seite des Textes an der initialen Textposition gerendert. Für ein Element mit einem `direction` Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die linke Seite des Textes an der initialen Textposition gerendert. Für ein Element mit vertikaler Haupttextausrichtung (oft typisch für asiatische Texte) wird die Unterseite des Textes an der initialen Textposition gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}} Element
- CSS {{cssxref('text-anchor')}} Eigenschaft
