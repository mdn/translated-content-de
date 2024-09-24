---
title: text-underline-position
slug: Web/CSS/text-underline-position
l10n:
  sourceCommit: 0ba54f5e7ab94099d7b663c8925560292979123d
---

{{CSSRef}}

Die **`text-underline-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position der Unterstreichung fest, die mit dem `underline`-Wert der {{cssxref("text-decoration")}} Eigenschaft gesetzt wird.

{{EmbedInteractiveExample("pages/css/text-underline-position.html")}}

## Syntax

```css
/* Einzelnes Schlüsselwort */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Mehrere Schlüsselwörter */
text-underline-position: under left;
text-underline-position: right under;

/* Globale Werte */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: revert;
text-underline-position: revert-layer;
text-underline-position: unset;
```

### Werte

- `auto`
  - : Der {{glossary("user agent")}} verwendet seinen eigenen Algorithmus, um die Linie an oder unter der alphabetischen Grundlinie zu platzieren.
- `from-font`
  - : Wenn die Schriftartdatei Informationen über eine bevorzugte Position enthält, wird dieser Wert verwendet. Fehlen diese Informationen, wird so gehandelt, als ob `auto` gesetzt wäre, wobei der Browser eine geeignete Position wählt.
- `under`
  - : Erzwingt, dass die Linie unter der alphabetischen Grundlinie gesetzt wird, an einer Position, an der sie keine Unterlängen kreuzt. Dies ist nützlich, um die Lesbarkeit bei chemischen und mathematischen Formeln zu gewährleisten, die häufig hoch- und tiefgestellt verwenden.
- `left`
  - : In vertikalen Schreibmodi erzwingt dieses Schlüsselwort, dass die Linie auf der _linken_ Seite des Textes platziert wird. In horizontalen Schreibmodi ist es ein Synonym für `auto`.
- `right`
  - : In vertikalen Schreibmodi erzwingt dieses Schlüsselwort, dass die Linie auf der _rechten_ Seite des Textes platziert wird. In horizontalen Schreibmodi ist es ein Synonym für `auto`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches Beispiel

Betrachten Sie ein paar einfache Absatzbeispiele:

```html
<p class="horizontal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>

<p class="vertical">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>
```

Unser CSS sieht folgendermaßen aus:

```css
p {
  font-size: 1.5rem;
  text-transform: capitalize;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.horizontal {
  text-underline-position: under;
}

.vertical {
  writing-mode: vertical-rl;
  text-underline-position: left;
}
```

In diesem Beispiel setzen wir beide Absätze auf eine dicke Unterstreichung. Im horizontalen Text verwenden wir `text-underline-position: under;` um die Unterstreichung unter alle Unterlängen zu setzen.

Im Text mit einem vertikalen [`writing-mode`](/de/docs/Web/CSS/writing-mode) können dann die Werte `left` oder `right` verwendet werden, um die Unterstreichung auf der linken oder rechten Seite des Textes erscheinen zu lassen, wie gewünscht.

Das Live-Beispiel sieht so aus:

{{EmbedLiveSample('A_simple_example', '100%', 600)}}

### Globale Einstellung der text-underline-position

Da die Eigenschaft `text-underline-position` vererbbar ist und nicht durch die Kurzschreibweise {{cssxref("text-decoration")}} zurückgesetzt wird, kann es sinnvoll sein, ihren Wert auf globaler Ebene festzulegen. Zum Beispiel kann der Wert `under` für ein Dokument mit vielen chemischen und mathematischen Formeln, die viele tiefgestellte Zeichen verwenden, angemessen sein.

```css
:root {
  text-underline-position: under;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("text-decoration")}} Eigenschaft ist eine Kurzschreibweise für das Setzen der meisten Textdekorationseigenschaften, einschließlich {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}} und {{cssxref("text-decoration-style")}}. Allerdings setzt sie nicht `text-underline-position`.
