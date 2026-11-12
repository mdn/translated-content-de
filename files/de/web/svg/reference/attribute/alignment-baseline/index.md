---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`alignment-baseline`** gibt an, wie ein Objekt relativ zu seinem Elternelement ausgerichtet wird. Es legt fest, welche Grundlinie dieses Elements an der entsprechenden Grundlinie des Elternelements ausgerichtet werden soll. So können beispielsweise {{Glossary("Baseline/Typography", "alphabetische Grundlinien")}} in lateinischer Schrift auch bei unterschiedlichen Schriftgrößen auf einer Linie bleiben. Standardmäßig wird die Grundlinie verwendet, deren Name dem berechneten Wert der Eigenschaft `alignment-baseline` entspricht.

> [!NOTE]
> Als Präsentationsattribut hat `alignment-baseline` auch ein CSS-Gegenstück: {{cssxref("alignment-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

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

Informationen zur Ausrichtung von Objekten in anderen Elementen (wie {{SVGElement("text")}}) finden Sie unter {{SVGAttr("dominant-baseline")}}.

## Hinweise zur Verwendung

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
  - : Der Wert ist die dominant-baseline des Schriftsystems, zu dem das Zeichen gehört – es wird also die dominant-baseline des Elternelements verwendet.
- `baseline`
  - : Verwendet die {{svgattr("dominant-baseline")}}-Festlegung des Elternelements. Richtet die entsprechende {{Glossary("baseline/typography", "Grundlinie")}} der Box an der des Elternelements aus.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts wird an der „before-edge“-Grundlinie des übergeordneten Textelements ausgerichtet.
- `text-bottom`
  - : Richtet die Unterkante der Box an der Oberkante des Inhaltsbereichs des Elternelements aus.
- `text-before-edge`
  - : Der Ausrichtungspunkt des Objekts wird an der „text-before-edge“-Grundlinie des übergeordneten Textelements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-top` zugeordnet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Grundlinie der übergeordneten Box plus der halben x-Höhe des Elternelements aus.
- `central`
  - : Richtet die zentrale Grundlinie der Box an der zentralen Grundlinie des Elternelements aus.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts wird an der „after-edge“-Grundlinie des übergeordneten Textelements ausgerichtet.
- `text-top`
  - : Richtet die Oberkante der Box an der Oberkante des Inhaltsbereichs des Elternelements aus.
- `text-after-edge`
  - : Der Ausrichtungspunkt des Objekts wird an der „text-after-edge“-Grundlinie des übergeordneten Textelements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann `text-bottom` zugeordnet werden.

- `ideographic`
  - : Richtet die Grundlinie an der Unterseite ideografischer Zeichen der Box an der entsprechenden Grundlinie des Elternelements aus.
- `alphabetic`
  - : Richtet die alphabetische Grundlinie der Box an der des Elternelements aus.
- `hanging`
  - : Der Ausrichtungspunkt des Objekts wird an der „hanging“-Grundlinie des übergeordneten Textelements ausgerichtet.
- `mathematical`
  - : Richtet die mathematische Grundlinie der Box an der des Elternelements aus.
- `top`
  - : Richtet die Oberkante des ausgerichteten Teilbaums an der Oberkante der Zeilenbox aus.
- `center`
  - : Richtet die Mitte des ausgerichteten Teilbaums an der Mitte der Zeilenbox aus.
- `bottom`
  - : Richtet die Unterkante des ausgerichteten Teilbaums an der Unterkante der Zeilenbox aus.

SVG 2 führt einige Änderungen an der Definition dieser Eigenschaft ein. Insbesondere wurden die Werte `auto`, `before-edge` und `after-edge` entfernt. Aus Gründen der Abwärtskompatibilität kann `text-before-edge` `text-top` und `text-after-edge` `text-bottom` zugeordnet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der Eigenschaft {{cssxref("vertical-align")}} verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("alignment-baseline")}}
- [CSS-Grundlinienausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview#baseline_alignment)
