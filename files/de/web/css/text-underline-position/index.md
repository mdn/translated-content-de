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
/* Single keyword */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Multiple keywords */
text-underline-position: under left;
text-underline-position: right under;

/* Global values */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: revert;
text-underline-position: revert-layer;
text-underline-position: unset;
```

### Werte

- `auto`
  - : Der [User Agent](/de/docs/Glossary/user_agent) verwendet seinen eigenen Algorithmus, um die Linie auf oder unterhalb der alphabetischen Grundlinie zu platzieren.
- `from-font`
  - : Wenn die Schriftdatei Informationen über eine bevorzugte Position enthält, wird dieser Wert verwendet. Wenn die Schriftdatei diese Informationen nicht enthält, wird wie bei `auto` verfahren, wobei der Browser eine geeignete Position wählt.
- `under`
  - : Erzwingt, dass die Linie unterhalb der alphabetischen Grundlinie gesetzt wird, an einer Position, wo sie keine Unterlängen kreuzt. Dies ist nützlich, um die Lesbarkeit bei chemischen und mathematischen Formeln zu gewährleisten, die viele tiefgestellte Zeichen verwenden.
- `left`
  - : In vertikalen Schreibrichtungen erzwingt dieses Schlüsselwort, dass die Linie auf der _linken_ Seite des Textes platziert wird. In horizontalen Schreibrichtungen ist es ein Synonym für `auto`.
- `right`
  - : In vertikalen Schreibrichtungen erzwingt dieses Schlüsselwort, dass die Linie auf der _rechten_ Seite des Textes platziert wird. In horizontalen Schreibrichtungen ist es ein Synonym für `auto`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches Beispiel

Betrachten Sie ein paar einfache Beispielabsätze:

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

In diesem Beispiel setzen wir beide Absätze auf eine dicke Unterstreichung. Im horizontalen Text verwenden wir `text-underline-position: under;`, um die Unterstreichung unterhalb aller Unterlängen zu platzieren.

Im Text mit einer vertikalen [`writing-mode`](/de/docs/Web/CSS/writing-mode) Einstellung können wir dann Werte von `left` oder `right` verwenden, um die Unterstreichung auf der linken oder rechten Seite des Textes erscheinen zu lassen, wie benötigt.

Das Live-Beispiel sieht so aus:

{{EmbedLiveSample('A_simple_example', '100%', 600)}}

### Globale Einstellung von text-underline-position

Da die Eigenschaft `text-underline-position` vererbt und nicht durch die Kurznotation {{cssxref("text-decoration")}} zurückgesetzt wird, kann es sinnvoll sein, ihren Wert auf globaler Ebene festzulegen. Zum Beispiel kann der Wert `under` für ein Dokument mit vielen chemischen und mathematischen Formeln, die viele tiefgestellte Zeichen verwenden, geeignet sein.

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

- Die {{cssxref("text-decoration")}} Eigenschaft ist eine Kurznotation zum Festlegen der meisten textbezogenen Dekorationseigenschaften, einschließlich {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}} und {{cssxref("text-decoration-style")}}. Sie setzt jedoch nicht `text-underline-position`.
