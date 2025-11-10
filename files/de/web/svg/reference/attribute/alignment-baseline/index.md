---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`alignment-baseline`**-Attribut bestimmt, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet wird. Diese Eigenschaft legt fest, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des übergeordneten Elements ausgerichtet werden soll. Beispielsweise ermöglicht dies, dass {{Glossary("/Baseline/Typography", "alphabetische Grundlinien")}} in römischem Text über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Grundlinie mit demselben Namen wie der berechnete Wert der `alignment-baseline`-Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein CSS-Eigenschaftsgegenstück: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Der Wert ist die `"dominant-baseline"` des Skripts, zu dem das Zeichen gehört - d.h. verwenden Sie die `"dominant-baseline"` des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}}-Auswahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} des Rahmens an die seines Elternteils an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts wird mit der "before-edge"-Grundlinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-bottom`
  - : Passt den unteren Teil des Rahmens an den oberen Teil des Inhaltsbereichs des Elternteils an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts wird mit der "text-before-edge"-Grundlinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt des Rahmens mit der Grundlinie des übergeordneten Rahmens plus der Hälfte der x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Grundlinie des Rahmens an die zentrale Grundlinie seines Elternteils an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts wird mit der "after-edge"-Grundlinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-top`
  - : Passt den oberen Teil des Rahmens an den oberen Teil des Inhaltsbereichs des Elternteils an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts wird mit der "text-after-edge"-Grundlinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideografische Zeichen-Gesichtsgrundlinie des Rahmens an die seines Elternteils an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie des Rahmens an die seines Elternteils an.
- `hanging`
  - : Der Ausrichtungspunkt des ausgerichteten Objekts wird mit der "hängenden" Grundlinie des übergeordneten Textelementinhalts ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie des Rahmens an die seines Elternteils an.
- `top`
  - : Richtet den oberen Teil des ausgerichteten Teilbaums mit dem oberen Teil des Linienrahmens aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Teilbaums mit dem Mittelpunkt des Linienrahmens aus.
- `bottom`
  - : Richtet den unteren Teil des ausgerichteten Teilbaums mit dem unteren Teil des Linienrahmens aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere wurden die Werte `auto`, `before-edge` und `after-edge` entfernt. Aus Gründen der Rückwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}}-Eigenschaft verwendet werden.

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

{{EmbedLiveSample("Beispiel")}}

Für die Objektausrichtung in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("alignment-baseline")}}-Eigenschaft
- [CSS Grundlinienaussrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
