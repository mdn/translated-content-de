---
title: kernelMatrix
slug: Web/SVG/Reference/Attribute/kernelMatrix
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`kernelMatrix`**-Attribut definiert die Liste von Zahlen, die die Kernel-Matrix für das {{SVGElement("feConvolveMatrix")}}-Element bilden.

Werte werden durch Leerzeichen und/oder ein Komma getrennt. Die Anzahl der Einträge in der Liste muss gleich `<orderX>` mal `<orderY>` entsprechen, wie im {{SVGAttr("order")}}-Attribut definiert.

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
    <feConvolveMatrix kernelMatrix="1 1 0 0 0 0 0 0 -1" />
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="-1 0 0 0 0 0 0 0 1" />
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
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
            >&#x3C;list of numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<list of numbers>`
  - : Die Liste von {{cssxref("number")}}n, die die Kernel-Matrix für die Faltung bilden. Werte werden durch Leerzeichen und/oder ein Komma getrennt. Die Anzahl der Einträge in der Liste muss `<orderX>` mal `<orderY>` entsprechen.

    Wenn das Ergebnis von `orderX` \* `orderY` nicht der Anzahl der Einträge in der Werteliste entspricht, wirkt der Filter-Primitive als Durchgangsfilter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
