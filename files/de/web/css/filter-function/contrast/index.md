---
title: contrast()
slug: Web/CSS/filter-function/contrast
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Die **`contrast()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) passt den Kontrast des Eingabebildes an. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## Syntax

```css
contrast(amount)
```

### Werte

- `amount`
  - : Der Kontrast des Ergebnisses, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert unter `100%` verringert den Kontrast, während ein Wert über `100%` ihn erhöht. Ein Wert von `0` oder `0%` erzeugt ein vollständig graues Bild, während ein Wert von `1` oder `100%` den Eingabewert unverändert lässt. Negative Werte sind nicht erlaubt. Der anfängliche Wert für die {{Glossary("interpolation")}} ist `1`.

Die folgenden Paare sind gleichwertige Werte:

```css
contrast(0) /* Vollständig grau */
contrast(0%)

contrast(0.65) /* 65% Kontrast */
contrast(65%)

contrast(1)     /* Kein Effekt */
contrast(100%)

contrast(2)  /* Doppelt so viel Kontrast */
contrast(200%)
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Mit der backdrop-filter Eigenschaft

In diesem Beispiel wird ein `contrast()`-Filter über die {{cssxref("backdrop-filter")}} CSS-Eigenschaft auf den Absatz und den monospaced Text angewendet, der Farbanpassungen für den Bereich hinter dem `<p>` und `<code>` vornimmt.

```css
.container {
  background: url(image.jpg) no-repeat center / contain #339;
}
p {
  backdrop-filter: contrast(0.5);
}
code {
  backdrop-filter: contrast(0.15);
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #ffffff;
  font-family: sans-serif;
}
```

```html hidden
<div class="container" style="background-image: url(unity_for_the_people.jpg);">
  <p>
    Stellen Sie immer sicher, dass genügend Kontrast zwischen Text und allen Hintergrundfarben vorhanden ist. Wenn Sie denken, dass Ihr Text möglicherweise über einem Hintergrundbild liegt, fügen Sie einen <code>backdrop-filter</code> hinzu. Das Reduzieren des Kontrasts von Hintergrundfarben mit dem <code>contrast()</code> Filter kann die Lesbarkeit verbessern, garantiert jedoch keine Barrierefreiheit.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','260')}}

### Mit der filter Eigenschaft

Dieses Beispiel wendet einen `contrast()`-Filter über die {{cssxref("filter")}} CSS-Eigenschaft an und ändert den Kontrast, indem die Farben des gesamten Elements, einschließlich Inhalt, Rahmen, Hintergrund und Schatten, verschoben werden.

```css
p:first-of-type {
  filter: contrast(30%);
}
p:last-of-type {
  filter: contrast(300%);
}
```

```css hidden
p {
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: palegoldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
  padding: 0.25rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>Dieser Absatz hat reduzierten Kontrast.</p>
<p>Dieser Absatz hat normalen Kontrast.</p>
<p>Dieser Absatz hat erhöhten Kontrast.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','320')}}

### Mit url() und dem SVG-Kontrastfilter

Das SVG-{{SVGElement("filter")}}-Element wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann durch [`id`](/de/docs/Web/HTML/Global_attributes#id) referenziert werden können. Die {{SVGElement("feComponentTransfer")}}-Primitive des `<filter>` ermöglicht die Farbneuzuordnung auf Pixel-Ebene. Angesichts des Folgenden:

```svg
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
```

```css hidden
.svgFilterLive {
  filter: url(#contrast2);
}
```

Diese Werte erzeugen die gleichen Ergebnisse:

```css
filter: contrast(200%);
filter: url(#contrast); /* mit eingebettetem SVG */
filter: url(folder/fileName.svg#contrast); /* externe SVG-Filterdefinition */
```

Dieses Beispiel zeigt drei Bilder: das Bild mit einer `contrast()`-Filterfunktion, das Bild mit einem gleichwertigen `url()`-Filter und die Originalbilder zum Vergleich:

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>contrast()</code></th>
      <th><code>url()</code></th>
      <th>Originalbild</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          style="filter: contrast(200%)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svgFilterLive"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
          viewBox="0 0 240 151"
          height="0"
          width="0"
          style="overflow: visible"
          color-interpolation-filters="sRGB">
          <filter id="contrast2">
            <feComponentTransfer>
              <feFuncR type="linear" slope="2" intercept="-0.5" />
              <feFuncG type="linear" slope="2" intercept="-0.5" />
              <feFuncB type="linear" slope="2" intercept="-0.5" />
            </feComponentTransfer>
          </filter>
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

{{EmbedLiveSample('With_url()_and_the_SVG_contrast_filter','100%','280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Filter Effekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, sind:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
