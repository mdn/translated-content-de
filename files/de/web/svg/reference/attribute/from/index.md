---
title: from
slug: Web/SVG/Reference/Attribute/from
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

Das Attribut **`from`** gibt den Anfangswert des Attributs an, das während der Animation geändert wird.

Wenn es mit dem {{SVGAttr("to")}}-Attribut verwendet wird, ändert die Animation das modifizierte Attribut vom `from`-Wert zum `to`-Wert. Wenn es mit dem {{SVGAttr("by")}}-Attribut verwendet wird, ändert die Animation das Attribut relativ vom `from`-Wert um den im `by` angegebenen Wert.

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

Der genaue Wertetyp für dieses Attribut hängt vom Wert des Attributs ab, das animiert werden soll.

Wenn eine Liste von Werten über das {{SVGAttr("values")}}-Attribut definiert wird, wird das `from`-Attribut ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
