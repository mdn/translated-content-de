---
title: preserveAlpha
slug: Web/SVG/Attribute/preserveAlpha
l10n:
  sourceCommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{SVGRef}}

Das `preserveAlpha` Attribut gibt an, wie ein {{SVGElement("feConvolveMatrix")}} Element mit Alpha-Transparenz umgeht.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

{{EmbedLiveSample("Beispiel", "420", "200")}}

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
  - : Dieser Wert gibt an, dass die Faltung nur auf die Farbkanäle angewendet wird. In diesem Fall entfernt der Filter vorübergehend die Alpha-Präkomposition von den Farbkomponentenwerten, wendet den Kernel an und setzt die Alpha-Präkomposition dann als letzten Schritt wieder ein.
- `false`
  - : Dieser Wert gibt an, dass die Faltung auf alle Kanäle angewendet wird, einschließlich des Alpha-Kanals.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
