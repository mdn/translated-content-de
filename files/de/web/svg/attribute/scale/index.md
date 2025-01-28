---
title: scale
slug: Web/SVG/Attribute/scale
l10n:
  sourceCommit: da9455baa888af94b55f453a56b15b5bb8af53e0
---

{{SVGRef}}

Das **`scale`** Attribut definiert den Verschiebungsfaktor, der bei einer {{SVGElement("feDisplacementMap")}} Filterprimitive verwendet wird. Der Wert wird im Koordinatensystem ausgedrückt, das durch das {{SVGAttr("primitiveUnits")}} Attribut auf dem {{SVGElement("filter")}} Element festgelegt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feDisplacementMap")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" />
  </filter>
  <filter id="displacementFilter2" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" />
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#displacementFilter);" />
  <circle
    cx="100"
    cy="100"
    r="80"
    style="filter: url(#displacementFilter2);
  transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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

- `<number>`

  - : Dieser Wert definiert den Maßstabsfaktor für die Verschiebung.

    Wenn der Wert dieses Attributs `0` ist, hat diese Operation keinen Effekt auf das Quellbild.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
