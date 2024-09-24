---
title: preserveAlpha
slug: Web/SVG/Attribute/preserveAlpha
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

Das Attribut `preserveAlpha` gibt an, wie ein {{SVGElement("feConvolveMatrix")}}-Element mit Alpha-Transparenz umgeht.

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
    style="filter:url(#convolveMatrix1);" />
  <image
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    style="filter:url(#convolveMatrix2); transform:translateX(220px);" />
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
  - : Dieser Wert gibt an, dass die Faltung nur auf die Farbkanäle angewendet wird. In diesem Fall entfernt der Filter vorübergehend die Prä-Multiplikation von Alpha von den Farbkomponentenwerten, wendet den Kernel an und fügt die Prä-Multiplikation von Alpha im letzten Schritt erneut hinzu.
- `false`
  - : Dieser Wert gibt an, dass die Faltung auf alle Kanäle, einschließlich des Alphakanals, angewendet wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
