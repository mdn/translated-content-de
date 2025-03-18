---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`alignment-baseline`** Attribut legt fest, wie ein Objekt in Bezug auf sein Elternteil ausgerichtet wird. Diese Eigenschaft gibt an, welche Basislinie dieses Elements mit der entsprechenden Basislinie des Elternteils ausgerichtet werden soll. So können beispielsweise {{Glossary("/Baseline/Typography", "alphabetische Basislinien")}} im römischen Text bei Änderungen der Schriftgröße ausgerichtet bleiben. Standardmäßig wird die Basislinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein entsprechendes CSS-Attribut: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Der Wert ist die dominierende Basislinie des Skripts, zu dem das Zeichen gehört - d.h. verwenden Sie die dominierende Basislinie des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}} Auswahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Basislinie")}} des Box mit der seines Elternteils an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand des Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Basislinie des übergeordneten Box plus der halben x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Basislinie des Box an die zentrale Basislinie seines Elternteils an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-top`
  - : Passt den oberen Rand des Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge" Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideographische Zeichenbasislinie des Box an die seines Elternteils an.
- `alphabetic`
  - : Passt die alphabetische Basislinie des Box an die seines Elternteils an.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hanging" Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `mathematical`
  - : Passt die mathematische Basislinie des Box an die seines Elternteils an.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums mit dem oberen Rand des Linien-Box aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Teilbaums mit dem Mittelpunkt des Linien-Box aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums mit dem unteren Rand des Linien-Box aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere: Die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Aus Gründen der Abwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

- CSS {{cssxref("alignment-baseline")}} Eigenschaft
- [CSS Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
