---
title: tab-size
slug: Web/CSS/tab-size
l10n:
  sourceCommit: 76f47b72ab5af8cf44ff9d33a8f44f223677901f
---

{{CSSRef}}

Die **`tab-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um die Breite von Tabulatorzeichen (U+0009) anzupassen.

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
  - : Ein Vielfaches der Vorschubbreite des Leerzeichens (U+0020), das als Breite für Tabs verwendet wird. Muss nicht negativ sein. Die Vorschubbreite bezeichnet den Abstand, den ein Cursor oder Druckkopf zurücklegt, bevor der nächste Buchstabe gedruckt wird.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Breite der Tabs. Muss nicht negativ sein.

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

### Tabs reduzieren

```css
pre {
  tab-size: 0; /* Remove indentation */
}
```

### Standard-Tabgröße vs. benutzerdefinierte Größen

Dieses Beispiel vergleicht eine Standard-Tabgröße mit einer benutzerdefinierten Tabgröße. Beachten Sie, dass {{cssxref("white-space")}} auf `pre` gesetzt ist, um zu verhindern, dass die Tabs zusammenfallen.

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

{{EmbedLiveSample("Comparing_to_the_default_size", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('white-space')}}
