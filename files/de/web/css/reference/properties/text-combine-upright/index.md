---
title: "`text-combine-upright` CSS property"
short-title: text-combine-upright
slug: Web/CSS/Reference/Properties/text-combine-upright
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-combine-upright`** [CSS](/de/docs/Web/CSS)-Eigenschaft kombiniert Zeichen in den Platz eines einzelnen Zeichens. Wenn der kombinierte Text breiter als 1em ist, muss der Benutzeragent die Inhalte innerhalb von 1em anpassen. Die resultierende Komposition wird für Layout und Dekoration als einzelnes aufrechtes Glyphen betrachtet. Diese Eigenschaft hat nur Auswirkungen in vertikalen Schreibmodi.

Dies wird verwendet, um einen Effekt zu erzeugen, der im Japanischen als tate-chū-yoko <q lang="ja">縦中横</q> bekannt ist oder im Chinesischen als <q lang="zh-Hant">橫向文字</q>.

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
> Das [CSS-Schreibmodul](/de/docs/Web/CSS/Guides/Writing_modes) definiert einen `digits <integer>`-Wert für die Eigenschaft `text-combine-upright`, um zwei bis vier aufeinanderfolgende {{Glossary("ASCII", "ASCII")}}-Ziffern (U+0030–U+0039) so anzuzeigen, dass sie den Raum eines einzelnen Zeichens innerhalb der vertikalen Linienbox einnehmen. Dieser Wert wird jedoch in keinen Browsern unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von 'all' mit horizontalem Text

Der Wert 'all' erfordert eine Markierung um jedes Stück horizontalen Text, wird jedoch derzeit von mehr Browsern unterstützt als der Wert 'digits'.

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

{{EmbedLiveSample('Beispiel mit "all"', 250, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
