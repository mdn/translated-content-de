---
title: text-combine-upright
slug: Web/CSS/Reference/Properties/text-combine-upright
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-combine-upright`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Kombination von Zeichen in den Raum eines einzelnen Zeichens. Wenn der kombinierte Text breiter als 1em ist, muss der Benutzeragent den Inhalt innerhalb von 1em anpassen. Die resultierende Komposition wird als ein einzelnes aufrechtes Glyph für Layout und Dekoration behandelt. Diese Eigenschaft hat nur in vertikalen Schreibmodi Wirkung.

Dies wird verwendet, um einen Effekt zu erzeugen, der in Japanisch als tate-chū-yoko <q lang="ja">縦中横</q> bekannt ist, oder als <q lang="zh-Hant">橫向文字</q> in Chinesisch.

{{InteractiveExample("CSS Demo: text-combine-upright")}}

```css interactive-example-choice
text-combine-upright: none;
```

```css interactive-example-choice
text-combine-upright: all;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>
      <span class="transition-all" id="example-element"
        >2022<span>年</span>12<span>月</span>8</span
      >日から楽しい
    </p>
  </div>
</section>
```

```css interactive-example
p {
  writing-mode: vertical-rl;
}
```

## Syntax

```css
/* Keyword values */
text-combine-upright: none;
text-combine-upright: all;

/* Global values */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: revert-layer;
text-combine-upright: unset;
```

### Werte

- `none`
  - : Es gibt keine spezielle Verarbeitung.
- `all`
  - : Versucht, alle aufeinanderfolgenden Zeichen innerhalb des Kastens horizontal zu setzen, sodass sie den Raum eines einzelnen Zeichens innerhalb der vertikalen Linie des Kastens einnehmen.

> [!NOTE]
> Das [CSS writing modes](/de/docs/Web/CSS/CSS_writing_modes) Modul definiert einen `digits <integer>` Wert für die `text-combine-upright` Eigenschaft, um zwei bis vier aufeinanderfolgende {{Glossary("ASCII", "ASCII")}} Ziffern (U+0030–U+0039) anzuzeigen, sodass sie den Raum eines einzelnen Zeichens innerhalb des vertikalen Linienkastens einnehmen. Dies wird jedoch von keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von 'all' mit horizontalem Text

Der `all` Wert erfordert ein Markup um jedes Stück horizontalen Text, wird aber derzeit von mehr Browsern unterstützt als der `digits` Wert.

#### HTML

```html
<p lang="zh-Hant">
  民國<span class="num">105</span>年<span class="num">4</span>月<span
    class="num"
    >29</span
  >日
</p>
```

#### CSS

```css
html {
  writing-mode: vertical-rl;
  font: 24px serif;
}
.num {
  text-combine-upright: all;
}
```

#### Ergebnisse

{{EmbedLiveSample('Example using "all"', 250, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
