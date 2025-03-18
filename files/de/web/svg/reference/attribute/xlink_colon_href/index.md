---
title: xlink:href
slug: Web/SVG/Reference/Attribute/xlink:href
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`xlink:href`** definiert eine Referenz zu einer Ressource als Referenz-IRI ([IRI](/de/docs/Web/SVG/Guides/Content_type#iri)). Die genaue Bedeutung dieses Links hängt vom Kontext des Elements ab, das es verwendet.

> [!NOTE]
> SVG 2 hat die Notwendigkeit für den `xlink`-Namensraum entfernt. Anstelle von `xlink:href` sollten Sie daher {{SVGAttr("href")}} verwenden. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut zusätzlich zum `href`-Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("cursor")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("font-face-uri")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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

Für {{SVGElement("a")}} definiert `xlink:href` den Speicherort des referenzierten Objekts.

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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `xlink:href` die Referenz auf das Element, das das Ziel dieser Animation ist und daher im Laufe der Zeit verändert wird.

Das Ziel-Element muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Ziel-Element verweisen, das als Ziel der gegebenen Animation geeignet ist.

Wird das `xlink:href`-Attribut nicht angegeben, ist das Ziel-Element das unmittelbare Elternelement des aktuellen Animationselements.

Bitte beziehen Sie sich auf die Beschreibungen der einzelnen Animationselemente für etwaige Einschränkungen darüber, welche Arten von Elementen Ziele spezifischer Animationstypen sein können.

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

## cursor

Für {{SVGElement("cursor")}} definiert `xlink:href` die Referenz auf die Datei oder das Element, das das Bild des Cursors bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#funciri"
            >&#x3C;FuncIRI></a
          ></code
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

## feImage

Für {{SVGElement("feImage")}} definiert `xlink:href` die Referenz zur Bildquelle.

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

Für {{SVGElement("filter")}} definiert `xlink:href` die Referenz auf ein anderes `<filter>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Attribute, die im referenzierten `<filter>`-Element definiert sind und nicht auf diesem Element, werden von diesem Element geerbt. Wenn dieses Element keine definierten Filternodes hat und das referenzierte Element welche definiert (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die definierten Filternodes vom referenzierten `<filter>`-Element. Die Vererbung kann indirekt auf ein beliebiges Level erfolgen; wenn das referenzierte `<filter>`-Element also Attribute oder seine Filternode-Spezifikation aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Filternode-Spezifikationen erben.

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

## font-face-uri

Für {{SVGElement("font-face-uri")}} definiert `xlink:href` den Speicherort der referenzierten Schriftart.

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

## glyphRef

Für {{SVGElement("glyphRef")}} definiert `xlink:href` auf ein {{SVGElement("glyph")}}-Element in einem SVG-Dokumentfragment. Das referenzierte `<glyph>` wird als alternatives Glyph gerendert.

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

## image

Für {{SVGElement("image")}} definiert `xlink:href` den Speicherort des referenzierten Bildes.

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

Für {{SVGElement("linearGradient")}} definiert `xlink:href` die Referenz auf ein anderes `<linearGradient>` oder {{SVGElement("radialGradient")}}-Element innerhalb des aktuellen SVG-Dokumentfragments. Attribute, die im referenzierten Element definiert sind und nicht auf diesem Element, werden von diesem Element geerbt. Wenn dieses Element keine definierten Gradientenstopps hat und das referenzierte Element welche definiert (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die Gradientenstopps vom referenzierten Element. Die Vererbung kann indirekt auf ein beliebiges Level erfolgen; wenn das referenzierte Element also Attribute oder Gradientenstopps aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Gradientenstopps erben.

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

Für {{SVGElement("mpath")}} definiert `xlink:href` die Referenz zum {{SVGElement("path")}}-Element, das den Bewegungsverlauf definiert.

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

Für {{SVGElement("pattern")}} definiert `xlink:href` die Referenz auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Attribute, die im referenzierten Element definiert sind und nicht auf diesem Element, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf ein beliebiges Level erfolgen; wenn das referenzierte Element also Attribute oder Kinder aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder erben.

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

Für {{SVGElement("radialGradient")}} definiert `xlink:href` auf ein anderes {{SVGElement("linearGradient")}} oder `<radialGradient>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Attribute, die im referenzierten Element definiert sind und nicht auf diesem Element, werden von diesem Element geerbt. Wenn dieses Element keine definierten Gradientenstopps hat und das referenzierte Element welche definiert (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die Gradientenstopps vom referenzierten Element. Die Vererbung kann indirekt auf ein beliebiges Level erfolgen; wenn das referenzierte Element also Attribute oder Gradientenstopps aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Gradientenstopps erben.

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

Für {{SVGElement("script")}} definiert `xlink:href` eine Referenz zu einer externen Ressource, die den Skriptcode enthält.

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

Für {{SVGElement("textPath")}} definiert `xlink:href` eine Referenz auf das {{SVGElement("path")}}-Element, auf dem die Glyphen gerendert werden.

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

Für {{SVGElement("use")}} definiert `xlink:href` den Speicherort des referenzierten Objekts.

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

## tref

Für {{SVGElement("tref")}} definiert `xlink:href` eine Referenz zu einem Element, dessen Textdaten-Inhalt als Textdaten für dieses `<tref>`-Element verwendet werden soll.

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
