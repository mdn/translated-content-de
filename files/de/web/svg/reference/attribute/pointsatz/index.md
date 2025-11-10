---
title: pointsAtZ
slug: Web/SVG/Reference/Attribute/pointsAtZ
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`pointsAtZ`** Attribut repräsentiert die Z-Position im Koordinatensystem, das durch das Attribut {{SVGAttr("primitiveUnits")}} auf dem {{SVGElement("filter")}}-Element festgelegt wird. Dabei handelt es sich um den Punkt, auf den die Lichtquelle zeigt. Es wird angenommen, dass im anfänglichen lokalen Koordinatensystem die positive Z-Achse auf die Person, die den Inhalt betrachtet, zeigt und dass eine Einheit entlang der Z-Achse einer Einheit in X und Y entspricht.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feSpotLight")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="lighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="100" y="100" z="50" pointsAtZ="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="lighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="100" y="100" z="50" pointsAtZ="80" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#lighting1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#lighting2)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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
