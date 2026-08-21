---
title: xlink:href
slug: Web/SVG/Reference/Attribute/xlink:href
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`xlink:href`** Attribut definiert eine Referenz auf eine Ressource als eine Referenz- [IRI](/de/docs/Web/SVG/Guides/Content_type#iri). Die genaue Bedeutung dieses Links hängt vom Kontext jedes Elements ab, das ihn verwendet.

> [!NOTE]
> SVG 2 hat die Notwendigkeit des `xlink`-Namensraums entfernt, daher sollten Sie anstelle von `xlink:href` {{SVGAttr("href")}} verwenden. Wenn Sie frühere Browserversionen unterstützen müssen, kann das veraltete `xlink:href` Attribut zusätzlich zum `href` Attribut als Fallback verwendet werden, z.B., `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `xlink:href` die Referenz auf das Element, das das Ziel dieser Animation ist und deshalb im Laufe der Zeit modifiziert wird.

Das Ziel-Element muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Ziel-Element zeigen, das fähig ist, das Ziel der gegebenen Animation zu sein.

Wenn das `xlink:href` Attribut nicht bereitgestellt wird, wird das Ziel-Element das unmittelbare Elternelement des aktuellen Animationselements sein.

Beziehen Sie sich auf die Beschreibungen der einzelnen Animationselemente für etwaige Beschränkungen, welche Arten von Elementen Ziele bestimmter Animationstypen sein können.

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

Für {{SVGElement("filter")}} definiert `xlink:href` die Referenz auf ein anderes `<filter>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten `<filter>` Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Filterknoten hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element die definierten Filterknoten vom referenzierten `<filter>` Element. Die Vererbung kann indirekt auf beliebigem Niveau erfolgen; wenn das referenzierte `<filter>` Element Attribute oder seine Filterknotenspezifikation aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Filterknotenspezifikationen erben.

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

Für {{SVGElement("linearGradient")}} definiert `xlink:href` die Referenz auf ein anderes `<linearGradient>` oder {{SVGElement("radialGradient")}} Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<linearGradient>` Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element den Farbverlauf vom referenzierten Element. Die Vererbung kann indirekt auf beliebigem Niveau erfolgen; wenn das referenzierte Element Attribute oder Farbverläufe aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Farbverläufe erben.

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

Für {{SVGElement("mpath")}} definiert `xlink:href` die Referenz auf das {{SVGElement("path")}} Element, das den Bewegungspfad definiert.

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

Für {{SVGElement("pattern")}} definiert `xlink:href` die Referenz auf ein anderes `<pattern>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf beliebigem Niveau erfolgen; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder erben.

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

Für {{SVGElement("radialGradient")}} definiert `xlink:href` die Referenz auf ein anderes {{SVGElement("linearGradient")}} oder `<radialGradient>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<radialGradient>` Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href` Attributs), erbt dieses Element den Farbverlauf vom referenzierten Element. Die Vererbung kann indirekt auf beliebigem Niveau erfolgen; wenn das referenzierte Element Attribute oder Farbverläufe aufgrund seines eigenen `xlink:href` Attributs erbt, kann das aktuelle Element diese Attribute oder Farbverläufe erben.

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

Für {{SVGElement("script")}} definiert `xlink:href` eine Referenz auf eine externe Ressource, die den Skript-Code enthält.

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

Für {{SVGElement("textPath")}} definiert `xlink:href` eine Referenz auf das {{SVGElement("path")}} Element, auf dem die Glyphen gerendert werden.

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
