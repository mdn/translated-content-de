---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 0a4d5b451cc54599ed2b99cef4fdd39c3fd96a3d
---

{{SVGRef}}

Das **`alignment-baseline`** Attribut legt fest, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet wird. Diese Eigenschaft gibt an, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des übergeordneten Elements ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass {{Glossary("/Baseline/Typography", "alphabetische Grundlinien")}} in römischem Text über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Grundlinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

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
  - : Der Wert ist die dominante Grundlinie des Skripts, zu dem das Zeichen gehört - d.h., verwenden Sie die dominante Grundlinie des übergeordneten Elements.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}} Wahl des übergeordneten Elements. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an die ihres übergeordneten Elements an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "before-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `text-bottom`
  - : Passt den unteren Rand der Box an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "text-before-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Grundlinie des übergeordneten Elements plus die Hälfte der x-Höhe des übergeordneten Elements aus.
- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres übergeordneten Elements an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "after-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `text-top`
  - : Passt den oberen Rand der Box an den oberen Rand des Inhaltsbereichs des übergeordneten Elements an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "text-after-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideographische Zeichenbasislinie der Box an die ihres übergeordneten Elements an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie der Box an die ihres übergeordneten Elements an.
- `hanging`
  - : Der Ausrichtungspunkt des ausgerichteten Objekts ist mit der "hanging"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die ihres übergeordneten Elements an.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums mit dem oberen Rand der Zeilenbox aus.
- `center`
  - : Richtet den Mittelpunkt des ausgerichteten Teilbaums mit dem Zentrum der Zeilenbox aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums mit dem unteren Rand der Zeilenbox aus.

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

- CSS {{cssxref("alignment-baseline")}} Eigenschaft
- [CSS Grundlinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
