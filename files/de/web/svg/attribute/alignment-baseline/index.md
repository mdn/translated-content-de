---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}

Das **`alignment-baseline`**-Attribut bestimmt, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet wird. Diese Eigenschaft gibt an, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des übergeordneten Elements ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass alphabetische Grundlinien in römischem Text über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Grundlinie mit dem gleichen Namen wie der berechnete Wert der `alignment-baseline`-Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut kann `alignment-baseline` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `auto` {{deprecated_inline}}
  - : Der Wert ist die dominierende Grundlinie des Schriftsystems, zu dem das Zeichen gehört - d. h. verwenden Sie die dominierende Grundlinie des übergeordneten Elements.
- `baseline`
  - : Verwendet die Wahl der {{Glossary("dominant_baseline", "dominierenden Grundlinie")}} des übergeordneten Elements. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} des Rahmens an die des übergeordneten Elements an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "before-edge"-Grundlinie des Textinhalts-Elements des übergeordneten Elements ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand des Rahmens an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "text-before-edge"-Grundlinie des Textinhalts-Elements des übergeordneten Elements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` gemappt werden.

- `middle`
  - : Richte den vertikalen Mittelpunkt des Rahmens mit der Grundlinie des übergeordneten Rahmens plus die halbe x-Höhe des übergeordneten Elements aus.
- `central`
  - : Passt die zentrale Grundlinie des Rahmens an die zentrale Grundlinie seines übergeordneten Elements an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "after-edge"-Grundlinie des Textinhalts-Elements des übergeordneten Elements ausgerichtet.
- `text-top`
  - : Passt den oberen Rand des Rahmens an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "text-after-edge"-Grundlinie des Textinhalts-Elements des übergeordneten Elements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` gemappt werden.

- `ideographic`
  - : Passt die ideographische Zeichenfläche unter der Grundlinie des Rahmens an die des übergeordneten Elements an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie des Rahmens an die des übergeordneten Elements an.
- `hanging`
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "hanging"-Grundlinie des Textinhalts-Elements des übergeordneten Elements ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie des Rahmens an die des übergeordneten Elements an.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums am oberen Rand des Linienkastens aus.
- `center`
  - : Richtet das Zentrum des ausgerichteten Teilbaums am Zentrum des Linienkastens aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums am unteren Rand des Linienkastens aus.

SVG 2 führt einige Änderungen an der Definition dieser Eigenschaft ein. Insbesondere die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Aus Gründen der Rückwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` gemappt werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}}-Eigenschaft verwendet werden.

## Beispiel

```html
<svg
  width="300"
  height="120"
  viewBox="0 0 300 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Materialization of anchors -->
  <path
    d="M60,10 L60,110
              M30,10 L300,10
              M30,65 L300,65
              M30,110 L300,110
              "
    stroke="grey" />

  <!-- Anchors in action -->
  <text alignment-baseline="hanging" x="60" y="10">A hanging</text>

  <text alignment-baseline="middle" x="60" y="65">A middle</text>

  <text alignment-baseline="baseline" x="60" y="110">A baseline</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="10" r="3" fill="red" />
  <circle cx="60" cy="65" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text{
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example")}}

Um die Ausrichtung von Objekten in anderen Elementen (wie {{SVGElement("text")}}) zu sehen, schauen Sie sich {{SVGAttr("dominant-baseline")}} an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Grundlinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment#baseline_alignment)
