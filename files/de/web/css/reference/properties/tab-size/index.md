---
title: "`tab-size` CSS property"
short-title: tab-size
slug: Web/CSS/Reference/Properties/tab-size
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`tab-size`** können Sie die Breite von Tabulatorzeichen (U+0009) anpassen.

{{InteractiveExample("CSS Demo: tab-size")}}

```css interactive-example-choice
tab-size: 10px;
```

```css interactive-example-choice
tab-size: 16px;
```

```css interactive-example-choice
tab-size: 24px;
```

```css interactive-example-choice
tab-size: 4;
```

```html interactive-example
<section id="default-example">
  <pre id="example-element">&#9;123</pre>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid;
}
```

## Syntax

```css
/* <number> values */
tab-size: 4;
tab-size: 0;

/* <length> values */
tab-size: 10px;
tab-size: 2em;

/* Global values */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

### Werte

- {{CSSxRef("&lt;number&gt;")}}
  - : Ein Vielfaches der Vorschubbreite des Leerzeichens (U+0020), das als Breite von Tabulatorzeichen verwendet wird. Der Wert darf nicht negativ sein. Die Vorschubbreite ist die Entfernung, um die sich ein Cursor oder Druckkopf vor der Ausgabe des nächsten Zeichens bewegt.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Breite von Tabulatorzeichen. Der Wert darf nicht negativ sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erweiterung nach Zeichenanzahl

```css
pre {
  tab-size: 4; /* Set tab size to 4 characters wide */
}
```

### Tabulatorzeichen zusammenfallen lassen

```css
pre {
  tab-size: 0; /* Remove indentation */
}
```

### Standardmäßige und benutzerdefinierte Tabulatorbreiten

Dieses Beispiel vergleicht die standardmäßige Tabulatorbreite mit einer benutzerdefinierten Tabulatorbreite. Beachten Sie, dass {{cssxref("white-space")}} auf `pre` gesetzt ist, damit die Tabulatorzeichen nicht zusammenfallen.

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 characters wide</p>
<p class="custom-number">&#0009;custom tab size of 3 characters wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
<p class="custom-length">&#0009;custom tab size of 50px wide</p>
```

#### CSS

```css hidden
body {
  border: 1px solid red;
  margin: 1rem;
}
```

```css
p {
  white-space: pre;
}

.custom-number {
  tab-size: 3;
}

.custom-length {
  tab-size: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("default_tab_size_vs_custom_sizes", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('white-space')}}
