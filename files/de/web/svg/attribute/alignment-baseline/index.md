---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Attribut **`alignment-baseline`** gibt an, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet wird. Diese Eigenschaft legt fest, welche Basislinie dieses Elements mit der entsprechenden Basislinie des Elternteils ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass {{Glossary("/Baseline/Typography", "alphabetische Basislinien")}} in römischem Text über Schriftgrößenänderungen hinweg ausgerichtet bleiben. Standardmäßig wird die Basislinie mit demselben Namen wie der berechnete Wert der `alignment-baseline`-Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut besitzt `alignment-baseline` auch ein entsprechendes CSS-Property: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Anwendungshinweise

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
  - : Der Wert entspricht der "dominant-baseline" des Skripts, zu dem das Zeichen gehört – d. h. die "dominant-baseline" des Elternteils wird verwendet.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}}-Auswahl des Elternteils. Stimmt die entsprechende {{Glossary("baseline/typography", "Basislinie")}} der Box mit der des Elternteils ab.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge"-Basislinie des Textinhalts des Elternteils ausgerichtet.
- `text-bottom`
  - : Stimmt den unteren Rand der Box mit dem oberen Rand des Inhaltsbereichs des Elternteils ab.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge"-Basislinie des Textinhalts des Elternteils ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Basislinie des übergeordneten Elements plus die Hälfte der x-Höhe des Elternteils aus.
- `central`
  - : Stimmt die zentrale Basislinie der Box mit der zentralen Basislinie des übergeordneten Elements ab.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge"-Basislinie des Textinhalts des Elternteils ausgerichtet.
- `text-top`
  - : Stimmt den oberen Rand der Box mit dem oberen Rand des Inhaltsbereichs des Elternteils ab.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge"-Basislinie des Textinhalts des Elternteils ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Stimmt die ideografische Zeichenunterseite der Box mit der des Elternteils ab.
- `alphabetic`
  - : Stimmt die alphabetische Basislinie der Box mit der des Elternteils ab.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hanging"-Basislinie des Textinhalts des Elternteils ausgerichtet.
- `mathematical`
  - : Stimmt die mathematische Basislinie der Box mit der des Elternteils ab.
- `top`
  - : Richtet den oberen Rand des ausgerichteten Teilbaums mit dem oberen Rand der Linienbox aus.
- `center`
  - : Richtet das Zentrum des ausgerichteten Teilbaums mit dem Zentrum der Linienbox aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Teilbaums mit dem unteren Rand der Linienbox aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere wurden die Werte `auto`, `before-edge` und `after-edge` entfernt. Zur Abwärtskompatibilität können `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}}-Eigenschaft verwendet werden.

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

- CSS {{cssxref("alignment-baseline")}}-Eigenschaft
- [CSS-Basislinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
