---
title: mask-type
slug: Web/SVG/Reference/Attribute/mask-type
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`mask-type`** gibt an, welcher Maskenmodus, _alpha_ oder _luminance_, beim Maskieren für den Inhalt des Elements {{ SVGElement("mask") }} verwendet wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('mask')}}

> [!NOTE]
> Dieses Präsentationsattribut hat eine entsprechende CSS-Eigenschaft: {{cssxref("mask-type")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## mask

Für {{SVGElement("mask")}} legt `mask-type` fest, ob der Inhalt des Maskenelements als Luminanzmaske oder als Alphamaske behandelt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>alpha</code> | <code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Diskret</td>
    </tr>
  </tbody>
</table>

- `alpha`
  - : Dieser Wert gibt an, dass die Alphawerte des Elements {{SVGElement('mask')}} verwendet werden sollen. Die Pixel des maskierten Objekts entsprechen der Deckkraft der Maskenbereiche, unabhängig von der Luminanz der Maskenfarben.
- `luminance`
  - : Dieser Wert gibt an, dass die Luminanzwerte des Elements {{SVGElement('mask')}} verwendet werden sollen. Die Deckkraft des maskierten Objekts hängt von der Deckkraft und Helligkeit der Maske ab. Die Deckkraft einer `luminance`-Maske wird anhand der Kanäle `R`, `G`, `B` und `A` der Maske mit der Gleichung `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A` bestimmt.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Two identical masks other than the id and mask-type values -->
  <mask id="myMask1" mask-type="alpha">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <mask id="myMask2" mask-type="luminance">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <!-- The first rect is masked with an alpha mask -->
  <rect x="0" y="0" width="45" height="45" mask="url(#myMask1)" fill="red" />

  <!-- The last rect is masked with a luminance mask -->
  <rect x="55" y="0" width="45" height="45" mask="url(#myMask2)" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("mask-type")}}
- CSS-Eigenschaft {{cssxref("mask-mode")}}
- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
