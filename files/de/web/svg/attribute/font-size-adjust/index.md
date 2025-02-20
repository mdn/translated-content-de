---
title: font-size-adjust
slug: Web/SVG/Attribute/font-size-adjust
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Attribut `font-size-adjust` ermöglicht es Autoren, einen Aspektwert für ein Element anzugeben, der die x-Höhe der bevorzugten Schriftart in einer Ersatzschriftart beibehält.

> [!NOTE]
> Als Präsentationsattribut hat `font-size-adjust` auch ein entsprechendes CSS-Eigenschaftspendant: {{cssxref("font-size-adjust")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
<svg
  width="600"
  height="80"
  viewBox="0 0 500 80"
  xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Times, serif" font-size="10px">
    This text uses the Times font (10px), which is hard to read in small sizes.
  </text>
  <text y="40" font-family="Verdana, sans-serif" font-size="10px">
    This text uses the Verdana font (10px), which has relatively large lowercase
    letters.
  </text>
  <text
    y="60"
    font-family="Times, serif"
    font-size="10px"
    font-size-adjust="0.58">
    This is the 10px Times, but now adjusted to the same aspect ratio as the
    Verdana.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "600", "100")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>none</code> | {{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `none`
  - : Wählt die Schriftgröße ausschließlich basierend auf der Eigenschaft {{ Cssxref("font-size") }} aus.
- {{cssxref("&lt;number&gt;")}}

  - : Legt die Schriftgröße so fest, dass die Kleinbuchstaben der Schriftart (bestimmt durch die x-Höhe der Schriftart) die angegebene Zahl mal der {{ Cssxref("font-size") }} beträgt.

    Die angegebene Zahl sollte im Allgemeinen dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} (Verhältnis von x-Höhe zur Schriftgröße) der bevorzugten {{ Cssxref("font-family") }} entsprechen. Das bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, in Browsern die gleiche Größe aufweist, unabhängig davon, ob sie `font-size-adjust` unterstützen oder nicht.

    `0` führt zu Text mit null Höhe (versteckter Text).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("font-size-adjust")}}
