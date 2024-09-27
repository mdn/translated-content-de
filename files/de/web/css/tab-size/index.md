---
title: tab-size
slug: Web/CSS/tab-size
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{CSSRef}}

Die **`tab-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um die Breite von Tabulatorzeichen (U+0009) anzupassen.

{{EmbedInteractiveExample("pages/css/tab-size.html")}}

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
  - : Ein Vielfaches der Vorbreite des Leerzeichens (U+0020), das als Breite für Tabs verwendet werden soll. Muss nicht negativ sein. Die Vorbreite ist der Abstand, den ein Cursor oder ein Druckkopf bewegt, bevor der nächste Buchstabe gedruckt wird.
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

### Tabs zusammenfassen

```css
pre {
  tab-size: 0; /* Remove indentation */
}
```

### Standard-Tab-Größe vs. benutzerdefinierte Größen

Dieses Beispiel vergleicht eine Standard-Tab-Größe mit einer benutzerdefinierten Tab-Größe. Beachten Sie, dass {{cssxref("white-space")}} auf `pre` gesetzt ist, um zu verhindern, dass die Tabs zusammenfallen.

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
