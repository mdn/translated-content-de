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
  - : Der Kontrast des Ergebnisses, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert unter `100%` verringert den Kontrast, während ein Wert über `100%` ihn erhöht. Ein Wert von `0` oder `0%` erzeugt ein vollständig graues Bild, während ein Wert von `1` oder `100%` das Eingabebild unverändert lässt. Negative Werte sind nicht erlaubt. Der Anfangswert für die [Interpolation](/de/docs/Glossary/interpolation) ist `1`.

Folgende Paare sind gleichwertige Werte:

```css
contrast(0) /* Completely gray */
contrast(0%)

contrast(0.65) /* 65% contrast */
contrast(65%)

contrast(1)     /* No effect */
contrast(100%)

contrast(2)  /* Double contrast */
contrast(200%)
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Mit der Eigenschaft backdrop-filter

Dieses Beispiel wendet einen `contrast()` Filter über die {{cssxref("backdrop-filter")}} CSS-Eigenschaft auf den Absatz und den monospaced Text an, sodass sich die Farben im Bereich hinter dem `<p>` und `<code>` ändern.

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
    Always ensure there is enough contrast between text and all background
    colors. If you think your text may land on top of a background image,
    include a <code>backdrop-filter</code>. Reducing the contrast of background
    colors with the <code>contrast()</code> filter may improve legibility but
    does not guarantee accessibility.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','260')}}

### Mit der Eigenschaft filter

Dieses Beispiel wendet einen `contrast()` Filter über die {{cssxref("filter")}} CSS-Eigenschaft an, indem der Kontrast durch Farbverschiebung des gesamten Elements einschließlich Inhalt, Rand, Hintergrund und Schatten verändert wird.

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
<p>This paragraph has reduced contrast.</p>
<p>This paragraph has normal contrast.</p>
<p>This paragraph has increased contrast.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','320')}}

### Mit url() und dem SVG-Kontrastfilter

Das SVG-{{SVGElement("filter")}} Element wird verwendet, um benutzerdefinierte Filtereffekte zu definieren, die dann per [`id`](/de/docs/Web/HTML/Global_attributes#id) referenziert werden können. Das {{SVGElement("feComponentTransfer")}} Primitive des `<filter>` ermöglicht eine Farbzuordnung auf Pixelebene. Gegeben:

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
filter: url(#contrast); /* with embedded SVG */
filter: url(folder/fileName.svg#contrast); /* external svg filter definition */
```

Dieses Beispiel zeigt drei Bilder: Das Bild mit einer `contrast()` Filterfunktion, das Bild mit einem äquivalenten `url()` Filter und die Originalbilder zum Vergleich:

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>contrast()</code></th>
      <th><code>url()</code></th>
      <th>Original image</th>
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

- [CSS-Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
