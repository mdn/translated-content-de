---
title: by
slug: Web/SVG/Reference/Attribute/by
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`by`**-Attribut gibt einen relativen Versatzwert für ein Attribut an, das während einer Animation modifiziert wird.

Der Startwert für das Attribut wird entweder durch die Angabe als Wert für das im {{SVGAttr("attributeName")}} oder {{SVGAttr("from")}}-Attribut angegebene Attribut angegeben.

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

Der genaue Wertetyp für dieses Attribut hängt vom Wert des Attributs ab, das animiert werden soll.

Wenn eine Liste von Werten über das {{SVGAttr("values")}}-Attribut definiert ist, wird das `by`-Attribut ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
