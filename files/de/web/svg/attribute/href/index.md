---
title: href
slug: Web/SVG/Attribute/href
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`href`**-Attribut definiert einen Link zu einer Ressource als Referenz [URL](/de/docs/Web/SVG/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext jedes Elements ab, das ihn verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}}-Attribut, welches nun durch das `href`-Attribut veraltet ist. Wenn Sie frühere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut zusätzlich als Fallback zum `href`-Attribut verwendet werden, z. B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

Bei {{SVGElement("a")}} definiert `href` den Speicherort des referenzierten Objekts, ausgedrückt als URL-Referenz.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### animate, animateMotion, animateTransform, set

Bei {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `href` eine URL, die auf das Element verweist, welches das Ziel dieses Animations-Elements ist und daher im Laufe der Zeit modifiziert wird.

Die URL muss genau auf ein Ziel-Element verweisen, das als Ziel des angegebenen Animations-Elements dienen kann. Wenn die URL auf mehrere Ziel-Elemente verweist, wenn das angegebene Ziel-Element nicht als Ziel des angegebenen Animations-Elements dienen kann oder wenn das angegebene Ziel-Element nicht Teil des aktuellen Dokuments ist, wird das Animations-Element kein Ziel-Element beeinflussen. Das Animations-Element wird jedoch weiterhin normal in Bezug auf seine Timing-Eigenschaften funktionieren. Insbesondere werden TimeEvents gesendet und das Animations-Element kann als Synchronisationsbasis identisch verwendet werden, wie wenn die URL auf ein gültiges Ziel-Element verweist.

Wenn das `href`-Attribut oder das veraltete {{SVGAttr("xlink:href")}}-Attribut nicht angegeben ist, wird das Ziel-Element das unmittelbare Elternelement des aktuellen Animations-Elements sein. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert des letzteren Attributs verwendet.

Bitte beachten Sie die Beschreibungen der einzelnen Animations-Elemente für etwaige Einschränkungen, welche Arten von Elementen Ziele bestimmter Arten von Animationen sein können.

Mit Ausnahme von SVG-spezifischen Regeln, die ausdrücklich in dieser Spezifikation erwähnt werden, ist die normative Definition für dieses Attribut die {{Glossary("SMIL")}}-Animationsspezifikation. Insbesondere siehe [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#SpecifyingAnimationTarget).

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### feImage

Bei {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}} als auch das `href`-Attribut angegeben sind, überschreibt das letztere das erstere.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### image

Bei {{SVGElement("image")}} definiert `href` eine URL, die auf das darzustellende Bild verweist.

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

### linearGradient

Bei {{SVGElement("linearGradient")}} definiert `href` eine URL, die auf ein Template-Gradientenelement verweist; um gültig zu sein, muss die Referenz auf ein anderes `<linearGradient>`- oder {{SVGElement("radialGradient")}}-Element verweisen.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### mpath

Bei {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, die den Bewegungspfad definiert.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### pattern

Bei {{SVGElement("pattern")}} definiert `href` eine URL, die auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokuments verweist. Alle Attribute, die auf dem referenzierten Element definiert sind und auf diesem Element nicht definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element solche hat (möglicherweise aufgrund seines eigenen `href`-Attributs), dann erbt dieses Element die Kinder vom referenzierten Element. Die Vererbung kann indirekt auf beliebiger Ebene erfolgen; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder erben. Auf dem {{SVGElement("pattern")}}-Element ist das `href`-Attribut animiert.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### radialGradient

Bei {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein Template-Gradientenelement verweist; um gültig zu sein, muss die Referenz auf ein anderes {{SVGElement("linearGradient")}}- oder `<radialGradient>`-Element verweisen.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### script

Bei {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource verweist, welche den Script-Code enthält.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

### textPath

Bei {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf die der Text gerendert wird, wenn kein {{SVGAttr("path")}}-Attribut angegeben ist. Auf dem {{SVGElement("textPath")}}-Element ist das `href`-Attribut animiert.

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### use

Bei {{SVGElement("use")}} definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das `<use>`-Element kann auf ein gesamtes SVG-Dokument verweisen, indem ein `href`-Wert ohne Fragment angegeben wird. Solche Verweise werden als Verweise auf das Wurzelelement des referenzierten Dokuments betrachtet.

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
