---
title: font-family
slug: Web/SVG/Attribute/font-family
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`font-family`**-Attribut gibt an, welche Schriftfamilie zur Darstellung des Textes verwendet wird, wobei eine priorisierte Liste von Schriftfamiliennamen und/oder generischen Familiennamen spezifiziert wird.

> [!NOTE]
> Als Präsentationsattribut kann `font-family` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("font-family")}}-Eigenschaft.

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
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Gebrauchshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-family", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Abhängig vom Benutzeragenten</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte lesen Sie bitte die [CSS `font-family`](/de/docs/Web/CSS/font-family#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-family")}}
