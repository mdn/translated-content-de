---
title: "`widows` CSS property"
short-title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: e4ed2e4bfb88dab98ae65c44c134e3359b623d9b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`widows`** legt die Mindestanzahl von Zeilen in einem Block-Container fest, die am _Anfang_ einer [Seite](/de/docs/Web/CSS/Guides/Paged_media), Region oder [Spalte](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Widow_ die letzte Zeile eines Absatzes, die allein am Anfang einer Seite erscheint. (Der Absatz wird von einer vorherigen Seite fortgesetzt.)

## Syntax

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Werte

Diese Eigenschaft wird als ein `<integer>` angegeben:

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl von Zeilen, die nach einem Fragmentierungsumbruch allein am Anfang eines neuen Fragments stehen können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Hurenkinder in Spalten steuern

Dieses Beispiel verwendet ein Kontrollkästchen, um `widows` zwischen `2` und `1` umzuschalten. Bei `widows: 2` müssen mindestens zwei Zeilen eines Absatzes am Anfang einer Spalte erscheinen. Bei `widows: 1` kann der Absatz an jeder Stelle umbrochen werden.

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
<form>
  <input type="checkbox" id="widows" checked />
  <label for="widows">Apply widows: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 400px;
  height: 160px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Controlling_column_widows", "", 280)}}

In Firefox, das `widows` nicht unterstützt, entspricht das Verhalten in diesem Beispiel unabhängig vom Zustand des Kontrollkästchens im Wesentlichen `widows: 1`. Der folgende Screenshot zeigt das Ergebnis mit `widows: 2` in einem unterstützenden Browser:

![Drei Absätze in drei Spalten. Der zweite Absatz erstreckt sich über die erste und zweite Spalte. Der dritte Absatz hat zwei Zeilen am unteren Rand der zweiten Spalte und zwei Zeilen am oberen Rand der dritten Spalte.](with-widows.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("orphans")}}
- [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media)
