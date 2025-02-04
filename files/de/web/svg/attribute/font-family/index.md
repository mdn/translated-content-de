---
title: font-family
slug: Web/SVG/Attribute/font-family
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das Attribut **`font-family`** gibt an, welche Schriftfamilie zur Darstellung des Textes verwendet wird. Es wird als priorisierte Liste von Schriftfamiliennamen und/oder generischen Familiennamen angegeben.

> [!NOTE]
> Als Präsentationsattribut kann `font-family` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("font-family")}}.

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

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-family", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Hängt vom Benutzeragenten ab</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie in der [CSS `font-family`](/de/docs/Web/CSS/font-family#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-family")}} Eigenschaft
