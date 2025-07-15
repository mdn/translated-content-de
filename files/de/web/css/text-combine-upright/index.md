---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-combine-upright`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Kombination von Zeichen in den Raum eines einzelnen Zeichens. Wenn der kombinierte Text breiter als 1em ist, muss der User-Agent den Inhalt auf 1em anpassen. Die resultierende Komposition wird als ein einzelnes aufrechtes Glyph für Layout und Dekoration behandelt. Diese Eigenschaft hat nur in vertikalen Schreibrichtungen einen Effekt.

Dies wird verwendet, um einen Effekt zu erzeugen, der in Japanisch als tate-chū-yoko <q lang="ja">縦中横</q> bekannt ist oder in Chinesisch als <q lang="zh-Hant">橫向文字</q>.

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
  - : Versucht, alle aufeinander folgenden Zeichen innerhalb des Rahmens horizontal zu setzen, sodass sie den Raum eines einzelnen Zeichens innerhalb der vertikalen Linie des Rahmens einnehmen.

> [!NOTE]
> Das [CSS writing modes](/de/docs/Web/CSS/CSS_writing_modes) Modul definiert einen `digits <integer>` Wert für die `text-combine-upright` Eigenschaft, um zwei bis vier aufeinanderfolgende {{Glossary("ASCII", "ASCII")}} Ziffern (U+0030–U+0039) darzustellen, sodass sie den Raum eines einzelnen Zeichens innerhalb der vertikalen Linie des Rahmens einnehmen. Dies wird jedoch von keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von 'all' mit horizontalem Text

Der Wert `all` erfordert eine Auszeichnung um jedes Stück horizontalen Textes, wird aber derzeit von mehr Browsern als der `digits` Wert unterstützt.

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
