---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 169f071e7bdff5e9b03cc56259e93907c5ea4f1d
---

{{SVGRef}}

Das **`alignment-baseline`** Attribut spezifiziert, wie ein Objekt im Verhältnis zu seinem Elternteil ausgerichtet wird. Diese Eigenschaft legt fest, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des Elternteils ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass alphabetische Grundlinien in römischen Texten über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Grundlinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut kann {{cssxref("alignment-baseline")}} als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Verwendungsnotizen

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
  - : Der Wert ist die dominante Grundlinie des Schriftsystems, zu dem das Zeichen gehört - das heißt, verwenden Sie die dominante Grundlinie des Elternteils.
- `baseline`
  - : Verwendet die Wahl der {{Glossary("dominant_baseline", "dominanten Grundlinie")}} des Elternteils. Stimmt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box mit der ihres Elternteils überein.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "before-edge" Grundlinie des elterlichen Textelementinhalts ausgerichtet.
- `text-bottom`
  - : Stimmt den unteren Rand der Box mit dem oberen Rand des Inhaltsbereichs des Elternteils überein.
- `text-before-edge`

  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "text-before-edge" Grundlinie des elterlichen Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Grundlinie der Elternbox plus der halben x-Höhe des Elternteils aus.
- `central`
  - : Stimmt die zentrale Grundlinie der Box mit der zentralen Grundlinie ihres Elternteils überein.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "after-edge" Grundlinie des elterlichen Textelementinhalts ausgerichtet.
- `text-top`
  - : Stimmt den oberen Rand der Box mit dem oberen Rand des Inhaltsbereichs des Elternteils überein.
- `text-after-edge`

  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "text-after-edge" Grundlinie des elterlichen Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Stimmt die ideografische Zeichenunterseite der Box mit der des Elternteils überein.
- `alphabetic`
  - : Stimmt die alphabetische Grundlinie der Box mit der ihres Elternteils überein.
- `hanging`
  - : Der Ausrichtungspunkt des Objekts, das ausgerichtet wird, wird mit der "hanging" Grundlinie des elterlichen Textelementinhalts ausgerichtet.
- `mathematical`
  - : Stimmt die mathematische Grundlinie der Box mit der ihres Elternteils überein.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Unterbaums mit dem oberen Rand der Textzeilenbox aus.
- `center`
  - : Richtet das Zentrum des ausgerichteten Unterbaums mit dem Zentrum der Textzeilenbox aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Unterbaums mit dem unteren Rand der Textzeilenbox aus.

SVG 2 führt einige Änderungen an der Definition dieser Eigenschaft ein. Besonders: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Zur Rückwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

Für die Objektausrichtung in anderen Elementen (wie {{SVGElement("text")}}), siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Grundlinenausrichtung](/de/docs/Web/CSS/CSS_box_alignment#baseline_alignment)
