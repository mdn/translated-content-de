---
title: "`font-synthesis-style` CSS property"
short-title: font-synthesis-style
slug: Web/CSS/Reference/Properties/font-synthesis-style
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`font-synthesis-style`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen festzulegen, ob der Browser einen oblique Schriftschnitt synthetisieren darf, wenn er in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Werte der Schriftschnittsynthese zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-style: auto;
font-synthesis-style: none;
font-synthesis-style: oblique-only;

/* Global values */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Gibt an, dass der fehlende oblique Schriftschnitt bei Bedarf vom Browser synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthese des fehlenden oblique Schriftschnitts durch den Browser _nicht_ erlaubt ist.
- `oblique-only`
  - : Entspricht `auto`, aber es erfolgt keine Schriftsynthese, wenn `font-style: italic` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese des oblique Schriftschnitts

Dieses Beispiel zeigt das Ausschalten der Synthese des oblique Schriftschnitts im `Montserrat`-Font durch den Browser.

#### HTML

```html
<p class="english">
  This is the default <em>oblique typeface</em> and
  <strong>bold typeface</strong>.
</p>

<p class="english no-syn">
  The <em>oblique typeface</em> is turned off here but not the
  <strong>bold typeface</strong>.
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}

.no-syn {
  font-synthesis-style: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

### Vergleich der `font-synthesis-style`-Werte

Dieses Beispiel vergleicht alle `font-synthesis-style`-Werte mit kursiv und oblique gestalteten Texten.

#### HTML

```html
<div class="fss-none">
  <h2>font-synthesis-style: none</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>

<div class="fss-auto">
  <h2>font-synthesis-style: auto</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>

<div class="fss-oblique-only">
  <h2>font-synthesis-style: oblique-only</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>
```

#### CSS

```css hidden
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
}

@supports not (font-synthesis-style: oblique-only) {
  body::before {
    content: "Your browser doesn't support the 'oblique-only' value.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css
/* Specify style of the font synthesis */
.fss-none {
  font-synthesis-style: none;
}

.fss-auto {
  font-synthesis-style: auto;
}

.fss-oblique-only {
  font-synthesis-style: oblique-only;
}

/* Set font styles */
.oblique {
  font-style: oblique;
}

.italic {
  font-style: italic;
}

/* Styles for the demonstration */
.oblique::after {
  content: " (font-style: oblique)";
  font-size: 0.8rem;
  vertical-align: sub;
}

.italic::after {
  content: " (font-style: italic)";
  font-size: 0.8rem;
  vertical-align: sub;
}
```

#### Ergebnis

{{EmbedLiveSample('Comparison of font-synthesis-style values', '', '560')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [font-synthesis](/de/docs/Web/CSS/Reference/Properties/font-synthesis) Kurzform, [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
