---
title: href
slug: Web/SVG/Attribute/href
l10n:
  sourceCommit: 8f131f122c32f6c04ad071b77d91e3deee00f2f6
---

{{SVGRef}}

Das **`href`** Attribut definiert einen Link zu einer Ressource als Referenz-[URL](/de/docs/Web/SVG/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das es verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}} Attribut, das jetzt durch das `href` Attribut obsolet geworden ist. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href` Attribut zusätzlich zum `href` Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

Für {{SVGElement("a")}}, definiert `href` die Position des referenzierten Objekts, ausgedrückt als URL-Referenz.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### animate, animateMotion, animateTransform, set

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}}, definiert `href` eine URL, die auf das Element verweist, welches das Ziel dieses Animationselements ist und daher über die Zeit modifiziert wird.

Die URL muss auf genau ein Zielelement verweisen, das als Ziel für das gegebene Animationselement geeignet ist. Wenn die URL auf mehrere Zielelemente verweist, das gegebene Zielelement kein geeignetes Ziel für das gegebene Animationselement ist oder das gegebene Zielelement nicht Teil des aktuellen Dokuments ist, wird das Animationselement kein Zielelement beeinflussen. Das Animationselement funktioniert jedoch wie gewohnt hinsichtlich seiner Zeitsteuerungseigenschaften. Insbesondere werden TimeEvents ausgesendet und das Animationselement kann identisch als Syncbasis verwendet werden, als wenn die URL auf ein gültiges Zielelement verweist.

Wenn das `href` Attribut oder das veraltete {{SVGAttr("xlink:href")}} Attribut nicht angegeben sind, ist das Zielelement das unmittelbare Elternelement des aktuellen Animationselements. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert des letzteren Attributs verwendet.

Beziehen Sie sich auf die Beschreibungen der einzelnen Animationselemente für etwaige Beschränkungen, welche Elementtypen Ziele bestimmter Animationen sein können.

Mit Ausnahme von SVG-spezifischen Regeln, die in dieser Spezifikation ausdrücklich erwähnt werden, ist die normative Definition für dieses Attribut die {{Glossary("SMIL", "SMIL")}} Animationsspezifikation. Insbesondere siehe [SMIL Animation: Festlegung des Animationstargets](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### feImage

Für {{SVGElement("feImage")}}, definiert `href` eine URL, die auf eine Bildressource oder auf ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}} als auch das `href` Attribut angegeben sind, überschreibt letzteres das erstere.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### discard

Für {{SVGElement("discard")}}, definiert `href` eine URL, die auf ein Element verweist, das verworfen (aus dem DOM entfernt) wird. Wenn es nicht angegeben ist, wird das unmittelbare Elternelement von `<discard>` verworfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### image

Für {{SVGElement("image")}}, definiert `href` eine URL, die auf das zu rendernde Bild verweist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
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

Für {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}}, definiert `href` eine URL, die auf ein Vorlagen-Gradienten-Element verweist; um gültig zu sein, muss die Referenz auf ein anderes `<linearGradient>` oder `<radialGradient>` Element verweisen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### mpath

Für {{SVGElement("mpath")}}, definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder [basic shape](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, das den Bewegungsweg definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### pattern

Für {{SVGElement("pattern")}}, definiert `href` eine URL, die auf ein anderes `<pattern>` Element im aktuellen SVG-Dokument verweist. Alle Attribute, die auf dem referenzierten Element definiert sind und nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element (möglicherweise bedingt durch sein eigenes `href` Attribut) schon, dann erbt dieses Element die Kinder des referenzierten Elements. Die Vererbung kann indirekt auf einer beliebigen Ebene stattfinden; somit kann das aktuelle Element Attribute oder Kinder erben, wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href` Attributs erbt. Auf dem {{SVGElement("pattern")}} Element ist das `href` Attribut animierbar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
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
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### textPath

Für {{SVGElement("textPath")}}, definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder [basic shape](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf dem der Text gerendert wird, wenn kein {{SVGAttr("path")}} Attribut bereitgestellt wird. Auf dem {{SVGElement("textPath")}} Element ist das `href` Attribut animierbar.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### use

Für {{SVGElement("use")}}, definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das `<use>` Element kann auf ein gesamtes SVG-Dokument verweisen, indem ein `href` Wert ohne Fragment angegeben wird. Solche Verweise werden als Verweise auf das Wurzelelement des referenzierten Dokuments aufgefasst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
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
