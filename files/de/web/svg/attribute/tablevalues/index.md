---
title: tableValues
slug: Web/SVG/Attribute/tableValues
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`tableValues`**-Attribut definiert eine Liste von Zahlen, die eine Nachschlagetabelle von Werten für eine Farbkomponenten-Übertragungsfunktion definiert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

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
      <feFuncR type="table" tableValues="0 1" />
      <feFuncG type="table" tableValues="0 1" />
      <feFuncB type="table" tableValues="0 1" />
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="1 0" />
      <feFuncG type="table" tableValues="1 0" />
      <feFuncB type="table" tableValues="1 0" />
    </feComponentTransfer>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    style="filter: url(#componentTransfer1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    style="filter: url(#componentTransfer2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Leere Liste, die zu einer Identitätsübertragung führt</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`

  - : Dieser Wert enthält eine durch Kommas und/oder Leerzeichen getrennte Liste von {{cssxref("number")}}s, die eine Nachschlagetabelle für die Farbkomponenten-Übertragungsfunktion definieren. Jede Zahl kann zwischen `0` und `1` liegen.

    Eine leere Liste führt zu einer Identitätsübertragungsfunktion.

## Spezifikationen

{{Specifications}}
