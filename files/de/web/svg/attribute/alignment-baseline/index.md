---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{SVGRef}}

Das **`alignment-baseline`** Attribut gibt an, wie ein Objekt im Verhältnis zu seinem übergeordneten Element ausgerichtet wird. Diese Eigenschaft legt fest, welche Basislinie dieses Elements an der entsprechenden Basislinie des übergeordneten Elements ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass alphabetische Basislinien im römischen Text bei Änderungen der Schriftgröße ausgerichtet bleiben. Standardmäßig wird die Basislinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut kann {{cssxref("alignment-baseline")}} als CSS-Eigenschaft verwendet werden.

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
  - : Der Wert ist die dominierende Basislinie des Skripts, zu dem das Zeichen gehört - d.h. nutzen Sie die dominierende Basislinie des übergeordneten Elements.
- `baseline`
  - : Verwendet die Wahl der {{svgattr("dominant-baseline")}} des übergeordneten Elements. Passt die entsprechende {{Glossary("baseline/typography", "Basislinie")}} des Rechtecks dem der übergeordneten Ebene an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand des Rechtecks an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt des Rechtecks an der Basislinie des übergeordneten Rechtecks plus der halben x-Höhe des übergeordneten Elements aus.
- `central`
  - : Passt die zentrale Basislinie des Rechtecks der zentralen Basislinie seines übergeordneten Elements an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-top`
  - : Passt den oberen Rand des Rechtecks an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideografische Zeichenfläche des Rechtecks der des übergeordneten Elements an.
- `alphabetic`
  - : Passt die alphabetische Basislinie des Rechtecks der des übergeordneten Elements an.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hanging" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `mathematical`
  - : Passt die mathematische Basislinie des Rechtecks der des übergeordneten Elements an.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums am oberen Rand des Linienrahmens aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Teilbaums am Mittelpunkt des Linienrahmens aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums am unteren Rand des Linienrahmens aus.

SVG 2 führt einige Änderungen an der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Für die Abwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

Für die Objektausrichtung in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
