---
title: tab-size
slug: Web/CSS/tab-size
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{CSSRef}}

Die **`tab-size`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Breite von Tabulatorzeichen (U+0009) anzupassen.

{{EmbedInteractiveExample("pages/css/tab-size.html")}}

## Syntax

```css
/* <number> Werte */
tab-size: 4;
tab-size: 0;

/* <length> Werte */
tab-size: 10px;
tab-size: 2em;

/* Globale Werte */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

### Werte

- {{CSSxRef("&lt;number&gt;")}}
  - : Ein Vielfaches der Vorschubbreite des Leerzeichens (U+0020), das als Breite der Tabs verwendet wird. Muss nicht-negativ sein. Die Vorschubbreite bedeutet die Entfernung, die ein Cursor oder ein Druckkopf vor dem Drucken des nächsten Zeichens zurücklegt.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Breite der Tabs. Muss nicht-negativ sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erweiterung nach Zeichenanzahl

```css
pre {
  tab-size: 4; /* Tabulatorgröße auf 4 Zeichen Breite setzen */
}
```

### Tabs zusammenfalten

```css
pre {
  tab-size: 0; /* Einrückung entfernen */
}
```

### Standard-Tab-Größe vs. benutzerdefinierte Größen

Dieses Beispiel vergleicht eine Standard-Tab-Größe mit einer benutzerdefinierten Tab-Größe. Beachten Sie, dass {{cssxref("white-space")}} auf `pre` gesetzt ist, um zu verhindern, dass die Tabs zusammenfallen.

#### HTML

```html
<p>kein Tab</p>
<p>&#0009;Standard-Tabulatorgröße von 8 Zeichen Breite</p>
<p class="custom-number">&#0009;Benutzerdefinierte Tabulatorgröße von 3 Zeichen Breite</p>
<p>&nbsp;&nbsp;&nbsp;3 Leerzeichen, entsprechend der benutzerdefinierten Tabulatorgröße</p>
<p class="custom-length">&#0009;Benutzerdefinierte Tabulatorgröße von 50px Breite</p>
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
