---
title: href
slug: Web/SVG/Reference/Attribute/href
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`href`** Attribut definiert einen Link zu einer Ressource als Referenz [URL](/de/docs/Web/SVG/Guides/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des Elements ab, das ihn verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}} Attribut, das jetzt durch das `href` Attribut obsolet geworden ist. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href` Attribut zusätzlich zum `href` Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("discard")}}
- {{SVGElement("feImage")}}
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
  <a href="https://developer.mozilla.org/">
    <text x="10" y="25">MDN Web Docs</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## In SVG

### a

Für {{SVGElement("a")}} definiert `href` den Speicherort des referenzierten Objekts, ausgedrückt als URL-Referenz.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### animate, animateMotion, animateTransform, set

Für die {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}}, definiert `href` eine URL, die auf das Element verweist, das das Ziel dieses Animationselements ist und daher im Laufe der Zeit modifiziert wird.

Die URL muss auf genau ein Zielelement verweisen, das als Ziel des gegebenen Animationselements geeignet ist. Wenn die URL auf mehrere Zielelemente verweist, wenn das gegebene Zielelement nicht als Ziel des gegebenen Animationselements geeignet ist oder wenn das Ziel nicht Teil des aktuellen Dokuments ist, hat das Animationselement keine Auswirkungen auf ein Ziel. Das Animationselement arbeitet jedoch weiterhin normal in Bezug auf seine Timing-Eigenschaften. Insbesondere werden TimeEvents versendet und das Animationselement kann als Syncbase auf die gleiche Weise verwendet werden, als ob die URL auf ein gültiges Zielelement verweist.

Wenn das `href` Attribut oder das veraltete {{SVGAttr("xlink:href")}} Attribut nicht angegeben ist, dann wird das Zielelement das unmittelbare Elternelement des aktuellen Animationselements sein. Wenn sowohl `xlink:href` als auch `href` spezifiziert sind, wird der Wert des letzteren Attributs verwendet.

Beziehen Sie sich auf die Beschreibungen der einzelnen Animationselemente für alle Einschränkungen, welche Elementtypen Ziele bestimmter Animationstypen sein können.

Abgesehen von allen explizit in dieser Spezifikation erwähnten SVG-spezifischen Regeln, ist die normative Definition für dieses Attribut die {{Glossary("SMIL", "SMIL")}} Animation Spezifikation. Insbesondere siehe [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### feImage

Für {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}} als auch das `href` Attribut angegeben sind, überschreibt das letztere das erste.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### discard

Für {{SVGElement("discard")}}, definiert `href` eine URL, die auf ein Element verweist, das verworfen (aus dem DOM entfernt) wird.
Wenn nicht angegeben, wird das unmittelbare Elternelement von `<discard>` verworfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### image

Für {{SVGElement("image")}} definiert `href` eine URL, die auf das zu rendernde Bild verweist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image href="fxlogo.png" x="0" y="0" height="100" width="100" />
</svg>
```

{{EmbedLiveSample("image", 200, 250)}}

### linearGradient/radialGradient

Für {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}}, definiert `href` eine URL, die auf ein Vorlage-Gradienten-Element verweist; um gültig zu sein, muss der Verweis auf ein anderes `<linearGradient>` oder `<radialGradient>` Element weisen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### mpath

Für {{SVGElement("mpath")}}, definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder [basic shape](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, welches den Bewegungspfad definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### pattern

Für {{SVGElement("pattern")}}, definiert `href` eine URL, die auf ein anderes `<pattern>` Element innerhalb des aktuellen SVG-Dokuments verweist. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element schon (möglicherweise aufgrund seines eigenen `href` Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt bis zu einem beliebigen Niveau erfolgen; wenn also das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href` Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder ebenfalls erben. Auf dem {{SVGElement("pattern")}} Element ist das `href` Attribut animierbar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### script

Für {{SVGElement("script")}}, definiert `href` eine URL, die auf eine externe Ressource verweist, die den Skriptcode enthält.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### textPath

Für {{SVGElement("textPath")}}, definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder [basic shape](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf das der Text gerendert wird, wenn kein {{SVGAttr("path")}} Attribut bereitgestellt wird. Auf dem {{SVGElement("textPath")}} Element ist das `href` Attribut animierbar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

### use

Für {{SVGElement("use")}}, definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das `<use>` Element kann auf ein gesamtes SVG-Dokument verweisen, indem ein `href` Wert ohne Fragment angegeben wird. Solche Verweise beziehen sich auf das Wurzelelement des referenzierten Dokuments.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
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

- {{SVGAttr("xlink:href")}}
