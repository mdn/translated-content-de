---
title: font-size-adjust
slug: Web/SVG/Attribute/font-size-adjust
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut `font-size-adjust` ermöglicht es Autoren, einen Aspektwert für ein Element anzugeben, der die x-Höhe der bevorzugten Schriftart in einer Ersatzschriftart beibehält.

> [!NOTE]
> Als Präsentationsattribut kann `font-size-adjust` als CSS-Eigenschaft verwendet werden. Siehe die CSS-Eigenschaft {{cssxref("font-size-adjust")}} für weitere Informationen.

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
  - : Wählen Sie die Schriftgröße nur basierend auf der {{ Cssxref("font-size") }}-Eigenschaft.
- {{cssxref("&lt;number&gt;")}}

  - : Wählen Sie die Schriftgröße so, dass ihre Kleinbuchstaben (wie durch die x-Höhe der Schrift bestimmt) das angegebene Vielfache der {{ Cssxref("font-size") }} sind.

    Die angegebene Zahl sollte im Allgemeinen das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) (Verhältnis der x-Höhe zur Schriftgröße) der bevorzugten {{ Cssxref("font-family") }} sein. Das bedeutet, dass die bevorzugte Schriftart, wenn verfügbar, in allen Browsern gleich groß erscheint, unabhängig davon, ob sie `font-size-adjust` unterstützen.

    `0` ergibt Text von Nullhöhe (versteckter Text).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size-adjust")}}
