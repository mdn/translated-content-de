---
title: mask-type
slug: Web/SVG/Reference/Attribute/mask-type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`mask-type`** Attribut gibt an, welcher Maskenmodus, _Alpha_ oder _Luminanz_, für den Inhalt des {{ SVGElement("mask") }} Elements beim Maskieren verwendet werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('mask')}}

> [!NOTE]
> Dieses Präsentationsattribut hat ein entsprechendes CSS-Eigenschaftsäquivalent: {{cssxref("mask-type")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Maske

Für {{SVGElement("mask")}} definiert `mask-type`, ob der Inhalt des Maskenelements als Luminanzmaske oder als Alphamaske behandelt wird.

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
  - : Dieser Wert gibt an, dass die Alphawerte des {{SVGElement('mask')}} Elements verwendet werden sollen; die Pixel des maskierten Objekts entsprechen der Undurchsichtigkeit der Maskenbereiche, ohne Berücksichtigung der Luminanz der Farben der Maske.
- `luminance`
  - : Dieser Wert gibt an, dass die Luminanzwerte des {{SVGElement('mask')}} Elements verwendet werden sollen; die Undurchsichtigkeit des maskierten Objekts hängt von der Opazität und Helligkeit der Maske ab. Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Kanäle der Maske bestimmt, wobei die Gleichung `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A` verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("mask-type")}} Eigenschaft
- CSS {{cssxref("mask-mode")}} Eigenschaft
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
