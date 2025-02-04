---
title: text-underline-position
slug: Web/CSS/text-underline-position
l10n:
  sourceCommit: 0a4d5b451cc54599ed2b99cef4fdd39c3fd96a3d
---

{{CSSRef}}

Die **`text-underline-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position der Unterstreichung fest, die mit dem `underline`-Wert der {{cssxref("text-decoration")}} Eigenschaft festgelegt wird.

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
  - : Der {{Glossary("user_agent", "User Agent")}} verwendet seinen eigenen Algorithmus, um die Linie auf oder unter der {{Glossary("/Baseline/Typography", "alphabetischen Grundlinie")}} zu platzieren.
- `from-font`
  - : Wenn die Schriftartdatei Informationen über eine bevorzugte Position enthält, wird dieser Wert verwendet. Wenn die Schriftartdatei diese Informationen nicht enthält, verhält es sich so, als ob `auto` gesetzt wurde, wobei der Browser eine geeignete Position wählt.
- `under`
  - : Erzwingt, dass die Linie unterhalb der alphabetischen Grundlinie gesetzt wird, an einer Stelle, an der sie keine Unterlängen kreuzt. Dies ist nützlich, um die Lesbarkeit bei chemischen und mathematischen Formeln zu gewährleisten, die häufig tiefgestellte Zeichen verwenden.
- `left`
  - : In vertikalen Schreibmodi zwingt dieses Schlüsselwort die Linie dazu, auf der _linken_ Seite des Textes platziert zu werden. In horizontalen Schreibmodi ist es ein Synonym für `auto`.
- `right`
  - : In vertikalen Schreibmodi zwingt dieses Schlüsselwort die Linie dazu, auf der _rechten_ Seite des Textes platziert zu werden. In horizontalen Schreibmodi ist es ein Synonym für `auto`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches Beispiel

Wir erstellen zwei Beispielabsätze:

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

In diesem Beispiel setzen wir bei beiden Absätzen eine dicke Unterstreichung. Im horizontalen Text verwenden wir `text-underline-position: under;`, um die Unterstreichung unterhalb aller Unterlängen zu platzieren.

Bei Text mit einem vertikalen [`writing-mode`](/de/docs/Web/CSS/writing-mode) können wir dann die Werte `left` oder `right` verwenden, um die Unterstreichung links oder rechts vom Text erscheinen zu lassen, wie gewünscht.

Das Live-Beispiel sieht so aus:

{{EmbedLiveSample('A_basic_example', '100%', 600)}}

### Globale Einstellung von text-underline-position

Da die `text-underline-position` Eigenschaft vererbt wird und nicht durch die {{cssxref("text-decoration")}} Kurzschreibweise zurückgesetzt wird, kann es sinnvoll sein, ihren Wert auf globaler Ebene festzulegen. Zum Beispiel könnte der `under` Wert für ein Dokument mit vielen chemischen und mathematischen Formeln, die häufig tiefgestellte Zeichen verwenden, passend sein.

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

- Die {{cssxref("text-decoration")}} Eigenschaft ist eine Kurzform zum Festlegen der meisten Textdekorationseigenschaften, einschließlich {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}} und {{cssxref("text-decoration-style")}}. Sie setzt jedoch nicht `text-underline-position`.
