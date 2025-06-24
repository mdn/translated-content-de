---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das Attribut **`alignment-baseline`** gibt an, wie ein Objekt im Verhältnis zu seinem übergeordneten Element ausgerichtet wird. Diese Eigenschaft legt fest, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des Elternteils ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass {{Glossary("/Baseline/Typography", "alphabetische Grundlinien")}} bei römischen Texten über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Grundlinie verwendet, die denselben Namen wie der berechnete Wert der Eigenschaft `alignment-baseline` trägt.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein entsprechendes CSS-Property: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

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
  - : Der Wert ist die dominierende Grundlinie des Skripts, zu dem das Zeichen gehört, d.h. verwenden Sie die dominierende Grundlinie des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}}-Auswahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an die des übergeordneten Elements an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "before-edge"-Grundlinie des übergeordneten Textelement-Inhalts ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "text-before-edge"-Grundlinie des übergeordneten Textelement-Inhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-top` zugeordnet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Grundlinie der Eltern-Box plus der halben x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres übergeordneten Elements an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "after-edge"-Grundlinie des übergeordneten Textelement-Inhalts ausgerichtet.
- `text-top`
  - : Passt den oberen Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "text-after-edge"-Grundlinie des übergeordneten Textelement-Inhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-bottom` zugeordnet werden.

- `ideographic`
  - : Passt die ideographische Zeichenunterseite der Box an die des übergeordneten Elements an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie der Box an die Grundlinie des übergeordneten Elements an.
- `hanging`
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "hängenden" Grundlinie des übergeordneten Textelement-Inhalts ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die des übergeordneten Elements an.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums am oberen Rand der Linien-Box aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Teilbaums am Mittelpunkt der Linien-Box aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums am unteren Rand der Linien-Box aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Aus Gründen der Abwärtskompatibilität kann `text-before-edge` `text-top` und `text-after-edge` `text-bottom` zugeordnet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}}-Eigenschaft verwendet werden.

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
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example")}}

Für die Objektausrichtung in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("alignment-baseline")}}-Eigenschaft
- [CSS-Grundlinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
