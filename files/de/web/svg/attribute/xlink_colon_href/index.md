---
title: xlink:href
slug: Web/SVG/Attribute/xlink:href
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`xlink:href`** definiert eine Referenz zu einer Ressource als Referenz- [IRI](/de/docs/Web/SVG/Content_type#iri). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das ihn verwendet.

> [!NOTE]
> SVG 2 hat die Notwendigkeit des `xlink`-Namespaces entfernt, daher sollten Sie anstelle von `xlink:href` {{SVGAttr("href")}} verwenden. Wenn Sie frühere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut als Fallback zusätzlich zum `href`-Attribut verwendet werden, z. B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

Für {{SVGElement("a")}} definiert `xlink:href` den Ort des referenzierten Objekts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `xlink:href` die Referenz zu dem Element, das das Ziel dieser Animation ist und das daher im Laufe der Zeit verändert wird.

Das Ziel-Element muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Ziel-Element verweisen, das in der Lage ist, das Ziel der gegebenen Animation zu sein.

Wenn das `xlink:href`-Attribut nicht bereitgestellt wird, ist das Ziel-Element das unmittelbare Elternelement des aktuellen Animationselements.

Lesen Sie die Beschreibungen der einzelnen Animationselemente, um Einschränkungen darüber zu erfahren, welche Arten von Elementen Ziele bestimmter Arten von Animationen sein können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("cursor")}} definiert `xlink:href` die Referenz zu der Datei oder dem Element, das das Bild des Cursors liefert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#funciri"
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
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("filter")}} definiert `xlink:href` die Referenz zu einem anderen `<filter>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten `<filter>`-Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Filterknoten hat und das referenzierte Element Filterknoten definiert hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die Filterknoten vom referenzierten `<filter>`-Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; wenn also das referenzierte `<filter>`-Element Attribute oder seine Filterknotenspezifikation aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Filterknotenspezifikationen erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("font-face-uri")}} definiert `xlink:href` die Position der referenzierten Schriftart.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("glyphRef")}} verweist `xlink:href` auf ein {{SVGElement("glyph")}}-Element in einem SVG-Dokumentfragment. Das referenzierte `<glyph>` wird als alternatives Glyph gerendert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("image")}} definiert `xlink:href` die Position des referenzierten Bildes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("linearGradient")}} definiert `xlink:href` die Referenz zu einem anderen `<linearGradient>`- oder {{SVGElement("radialGradient")}}-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<linearGradient>`-Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Gradientenstopps hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element den Gradientenstopp vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; wenn also das referenzierte Element Attribute oder Gradientenstopps aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Gradientenstopps erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("mpath")}} definiert `xlink:href` die Referenz zum {{SVGElement("path")}}-Element, das den Bewegungspfad definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("pattern")}} definiert `xlink:href` die Referenz zu einem anderen `<pattern>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; wenn also das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("radialGradient")}} verweist `xlink:href` auf ein anderes {{SVGElement("linearGradient")}}- oder `<radialGradient>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<radialGradient>`-Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Gradientenstopps hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), dann erbt dieses Element den Gradientenstopp vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; wenn also das referenzierte Element Attribute oder Gradientenstopps aufgrund seines eigenen `xlink:href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Gradientenstopps erben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("script")}} definiert `xlink:href` eine Referenz zu einer externen Ressource, die den Scriptcode enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("textPath")}} definiert `xlink:href` eine Referenz zum {{SVGElement("path")}}-Element, auf das die Glyphen gerendert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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

Für {{SVGElement("tref")}} definiert `xlink:href` eine Referenz zu einem Element, dessen Zeicheninhalt als Zeichendaten für dieses `<tref>`-Element verwendet werden soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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
