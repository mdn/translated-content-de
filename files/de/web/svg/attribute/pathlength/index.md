---
title: pathLength
slug: Web/SVG/Attribute/pathLength
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das **`pathLength`**-Attribut ermöglicht es Autoren, eine Gesamtlänge für den Pfad in Benutzereinheiten anzugeben. Dieser Wert wird dann verwendet, um die Abstandberechnungen des Browsers mit denen des Autors abzustimmen, indem alle Abstandberechnungen mithilfe des Verhältnisses `pathLength` / (_berechneter Wert der Pfadlänge_) skaliert werden.

Dies kann die tatsächlich gerenderten Längen von Pfaden beeinflussen; einschließlich Textpfaden, Animationspfaden und verschiedenen Strichoperationen. Grundsätzlich alle Berechnungen, die die Länge des Pfades erfordern. Zum Beispiel geht {{SVGAttr('stroke-dasharray')}} davon aus, dass der Anfang des Pfades 0 ist und der Endpunkt den im `pathLength`-Attribut definierten Wert hat.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <style>
    path {
      fill: none;
      stroke: black;
      stroke-width: 2;
      stroke-dasharray: 10;
    }
  </style>

  <!-- Kein pathLength, die tatsächliche Länge des Pfades wird verwendet. In diesem Fall 100 Benutzereinheiten -->
  <path d="M 0,10 h100" />

  <!-- Berechnen Sie alles, als ob die Pfadlänge 90 Benutzereinheiten lang wäre -->
  <path d="M 0,20 h100" pathLength="90" />

  <!-- Berechnen Sie alles, als ob die Pfadlänge 50 Benutzereinheiten lang wäre -->
  <path d="M 0,30 h100" pathLength="50" />

  <!-- Berechnen Sie alles, als ob die Pfadlänge 30 Benutzereinheiten lang wäre -->
  <path d="M 0,40 h100" pathLength="30" />

  <!-- Berechnen Sie alles, als ob die Pfadlänge 10 Benutzereinheiten lang wäre -->
  <path d="M 0,50 h100" pathLength="10" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

Für {{SVGElement('circle')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für den Kreis in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## ellipse

Für {{SVGElement('ellipse')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für die Ellipse in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## line

Für {{SVGElement('line')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für die Linie in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## path

Für {{SVGElement('path')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für den Pfad in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## polygon

Für {{SVGElement('polygon')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für die Form in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## polyline

Für {{SVGElement('polyline')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für die Form in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## rect

Für {{SVGElement('rect')}} ermöglicht `pathLength` Autoren, eine Gesamtlänge für das Rechteck in Benutzereinheiten anzugeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
