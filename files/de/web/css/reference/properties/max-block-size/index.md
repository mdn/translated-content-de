---
title: max-block-size
slug: Web/CSS/Reference/Properties/max-block-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`max-block-size`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die maximale Größe eines Elements in der entgegengesetzten Richtung der durch {{cssxref("writing-mode")}} angegebenen Schreibrichtung. Das heißt, wenn die Schreibrichtung horizontal ist, entspricht `max-block-size` {{cssxref("max-height")}}; wenn die Schreibrichtung vertikal ist, ist `max-block-size` dasselbe wie {{cssxref("max-width")}}.

Die maximale Länge in der anderen Dimension wird mit der Eigenschaft {{cssxref("max-inline-size")}} angegeben.

Dies ist nützlich, weil `max-width` immer für horizontale Größen und `max-height` immer für vertikale Größen verwendet wird. Wenn Sie Längen basierend auf der Größe Ihres Textinhalts festlegen müssen, sollten Sie dies mit der Schreibrichtung im Hinterkopf tun können.

Jedes Mal, wenn Sie normalerweise `max-height` oder `max-width` verwenden würden, sollten Sie stattdessen `max-block-size` verwenden, um die maximale „Höhe“ des Inhalts festzulegen (auch wenn dies kein vertikaler Wert sein mag) und `max-inline-size`, um die maximale „Breite“ des Inhalts festzulegen (auch wenn dies vertikal anstelle von horizontal sein kann). Siehe [`writing-mode` Beispiele](/de/docs/Web/CSS/Reference/Properties/writing-mode#examples), die verschiedene Schreibrichtungen in Aktion zeigen.

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

Der Wert der Eigenschaft `max-block-size` kann jeder Wert sein, der für die Eigenschaften {{cssxref("max-width")}} und {{cssxref("max-height")}} legal ist:

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `max-block-size` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-block-size` als einen Prozentsatz der Größe des enthaltenden Blocks in der Blockachse.
- `none`
  - : Keine Begrenzung für die Größe des Elements.
- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `max-block-size`.
- {{cssxref("min-content")}}
  - : Die intrinsische Mindest-`max-block-size`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Raum, aber nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content` Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.

### Wie `writing-mode` die Richtung beeinflusst

Die Werte von `writing-mode` beeinflussen die Zuordnung von `max-block-size` zu `max-width` oder `max-height` wie folgt:

| Werte von `writing-mode`                                                  | `max-block-size` entspricht |
| ------------------------------------------------------------------------- | --------------------------- |
| `horizontal-tb`, `lr`, `lr-tb`, `rl`, `rb`, `rb-rl`                       | {{cssxref("max-height")}}   |
| `vertical-rl`, `vertical-lr`, `sideways-rl`, `sideways-lr`, `tb`, `tb-rl` | {{cssxref("max-width")}}    |

> [!NOTE]
> Die `writing-mode` Werte `sideways-lr` und `sideways-rl` wurden in der Endphase des Designs aus der CSS Writing Modes Level 3 Spezifikation entfernt. Sie könnten in Level 4 wieder hinzugefügt werden.

> [!NOTE]
> Die Schreibmodi `lr`, `lr-tb`, `rl`, `rb` und `rb-tl` sind in {{Glossary("HTML", "HTML")}} Kontexten nicht mehr erlaubt; sie dürfen nur in {{Glossary("SVG", "SVG")}} 1.x Kontexten verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von max-block-size bei horizontalem und vertikalem Text

In diesem Beispiel wird derselbe Text (die Eröffnungssätze aus [Herman Melvilles](https://en.wikipedia.org/wiki/Herman_Melville) Roman _[Moby-Dick](https://en.wikipedia.org/wiki/Moby-Dick)_) sowohl in den `horizontal-tb` als auch in den `vertical-rl` Schreibrichtungen präsentiert.

Alles andere an den beiden Boxen ist identisch, einschließlich der Werte, die für `max-block-size` verwendet werden.

#### HTML

Das HTML legt die beiden {{HTMLElement("div")}} Blöcke fest, die mit ihrer {{cssxref("writing-mode")}} mittels der Klassen `horizontal` oder `vertical` dargestellt werden. Beide Boxen teilen sich die `standard-box` Klasse, die die Farben, die Polsterung und ihre jeweiligen Werte von `max-block-size` festlegt.

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

Das CSS definiert drei Klassen. Die erste, `standard-box`, wird auf beide Boxen, wie oben gesehen, angewendet. Sie liefert Standard-Styling einschließlich der minimalen und maximalen Blockgrößen, Schriftgröße usw.

Danach folgen die Klassen `horizontal` und `vertical`, die die {{cssxref("writing-mode")}} Eigenschaft zur Box hinzufügen, mit dem Wert eingestellt auf `horizontal-tb` oder `vertical-rl`, je nach verwendeter Klasse.

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

- Die zugeordneten physischen Eigenschaften: {{cssxref("max-width")}} und {{cssxref("max-height")}}
- Festlegung der maximalen Größe in der anderen Richtung: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
