---
title: by
slug: Web/SVG/Attribute/by
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`by`**-Attribut gibt einen relativen Offsetwert für ein Attribut an, das während einer Animation geändert wird.

Der Startwert für das Attribut wird entweder durch die Angabe als Wert für das im {{SVGAttr("attributeName")}}- oder im {{SVGAttr("from")}}-Attribut angegebene Attribut festgelegt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate attributeName="width" fill="freeze" by="50" dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><em>Siehe unten</em></td>
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

Der genaue Werttyp für dieses Attribut hängt vom Wert des Attributs ab, das animiert wird.

Wenn eine Liste von Werten über das {{SVGAttr("values")}}-Attribut definiert wird, wird das `by`-Attribut ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
