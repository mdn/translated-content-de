---
title: divisor
slug: Web/SVG/Reference/Attribute/divisor
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`divisor`** gibt den Wert an, durch den die resultierende Zahl bei der Anwendung der {{SVGAttr("kernelMatrix")}} eines {{SVGElement("feConvolveMatrix")}}-Elements auf den Eingabebildfarbwert geteilt wird, um den Zielfarbwert zu erhalten.

Ein Divisor, der die Summe aller Matrix-Werte ist, hat tendenziell einen ausgleichenden Effekt auf die Gesamtfarbintensität des Ergebnisses.

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
