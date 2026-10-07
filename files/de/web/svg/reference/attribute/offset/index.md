---
title: offset
slug: Web/SVG/Reference/Attribute/offset
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das Attribut **`offset`** legt fest, wo ein Farbstopp entlang eines Gradientenvektors liegt oder welcher Offset-Wert in einer Komponentenübertragungsfunktion verwendet wird.

- Bei einem {{SVGElement("stop")}}-Element gibt es die Position einer Gradientenfarbe entlang eines linearen Gradientenvektors oder als Bruchteil des Abstands zwischen dem Rand einer kleineren, innersten Kreisform und dem Rand einer größeren, äußersten Kreisform an.
- Bei Elementen für Komponentenübertragungsfunktionen ({{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} und {{SVGElement("feFuncA")}}) legt es eine Konstante fest, die zum Ergebnis der `gamma`-Übertragungsfunktion addiert wird. Bei anderen `type`-Werten hat es keine Wirkung.

## Beispiel

### Offset eines Farbstopps

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linear-gradient">
      <stop offset="6%" stop-color="black" />
      <stop offset="70%" stop-color="grey" />
    </linearGradient>
    <radialGradient id="radial-gradient">
      <stop offset="0%" stop-color="gold" />
      <stop offset="95%" stop-color="grey" />
    </radialGradient>
  </defs>
  <circle cx="5" cy="5" r="4" fill="url('#linear-gradient')" />
  <circle cx="15" cy="5" r="4" fill="url('#radial-gradient')" />
</svg>
```

{{EmbedLiveSample("gradient_stop_offset", 150, '100%')}}

### Offset einer Komponentenübertragungsfunktion

```html
<svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gamma-filter">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="2" exponent="3" offset="0.2" />
        <feFuncG type="gamma" amplitude="2" exponent="3" offset="0.3" />
        <feFuncB type="gamma" amplitude="2" exponent="3" offset="0.5" />
      </feComponentTransfer>
    </filter>
  </defs>
  <text x="60" y="25" filter="url(#gamma-filter)">GammaFunc</text>
</svg>
```

{{EmbedLiveSample("component_transfer_offset", 150, '100%')}}

## Verwendungshinweise

### Farbstopp

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>number</code> | <code>percentage</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### Komponentenübertragungsfunktionen

> [!NOTE]
> Gilt nur, wenn `type` auf `gamma` gesetzt ist. Bei `identity`, `table`, `discrete` und `linear` wird das Attribut ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>number</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("stop")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncA")}}
