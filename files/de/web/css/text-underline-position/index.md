---
title: text-underline-position
slug: Web/CSS/text-underline-position
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`text-underline-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position der Unterstreichung fest, die mit dem `underline`-Wert der {{cssxref("text-decoration")}}-Eigenschaft gesetzt wird.

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
  - : Der {{Glossary("user_agent", "User Agent")}} verwendet seinen eigenen Algorithmus, um die Linie auf oder unter der alphabetischen Grundlinie zu platzieren.
- `from-font`
  - : Wenn die Schriftartdatei Informationen über eine bevorzugte Position enthält, verwenden Sie diesen Wert. Wenn die Schriftartdatei diese Informationen nicht enthält, verhalten Sie sich so, als ob `auto` gesetzt wäre, wobei der Browser eine geeignete Position wählt.
- `under`
  - : Erzwingt, dass die Linie unterhalb der alphabetischen Grundlinie gesetzt wird, an einer Position, an der sie keine Abwärtsstriche kreuzt. Dies ist nützlich, um die Lesbarkeit mit chemischen und mathematischen Formeln zu gewährleisten, die häufig Unterschriften verwenden.
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

Wir erstellen zwei Beispiel-Absätze:

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

Unser CSS sieht so aus:

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

In diesem Beispiel setzen wir beide Absätze auf eine dicke Unterstreichung. Im horizontalen Text verwenden wir `text-underline-position: under;`, um die Unterstreichung unterhalb aller Abwärtsstriche zu platzieren.

Im Text mit einem vertikalen [`writing-mode`](/de/docs/Web/CSS/writing-mode) können wir dann die Werte `left` oder `right` verwenden, um die Unterstreichung je nach Bedarf links oder rechts vom Text erscheinen zu lassen.

Das Live-Beispiel sieht so aus:

{{EmbedLiveSample('A_basic_example', '100%', 600)}}

### Setzen der text-underline-position global

Da die Eigenschaft `text-underline-position` vererbt und nicht durch die Kurzschreibweise {{cssxref("text-decoration")}} zurückgesetzt wird, kann es geeignet sein, ihren Wert auf globaler Ebene festzulegen. Zum Beispiel kann der Wert `under` für ein Dokument geeignet sein, das viele chemische und mathematische Formeln enthält, die häufig Unterschriften verwenden.

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

- Die Eigenschaft {{cssxref("text-decoration")}} ist eine Kurzform, um die meisten Textdekorationseigenschaften festzulegen, einschließlich {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, und {{cssxref("text-decoration-style")}}. Allerdings setzt sie nicht `text-underline-position`.
