---
title: CSS-Funktion `opacity()`
short-title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
l10n:
  sourceCommit: 35b1d907e22f58fcd01fc5d3d22f1e73089c7f3d
---

Die **CSS-Funktion `opacity()`** wendet Transparenz auf das Eingabebild an. Sie wird als Wert für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet. Weitere Informationen finden Sie unter [CSS](/de/docs/Web/CSS) und [Funktionen](/de/docs/Web/CSS/Reference/Values/Functions).

{{InteractiveExample("CSS Demo: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

> [!NOTE]
> Diese Funktion ähnelt der bekannteren Eigenschaft {{Cssxref("opacity")}}. Der Unterschied besteht darin, dass einige Browser bei Filtern Hardwarebeschleunigung für eine bessere Leistung bieten.

## Syntax

```css
/* Completely transparent */
opacity(0)

/* No change */
opacity()
opacity(1)
opacity(100%)

/* 60% opacity */
opacity(.6)
opacity(60%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt den Grad der Transparenz an. Ein Wert von `0%` macht das Eingabebild vollständig transparent, während es bei `100%` unverändert bleibt. Werte zwischen `0%` und `100%` wirken als lineare Multiplikatoren auf den Effekt. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

### Rückgabewert

Ein {{cssxref("filter-function")}}-Wert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung des SVG-Filters

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit der Filterfunktion `opacity()`, ein Bild mit dem entsprechenden SVG-Filter und das Originalbild.

#### SVG

Mit dem SVG-Filterelement {{SVGElement("feComponentTransfer")}} lässt sich die Deckkraft von Inhalten ebenfalls anpassen. Dazu wird über ein untergeordnetes {{SVGElement("feFuncA")}}-Tabellenelement eine entsprechende Transparenz erzeugt. Wir legen `tableValues` für die Alpha-Filterprimitive fest und können anschließend über die ID des {{SVGElement("filter")}} auf den SVG-Effekt verweisen:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="opacity70" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncA type="table" tableValues="0 0.7" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: opacity(0.7);
filter: opacity(70%);
filter: url("#opacity70"); /* with embedded SVG */
filter: url("fileName.svg#opacity70"); /* external SVG */
```

#### CSS

Wir verwenden CSS, um die Deckkraft von Elementen abhängig von ihrer Klasse `css-filter` oder `svg-filter` anzupassen:

```css live-sample___svg-filter
.css-filter {
  filter: opacity(0.7);
}

.svg-filter {
  filter: url("#opacity70");
}
```

```css hidden live-sample___svg-filter
th,
td {
  padding: 5px;
}
```

```html hidden live-sample___svg-filter
<table>
  <thead>
    <tr>
      <th><code>opacity()</code> filter</th>
      <th>SVG filter equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('svg-filter','100%','280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- Weitere {{cssxref("filter-function")}}-Funktionen, die als Werte für die Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- Die CSS-Eigenschaft {{cssxref("opacity")}}
