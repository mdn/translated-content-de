---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`text-anchor`**-Attribut wird verwendet, um eine Zeichenfolge vorformatierter oder automatisch umgebrochener Texte (Start-, Mittel- oder End-Ausrichtung) relativ zu einem bestimmten Punkt auszurichten. Der Bereich für den automatischen Umbruch wird von der {{cssxref("inline-size")}}-Eigenschaft bestimmt.

Dieses Attribut ist nicht auf andere Arten von automatisch umgebrochenem Text anwendbar. In solchen Fällen sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Zeile separat.

Das `text-anchor`-Attribut wird auf jedes individuelle Textsegment innerhalb eines gegebenen {{SVGElement("text")}}-Elements angewendet. Jedes Textsegment hat eine anfängliche aktuelle Textposition, die den Punkt im Benutzerkoordinatensystem darstellt, der sich ergibt aus (je nach Kontext) der Anwendung der {{SVGAttr("x")}}- und {{SVGAttr("y")}}-Attribute auf das `<text>`-Element, jeglicher `x`- oder `y`-Attribut-Werte auf einem {{SVGElement("tspan")}}- oder {{SVGElement("tref")}}-Element, die explizit dem ersten gerenderten Zeichen in einem Textsegment zugewiesen wurden, oder der Bestimmung der anfänglichen aktuellen Textposition für ein {{SVGElement("textPath")}}-Element.

> [!NOTE]
> Als Präsentationsattribut hat `text-anchor` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("text-anchor")}}. Wenn beide spezifiziert sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Die gerenderten Zeichen sind so ausgerichtet, dass der Anfang der Textzeichenkette an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem {{cssxref("direction")}}-Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die linke Seite des Textes an der Anfangsposition des Textes gerendert. Für ein Element mit einem `direction`-Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die rechte Seite des Textes an der Anfangsposition des Textes gerendert. Für ein Element mit einer vertikalen primären Textrichtung (oft typisch für asiatische Texte) wird die Oberseite des Textes an der Anfangsposition des Textes gerendert.
- `middle`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition liegt. (Bei Text auf einem Pfad wird die Textzeichenkette konzeptionell zunächst in einer geraden Linie angeordnet. Der Mittelpunkt zwischen dem Anfang der Textzeichenkette und dem Ende der Textzeichenkette wird bestimmt. Danach wird die Textzeichenkette auf den Pfad projiziert, wobei dieser Mittelpunkt an der aktuellen Textposition liegt.)
- `end`
  - : Die gerenderten Zeichen werden so verschoben, dass das Ende des resultierenden gerenderten Textes (endgültige aktuelle Textposition vor der Anwendung des `text-anchor`-Attributs) an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem `direction`-Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die rechte Seite des Textes an der Anfangsposition des Textes gerendert. Für ein Element mit einem `direction`-Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die linke Seite des Textes an der Anfangsposition des Textes gerendert. Für ein Element mit einer vertikalen primären Textrichtung (oft typisch für asiatische Texte) wird die Unterseite des Textes an der Anfangsposition des Textes gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}}-Element
- CSS {{cssxref('text-anchor')}}-Eigenschaft
