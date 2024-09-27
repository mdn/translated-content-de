---
title: href
slug: Web/SVG/Attribute/href
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`href`** Attribut definiert einen Link zu einer Ressource als Referenz-[URL](/de/docs/Web/SVG/Content_type#url). Die genaue Bedeutung dieses Links hängt vom Kontext des jeweiligen Elements ab, das ihn verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten ein {{SVGAttr("xlink:href")}} Attribut, welches jetzt durch das `href` Attribut obsolet geworden ist. Wenn Sie frühere Browserversionen unterstützen müssen, kann das veraltete `xlink:href` Attribut zusätzlich zum `href` Attribut als Fallback verwendet werden, z.B. `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

Für {{SVGElement("a")}} definiert `href` den Speicherort des referenzierten Objekts, ausgedrückt als URL-Referenz.

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

Für die {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} Elemente definiert `href` eine URL, die auf das Element verweist, das das Ziel dieses Animationselements ist und welches somit im Laufe der Zeit modifiziert wird.

Die URL muss auf genau ein Zielelement verweisen, das als Ziel des angegebenen Animationselements geeignet ist. Wenn die URL auf mehrere Zielelemente verweist, wenn das angegebene Zielelement nicht als Ziel des angegebenen Animationselements geeignet ist oder wenn das angegebene Zielelement nicht Teil des aktuellen Dokuments ist, wird das Animationselement kein Zielelement beeinflussen. Das Animationselement operiert jedoch weiterhin normal in Bezug auf seine Zeitsteuerungseigenschaften. Insbesondere werden TimeEvents ausgelöst und das Animationselement kann wie gewohnt als Synchrone Basis verwendet werden, wenn die URL auf ein gültiges Zielelement verweist.

Wenn das `href` Attribut oder das veraltete {{SVGAttr("xlink:href")}} Attribut nicht bereitgestellt wird, wird das Zielelement das unmittelbare Elternelement des aktuellen Animationselements sein. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert des letzteren Attributs verwendet.

Für Beschreibungen der einzelnen Animationselemente, insbesondere welche Arten von Elementen als Ziele der jeweiligen Animationselemente dienen können, können Sie die jeweiligen Erläuterungen konsultieren.

Abgesehen von SVG-spezifischen Regeln, die explizit in dieser Spezifikation genannt werden, ist die normative Definition für dieses Attribut die [SMIL](/de/docs/Glossar/SMIL) Animation-Spezifikation. Insbesondere siehe [SMIL Animation: Spezifizieren des Animationziels](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#SpecifyingAnimationTarget).

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

Für {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl das {{SVGAttr("xlink:href")}} als auch das `href` Attribut angegeben sind, überschreibt letzteres das erstere.

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

Für {{SVGElement("image")}} definiert `href` eine URL, die auf das darzustellende Bild verweist.

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

Für {{SVGElement("linearGradient")}} definiert `href` eine URL, die auf ein Vorlage-Gradientenelement verweist; um gültig zu sein, muss die Referenz auf ein anderes `<linearGradient>` oder {{SVGElement("radialGradient")}} Element verweisen.

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

Für {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder eine [einfache Form](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, die den Bewegungspfad definiert.

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

Für {{SVGElement("pattern")}} definiert `href` eine URL, die innerhalb des aktuellen SVG-Dokuments auf ein anderes `<pattern>` Element verweist. Alle Attribute, die auf dem referenzierten Element definiert sind und auf diesem Element nicht definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kinder hat und das referenzierte Element schon (möglicherweise aufgrund des eigenen `href` Attributs), erbt dieses Element die Kinder des referenzierten Elements. Vererbung kann indirekt auf beliebige Ebenen stattfinden; wenn das referenzierte Element Attribute oder Kinder aufgrund seines eigenen `href` Attributs erbt, kann das aktuelle Element diese Attribute oder Kinder ebenfalls erben. Beim {{SVGElement("pattern")}} Element ist das `href` Attribut animierbar.

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

Für {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein Vorlage-Gradientenelement verweist; um gültig zu sein, muss die Referenz auf ein anderes {{SVGElement("linearGradient")}} oder `<radialGradient>` Element verweisen.

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

Für {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource verweist, die den Scriptcode enthält.

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

Für {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}} Element oder eine [einfache Form](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) verweist, auf der der Text dargestellt wird, wenn kein {{SVGAttr("path")}} Attribut bereitgestellt wird. Beim {{SVGElement("textPath")}} Element ist das `href` Attribut animierbar.

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

Das `<use>` Element kann auf ein gesamtes SVG-Dokument referenzieren, indem ein `href` Wert ohne Fragment angegeben wird. Solche Referenzen beziehen sich auf das Wurzelelement des referenzierten Dokuments.

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
