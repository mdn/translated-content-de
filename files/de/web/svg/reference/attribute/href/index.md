---
title: href
slug: Web/SVG/Reference/Attribute/href
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Das **`href`**-Attribut definiert einen Link zu einer Ressource als Referenz-[URL](/de/docs/Web/SVG/Guides/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das ihn verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}}-Attribut, das jetzt durch das `href`-Attribut obsolet ist. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut zusätzlich zum `href`-Attribut als Fallback verwendet werden, z. B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
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

Für die {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `href` eine URL, die auf das Element verweist, das das Ziel dieses Animationselements ist und das daher im Laufe der Zeit verändert wird.

Die URL muss auf genau ein Zielelement verweisen, das in der Lage ist, das Ziel des gegebenen Animationselements zu sein. Wenn die URL auf mehrere Zielelemente verweist, wenn das gegebene Zielelement nicht in der Lage ist, Ziel des gegebenen Animationselements zu sein, oder wenn das gegebene Zielelement nicht Teil des aktuellen Dokuments ist, wird das Animationselement kein Zielelement beeinflussen. Das Animationselement arbeitet jedoch normal mit Blick auf seine Timing-Eigenschaften. Insbesondere werden TimeEvents ausgelöst und das Animationselement kann als Syncbase auf identische Weise verwendet werden, als ob die URL auf ein gültiges Zielelement verweisen würde.

Wenn das `href`-Attribut oder das veraltete {{SVGAttr("xlink:href")}}-Attribut nicht angegeben ist, wird das unmittelbare Elternelement des aktuellen Animationselements das Zielelement sein. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert des letzteren Attributs verwendet.

Siehe die Beschreibungen der einzelnen Animationselemente für Einschränkungen, welche Arten von Elementen Ziele bestimmter Arten von Animationen sein können.

Abgesehen von SVG-spezifischen Regeln, die in dieser Spezifikation ausdrücklich erwähnt werden, ist die normative Definition für dieses Attribut die SMIL Animation-Spezifikation. Insbesondere siehe [SMIL Animation: Festlegen des Animationsziels](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

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

Für {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder auf ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}} als auch das `href`-Attribut angegeben sind, überschreibt letzteres das erstgenannte.

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

### image

Für {{SVGElement("image")}} definiert `href` eine URL, die auf das anzuzeigende Bild verweist.

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

Für {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein Template-Gradientenelement verweist; um gültig zu sein, muss die Referenz auf ein anderes `<linearGradient>` oder `<radialGradient>`-Element verweisen.

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

Für {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder [basic shape](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) verweist, welches den Bewegungspfad definiert.

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

Für {{SVGElement("pattern")}} definiert `href` eine URL, die auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokuments verweist. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element schon (möglicherweise aufgrund seines eigenen `href`-Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; somit kann das aktuelle Element Attribute oder Kinder erben, wenn das referenzierte Element durch sein eigenes `href`-Attribut Attribute oder Kinder erbt. Auf dem {{SVGElement("pattern")}}-Element ist das `href`-Attribut animierbar.

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

Für {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource verweist, die den Skriptcode enthält.

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

Für {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder [basic shape](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) verweist, auf das der Text gerendert wird, wenn kein {{SVGAttr("path")}}-Attribut angegeben ist. Auf dem {{SVGElement("textPath")}}-Element ist das `href`-Attribut animierbar.

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

Das `<use>`-Element kann ein gesamtes SVG-Dokument referenzieren, indem ein `href`-Wert ohne Fragment angegeben wird. Solche Referenzen werden als Verweise auf das Wurzelelement des referenzierten Dokuments betrachtet.

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
