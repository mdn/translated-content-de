---
title: href
slug: Web/SVG/Reference/Attribute/href
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`href`**-Attribut definiert einen Link zu einer Ressource als Referenz [URL](/de/docs/Web/SVG/Guides/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das ihn verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}}-Attribut, das nun durch das `href`-Attribut obsolet geworden ist. Wenn es erforderlich ist, frühere Browserversionen zu unterstützen, kann das veraltete `xlink:href`-Attribut zusätzlich zum `href`-Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

Für die {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `href` eine URL, die auf das Element verweist, das das Ziel dieses Animationselements ist und das daher im Laufe der Zeit modifiziert wird.

Die URL muss auf genau ein Zielelement verweisen, das in der Lage ist, das Ziel des gegebenen Animationselements zu sein. Wenn die URL auf mehrere Zielelemente verweist, wenn das gegebene Zielelement nicht in der Lage ist, das Ziel des gegebenen Animationselements zu sein, oder wenn das gegebene Zielelement nicht Teil des aktuellen Dokuments ist, wird das Animationselement kein Zielelement beeinflussen. Das Animationselement wird jedoch in Bezug auf seine Timing-Eigenschaften weiterhin normal funktionieren. Insbesondere werden TimeEvents versendet, und das Animationselement kann als Synchronisationsbasis auf dieselbe Weise verwendet werden, wie wenn die URL auf ein gültiges Zielelement verweist.

Wenn das `href`-Attribut oder das veraltete {{SVGAttr("xlink:href")}}-Attribut nicht angegeben ist, dann wird das Bezirkszielelement das unmittelbare übergeordnete Element des aktuellen Animationselements sein. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert des letzteren Attributs verwendet.

Siehe die Beschreibungen der einzelnen Animationselemente für etwaige Einschränkungen, welche Art von Elementen das Ziel bestimmter Arten von Animationen sein können.

Mit Ausnahme von SVG-spezifischen Regeln, die ausdrücklich in dieser Spezifikation genannt werden, ist die normative Definition für dieses Attribut die {{Glossary("SMIL", "SMIL")}}-Animationsspezifikation. Insbesondere siehe [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

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

Für {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}}-Attribut als auch das `href`-Attribut angegeben sind, überschreibt letzteres das erstere.

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

Für {{SVGElement("discard")}} definiert `href` eine URL, die auf ein Element verweist, das verworfen wird (aus dem DOM entfernt wird).
Wenn nicht angegeben, wird das unmittelbare übergeordnete Element von `<discard>` verworfen.

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

Für {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein Vorlage-Gradienten-Element verweist; um gültig zu sein, muss die Referenz auf ein anderes `<linearGradient>`- oder `<radialGradient>`-Element verweisen.

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

Für {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, die den Bewegungspfad definiert.

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

Für {{SVGElement("pattern")}} definiert `href` eine URL, die auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokuments verweist. Alle Attribute, die auf dem referenzierten Element definiert sind, die nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element welche hat (möglicherweise aufgrund seines eigenen `href`-Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene sein; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder erben. Beim {{SVGElement("pattern")}}-Element ist das `href`-Attribut animierbar.

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

Für {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource verweist, die den Skript-Code enthält.

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

Für {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf die der Text gerendert wird, wenn kein {{SVGAttr("path")}}-Attribut bereitgestellt wird. Beim {{SVGElement("textPath")}}-Element ist das `href`-Attribut animierbar.

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

Für {{SVGElement("use")}} definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das `<use>`-Element kann auf ein gesamtes SVG-Dokument verweisen, indem ein `href`-Wert ohne Fragment angegeben wird. Solche Verweise gelten als Verweis auf das Wurzelelement des referenzierten Dokuments.

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
