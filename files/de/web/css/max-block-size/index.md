---
title: max-block-size
slug: Web/CSS/max-block-size
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

Die CSS-Eigenschaft **`max-block-size`** legt die maximale Größe eines Elements in der dem Schreibmodus entgegengesetzten Richtung fest, wie durch {{cssxref("writing-mode")}} angegeben. Das heißt, wenn die Schreibrichtung horizontal ist, entspricht `max-block-size` {{cssxref("max-height")}}; wenn die Schreibrichtung vertikal ist, ist `max-block-size` dasselbe wie {{cssxref("max-width")}}.

Die maximale Länge der anderen Dimension wird mit der {{cssxref("max-inline-size")}} Eigenschaft spezifiziert.

Dies ist nützlich, weil `max-width` immer für horizontale Größen und `max-height` immer für vertikale Größen verwendet wird. Wenn Sie Längen basierend auf der Größe Ihres Textinhalts festlegen müssen, sollten Sie dies im Hinblick auf die Schreibrichtung tun können.

Immer wenn Sie normalerweise `max-height` oder `max-width` verwenden würden, sollten Sie stattdessen `max-block-size` verwenden, um die maximale „Höhe“ des Inhalts festzulegen (auch wenn dies keine vertikale Größe ist) und `max-inline-size`, um die maximale „Breite“ des Inhalts festzulegen (auch wenn dies stattdessen vertikal statt horizontal sein könnte). Siehe [`writing-mode` Beispiele](/de/docs/Web/CSS/writing-mode#examples), die die verschiedenen Schreibmodi in Aktion zeigen.

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
  - : Definiert `max-block-size` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert `max-block-size` als Prozentsatz der Größe des umgebenden Blocks in der Blockachse.
- `none`
  - : Keine Begrenzung der Boxgröße.
- `max-content`
  - : Die intrinsische bevorzugte `max-block-size`.
- `min-content`
  - : Die intrinsische minimale `max-block-size`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Raum durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.

### Wie `writing-mode` die Richtung beeinflusst

Die Werte des `writing-mode` beeinflussen die Zuordnung von `max-block-size` zu `max-width` oder `max-height` wie folgt:

| Werte des `writing-mode`                                                  | `max-block-size` entspricht |
| ------------------------------------------------------------------------- | --------------------------- |
| `horizontal-tb`, `lr`, `lr-tb`, `rl`, `rb`, `rb-rl`                       | {{cssxref("max-height")}}   |
| `vertical-rl`, `vertical-lr`, `sideways-rl`, `sideways-lr`, `tb`, `tb-rl` | {{cssxref("max-width")}}    |

> [!NOTE]
> Die `writing-mode` Werte `sideways-lr` und `sideways-rl` wurden spät im Designprozess aus der CSS Writing Modes Level 3 Spezifikation entfernt. Sie könnten in Level 4 wieder eingeführt werden.

> [!NOTE]
> Die Schreibrichtungen `lr`, `lr-tb`, `rl`, `rb` und `rb-tl` sind in {{Glossary("HTML", "HTML")}} Kontexten nicht mehr zulässig; sie dürfen nur in {{Glossary("SVG", "SVG")}} 1.x Kontexten verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der `max-block-size` mit horizontalem und vertikalem Text

In diesem Beispiel wird derselbe Text (die Eröffnungssätze aus dem Roman _[Moby-Dick](https://en.wikipedia.org/wiki/Moby-Dick)_ von [Herman Melville](https://en.wikipedia.org/wiki/Herman_Melville)) sowohl in den Schreibrichtungen `horizontal-tb` als auch `vertical-rl` dargestellt.

Alles andere an den beiden Boxen ist identisch, einschließlich der für `max-block-size` verwendeten Werte.

#### HTML

Das HTML stellt die beiden {{HTMLElement("div")}} Blöcke bereit, die mit ihrem {{cssxref("writing-mode")}} anhand der CSS-Klassen `horizontal` oder `vertical` dargestellt werden. Beide Boxen teilen die Klasse `standard-box`, die Färbung, Abstände und ihre jeweiligen Werte für `max-block-size` festlegt.

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

Das CSS definiert drei Klassen. Die erste, `standard-box`, wird auf beide Boxen angewendet, wie oben zu sehen. Sie liefert eine Standardformatierung einschließlich der minimalen und maximalen Blockgrößen, Schriftgröße usw.

Danach folgen die Klassen `horizontal` und `vertical`, die die Eigenschaft {{cssxref("writing-mode")}} zur Box hinzufügen, wobei der Wert auf `horizontal-tb` oder `vertical-rl` gesetzt wird, je nachdem, welche Klasse verwendet wird.

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
- Festlegen der maximalen Größe in der anderen Richtung: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
