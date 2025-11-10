---
title: divisor
slug: Web/SVG/Reference/Attribute/divisor
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`divisor`**-Attribut gibt den Wert an, durch den die Zahl, die sich aus der Anwendung der {{SVGAttr("kernelMatrix")}} eines {{SVGElement("feConvolveMatrix")}}-Elements auf den Eingabebildfarbwert ergibt, geteilt wird, um den Zielfarbwert zu erhalten.

Ein Divisor, der die Summe aller Matrixwerte ist, hat tendenziell einen ausgleichenden Effekt auf die gesamte Farbintensität des Ergebnisses.

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
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="1" />
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 2 0 0 0 0 0 0 -1" divisor="8" />
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
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>
        Summe aller Werte in {{SVGAttr("kernelMatrix")}} oder
        <code>1</code>, wenn die Summe 0 ist
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert definiert den Divisor. Wenn der angegebene Divisor `0` ist, wird stattdessen der Standardwert verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
