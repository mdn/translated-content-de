---
title: "`text-combine-upright` CSS property"
short-title: text-combine-upright
slug: Web/CSS/Reference/Properties/text-combine-upright
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-combine-upright`** fasst Zeichen auf dem Raum eines einzelnen Zeichens zusammen. Ist der zusammengefasste Text breiter als 1em, muss der User Agent den Inhalt in diesen Raum einpassen. Die resultierende Zusammensetzung wird bei Layout und Gestaltung als eine einzelne aufrechte Glyphe behandelt. Diese Eigenschaft wirkt sich nur in vertikalen Schreibrichtungen aus.

Damit lässt sich ein Effekt erzeugen, der im Japanischen als Tate-chū-yoko <q lang="ja">縦中横</q> und im Chinesischen als <q lang="zh-Hant">橫向文字</q> bekannt ist.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Es erfolgt keine besondere Verarbeitung.
- `all`
  - : Versucht, alle aufeinanderfolgenden Zeichen innerhalb der Box horizontal zu setzen, sodass sie innerhalb der vertikalen Zeile der Box den Raum eines einzelnen Zeichens einnehmen.

> [!NOTE]
> Das Modul [CSS writing modes](/de/docs/Web/CSS/Guides/Writing_modes) definiert für die Eigenschaft `text-combine-upright` einen Wert `digits <integer>`. Damit werden zwei bis vier aufeinanderfolgende {{Glossary("ASCII", "ASCII")}}-Ziffern (U+0030–U+0039) so dargestellt, dass sie innerhalb der vertikalen Zeilenbox den Raum eines einzelnen Zeichens einnehmen. Dieser Wert wird jedoch von keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `all` mit horizontalem Text verwenden

Der Wert `all` erfordert Markup um jeden horizontalen Textabschnitt, wird derzeit aber von mehr Browsern unterstützt als der Wert `digits`.

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

#### Ergebnis

{{EmbedLiveSample('using_all_with_horizontal_text', 250, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
