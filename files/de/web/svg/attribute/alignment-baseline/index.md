---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}

Das **`alignment-baseline`** Attribut legt fest, wie ein Objekt im Verhältnis zu seinem übergeordneten Element ausgerichtet wird. Diese Eigenschaft gibt an, welche Basislinie dieses Elements mit der entsprechenden Basislinie des übergeordneten Elements ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass die alphabetischen Basislinien im römischen Text bei Änderungen der Schriftgröße ausgerichtet bleiben. Standardmäßig wird die Basislinie mit demselben Namen wie der berechnete Wert der `alignment-baseline` Eigenschaft verwendet.

> [!NOTE]
> Als Präsentationsattribut kann `alignment-baseline` als eine CSS-Eigenschaft verwendet werden.

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
  - : Der Wert ist die dominierende Basislinie des Skripts, zu dem das Zeichen gehört - d.h. verwenden Sie die dominierende Basislinie des übergeordneten Elements.
- `baseline`
  - : Nutzt die {{Glossary("dominant baseline")}} Wahl des übergeordneten Elements. Passt die entsprechende {{Glossary("baseline/typography", "Basislinie")}} der Box der des übergeordneten Elements an.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts wird mit der "before-edge"-Basislinie des übergeordneten Textinhalts-Elements ausgerichtet.
- `text-bottom`
  - : Passt den unteren Bereich der Box an den oberen Bereich des Inhaltsbereichs des übergeordneten Elements an.
- `text-before-edge`

  - : Der Ausrichtungspunkt des Objekts wird mit der "text-before-edge"-Basislinie des übergeordneten Textinhalts-Elements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box an der Basislinie der übergeordneten Box plus die Hälfte der x-Höhe des übergeordneten Elements aus.
- `central`
  - : Passt die zentrale Basislinie der Box an die zentrale Basislinie ihres übergeordneten Elements an.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des Objekts wird mit der "after-edge"-Basislinie des übergeordneten Textinhalts-Elements ausgerichtet.
- `text-top`
  - : Passt den oberen Bereich der Box an den oberen Bereich des Inhaltsbereichs des übergeordneten Elements an.
- `text-after-edge`

  - : Der Ausrichtungspunkt des Objekts wird mit der "text-after-edge"-Basislinie des übergeordneten Textinhalts-Elements ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Passt die ideografische Zeichenflächen-Unterseiten-Basislinie der Box an die ihres übergeordneten Elements an.
- `alphabetic`
  - : Passt die alphabetische Basislinie der Box an die ihres übergeordneten Elements an.
- `hanging`
  - : Der Ausrichtungspunkt des Objekts wird mit der "hanging"-Basislinie des übergeordneten Textinhalts-Elements ausgerichtet.
- `mathematical`
  - : Passt die mathematische Basislinie der Box an die ihres übergeordneten Elements an.
- `top`
  - : Richtet den oberen Bereich des ausgerichteten Teilbaums an der oberen Linie der Box aus.
- `center`
  - : Richtet den mittleren Bereich des ausgerichteten Teilbaums an der Mitte der Linienbox aus.
- `bottom`
  - : Richtet den unteren Bereich des ausgerichteten Teilbaums am unteren Ende der Linienbox aus.

SVG 2 führt einige Änderungen in der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Für die Rückwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

## Beispiel

```html
<svg
  width="300"
  height="120"
  viewBox="0 0 300 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Darstellung der Ankerpunkte -->
  <path
    d="M60,10 L60,110
              M30,10 L300,10
              M30,65 L300,65
              M30,110 L300,110
              "
    stroke="grey" />

  <!-- Ankerpunkte in Aktion -->
  <text alignment-baseline="hanging" x="60" y="10">A hanging</text>

  <text alignment-baseline="middle" x="60" y="65">A middle</text>

  <text alignment-baseline="baseline" x="60" y="110">A baseline</text>

  <!-- Darstellung der Ankerpunkte -->
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

- [CSS-Basislinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment#baseline_alignment)
