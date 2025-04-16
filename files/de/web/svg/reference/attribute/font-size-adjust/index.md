---
title: font-size-adjust
slug: Web/SVG/Reference/Attribute/font-size-adjust
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das Attribut `font-size-adjust` ermöglicht es Autoren, einen Aspektwert für ein Element anzugeben, der die x-Höhe der bevorzugten Schriftart in einer Ersatzschriftart beibehält.

> [!NOTE]
> Als Präsentationsattribut hat `font-size-adjust` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("font-size-adjust")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Verwendungshinweise

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
  - : Wählen Sie die Größe der Schriftart ausschließlich basierend auf der {{ Cssxref("font-size") }} Eigenschaft.
- {{cssxref("&lt;number&gt;")}}

  - : Wählen Sie die Größe der Schriftart so, dass ihre Kleinbuchstaben (bestimmt durch die x-Höhe der Schriftart) die angegebene Zahl mal der {{ Cssxref("font-size") }} sind.

    Die angegebene Zahl sollte im Allgemeinen das {{Glossary("aspect_ratio", "Seitenverhältnis")}} (Verhältnis der x-Höhe zur Schriftgröße) des bevorzugten {{ Cssxref("font-family") }} sein. Das bedeutet, dass die bevorzugte Schriftart, wenn sie verfügbar ist, in Browsern gleich groß erscheint, unabhängig davon, ob sie `font-size-adjust` unterstützen oder nicht.

    `0` ergibt Text von null Höhe (versteckter Text).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-size-adjust")}} Eigenschaft
