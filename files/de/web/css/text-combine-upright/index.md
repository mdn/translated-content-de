---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
l10n:
  sourceCommit: 3af8805807e85a0b5ad5f0ecf2745983dfeba363
---

{{CSSRef}}

Die **`text-combine-upright`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Kombination von Zeichen in den Raum eines einzelnen Zeichens. Wenn der kombinierte Text breiter als 1em ist, muss der Benutzeragent die Inhalte innerhalb von 1em anpassen. Die resultierende Zusammensetzung wird als ein einzelnes aufrechtes Glyph für Layout und Dekoration behandelt. Diese Eigenschaft hat nur in vertikalen Schreibmodi eine Wirkung.

Dies wird verwendet, um einen Effekt zu erzeugen, der im Japanischen als tate-chū-yoko <q lang="ja">縦中横</q> oder im Chinesischen als <q lang="zh-Hant">橫向文字</q> bekannt ist.

{{EmbedInteractiveExample("pages/css/text-combine-upright.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
text-combine-upright: none;
text-combine-upright: all;

/* Globale Werte */
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
  - : Versucht, alle aufeinanderfolgenden Zeichen innerhalb der Box horizontal zu setzen, sodass sie den Raum eines einzigen Zeichens innerhalb der vertikalen Linie der Box einnehmen.

> [!NOTE]
> Das [CSS writing modes](/de/docs/Web/CSS/CSS_writing_modes) Modul definiert einen `digits <integer>` Wert für die Eigenschaft `text-combine-upright`, um zwei bis vier aufeinanderfolgende {{Glossary("ASCII")}} Ziffern (U+0030–U+0039) anzuzeigen, sodass sie den Raum eines einzigen Zeichens innerhalb der vertikalen Linie der Box einnehmen. Dies wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von 'all' mit horizontalem Text

Der Wert 'all' erfordert eine Auszeichnung um jedes Stück horizontalen Textes, wird jedoch derzeit von mehr Browsern unterstützt als der Wert 'digits'.

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
