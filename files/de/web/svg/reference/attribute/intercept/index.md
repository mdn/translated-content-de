---
title: intercept
slug: Web/SVG/Reference/Attribute/intercept
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`intercept`**-Attribut definiert den Achsenabschnitt der linearen Funktion für die Übertragung von Farbkomponenten, wenn das {{SVGAttr("type")}}-Attribut auf `linear` gesetzt ist.

Die `linear`-Funktion ist definiert als `slope * color + intercept`, wobei `color` der Farbwert ist, der `intercept` einen Basiswert für das Ergebnis bereitstellt und der [`slope`](/de/docs/Web/SVG/Reference/Attribute/slope) ein Skalierungsfaktor ist.

Das `intercept`-Attribut wird von den Kind-Elementen der {{SVGElement("feComponentTransfer")}}-Filterprimitive unterstützt. Es wird mit den folgenden SVG-Komponententransfer-Funktionselementen verwendet, wenn `type="linear"` gesetzt ist:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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

- `<number>`
  - : Dieser Wert gibt den Achsenabschnitt der linearen Komponententransfer-Funktionen an.

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
  <defs>
    <linearGradient
      id="gradient"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="200"
      y2="0">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="0.5" stop-color="#00ff00" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
  </defs>

  <filter id="componentTransfer1" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0" />
      <feFuncG type="linear" intercept="0" />
      <feFuncB type="linear" intercept="0" />
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0.3" />
      <feFuncG type="linear" intercept="0.1" />
      <feFuncB type="linear" intercept="0.8" />
    </feComponentTransfer>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    filter="url(#componentTransfer1)" />
  <rect
    x="220"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    filter="url(#componentTransfer2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
