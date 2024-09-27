---
title: max-block-size
slug: Web/CSS/max-block-size
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

Die **`max-block-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die maximale Größe eines Elements in der Richtung an, die der Schreibrichtung entgegengesetzt ist, wie durch {{cssxref("writing-mode")}} angegeben. Das bedeutet, wenn die Schreibrichtung horizontal ist, ist `max-block-size` gleichbedeutend mit {{cssxref("max-height")}}; wenn die Schreibrichtung vertikal ist, entspricht `max-block-size` der {{cssxref("max-width")}}.

Die maximale Länge der anderen Dimension wird mit der Eigenschaft {{cssxref("max-inline-size")}} angegeben.

Dies ist nützlich, da `max-width` immer für horizontale Größen und `max-height` immer für vertikale Größen verwendet wird. Wenn Sie Längen basierend auf der Größe Ihres Textinhalts festlegen müssen, sollten Sie dies mit Blick auf die Schreibrichtung tun können.

Wann immer Sie normalerweise `max-height` oder `max-width` verwenden würden, sollten Sie stattdessen `max-block-size` verwenden, um die maximale "Höhe" des Inhalts festzulegen (auch wenn dies möglicherweise kein vertikaler Wert ist) und `max-inline-size`, um die maximale "Breite" des Inhalts festzulegen (obwohl dies anstatt horizontal möglicherweise vertikal ist). Siehe [Beispiele für `writing-mode`](/de/docs/Web/CSS/writing-mode#examples), die die verschiedenen Schreibmodi in Aktion zeigen.

{{EmbedInteractiveExample("pages/css/max-block-size.html")}}

## Syntax

```css
/* <length> values */
max-block-size: 300px;
max-block-size: 25em;
max-block-size: anchor-size(--myAnchor self-inline, 250px);
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
  - : Definiert die `max-block-size` als Prozentsatz der Größe des umgebenden Blocks in der Blockachse.
- `none`
  - : Keine Begrenzung der Box-Größe.
- `max-content`
  - : Die intrinsische bevorzugte `max-block-size`.
- `min-content`
  - : Die intrinsische minimale `max-block-size`.
- `fit-content`
  - : Verwenden Sie den verfügbaren Raum, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d. h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d. h. `min(max-content, max(min-content, argument))`.

### Wie `writing-mode` die Richtung beeinflusst

Die Werte von `writing-mode` beeinflussen die Zuordnung von `max-block-size` zu `max-width` oder `max-height` wie folgt:

| Werte von `writing-mode`                                                  | `max-block-size` entspricht |
| ------------------------------------------------------------------------- | --------------------------- |
| `horizontal-tb`, `lr`, `lr-tb`, `rl`, `rb`, `rb-rl`                       | {{cssxref("max-height")}}   |
| `vertical-rl`, `vertical-lr`, `sideways-rl`, `sideways-lr`, `tb`, `tb-rl` | {{cssxref("max-width")}}    |

> [!NOTE]
> Die `writing-mode`-Werte `sideways-lr` und `sideways-rl` wurden in der späten Entwurfsphase der CSS Writing Modes Level 3-Spezifikation entfernt. Sie könnten in Level 4 wiederhergestellt werden.

> [!NOTE]
> Die Schreibmodi `lr`, `lr-tb`, `rl`, `rb` und `rb-tl` sind in [HTML](/de/docs/Glossary/HTML)-Kontexten nicht mehr zulässig; sie dürfen nur in [SVG](/de/docs/Glossary/SVG) 1.x-Kontexten verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von max-block-size bei horizontalem und vertikalem Text

In diesem Beispiel wird derselbe Text (die Anfangssätze aus [Herman Melvilles](https://en.wikipedia.org/wiki/Herman_Melville) Roman _[Moby-Dick](https://en.wikipedia.org/wiki/Moby-Dick)_) sowohl im Schreibmodus `horizontal-tb` als auch im Schreibmodus `vertical-rl` präsentiert.

Alles andere an den beiden Boxen ist identisch, einschließlich der Werte, die für `max-block-size` verwendet werden.

#### HTML

Das HTML legt die beiden {{HTMLElement("div")}}-Blöcke fest, die mit ihrem {{cssxref("writing-mode")}} mit den Klassen `horizontal` oder `vertical` präsentiert werden. Beide Boxen teilen die Klasse `standard-box`, die Färbung, Abstände und ihre jeweiligen Werte für `max-block-size` festlegt.

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

Das CSS definiert drei Klassen. Die erste, `standard-box`, wird auf beide Boxen angewendet, wie oben zu sehen. Sie bietet standardmäßiges Styling, einschließlich der minimalen und maximalen Blockgrößen, Schriftgröße und so weiter.

Danach folgen die Klassen `horizontal` und `vertical`, die die Eigenschaft {{cssxref("writing-mode")}} zur Box hinzufügen, wobei der Wert je nach verwendeter Klasse auf `horizontal-tb` oder `vertical-rl` gesetzt wird.

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: #000;
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
- Festlegen der maximalen Größe der anderen Richtung: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
