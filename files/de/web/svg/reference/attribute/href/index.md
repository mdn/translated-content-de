---
title: href
slug: Web/SVG/Reference/Attribute/href
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`href`** definiert einen Link zu einer Ressource als [URL-Referenz](/de/docs/Web/SVG/Guides/Content_type#url). Die genaue Bedeutung dieses Links hängt vom jeweiligen Element ab, das das Attribut verwendet.

> [!NOTE]
> Spezifikationen vor SVG 2 definierten das Attribut {{SVGAttr("xlink:href")}}, das inzwischen durch das Attribut `href` abgelöst wurde. Wenn Sie ältere Browserversionen unterstützen müssen, können Sie das veraltete Attribut `xlink:href` zusätzlich zu `href` als Fallback verwenden, beispielsweise `<use href="some-id" xlink:href="some-id" x="5" y="5" />`.

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

## In SVG

### a

Bei {{SVGElement("a")}} definiert `href` den Speicherort des referenzierten Objekts als URL-Referenz.

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

Bei {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} und {{SVGElement("set")}} definiert `href` eine URL, die auf das Zielelement dieses Animationselements verweist. Dieses Zielelement wird daher im zeitlichen Verlauf verändert.

Die URL muss auf genau ein Zielelement verweisen, das als Ziel des jeweiligen Animationselements verwendet werden kann. Wenn die URL auf mehrere Zielelemente verweist, das angegebene Zielelement nicht als Ziel des jeweiligen Animationselements verwendet werden kann oder das angegebene Zielelement nicht Teil des aktuellen Dokuments ist, wirkt sich das Animationselement auf kein Zielelement aus. Hinsichtlich seiner zeitlichen Eigenschaften funktioniert das Animationselement jedoch weiterhin wie gewohnt. Insbesondere werden TimeEvents ausgelöst, und das Animationselement kann genauso wie bei einer URL, die auf ein gültiges Zielelement verweist, als Syncbase verwendet werden.

Wenn weder das Attribut `href` noch das veraltete Attribut {{SVGAttr("xlink:href")}} angegeben ist, ist das unmittelbare Elternelement des aktuellen Animationselements das Zielelement. Wenn sowohl `xlink:href` als auch `href` angegeben sind, wird der Wert von `href` verwendet.

Den Beschreibungen der einzelnen Animationselemente können Sie entnehmen, welche Einschränkungen für die Elemente gelten, die als Ziele bestimmter Animationstypen verwendet werden können.

Abgesehen von den SVG-spezifischen Regeln, die in dieser Spezifikation ausdrücklich genannt werden, ist die normative Definition dieses Attributs in der SMIL-Animation-Spezifikation festgelegt. Siehe insbesondere [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget).

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

Bei {{SVGElement("feImage")}} definiert `href` eine URL, die auf eine Bildressource oder ein Element verweist. Wenn sowohl {{SVGAttr("xlink:href")}} als auch `href` angegeben sind, hat `href` Vorrang.

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

Bei {{SVGElement("image")}} definiert `href` eine URL, die auf das darzustellende Bild verweist.

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

Bei {{SVGElement("linearGradient")}} oder {{SVGElement("radialGradient")}} definiert `href` eine URL, die auf ein als Vorlage dienendes Verlaufselement verweist. Damit die Referenz gültig ist, muss sie auf ein anderes `<linearGradient>`- oder `<radialGradient>`-Element verweisen.

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

Bei {{SVGElement("mpath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) verweist, die den Bewegungspfad definiert.

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

Bei {{SVGElement("pattern")}} definiert `href` eine URL, die auf ein anderes `<pattern>`-Element im aktuellen SVG-Dokument verweist. Attribute, die auf dem referenzierten Element, aber nicht auf diesem Element definiert sind, werden von diesem Element geerbt. Wenn dieses Element keine Kindelemente hat, das referenzierte Element jedoch schon – möglicherweise aufgrund seines eigenen Attributs `href` –, erbt dieses Element die Kindelemente des referenzierten Elements. Die Vererbung kann über beliebig viele Ebenen erfolgen. Wenn also das referenzierte Element aufgrund seines eigenen Attributs `href` Attribute oder Kindelemente erbt, kann das aktuelle Element diese ebenfalls erben. Beim Element {{SVGElement("pattern")}} ist das Attribut `href` animierbar.

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

Bei {{SVGElement("script")}} definiert `href` eine URL, die auf eine externe Ressource mit dem Skriptcode verweist.

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

Bei {{SVGElement("textPath")}} definiert `href` eine URL, die auf das {{SVGElement("path")}}-Element oder die [Grundform](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) verweist, entlang derer der Text dargestellt wird, sofern kein Attribut {{SVGAttr("path")}} angegeben ist. Beim Element {{SVGElement("textPath")}} ist das Attribut `href` animierbar.

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

Bei {{SVGElement("use")}} definiert `href` eine URL, die auf ein Element oder Fragment innerhalb eines SVG-Dokuments verweist, das geklont werden soll.

Das Element `<use>` kann auf ein vollständiges SVG-Dokument verweisen, indem für `href` ein Wert ohne Fragment angegeben wird. Solche Referenzen beziehen sich auf das Wurzelelement des referenzierten Dokuments.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:href")}}
