---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-synthesis-style`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Ihnen zu spezifizieren, ob der Browser eine schräge Schriftart synthetisieren darf, wenn sie in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftartensynthese-Werte zu steuern.

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

- `auto`
  - : Gibt an, dass die fehlende schräge Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese der fehlenden schrägen Schriftart durch den Browser _nicht_ erlaubt ist.
- `oblique-only`
  - : Dasselbe wie `auto`, aber es erfolgt keine Schriftsynthese, wenn `font-style: italic` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese von schrägen Schriftarten

Dieses Beispiel zeigt, wie die Synthese der schrägen Schriftart in der `Montserrat` Schrift vom Browser deaktiviert wird.

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
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}

.no-syn {
  font-synthesis-style: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

### Vergleich der font-synthesis-style Werte

Dieses Beispiel vergleicht alle `font-synthesis-style` Werte unter Verwendung von kursiven und schräg formatierten Texten.

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
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
}

@supports not (font-synthesis-style: oblique-only) {
  body::before {
    content: "Your browser doesn't support the 'oblique-only' value.";
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
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

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzschreibweise, [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
