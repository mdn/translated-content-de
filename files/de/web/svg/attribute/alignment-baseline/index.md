---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 59cd8d332f9b3548862495be6069bcca4b0c7016
---

{{SVGRef}}

Das Attribut **`alignment-baseline`** gibt an, wie ein Objekt in Bezug auf sein übergeordnetes Element ausgerichtet ist. Diese Eigenschaft legt fest, welche Basislinie dieses Elements mit der entsprechenden Basislinie des übergeordneten Elements ausgerichtet werden soll. Zum Beispiel ermöglicht dies, dass alphabetische Basislinien im lateinischen Text unabhängig von Änderungen der Schriftgröße ausgerichtet bleiben. Standardmäßig wird die Basislinie mit demselben Namen wie der berechnete Wert der Eigenschaft `alignment-baseline` verwendet.

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
  - : Der Wert ist die dominant-baseline des Skripts, zu dem das Zeichen gehört - d.h., die dominant-baseline des übergeordneten Elements wird verwendet.
- `baseline`
  - : Verwendet die Wahl der {{svgattr("dominant-baseline")}} des übergeordneten Elements. Stimmt die entsprechende [Basislinie](/de/docs/Glossar/Basislinie/Typografie) der Box mit derjenigen seines übergeordneten Elements ab.
- `before-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der „before-edge“ Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-bottom`
  - : Stimmt die Unterkante der Box mit der Oberkante des Inhaltsbereichs des übergeordneten Elements ab.
- `text-before-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der „text-before-edge“ Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-top` abgebildet werden.

- `middle`
  - : Richtet den vertikalen Mittelpunkt der Box mit der Basislinie des übergeordneten Box plus der halben x-Höhe des übergeordneten Elements aus.
- `central`
  - : Stimmt die zentrale Basislinie der Box mit der zentralen Basislinie des übergeordneten Elements ab.
- `after-edge` {{deprecated_inline}}
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der „after-edge“ Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `text-top`
  - : Stimmt die Oberkante der Box mit der Oberkante des Inhaltsbereichs des übergeordneten Elements ab.
- `text-after-edge`

  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der „text-after-edge“ Basislinie des übergeordneten Textelementinhalts ausgerichtet.

    > [!NOTE]
    > Dieses Schlüsselwort kann auf `text-bottom` abgebildet werden.

- `ideographic`
  - : Stimmt die ideografische Zeichenanwendungsunterseite der Box mit der des übergeordneten Elements ab.
- `alphabetic`
  - : Stimmt die alphabetische Basislinie der Box mit der des übergeordneten Elements ab.
- `hanging`
  - : Der Ausrichtungspunkt des auszurichtenden Objekts wird mit der „hanging“ Basislinie des übergeordneten Textelementinhalts ausgerichtet.
- `mathematical`
  - : Stimmt die mathematische Basislinie der Box mit der des übergeordneten Elements ab.
- `top`
  - : Richtet die Oberseite des ausgerichteten Teilbaums mit der Oberseite der Linienbox aus.
- `center`
  - : Richtet die Mitte des ausgerichteten Teilbaums mit der Mitte der Linienbox aus.
- `bottom`
  - : Richtet die Unterseite des ausgerichteten Teilbaums mit der Unterseite der Linienbox aus.

SVG 2 führt einige Änderungen an der Definition dieser Eigenschaft ein. Insbesondere: die Werte `auto`, `before-edge` und `after-edge` wurden entfernt. Zur Rückwärtskompatibilität kann `text-before-edge` auf `text-top` und `text-after-edge` auf `text-bottom` abgebildet werden. Weder `text-before-edge` noch `text-after-edge` sollten in Verbindung mit der {{cssxref("vertical-align")}} Eigenschaft verwendet werden.

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

Für die Ausrichtung von Objekten in anderen Elementen (wie {{SVGElement("text")}}) siehe {{SVGAttr("dominant-baseline")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Basislinienausrichtung](/de/docs/Web/CSS/CSS_box_alignment#baseline_alignment)
