---
title: kernelMatrix
slug: Web/SVG/Attribute/kernelMatrix
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das **`kernelMatrix`**-Attribut definiert die Liste von Zahlen, die die Kernel-Matrix für das {{SVGElement("feConvolveMatrix")}}-Element bildet.

Werte werden durch Leerzeichen und/oder Kommas getrennt. Die Anzahl der Einträge in der Liste muss gleich `<orderX>` mal `<orderY>` sein, wie im {{SVGAttr("order")}}-Attribut definiert.

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
    <feConvolveMatrix kernelMatrix="1 1 0 0 0 0 0 0 -1" />
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="-1 0 0 0 0 0 0 0 1" />
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
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#list-of-ts"
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

  - : Die Liste der {{cssxref("number")}}s, die die Kernel-Matrix für die Faltung bilden. Werte werden durch Leerzeichen und/oder Kommas getrennt. Die Anzahl der Einträge in der Liste muss gleich `<orderX>` mal `<orderY>` sein.

    Wenn das Ergebnis von `orderX` \* `orderY` nicht der Anzahl der Einträge in der Werteliste entspricht, wirkt das Filter-Primitive als Durchgangsfilter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}