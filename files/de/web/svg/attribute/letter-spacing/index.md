---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das Attribut **`letter-spacing`** steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine einheitenlose Zahl ist (wie `128`), verarbeitet der Browser sie als {{cssxref("length")}} im aktuellen Benutzerkoordinatensystem.

Wenn der Attributwert eine Einheitenbezeichnung hat, wie `.25em` oder `1%`, wandelt der Browser die \<length> in den entsprechenden Wert im aktuellen Benutzerkoordinatensystem um.

> [!NOTE]
> Als Präsentationsattribut kann `letter-spacing` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie bei der CSS {{cssxref("letter-spacing")}}-Eigenschaft.

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
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte siehe die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("letter-spacing")}}-Eigenschaft
