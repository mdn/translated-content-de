---
title: CSS-Funktion `invert()`
short-title: invert()
slug: Web/CSS/Reference/Values/filter-function/invert
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`invert()`** invertiert die Farbwerte im Eingabebild. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: invert()")}}

```css interactive-example-choice
filter: invert(0);
```

```css interactive-example-choice
filter: invert(0.3);
```

```css interactive-example-choice
filter: invert(50%);
```

```css interactive-example-choice
filter: invert(70%);
```

```css interactive-example-choice
filter: invert(1);
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

## Syntax

```css
/* No inversion */
invert(0)

/* Complete inversion */
invert()
invert(1)
invert(100%)

/* 60% inversion */
invert(.6)
invert(60%)
```

### Parameter

- {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Gibt den Grad der Invertierung an. Bei einem Wert von `100%` wird das Eingabebild vollständig invertiert, während es bei `0%` unverändert bleibt. Werte zwischen `0%` und `100%` skalieren den Effekt linear. Werte über `100%` sind zulässig, der Effekt wird jedoch auf `100%` begrenzt. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## SVG-Filter

Das SVG-Filterelement {{SVGElement("feComponentTransfer")}} kann ebenfalls verwendet werden, um Inhalte zu invertieren. Dazu wird eine entsprechende Invertierung auf den untergeordneten Tabellenelementen {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncB")}} erstellt. Wenn wir für die roten, grünen und blauen Filterprimitive denselben `tableValue` festlegen, können wir den SVG-Effekt anschließend über die ID des {{SVGElement("filter")}} referenzieren:

```html
<svg role="none">
  <filter id="invert90">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.1 0" />
      <feFuncG type="table" tableValues="0.1 0" />
      <feFuncB type="table" tableValues="0.1 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

Die folgenden Deklarationen erzeugen denselben Effekt:

```css
filter: invert(0.9);
filter: invert(90%);
filter: url("#invert90"); /* with embedded SVG */
filter: url("fileName.svg#invert90"); /* external SVG */
```

## Beispiele

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit angewendeter `invert()`-Filterfunktion, ein Bild mit der entsprechenden SVG-Funktion und das Originalbild:

### SVG

Wir erstellen einen SVG-Filter, der die Inhalte, auf die er angewendet wird, zu 70 % invertiert:

```html
<svg height="0">
  <filter id="invert">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.3 0" />
      <feFuncG type="table" tableValues="0.3 0" />
      <feFuncB type="table" tableValues="0.3 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

### CSS

Wir fügen CSS hinzu, das Elemente anhand ihrer Klasse `filter` oder `svgFilter` invertiert:

```css
.filter {
  filter: invert(70%);
}

.svgFilter {
  filter: url("#invert");
}
```

```css hidden
th,
td {
  padding: 5px;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th><code>invert()</code> filter</th>
      <th>SVG filter equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="svgFilter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgInvert">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.3 0" />
              <feFuncG type="table" tableValues="0.3 0" />
              <feFuncB type="table" tableValues="0.3 0" />
            </feComponentTransfer>
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgInvert')" />
        </svg>
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

{{EmbedLiveSample('examples','100%','280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die als Werte der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
