---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
l10n:
  sourceCommit: 58313eeb2415546be9763dc691b6d519433c6dbb
---

{{SVGRef}}

Das **`text-anchor`** Attribut wird verwendet, um eine Zeichenkette vordefinierten Textes oder automatisch umbrochenen Textes (Start-, Mittel- oder Endausrichtung) auszurichten, wobei der Umbruchbereich von der {{cssxref("inline-size")}} Eigenschaft relativ zu einem gegebenen Punkt bestimmt wird.

Dieses Attribut ist nicht anwendbar auf andere Arten von automatisch umbrochenem Text. In diesen Fällen sollten Sie {{cssxref("text-align")}} verwenden. Bei mehrzeiligem Text erfolgt die Ausrichtung für jede Zeile separat.

Das `text-anchor` Attribut wird auf jedes einzelne Textstück innerhalb eines gegebenen {{SVGElement("text")}} Elements angewendet. Jedes Textstück hat eine initiale aktuelle Textposition, die den Punkt im Benutzerkoordinatensystem repräsentiert, der sich (je nach Kontext) aus der Anwendung der {{SVGAttr("x")}} und {{SVGAttr("y")}} Attribute auf das `<text>` Element ergibt, sowie aus etwaigen `x` oder `y` Attributwerten auf einem {{SVGElement("tspan")}} oder {{SVGElement("tref")}} Element, die explizit dem ersten gerenderten Zeichen in einem Textstück zugewiesen wurden, oder aus der Bestimmung der initialen aktuellen Textposition für ein {{SVGElement("textPath")}} Element.

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
  <!-- Veranschaulichung der Anker -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- Anker in Aktion -->
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <!-- Veranschaulichung der Anker -->
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
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `start`
  - : Die dargestellten Zeichen werden so ausgerichtet, dass der Anfang der Textzeichenkette an der initialen aktuellen Textposition liegt. Für ein Element mit einem {{cssxref("direction")}} Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird der linke Rand des Textes an der initialen Textposition gerendert. Für ein Element mit einem direction-Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird der rechte Rand des Textes an der initialen Textposition gerendert. Bei einem Element mit einer vertikalen primären Textrichtung (oft typisch für asiatische Texte) wird die Oberseite des Textes an der initialen Textposition gerendert.
- `middle`
  - : Die dargestellten Zeichen werden so ausgerichtet, dass die Mitte der Textzeichenkette an der aktuellen Textposition liegt. (Für Text auf einem Pfad wird konzeptionell die Textzeichenkette zuerst in einer geraden Linie angeordnet. Der Mittelpunkt zwischen dem Anfang und dem Ende der Textzeichenkette wird bestimmt. Dann wird die Textzeichenkette auf den Pfad abgebildet, wobei dieser Mittelpunkt an der aktuellen Textposition platziert wird.)
- `end`
  - : Die dargestellten Zeichen werden so verschoben, dass das Ende des resultierenden gerenderten Textes (die endgültige aktuelle Textposition vor Anwendung der `text-anchor` Eigenschaft) an der initialen aktuellen Textposition liegt. Für ein Element mit einem `direction` Eigenschaftswert von `ltr` (typisch für die meisten europäischen Sprachen) wird der rechte Rand des Textes an der initialen Textposition gerendert. Für ein Element mit einem `direction` Eigenschaftswert von `rtl` (typisch für Arabisch und Hebräisch) wird der linke Rand des Textes an der initialen Textposition gerendert. Bei einem Element mit einer vertikalen primären Textrichtung (oft typisch für asiatische Texte) wird die Unterseite des Textes an der initialen Textposition gerendert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("text")}} Element
- CSS {{cssxref('text-anchor')}} Eigenschaft
