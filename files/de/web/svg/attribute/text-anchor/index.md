---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{SVGRef}}

Das **`text-anchor`** Attribut wird verwendet, um eine Zeichenkette von vorformatiertem Text oder automatisch umbrochenem Text relativ zu einem bestimmten Punkt auszurichten (Start-, Mittel- oder Endausrichtung). Der Umbruchbereich wird aus der {{cssxref("inline-size")}} Eigenschaft bestimmt.

Dieses Attribut ist nicht anwendbar auf andere Arten von automatisch umbrochenem Text. In diesen Fällen sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Zeile einzeln.

Das `text-anchor` Attribut wird auf jeden einzelnen Textabschnitt innerhalb eines gegebenen {{SVGElement("text")}} Elements angewendet. Jeder Textabschnitt hat eine anfängliche aktuelle Textposition, die den Punkt im Benutzersystem darstellt, der (je nach Kontext) durch die Anwendung der {{SVGAttr("x")}} und {{SVGAttr("y")}} Attribute auf das `<text>` Element, jegliche `x` oder `y` Attributwerte auf einem {{SVGElement("tspan")}} oder {{SVGElement("tref")}} Element, explizit dem ersten gerenderten Zeichen in einem Textabschnitt zugewiesen, oder durch die Bestimmung der anfänglichen aktuellen Textposition eines {{SVGElement("textPath")}} Elements entsteht.

> [!NOTE]
> Als Präsentationsattribut kann `text-anchor` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('text-anchor')}} für mehr Informationen.

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

## Verwendungsnotizen

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
  - : Die gerenderten Zeichen sind so ausgerichtet, dass der Anfang der Textzeichenkette an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem {{cssxref("direction")}} Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die linke Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einem Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die rechte Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit vertikaler primärer Textrichtung (oft typisch für asiatischen Text) wird die Oberseite des Textes an der anfänglichen Textposition gerendert.
- `middle`
  - : Die gerenderten Zeichen sind so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition liegt. (Für Text auf einem Pfad wird die Textzeichenkette zunächst konzeptionell in einer geraden Linie ausgelegt. Der Mittelpunkt zwischen dem Anfang und dem Ende der Textzeichenkette wird bestimmt. Dann wird die Textzeichenkette auf den Pfad projiziert, wobei dieser Mittelpunkt an der aktuellen Textposition liegt.)
- `end`
  - : Die gerenderten Zeichen werden so verschoben, dass das Ende des resultierenden gerenderten Textes (die finale aktuelle Textposition vor der Anwendung des `text-anchor` Attributs) an der anfänglichen aktuellen Textposition liegt. Für ein Element mit einem `direction` Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird die rechte Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit einem Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird die linke Seite des Textes an der anfänglichen Textposition gerendert. Für ein Element mit vertikaler primärer Textrichtung (oft typisch für asiatischen Text) wird die Unterseite des Textes an der anfänglichen Textposition gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}} Element
- CSS {{cssxref('text-anchor')}} Eigenschaft
