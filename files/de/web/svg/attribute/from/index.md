---
title: from
slug: Web/SVG/Attribute/From
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Das **`from`**-Attribut gibt den Anfangswert des Attributs an, das während der Animation modifiziert wird.

Wenn es mit dem {{SVGAttr("to")}}-Attribut verwendet wird, ändert die Animation das modifizierte Attribut vom `from`-Wert zum `to`-Wert. Wenn es mit dem {{SVGAttr("by")}}-Attribut verwendet wird, ändert die Animation das Attribut relativ vom `from`-Wert um den im `by`-Wert angegebenen Wert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  <rect x="10" y="10" height="100">
    <animate attributeName="width" fill="freeze" from="100" to="150" dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Verwendungshinweise

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

Wenn eine Liste von Werten über das {{SVGAttr("values")}}-Attribut definiert wird, wird das `from`-Attribut ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
