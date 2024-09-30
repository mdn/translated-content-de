---
title: xlink:href
slug: Web/SVG/Attribute/xlink:href
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das **`xlink:href`** Attribut definiert eine Referenz zu einer Ressource als Referenz- [IRI](/de/docs/Web/SVG/Content_type#iri). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das es verwendet.

> [!NOTE]
> SVG 2 hat die Notwendigkeit des `xlink`-Namespace entfernt, daher sollten Sie anstelle von `xlink:href` {{SVGAttr("href")}} verwenden. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut zusätzlich zum `href`-Attribut als Fallback genutzt werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

{{EmbedLiveSample("Beispiel", "320", "100")}}

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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, und {{SVGElement("set")}}, definiert `xlink:href` die Referenz zu dem Element, welches das Ziel dieser Animation ist und daher im Laufe der Zeit modifiziert wird.

Das Zielelement muss Teil des aktuellen SVG-Dokumentfragments sein.

Der Wert muss auf genau ein Zielelement verweisen, das als Ziel der gegebenen Animation fungieren kann.

Wenn das `xlink:href`-Attribut nicht angegeben ist, wird das unmittelbare Elternelement des aktuellen Animationselements das Zielelement.

Beachten Sie die Beschreibungen der einzelnen Animationselemente bezüglich etwaiger Einschränkungen, welche Arten von Elementen Ziele bestimmter Animationstypen sein können.

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

Für {{SVGElement("cursor")}} definiert `xlink:href` die Referenz zu der Datei oder dem Element, welches das Bild des Cursors bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#funciri"
            >&#x3C;funciri></a
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

Für {{SVGElement("filter")}} definiert `xlink:href` die Referenz zu einem anderen `<filter>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten `<filter>`-Element definiert sind und nicht auf diesem Element selbst definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Filterknoten hat und das referenzierte Element diese hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), übernimmt dieses Element die von dem referenzierten `<filter>`-Element definierten Filterknoten. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; daher kann dieses Element auch Attribute oder Filterknotenspezifikationen erben, die durch das `xlink:href`-Attribut des referenzierten `<filter>`-Elements vererbt werden.

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

Für {{SVGElement("font-face-uri")}} definiert `xlink:href` den Standort der referenzierten Schriftart.

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

Für {{SVGElement("glyphRef")}} verweist `xlink:href` auf ein {{SVGElement("glyph")}}-Element in einem SVG-Dokumentfragment. Das referenzierte `<glyph>` wird als alternatives Symbol gerendert.

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

Für {{SVGElement("image")}} definiert `xlink:href` den Standort des referenzierten Bildes.

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

Für {{SVGElement("linearGradient")}} definiert `xlink:href` die Referenz zu einem anderen `<linearGradient>`- oder {{SVGElement("radialGradient")}}-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<linearGradient>`-Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element selbst definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element diese hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), übernimmt dieses Element den Farbverlauf des referenzierten Elements. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; daher kann dieses Element auch Attribute oder Farbverläufe erben, die durch das `xlink:href`-Attribut des referenzierten Elements vererbt werden.

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

Für {{SVGElement("mpath")}} definiert `xlink:href` die Referenz zu dem {{SVGElement("path")}}-Element, welches den Bewegungspfad definiert.

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

Für {{SVGElement("pattern")}} definiert `xlink:href` die Referenz zu einem anderen `<pattern>`-Element innerhalb des aktuellen SVG-Dokumentfragments. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element selbst definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element diese hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), übernimmt dieses Element die Kinder des referenzierten Elements. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; daher kann dieses Element auch Attribute oder Kinder erben, die durch das `xlink:href`-Attribut des referenzierten Elements vererbt werden.

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

Für {{SVGElement("radialGradient")}} definiert `xlink:href` die zu einem anderen {{SVGElement("linearGradient")}} oder `<radialGradient>` Element innerhalb des aktuellen SVG-Dokumentfragments. Alle `<radialGradient>`-Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element selbst definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine definierten Farbverläufe hat und das referenzierte Element diese hat (möglicherweise aufgrund seines eigenen `xlink:href`-Attributs), übernimmt dieses Element den Farbverlauf des referenzierten Elements. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; daher kann dieses Element auch Attribute oder Farbverläufe erben, die durch das `xlink:href`-Attribut des referenzierten Elements vererbt werden.

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

Für {{SVGElement("script")}} definiert `xlink:href` eine Referenz zu einer externen Ressource, die den Skriptcode enthält.

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

Für {{SVGElement("textPath")}} definiert `xlink:href` eine Referenz auf das {{SVGElement("path")}}-Element, auf das die Glyphen gerendert werden.

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

Für {{SVGElement("use")}} definiert `xlink:href` den Ort des referenzierten Objekts.

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
