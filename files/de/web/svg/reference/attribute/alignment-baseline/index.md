---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

Das **`alignment-baseline`** Attribut gibt an, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet wird. Diese Eigenschaft spezifiziert, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des übergeordneten Elements ausgerichtet werden soll. Dadurch können beispielsweise {{Glossary("/Baseline/Typography", "alphabetische Grundlinien")}} in römischem Text bei Änderungen der Schriftgröße ausgerichtet bleiben. Standardmäßig wird die Grundlinie mit dem gleichen Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein entsprechendes CSS-Property: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Der Wert ist die dominante Grundlinie des Skripts, zu dem das Zeichen gehört - d.h. verwenden Sie die dominante Grundlinie des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}} Wahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an die des Elternteils an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge" Grundlinie des übergeordneten Textinhaltelements ausgerichtet.
- `text-bottom`
  - : Passt die Unterseite der Box an die Oberseite des Inhaltsbereichs des Elternteils an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge" Grundlinie des übergeordneten Textinhaltelements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Grundlinie der Elternbox plus die halbe x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres Elternteils an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge" Grundlinie des übergeordneten Textinhaltelements ausgerichtet.
- `text-top`
  - : Passt die Oberseite der Box an die Oberseite des Inhaltsbereichs des Elternteils an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge" Grundlinie des übergeordneten Textinhaltelements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideografische Zeichen-Gesicht-Unterseiten-Grundlinie der Box an die ihrer Elternbox an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie der Box an die ihrer Elternbox an.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hanging" Grundlinie des übergeordneten Textinhaltelements ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die ihrer Elternbox an.
- `top`
  - : Richtet die Oberseite des ausgerichteten Teilbaums an der Oberseite der Line-Box aus.
- `center`
  - : Richtet die Mitte des ausgerichteten Teilbaums an der Mitte der Line-Box aus.
- `bottom`
  - : Richtet die Unterseite des ausgerichteten Teilbaums an der Unterseite der Line-Box aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Aus Gründen der Abwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

Für die Objekt-Ausrichtung in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("alignment-baseline")}} Eigenschaft
- [CSS Baseline-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
