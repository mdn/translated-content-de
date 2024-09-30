---
title: pathLength
slug: Web/SVG/Attribute/pathLength
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}

Das Attribut **`pathLength`** ermöglicht es Autoren, eine Gesamtlänge für den Pfad in Benutzereinheiten anzugeben. Dieser Wert wird dann verwendet, um die Distanzberechnungen des Browsers mit denen des Autors zu kalibrieren, indem alle Distanzberechnungen mit dem Verhältnis `pathLength` / (_berechneter Wert der Pfadlänge_) skaliert werden.

Dies kann die tatsächlich dargestellten Längen von Pfaden beeinflussen, einschließlich Textpfade, Animationspfade und verschiedene Strichoperationen. Grundsätzlich alle Berechnungen, die die Länge des Pfades benötigen. Zum Beispiel wird {{SVGAttr('stroke-dasharray')}} davon ausgehen, dass der Start des Pfades bei 0 liegt und der Endpunkt der im `pathLength`-Attribut definierten Wert ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

  <!-- No pathLength, the real length of the path is used. In that case, 100 user units -->
  <path d="M 0,10 h100" />

  <!-- compute everything like if the path length was 90 user units long -->
  <path d="M 0,20 h100" pathLength="90" />

  <!-- compute everything like if the path length was 50 user units long -->
  <path d="M 0,30 h100" pathLength="50" />

  <!-- compute everything like if the path length was 30 user units long -->
  <path d="M 0,40 h100" pathLength="30" />

  <!-- compute everything like if the path length was 10 user units long -->
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
