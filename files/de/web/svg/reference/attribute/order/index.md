---
title: order
slug: Web/SVG/Reference/Attribute/order
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`order`** Attribut gibt die Größe der Matrix an, die von einem {{SVGElement("feConvolveMatrix")}} Element verwendet werden soll.

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
  <filter id="emboss1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 -4" order="2" />
  </filter>
  <filter id="emboss2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
    <feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" order="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter:url(#emboss1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter:url(#emboss2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`

  - : Dieser Wert gibt die Anzahl der Zellen in jeder Dimension für die Kernel-Matrix an. Die angegebenen Werte müssen {{cssxref("integer")}} größer als null sein. Werte, die keine ganzen Zahlen sind, werden abgeschnitten, d.h. sie werden auf den nächsten ganzzahligen Wert in Richtung null gerundet. Die erste Zahl gibt die Anzahl der Spalten in der Matrix an. Die zweite Zahl gibt die Anzahl der Zeilen in der Matrix an. Wenn keine zweite Zahl angegeben wird, wird sie standardmäßig auf die erste Zahl gesetzt.

    Es wird empfohlen, nur kleine Werte (z.B. 3) zu verwenden; höhere Werte können zu einem sehr hohen CPU-Aufwand führen und liefern in der Regel keine Ergebnisse, die den Einfluss auf die Leistung rechtfertigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
