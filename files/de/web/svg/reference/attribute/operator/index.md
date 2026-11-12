---
title: operator
slug: Web/SVG/Reference/Attribute/operator
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`operator`** hat je nach Verwendungskontext zwei Bedeutungen: Es legt entweder die auszuführende Kompositions- oder die Morphologieoperation fest.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feComposite")}}
- {{SVGElement("feMorphology")}}

## feComposite

Für {{SVGElement("feComposite")}} legt `operator` die auszuführende Kompositionsoperation fest.

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
  - : Dieser Wert gibt an, dass die im Attribut {{SVGAttr("in")}} definierte Quellgrafik über der im Attribut {{SVGAttr("in2")}} definierten Zielgrafik platziert wird.
- `in`
  - : Dieser Wert gibt an, dass die Teile der im Attribut `in` definierten Quellgrafik, die sich mit der im Attribut `in2` definierten Zielgrafik überlappen, die Zielgrafik ersetzen.
- `out`
  - : Dieser Wert gibt an, dass die Teile der im Attribut `in` definierten Quellgrafik angezeigt werden, die außerhalb der im Attribut `in2` definierten Zielgrafik liegen.
- `atop`
  - : Dieser Wert gibt an, dass die Teile der im Attribut `in` definierten Quellgrafik, die sich mit der im Attribut `in2` definierten Zielgrafik überlappen, die Zielgrafik ersetzen. Die Teile der Zielgrafik, die sich nicht mit der Quellgrafik überlappen, bleiben unverändert.
- `xor`
  - : Dieser Wert gibt an, dass die nicht überlappenden Bereiche der im Attribut `in` definierten Quellgrafik und der im Attribut `in2` definierten Zielgrafik kombiniert werden.
- `lighter`
  - : Dieser Wert gibt an, dass die Summe der im Attribut `in` definierten Quellgrafik und der im Attribut `in2` definierten Zielgrafik angezeigt wird.
- `arithmetic`
  - : Dieser Wert gibt an, dass die im Attribut `in` definierte Quellgrafik und die im Attribut `in2` definierte Zielgrafik anhand der folgenden Formel kombiniert werden:

    `result = k1*i1*i2 + k2*i1 + k3*i2 + k4`

    Dabei bezeichnen `i1` und `i2` die entsprechenden Pixelkanalwerte der Eingabebilder, die `in` beziehungsweise `in2` zugeordnet sind. {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}} und {{SVGAttr("k4")}} bezeichnen die Werte der gleichnamigen Attribute.

## feMorphology

Für {{SVGElement("feMorphology")}} legt `operator` fest, ob die Quellgrafik erodiert (also ausgedünnt) oder dilatiert (also verdickt) wird.

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
  - : Dieser Wert dünnt die im Attribut {{SVGAttr("in")}} definierte Quellgrafik aus.
- `dilate`
  - : Dieser Wert verdickt die im Attribut `in` definierte Quellgrafik.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
  font:
    20px "Helvetica",
    "Arial",
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

  <text x="0" y="15">Normal text</text>
  <text x="0" y="40" filter="url(#erode)">Thin text</text>
  <text x="0" y="65" filter="url(#dilate)">Fat text</text>
</svg>
```

{{EmbedLiveSample("Example", "240", "200")}}

## Spezifikationen

{{Specifications}}
