---
title: xlink:href
slug: Web/SVG/Reference/Attribute/xlink:href
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`xlink:href`** definiert einen Verweis auf eine Ressource als Referenz-[IRI](/de/docs/Web/SVG/Guides/Content_type#iri). Die genaue Bedeutung dieses Verweises hängt vom jeweiligen Element ab, das ihn verwendet.

> [!NOTE]
> SVG 2 hat die Notwendigkeit des `xlink`-Namensraums beseitigt. Verwenden Sie daher {{SVGAttr("href")}} anstelle von `xlink:href`. Wenn Sie ältere Browserversionen unterstützen müssen, können Sie das veraltete Attribut `xlink:href` zusätzlich zum Attribut `href` als Fallback verwenden, z. B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

## a

Für {{SVGElement("a")}} definiert `xlink:href` die Position des referenzierten Objekts.

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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `xlink:href` den Verweis auf das Zielelement der Animation, das sich dadurch im Zeitverlauf verändert.

Das Zielelement muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Zielelement verweisen, das als Ziel der jeweiligen Animation geeignet ist.

Wenn das Attribut `xlink:href` nicht angegeben ist, ist das unmittelbar übergeordnete Element des aktuellen Animationselements das Zielelement.

Welche Einschränkungen für die Zielelemente bestimmter Animationstypen gelten, erfahren Sie in den Beschreibungen der einzelnen Animationselemente.

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

Für {{SVGElement("feImage")}} definiert `xlink:href` den Verweis auf die Bildquelle.

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

Für {{SVGElement("filter")}} definiert `xlink:href` den Verweis auf ein anderes `<filter>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die für das referenzierte `<filter>`-Element, aber nicht für dieses Element definiert sind, werden von diesem Element geerbt. Wenn für dieses Element keine Filterknoten definiert sind, für das referenzierte Element jedoch schon (möglicherweise aufgrund seines eigenen Attributs `xlink:href`), erbt dieses Element die Filterknoten des referenzierten `<filter>`-Elements. Die Vererbung kann über beliebig viele Ebenen indirekt erfolgen: Wenn das referenzierte `<filter>`-Element aufgrund seines eigenen Attributs `xlink:href` Attribute oder Filterknotendefinitionen erbt, kann das aktuelle Element diese ebenfalls erben.

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

Für {{SVGElement("image")}} definiert `xlink:href` die Position des referenzierten Bildes.

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

Für {{SVGElement("linearGradient")}} definiert `xlink:href` den Verweis auf ein anderes `<linearGradient>`- oder {{SVGElement("radialGradient")}}-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<linearGradient>`-Attribute, die für das referenzierte Element, aber nicht für dieses Element definiert sind, werden von diesem Element geerbt. Wenn für dieses Element keine Verlaufsstopps definiert sind, für das referenzierte Element jedoch schon (möglicherweise aufgrund seines eigenen Attributs `xlink:href`), erbt dieses Element die Verlaufsstopps des referenzierten Elements. Die Vererbung kann über beliebig viele Ebenen indirekt erfolgen: Wenn das referenzierte Element aufgrund seines eigenen Attributs `xlink:href` Attribute oder Verlaufsstopps erbt, kann das aktuelle Element diese ebenfalls erben.

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

Für {{SVGElement("mpath")}} definiert `xlink:href` den Verweis auf das {{SVGElement("path")}}-Element, das den Bewegungspfad festlegt.

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

Für {{SVGElement("pattern")}} definiert `xlink:href` den Verweis auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die für das referenzierte Element, aber nicht für dieses Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kindelemente hat, das referenzierte Element jedoch schon (möglicherweise aufgrund seines eigenen Attributs `xlink:href`), erbt dieses Element die Kindelemente des referenzierten Elements. Die Vererbung kann über beliebig viele Ebenen indirekt erfolgen: Wenn das referenzierte Element aufgrund seines eigenen Attributs `xlink:href` Attribute oder Kindelemente erbt, kann das aktuelle Element diese ebenfalls erben.

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

Für {{SVGElement("radialGradient")}} definiert `xlink:href` den Verweis auf ein anderes {{SVGElement("linearGradient")}}- oder `<radialGradient>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<radialGradient>`-Attribute, die für das referenzierte Element, aber nicht für dieses Element definiert sind, werden von diesem Element geerbt. Wenn für dieses Element keine Verlaufsstopps definiert sind, für das referenzierte Element jedoch schon (möglicherweise aufgrund seines eigenen Attributs `xlink:href`), erbt dieses Element die Verlaufsstopps des referenzierten Elements. Die Vererbung kann über beliebig viele Ebenen indirekt erfolgen: Wenn das referenzierte Element aufgrund seines eigenen Attributs `xlink:href` Attribute oder Verlaufsstopps erbt, kann das aktuelle Element diese ebenfalls erben.

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

Für {{SVGElement("textPath")}} definiert `xlink:href` einen Verweis auf das {{SVGElement("path")}}-Element, entlang dessen die Glyphen gerendert werden.

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

Für {{SVGElement("use")}} definiert `xlink:href` die Position des referenzierten Objekts.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("href")}}
