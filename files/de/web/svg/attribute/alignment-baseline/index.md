---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{SVGRef}}

Das **`alignment-baseline`** Attribut gibt an, wie ein Objekt in Bezug auf sein Elternelement ausgerichtet ist. Diese Eigenschaft legt fest, welche Grundlinie dieses Elements an der entsprechenden Grundlinie des Elternteils ausgerichtet werden soll. Dies ermöglicht es beispielsweise, alphabetische Grundlinien im römischen Text bei Änderungen der Schriftgröße ausgerichtet zu halten. Der Standardwert ist die Grundlinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft.

> [!NOTE]
> Als Darstellungsattribut kann {{cssxref("alignment-baseline")}} als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Anwendungsnotizen

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
  - : Der Wert ist die dominante Grundlinie des Skripts, zu dem das Zeichen gehört - d.h., verwenden Sie die dominante Grundlinie des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}} Auswahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an die ihres Elternteils an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge"-Grundlinie des Elternelements des Textinhalts ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge"-Grundlinie des Elternelements des Textinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-top` zugeordnet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Grundlinie der Elternbox plus der halben x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres Elternteils an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge"-Grundlinie des Elternelements des Textinhalts ausgerichtet.
- `text-top`
  - : Passt den oberen Rand der Box an den oberen Rand des Inhaltsbereichs des Elternteils an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge"-Grundlinie des Elternelements des Textinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-bottom` zugeordnet werden.

- `ideographic`
  - : Passt die ideographische Zeichenunterseite der Box an die ihres Elternteils an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie der Box an die ihres Elternteils an.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hängenden" Grundlinie des Elternelements des Textinhalts ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die ihres Elternteils an.
- `top`
  - : Richtet den oberen Teil des ausgerichteten Unterbaums am oberen Rand des Linienkastens aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Unterbaums am Mittelpunkt des Linienkastens aus.
- `bottom`
  - : Richtet den unteren Teil des ausgerichteten Unterbaums am unteren Rand des Linienkastens aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere wurden die Werte `auto`, `before-edge` und `after-edge` entfernt. Aus Gründen der Abwärtskompatibilität kann `text-before-edge` `text-top` zugeordnet werden und `text-after-edge` `text-bottom`. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

Für die Ausrichtung in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausrichtung von CSS-Grundlinien](/de/docs/Web/CSS/CSS_box_alignment/box_alignment#baseline_alignment)
