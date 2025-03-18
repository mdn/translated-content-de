---
title: kernelMatrix
slug: Web/SVG/Reference/Attribute/kernelMatrix
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`kernelMatrix`**-Attribut definiert die Liste von Zahlen, die die Kernel-Matrix für das {{SVGElement("feConvolveMatrix")}}-Element bilden.

Die Werte werden durch Leerzeichen und/oder ein Komma getrennt. Die Anzahl der Einträge in der Liste muss gleich `<orderX>` mal `<orderY>` sein, wie im {{SVGAttr("order")}}-Attribut definiert.

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
          ><a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
            >&#x3C;list of numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<list of numbers>`

  - : Die Liste von {{cssxref("number")}}s, die die Kernel-Matrix für die Faltung bilden. Die Werte werden durch Leerzeichen und/oder ein Komma getrennt. Die Anzahl der Einträge in der Liste muss gleich `<orderX>` mal `<orderY>` sein.

    Wenn das Ergebnis von `orderX` \* `orderY` nicht der Anzahl der Einträge in der Werteliste entspricht, fungiert die Filterprimitive als Durchlassfilter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
