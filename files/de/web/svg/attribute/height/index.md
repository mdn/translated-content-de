---
title: Höhe
slug: Web/SVG/Attribute/height
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`height`**-Attribut definiert die vertikale Länge eines Elements im Benutzersystemkoordinatensystem.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('feBlend')}}
- {{SVGElement('feColorMatrix')}}
- {{SVGElement('feComponentTransfer')}}
- {{SVGElement('feComposite')}}
- {{SVGElement('feConvolveMatrix')}}
- {{SVGElement('feDiffuseLighting')}}
- {{SVGElement('feDisplacementMap')}}
- {{SVGElement('feDropShadow')}}
- {{SVGElement('feFlood')}}
- {{SVGElement('feGaussianBlur')}}
- {{SVGElement('feImage')}}
- {{SVGElement('feMerge')}}
- {{SVGElement('feMorphology')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('feSpecularLighting')}}
- {{SVGElement('feTile')}}
- {{SVGElement('feTurbulence')}}
- {{SVGElement('filter')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('image')}}
- {{SVGElement('mask')}}
- {{SVGElement('pattern')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('use')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Mit einer Höhe von 0 oder weniger wird nichts gerendert -->
  <rect y="0" x="0" width="90" height="0" />
  <rect y="0" x="100" width="90" height="60" />
  <rect y="0" x="200" width="90" height="100%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## feBlend

Für {{SVGElement('feBlend')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feColorMatrix

Für {{SVGElement('feColorMatrix')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feComponentTransfer

Für {{SVGElement('feComponentTransfer')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feComposite

Für {{SVGElement('feComposite')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feConvolveMatrix

Für {{SVGElement('feConvolveMatrix')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feDiffuseLighting

Für {{SVGElement('feDiffuseLighting')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

Für {{SVGElement('feDisplacementMap')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feDropShadow

Für {{SVGElement('feDropShadow')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feFlood

Für {{SVGElement('feFlood')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feGaussianBlur

Für {{SVGElement('feGaussianBlur')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feImage

Für {{SVGElement('feImage')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feMerge

Für {{SVGElement('feMerge')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feMorphology

Für {{SVGElement('feMorphology')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feOffset

Für {{SVGElement('feOffset')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

Für {{SVGElement('feSpecularLighting')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feTile

Für {{SVGElement('feTile')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feTurbulence

Für {{SVGElement('feTurbulence')}} definiert `height` die vertikale Länge für den Darstellungsbereich der Primitiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## filter

Für {{SVGElement('filter')}} definiert `height` die vertikale Länge für den Darstellungsbereich des Filters.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>120%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## foreignObject

Für {{SVGElement('foreignObject')}} definiert `height` die vertikale Länge für den Darstellungsbereich des referenzierten Dokuments.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code> (behandelt als <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ab SVG2 ist `height` eine _Geometrieeigenschaft_, was bedeutet, dass dieses Attribut auch als CSS-Eigenschaft für `<foreignObject>` verwendet werden kann.

## image

Für {{SVGElement('image')}} definiert `height` die vertikale Länge für das Bild.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code> (behandelt als die intrinsische Höhe des Bildes)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ab SVG2 ist `height` eine _Geometrieeigenschaft_, was bedeutet, dass dieses Attribut auch als CSS-Eigenschaft für Bilder verwendet werden kann.

## mask

Für {{SVGElement('mask')}} definiert `height` die vertikale Länge seines Wirkungsbereichs. Die genaue Wirkung dieses Attributs wird durch das {{SVGAttr('maskUnits')}}-Attribut beeinflusst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>120%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## pattern

Für {{SVGElement('pattern')}} definiert `height` die vertikale Länge des Kachelmusters. Die genaue Wirkung dieses Attributs wird durch die Attribute {{SVGAttr('patternUnits')}} und {{SVGAttr('patternTransform')}} beeinflusst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
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

## rect

Für {{SVGElement('rect')}} definiert `height` die vertikale Länge für das Rechteck.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code> (behandelt als <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ab SVG2 ist `height` eine _Geometrieeigenschaft_, was bedeutet, dass dieses Attribut auch als CSS-Eigenschaft für Rechtecke verwendet werden kann.

## svg

Für {{SVGElement('svg')}} definiert `height` die vertikale Länge für den Darstellungsbereich des SVG-Ansichtsfensters.

> [!NOTE]
> In einem HTML-Dokument, wenn sowohl die Attribute {{SVGAttr('viewBox')}} als auch `height` weggelassen werden, [wird das svg-Element mit einer Höhe von `150px` gerendert](https://svgwg.org/specs/integration/#svg-css-sizing)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code> (behandelt als <code>100%</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ab SVG2 ist `height` eine _Geometrieeigenschaft_, was bedeutet, dass dieses Attribut auch als CSS-Eigenschaft für `<svg>` verwendet werden kann.

## use

Für {{SVGElement('use')}} definiert `height` die vertikale Länge für das referenzierte Element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code> (behandelt als <code>0</code>)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> **Note:** `height` hat keine Auswirkungen auf `use`-Elemente, es sei denn, das referenzierte Element hat einen [viewBox](/de/docs/Web/SVG/Attribute/viewBox) - d.h. sie haben nur eine Wirkung, wenn `use` auf ein `svg`- oder `symbol`-Element verweist.

> [!NOTE]
> Ab SVG2 ist `height` eine _Geometrieeigenschaft_, was bedeutet, dass dieses Attribut auch als CSS-Eigenschaft für verwendete Elemente verwendet werden kann.

## Spezifikationen

{{Specifications}}
