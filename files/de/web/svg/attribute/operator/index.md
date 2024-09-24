---
title: operator
slug: Web/SVG/Attribute/operator
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{SVGRef}}

Das **`operator`**-Attribut hat zwei Bedeutungen, abhängig vom Kontext, in dem es verwendet wird. Entweder definiert es die Zusammensetzung oder die Verformungsoperation, die durchgeführt werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feComposite")}}
- {{SVGElement("feMorphology")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
  font:
    20px Arial,
    Helvetica,
    sans-serif;
}
```

```html
<svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
  <filter id="erode">
    <feMorphology operator="erode" radius="0.4" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="0.8" />
  </filter>

  <text x="0" y="15">Normaler Text</text>
  <text x="0" y="40" filter="url(#erode)">Dünner Text</text>
  <text x="0" y="65" filter="url(#dilate)">Dicker Text</text>
</svg>
```

{{EmbedLiveSample("Example", "240", "200")}}

## feComposite

Für {{SVGElement("feComposite")}} definiert `operator` die Zusammensetzungsoperation, die durchgeführt werden soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>over</code> | <code>in</code> | <code>out</code> |
        <code>atop</code> | <code>xor</code> | <code>lighter</code> |
        <code>arithmetic</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>over</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `over`
  - : Dieser Wert zeigt an, dass die im {{SVGAttr("in")}}-Attribut definierte Quellgrafik über die im {{SVGAttr("in2")}}-Attribut definierte Zielgrafik platziert wird.
- `in`
  - : Dieser Wert zeigt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die sich mit der im `in2`-Attribut definierten Zielgrafik überlappen, die Zielgrafik ersetzen.
- `out`
  - : Dieser Wert zeigt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die außerhalb der im `in2`-Attribut definierten Zielgrafik liegen, angezeigt werden.
- `atop`
  - : Dieser Wert zeigt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die sich mit der im `in2`-Attribut definierten Zielgrafik überlappen, die Zielgrafik ersetzen. Die Teile der Zielgrafik, die nicht mit der Quellgrafik überlappen, bleiben unberührt.
- `xor`
  - : Dieser Wert zeigt an, dass die nicht überlappenden Bereiche der im `in`-Attribut definierten Quellgrafik und der im `in2`-Attribut definierten Zielgrafik kombiniert werden.
- `lighter`
  - : Dieser Wert gibt an, dass die Summe der im `in`-Attribut definierten Quellgrafik und der im `in2`-Attribut definierten Zielgrafik angezeigt wird.
- `arithmetic`

  - : Dieser Wert gibt an, dass die im `in`-Attribut definierte Quellgrafik und die im `in2`-Attribut definierte Zielgrafik unter Verwendung der folgenden Formel kombiniert werden:

    `result = k1*i1*i2 + k2*i1 + k3*i2 + k4`

    wobei:
    `i1` und `i2` die entsprechenden Pixelkanalwerte des Eingabebildes bezeichnen, die `in` bzw. `in2` zugeordnet sind, und {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}} und {{SVGAttr("k4")}} die Werte der Attribute mit demselben Namen anzeigen.

## feMorphology

Für {{SVGElement("feMorphology")}} definiert `operator`, ob die Quellgrafik erodiert (d. h. verdünnt) oder dilatiert (verdickt) wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>erode</code> | <code>dilate</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>erode</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `erode`
  - : Dieser Wert dünnt die im {{SVGAttr("in")}}-Attribut definierte Quellgrafik aus.
- `dilate`
  - : Dieser Wert verdickt die im `in`-Attribut definierte Quellgrafik.

## Spezifikationen

{{Specifications}}
