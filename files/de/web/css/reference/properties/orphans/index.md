---
title: "`orphans` CSS property"
short-title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: e4ed2e4bfb88dab98ae65c44c134e3359b623d9b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`orphans`** legt die Mindestanzahl von Zeilen in einem Block-Container fest, die am _unteren_ Rand einer [Seite](/de/docs/Web/CSS/Guides/Paged_media), Region oder [Spalte](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt werden müssen.

In der Typografie ist ein _Schusterjunge_ die erste Zeile eines Absatzes, die allein am unteren Rand einer Seite erscheint. (Der Absatz wird auf der folgenden Seite fortgesetzt.)

## Syntax

```css
/* <integer> values */
orphans: 2;
orphans: 3;

/* Global values */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl von Zeilen, die vor einem Fragmentierungsumbruch allein am unteren Rand eines Fragments verbleiben können. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schusterjungen in Spalten steuern

Dieses Beispiel verwendet ein Kontrollkästchen, um `orphans` zwischen `2` und `1` umzuschalten. Bei `orphans: 2` müssen mindestens zwei Zeilen eines Absatzes am unteren Rand einer Spalte erscheinen. Bei `orphans: 1` kann der Absatz an jeder Stelle umbrochen werden.

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how orphans work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
<form>
  <input type="checkbox" id="orphans" checked />
  <label for="orphans">Apply orphans: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 420px;
  height: 120px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  orphans: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Controlling_column_orphans", "", 240)}}

In Firefox, das `orphans` nicht unterstützt, entspricht das Verhalten in diesem Beispiel unabhängig vom Zustand des Kontrollkästchens im Wesentlichen `orphans: 1`. Der folgende Screenshot zeigt das Ergebnis mit `orphans: 2` in einem unterstützenden Browser:

![Drei Absätze in drei Spalten. Der erste Absatz füllt die erste Spalte. Der zweite Absatz beginnt in der zweiten Spalte, lässt unter dem ersten Absatz Platz und wird in der dritten Spalte fortgesetzt. Der dritte Absatz füllt den restlichen Teil der dritten Spalte.](with-orphans.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("widows")}}
- [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media)
