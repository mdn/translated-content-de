---
title: href
slug: Web/SVG/Attribute/href
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

Das **`href`**-Attribut definiert einen Link zu einer Ressource als Referenz-[URL](/de/docs/Web/SVG/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das es verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}}-Attribut, das durch das `href`-Attribut nun obsolet geworden ist. Wenn Sie ältere Browserversionen unterstützen müssen, kann das veraltete `xlink:href`-Attribut als Fallback zusätzlich zum `href`-Attribut genutzt werden, z. B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

Sie können dieses Attribut mit folgenden SVG-Elementen verwenden:

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

Für {{SVGElement("a")}} definiert `href` den Ort des referenzierten Objekts, ausgedrückt als URL-Referenz.

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

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `href` eine URL, die auf das Element verweist, das Ziel dieses Animationselements ist und daher im Laufe der Zeit modifiziert wird.

Die URL muss genau auf ein Ziel-Element zeigen, das als Ziel des gegebenen Animationselements geeignet ist. Zeigt die URL auf mehrere Ziel-Elemente, wenn das angegebene Ziel-Element nicht als Ziel für das gegebene Animationselement geeignet ist oder wenn das Ziel-Element nicht Teil des aktuellen Dokuments ist, wird das Animationselement kein Ziel-Element beeinflussen. Dennoch wird das Animationselement weiterhin normal in Bezug auf seine Zeitsteuerungseigenschaften funktionieren. Insbesondere werden TimeEvents gesendet und das Animationselement kann wie gewohnt als Synchronisationsbasis verwendet werden, als ob die URL auf ein gültiges Ziel-Element verweist.

Wenn das `href`-Attribut oder das veraltete {{SVGAttr("xlink:href")}}-Attribut nicht angegeben ist, wird das unmittelbare übergeordnete Element des aktuellen Animationselements das Ziel-Element sein. Wenn sowohl `xlink:href` als auch `href` angegeben werden, wird der Wert des letzteren Attributs verwendet.

Beziehen Sie sich auf die Beschreibungen der einzelnen Animationselemente für Einschränkungen hinsichtlich der Typen von Elementen, die Ziele bestimmter Animationstypen sein können.

Abgesehen von den ausdrücklich in dieser Spezifikation genannten SVG-spezifischen Regeln erfolgt die normative Definition für dieses Attribut in der {{Glossary("SMIL", "SMIL")}}-Animationsspezifikation. Siehe insbesondere [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

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

Für {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl {{SVGAttr("xlink:href")}} als auch das `href`-Attribut angegeben werden, überschreibt letzteres das erstere.

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

Für {{SVGElement("image")}} definiert `href` eine URL, die auf das anzuzeigende Bild verweist.

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

### linearGradient/radialGradient

Für {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein Vorlage-Gradienten-Element verweist; um gültig zu sein, muss der Verweis auf ein anderes `<linearGradient>`- oder `<radialGradient>`-Element zeigen.

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

Für {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, die den Bewegungsweg definiert.

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

Für {{SVGElement("pattern")}} definiert `href` eine URL, die auf ein anderes `<pattern>`-Element innerhalb des aktuellen SVG-Dokuments verweist. Alle Attribute, die auf dem referenzierten Element definiert sind, aber nicht auf diesem Element, werden von diesem Element geerbt. Falls dieses Element keine Kinder hat, das referenzierte Element jedoch schon (möglicherweise aufgrund seines eigenen `href`-Attributs), dann erbt dieses Element die Kinder des referenzierten Elements. Die Vererbung kann indirekt bis zu einer beliebigen Ebene erfolgen; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href`-Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder ebenfalls erben. Auf dem {{SVGElement("pattern")}}-Element ist das `href`-Attribut animierbar.

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

Für {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource mit dem Skriptcode verweist.

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

Für {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf der der Text gerendert wird, wenn kein {{SVGAttr("path")}}-Attribut angegeben ist. Auf dem {{SVGElement("textPath")}}-Element ist das `href`-Attribut animierbar.

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

Für {{SVGElement("use")}} definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das `<use>`-Element kann auf ein gesamtes SVG-Dokument verweisen, indem ein `href`-Wert ohne Fragment angegeben wird. Solche Verweise gelten als Verweise auf das Wurzelelement des referenzierten Dokuments.

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
