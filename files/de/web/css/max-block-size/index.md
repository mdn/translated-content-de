---
title: max-block-size
slug: Web/CSS/max-block-size
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`max-block-size`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die maximale Größe eines Elements in der Richtung fest, die der Schreibrichtung entgegengesetzt ist, wie sie durch {{cssxref("writing-mode")}} angegeben wird. Das bedeutet, wenn die Schreibrichtung horizontal ist, entspricht `max-block-size` der {{cssxref("max-height")}}; wenn die Schreibrichtung vertikal ist, entspricht `max-block-size` der {{cssxref("max-width")}}.

Die maximale Länge der anderen Dimension wird mit der Eigenschaft {{cssxref("max-inline-size")}} angegeben.

Dies ist nützlich, weil `max-width` immer für horizontale Größen und `max-height` immer für vertikale Größen verwendet wird, und wenn Sie Längen basierend auf der Größe Ihres Textinhalts festlegen müssen, müssen Sie dies mit der Schreibrichtung berücksichtigen.

Jedes Mal, wenn Sie normalerweise `max-height` oder `max-width` verwenden würden, sollten Sie stattdessen `max-block-size` verwenden, um die maximale "Höhe" des Inhalts festzulegen (auch wenn es sich möglicherweise nicht um einen vertikalen Wert handelt) und `max-inline-size`, um die maximale "Breite" des Inhalts festzulegen (obwohl dies möglicherweise vertikal anstelle von horizontal sein könnte). Siehe Beispiele zu [`writing-mode`](/de/docs/Web/CSS/writing-mode#examples), die die verschiedenen Schreibmodi in Aktion zeigen.

{{InteractiveExample("CSS Demo: max-block-size")}}

```css interactive-example-choice
max-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
max-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-block-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the maximum block size. <br />This will
    limit the size in the block dimension, potentially causing an overflow.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

## Syntax

```css
/* <length> values */
max-block-size: 300px;
max-block-size: 25em;
max-block-size: anchor-size(--my-anchor self-inline, 250px);
max-block-size: calc(anchor-size(width) / 2);

/* <percentage> values */
max-block-size: 75%;

/* Keyword values */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content;
max-block-size: fit-content(20em);

/* Global values */
max-block-size: inherit;
max-block-size: initial;
max-block-size: revert;
max-block-size: revert-layer;
max-block-size: unset;
```

### Werte

Der Wert der `max-block-size`-Eigenschaft kann jeder Wert sein, der für die Eigenschaften {{cssxref("max-width")}} und {{cssxref("max-height")}} zulässig ist:

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `max-block-size` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-block-size` als Prozentsatz der Größe des umgebenden Blocks in der Block-Achse.
- `none`
  - : Keine Begrenzung der Boxgröße.
- `max-content`
  - : Die intrinsisch bevorzugte `max-block-size`.
- `min-content`
  - : Die intrinsische Mindest-`max-block-size`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.

### Wie `writing-mode` die Richtung beeinflusst

Die Werte von `writing-mode` beeinflussen die Zuordnung von `max-block-size` zu `max-width` oder `max-height` wie folgt:

| Werte von `writing-mode`                                                  | `max-block-size` entspricht |
| ------------------------------------------------------------------------- | --------------------------- |
| `horizontal-tb`, `lr`, `lr-tb`, `rl`, `rb`, `rb-rl`                       | {{cssxref("max-height")}}   |
| `vertical-rl`, `vertical-lr`, `sideways-rl`, `sideways-lr`, `tb`, `tb-rl` | {{cssxref("max-width")}}    |

> [!NOTE]
> Die `writing-mode`-Werte `sideways-lr` und `sideways-rl` wurden im späten Designprozess aus der CSS Writing Modes Level 3 Spezifikation entfernt. Sie könnten in Level 4 wiederhergestellt werden.

> [!NOTE]
> Die Schreibmodi `lr`, `lr-tb`, `rl`, `rb` und `rb-tl` sind in {{Glossary("HTML", "HTML")}}-Kontexten nicht mehr zulässig; sie dürfen nur in {{Glossary("SVG", "SVG")}} 1.x-Kontexten verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### max-block-size mit horizontalem und vertikalem Text festlegen

In diesem Beispiel wird derselbe Text (die Eröffnungssätze aus [Herman Melvilles](https://en.wikipedia.org/wiki/Herman_Melville) Roman _[Moby-Dick](https://en.wikipedia.org/wiki/Moby-Dick)_) sowohl im `horizontal-tb` als auch im `vertical-rl` Schreibmodus dargestellt.

Alles andere an den zwei Boxen ist identisch, einschließlich der verwendeten Werte für `max-block-size`.

#### HTML

Das HTML definiert die zwei {{HTMLElement("div")}}-Blöcke, die mit ihren {{cssxref("writing-mode")}} über den Klassen `horizontal` oder `vertical` dargestellt werden. Beide Boxen teilen die `standard-box` Klasse, welche die Färbung, den Abstand und ihre jeweiligen Werte von `max-block-size` festlegt.

```html
<p>Writing mode <code>horizontal-tb</code> (the default):</p>
<div class="standard-box horizontal">
  Call me Ishmael. Some years ago—never mind how long precisely—having little or
  no money in my purse, and nothing particular to interest me on shore, I
  thought I would sail about a little and see the watery part of the world. It
  is a way I have of driving off the spleen and regulating the circulation.
</div>

<p>Writing mode <code>vertical-rl</code>:</p>
<div class="standard-box vertical">
  Call me Ishmael. Some years ago—never mind how long precisely—having little or
  no money in my purse, and nothing particular to interest me on shore, I
  thought I would sail about a little and see the watery part of the world. It
  is a way I have of driving off the spleen and regulating the circulation.
</div>
```

#### CSS

Das CSS definiert drei Klassen. Die erste, `standard-box`, wird auf beide Boxen angewendet, wie oben zu sehen ist. Sie bietet eine standardmäßige Stilvorlage, einschließlich der minimalen und maximalen Blockgrößen, Schriftgröße und so weiter.

Danach folgen die Klassen `horizontal` und `vertical`, die der Box die {{cssxref("writing-mode")}}-Eigenschaft hinzufügen, wobei der Wert auf `horizontal-tb` oder `vertical-rl` gesetzt wird, je nachdem, welche Klasse verwendet wird.

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  max-block-size: 160px;
  min-block-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_max-block-size_with_horizontal_and_vertical_text", 600, 850)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physikalischen Eigenschaften: {{cssxref("max-width")}} und {{cssxref("max-height")}}
- Einstellen der maximalen Größe in der anderen Richtung: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
