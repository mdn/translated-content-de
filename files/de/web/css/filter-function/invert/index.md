---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

Die **`invert()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) invertiert die Farbwerte im Eingabebild. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

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
  - : Gibt die Menge der Umwandlung an. Ein Wert von `100%` ist vollständig invertiert, während ein Wert von `0%` den Eingabezustand unverändert lässt. Werte zwischen `0%` und `100%` sind lineare Multiplikatoren des Effekts. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `0`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## SVG-Filter

Das SVG {{SVGElement("feComponentTransfer")}} Filter-Element kann ebenfalls verwendet werden, um Inhalte zu invertieren, indem eine äquivalente Inversion auf verschachtelten {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}} und {{SVGElement("feFuncB")}} Tabellenelementen erstellt wird. Wir setzen den gleichen `tableValue` für die roten, grünen und blauen Filter-Primitives auf denselben Wert, dann können wir den SVG-Effekt durch die ID des {{SVGElement("filter")}} referenzieren:

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

Die folgenden Deklarationen erzeugen den gleichen Effekt:

```css
filter: invert(0.9);
filter: invert(90%);
filter: url("#invert90"); /* with embedded SVG */
filter: url("fileName.svg#invert90"); /* external SVG */
```

## Beispiele

Dieses Beispiel zeigt drei Bilder zum Vergleich: ein Bild mit einer angewendeten `invert()` Filterfunktion, ein Bild mit der äquivalenten SVG-Funktion und das Originalbild:

### SVG

Wir erstellen einen SVG-Filter, der den angewandten Inhalt um 70% invertiert:

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

Wir fügen CSS hinzu, das Elemente basierend auf ihrer `filter` oder `svgFilter` Klasse invertiert:

```css
.filter {
  filter: invert(70%);
}

.svgFilter {
  filter: url("#invert");
}
```

```html hidden
<table cellpadding="5">
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

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
