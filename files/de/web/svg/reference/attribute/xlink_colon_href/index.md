---
title: xlink:href
slug: Web/SVG/Reference/Attribute/xlink:href
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

Das **`xlink:href`** Attribut definiert einen Verweis auf eine Ressource als [IRI](/de/docs/Web/SVG/Guides/Content_type#iri). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das es verwendet.

> [!NOTE]
> SVG 2 entfernte die Notwendigkeit des `xlink`-Namespaces, daher sollten Sie statt `xlink:href` {{SVGAttr("href")}} verwenden. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href` Attribut zusätzlich zum `href` Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("use")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a xlink:href="https://developer.mozilla.org/">
    <text x="10" y="25">MDN Web Docs</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## a

Für {{SVGElement("a")}} definiert `xlink:href` den Ort des referenzierten Objekts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## animate, animateMotion, animateTransform, set

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, und {{SVGElement("set")}} definiert `xlink:href` die Referenz auf das Element, das Ziel dieser Animation ist und das daher im Laufe der Zeit verändert wird.

Das Zielelement muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Ziel-Element verweisen, das als Ziel der gegebenen Animation geeignet ist.

Wenn das `xlink:href` Attribut nicht angegeben ist, wird das Zielelement das unmittelbare übergeordnete Element des aktuellen Animationselements sein.

Bitte beachten Sie die Beschreibungen der einzelnen Animationselemente für etwaige Einschränkungen, welche Art von Elementen als Ziele bestimmter Animationen dienen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## feImage

Für {{SVGElement("feImage")}} definiert `xlink:href` die Referenz auf die Bildquelle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## filter

Für {{SVGElement("filter")}} definiert `xlink:href` die Referenz auf ein anderes `<filter>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten `<filter>` Element definiert sind und die auf diesem Element nicht definiert sind, werden von diesem Element vererbt. Wenn dieses Element keine definierten Filternodes hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element die definierten Filternodes vom referenzierten `<filter>` Element. Die Vererbung kann bis zu einem beliebigen Grad indirekt erfolgen; wenn das referenzierte `<filter>` Element Attribute oder seine Filternodespezifikationen aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Filternodespezifikationen erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## image

Für {{SVGElement("image")}} definiert `xlink:href` den Ort des referenzierten Bildes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## linearGradient

Für {{SVGElement("linearGradient")}} definiert `xlink:href` die Referenz auf ein anderes `<linearGradient>` oder {{SVGElement("radialGradient")}} Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<linearGradient>`-Attribute, die auf dem referenzierten Element definiert sind und die auf diesem Element nicht definiert sind, werden von diesem Element vererbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element (möglicherweise aufgrund seines eigenen `xlink:href` Attributs) welche hat, erbt dieses Element die Farbverläufe vom referenzierten Element. Die Vererbung kann bis zu einem beliebigen Grad indirekt erfolgen; wenn das referenzierte Element Attribute oder Farbverläufe aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Farbverläufe ebenfalls erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## mpath

Für {{SVGElement("mpath")}} definiert `xlink:href` die Referenz auf das {{SVGElement("path")}} Element, das den Bewegungsverlauf definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## pattern

Für {{SVGElement("pattern")}} definiert `xlink:href` die Referenz zu einem anderen `<pattern>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten Element definiert sind und die auf diesem Element nicht definiert sind, werden von diesem Element vererbt. Wenn dieses Element keine Kinder hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann bis zu einem beliebigen Grad indirekt erfolgen; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder ebenfalls erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## radialGradient

Für {{SVGElement("radialGradient")}} definiert `xlink:href` die Referenz auf ein anderes {{SVGElement("linearGradient")}} oder `<radialGradient>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<radialGradient>`-Attribute, die auf dem referenzierten Element definiert sind und die auf diesem Element nicht definiert sind, werden von diesem Element vererbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element (möglicherweise aufgrund seines eigenen `xlink:href` Attributs) welche hat, erbt dieses Element die Farbverläufe vom referenzierten Element. Die Vererbung kann bis zu einem beliebigen Grad indirekt erfolgen; wenn das referenzierte Element Attribute oder Farbverläufe aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Farbverläufe ebenfalls erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## script

Für {{SVGElement("script")}} definiert `xlink:href` einen Verweis auf eine externe Ressource, die den Skriptcode enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## textPath

Für {{SVGElement("textPath")}} definiert `xlink:href` einen Verweis auf das {{SVGElement("path")}} Element, auf dem die Glyphen gerendert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## use

Für {{SVGElement("use")}} definiert `xlink:href` den Ort des referenzierten Objekts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
