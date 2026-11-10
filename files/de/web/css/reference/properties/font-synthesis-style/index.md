---
title: "`font-synthesis-style` CSS property"
short-title: font-synthesis-style
slug: Web/CSS/Reference/Properties/font-synthesis-style
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-synthesis-style`** legen Sie fest, ob der Browser einen schrägen Schriftschnitt synthetisieren darf, wenn dieser in einer Schriftfamilie fehlt.

Oft ist es praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Werte für die Synthese von Schriftschnitten zu steuern.

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

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Gibt an, dass der Browser den fehlenden schrägen Schriftschnitt bei Bedarf synthetisieren darf.
- `none`
  - : Gibt an, dass der Browser den fehlenden schrägen Schriftschnitt _nicht_ synthetisieren darf.
- `oblique-only`
  - : Wie `auto`, aber es findet keine Schriftsynthese statt, wenn `font-style: italic` festgelegt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Synthese eines schrägen Schriftschnitts deaktivieren

Dieses Beispiel zeigt, wie die Synthese eines schrägen Schriftschnitts durch den Browser für die Schrift `Montserrat` deaktiviert wird.

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

{{EmbedLiveSample('disabling_synthesis_of_oblique_typeface', '', '100')}}

### Vergleich der Werte von font-synthesis-style

Dieses Beispiel vergleicht alle Werte von `font-synthesis-style` anhand von Texten mit kursivem und schrägem Schriftschnitt.

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

- [font-synthesis](/de/docs/Web/CSS/Reference/Properties/font-synthesis) als Kurzschreibweise, [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
