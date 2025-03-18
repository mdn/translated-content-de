---
title: preserveAlpha
slug: Web/SVG/Reference/Attribute/preserveAlpha
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut `preserveAlpha` gibt an, wie ein {{SVGElement("feConvolveMatrix")}}-Element mit der Alphatransparenz umgeht.

Sie können dieses Attribut mit folgenden SVG-Elementen verwenden:

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

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass die Faltung nur auf die Farbkanäle angewendet wird. In diesem Fall entfernt der Filter vorübergehend die Vorausmultiplizierung des Alpha-Wertes von den Farbkomponentenwerten, wendet den Kernel an und wendet dann die Alpha-Vorausmultiplizierung als letzten Schritt erneut an.
- `false`
  - : Dieser Wert gibt an, dass die Faltung auf alle Kanäle, einschließlich des Alpha-Kanals, angewendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
