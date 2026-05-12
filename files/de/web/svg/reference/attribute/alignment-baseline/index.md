---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Das **`alignment-baseline`**-Attribut bestimmt, wie ein Objekt im Verhältnis zu seinem Elternteil ausgerichtet wird. Diese Eigenschaft legt fest, welche Grundlinie dieses Elements mit der entsprechenden Grundlinie des Elternteils ausgerichtet werden soll. Dies ermöglicht es beispielsweise {{Glossary("Baseline/Typography", "alphabetischen Grundlinien")}} im römischen Text, bei Größenänderungen der Schriftart ausgerichtet zu bleiben. Standardmäßig wird die Grundlinie mit dem gleichen Namen wie der berechnete Wert der `alignment-baseline`-Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Nutzungshinweise

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
  - : Der Wert ist die Dominant-Baseline des Skripts, zu dem das Zeichen gehört - d.h. verwenden Sie die Dominant-Baseline des Elternteils.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}}-Auswahl des Elternteils. Passt die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an die des Elternteils an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "before-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `text-bottom`
  - : Passt den Boden der Box an die Oberkante des Inhaltsbereichs des Elternteils an.
- `text-before-edge`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-before-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann zu `text-top` zugeordnet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Grundlinie der Elternbox plus die halbe x-Höhe des Elternteils aus.
- `central`
  - : Passt die zentrale Grundlinie der Box an die zentrale Grundlinie ihres Elternteils an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "after-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `text-top`
  - : Passt die Oberkante der Box an die Oberkante des Inhaltsbereichs des Elternteils an.
- `text-after-edge`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "text-after-edge"-Grundlinie des übergeordneten Textelementes ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann zu `text-bottom` zugeordnet werden.

- `ideographic`
  - : Passt die ideografische Zeichenunter-Seiten-Grundlinie der Box an die ihres Elternteils an.
- `alphabetic`
  - : Passt die alphabetische Grundlinie der Box an die ihres Elternteils an.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der "hanging"-Grundlinie des übergeordneten Textelementes ausgerichtet.
- `mathematical`
  - : Passt die mathematische Grundlinie der Box an die ihres Elternteils an.
- `top`
  - : Richtet die Oberseite des ausgerichteten Unterbaums mit der Oberseite der Linienbox aus.
- `center`
  - : Richtet das Zentrum des ausgerichteten Unterbaums mit dem Zentrum der Linienbox aus.
- `bottom`
  - : Richtet den unteren Rand des ausgerichteten Unterbaums an der Unterseite der Linienbox aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Für die Abwärtskompatibilität kann `text-before-edge` zu `text-top` und `text-after-edge` zu `text-bottom` zugeordnet werden. Weder `text-before-edge` noch `text-after-edge` sollte mit der {{cssxref("vertical-align")}}-Eigenschaft verwendet werden.

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

Weitere Informationen zur Objektausrichtung in anderen Elementen (wie {{SVGElement("text")}}) finden Sie unter {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("alignment-baseline")}} Eigenschaft
- [CSS-Grundlinienausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
