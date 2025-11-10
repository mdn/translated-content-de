---
title: operator
slug: Web/SVG/Reference/Attribute/operator
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Das **`operator`**-Attribut hat zwei Bedeutungen, abhängig vom Kontext, in dem es verwendet wird. Entweder definiert es die Compositing- oder Morphing-Operation, die ausgeführt werden soll.

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

## feComposite

Für {{SVGElement("feComposite")}} definiert `operator` die Compositing-Operation, die ausgeführt werden soll.

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
  - : Dieser Wert gibt an, dass die im {{SVGAttr("in")}}-Attribut definierte Quellgrafik über die im {{SVGAttr("in2")}}-Attribut definierte Zielgrafik gelegt wird.
- `in`
  - : Dieser Wert gibt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die die im `in2`-Attribut definierte Zielgrafik überlappen, die Zielgrafik ersetzen.
- `out`
  - : Dieser Wert gibt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die außerhalb der im `in2`-Attribut definierten Zielgrafik liegen, angezeigt werden.
- `atop`
  - : Dieser Wert gibt an, dass die Teile der im `in`-Attribut definierten Quellgrafik, die die im `in2`-Attribut definierte Zielgrafik überlappen, die Zielgrafik ersetzen. Die Teile der Zielgrafik, die nicht mit der Quellgrafik überlappen, bleiben unberührt.
- `xor`
  - : Dieser Wert gibt an, dass die nicht überlappenden Bereiche der im `in`-Attribut definierten Quellgrafik und der im `in2`-Attribut definierten Zielgrafik kombiniert werden.
- `lighter`
  - : Dieser Wert gibt an, dass die Summe der im `in`-Attribut definierten Quellgrafik und der im `in2`-Attribut definierten Zielgrafik angezeigt wird.
- `arithmetic`
  - : Dieser Wert gibt an, dass die im `in`-Attribut definierte Quellgrafik und die im `in2`-Attribut definierte Zielgrafik mithilfe der folgenden Formel kombiniert werden:

    `result = k1*i1*i2 + k2*i1 + k3*i2 + k4`

    wobei:
    `i1` und `i2` die entsprechenden Pixelkanalwerte des Eingabebildes angeben, die `in` und `in2` zugeordnet sind, und {{SVGAttr("k1")}}, {{SVGAttr("k2")}}, {{SVGAttr("k3")}}, und {{SVGAttr("k4")}} die Werte der Attribute mit demselben Namen angeben.

## feMorphology

Für {{SVGElement("feMorphology")}} definiert `operator`, ob die Quelle (d.h. verdünnt) erodiert oder aufgeweitet (aufgefüllt) wird.

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
  - : Dieser Wert verdünnt die im {{SVGAttr("in")}}-Attribut definierte Quellgrafik.
- `dilate`
  - : Dieser Wert verbreitert die im `in`-Attribut definierte Quellgrafik.

## Spezifikationen

{{Specifications}}
