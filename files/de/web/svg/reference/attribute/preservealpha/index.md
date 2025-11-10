---
title: preserveAlpha
slug: Web/SVG/Reference/Attribute/preserveAlpha
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das `preserveAlpha` Attribut gibt an, wie ein {{SVGElement("feConvolveMatrix")}} Element mit Alpha-Transparenz umgeht.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="convolveMatrix1" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 -1 2 0 0 0 0 0 -2" preserveAlpha="true" />
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix
      kernelMatrix="1 -1 2 0 0 0 0 0 -2"
      preserveAlpha="false" />
  </filter>

  <image
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#convolveMatrix1)" />
  <image
    x="220"
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#convolveMatrix2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>false</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>true</code> | <code>false</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `true`
  - : Dieser Wert gibt an, dass die Faltung nur auf die Farbkanäle angewendet wird. In diesem Fall entfernt der Filter vorübergehend die Alpha-Vormultiplikation von den Farbkomponentenwerten, wendet den Kernel an und fügt anschließend die Alpha-Vormultiplikation als letzten Schritt wieder hinzu.
- `false`
  - : Dieser Wert gibt an, dass die Faltung auf alle Kanäle angewendet wird, einschließlich des Alphakanals.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
