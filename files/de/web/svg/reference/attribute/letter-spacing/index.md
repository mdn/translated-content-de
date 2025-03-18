---
title: letter-spacing
slug: Web/SVG/Reference/Attribute/letter-spacing
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`letter-spacing`** Attribut steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine zahl ohne Einheit ist (zum Beispiel `128`), behandelt der Browser ihn als ein {{cssxref("length")}} im aktuellen Benutzerkoordinatensystem.

Wenn der Attributwert eine Einheitenkennung hat, wie `.25em` oder `1%`, dann konvertiert der Browser das \<length> in seinen entsprechenden Wert im aktuellen Benutzerkoordinatensystem.

> [!NOTE]
> Als Präsentationsattribut hat `letter-spacing` auch eine entsprechende CSS-Eigenschaft: {{cssxref("letter-spacing")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Nutzungshinweise

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

Für eine Beschreibung der Werte lesen Sie bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("letter-spacing")}} Eigenschaft
