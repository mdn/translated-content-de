---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Teile des Inhalts eines Elements von jeglicher Textdekoration, die das Element betrifft, ausgelassen werden sollen. Sie steuert alle von dem Element gezeichneten Textdekorationen sowie alle Textdekorationen, die von seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser nähern sich der Unterstützung der einfacheren {{cssxref("text-decoration-skip-ink")}} Eigenschaft an.

## Syntax

```css
/* Keyword values */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* Multiple keywords */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* Global values */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: revert;
text-decoration-skip: revert-layer;
text-decoration-skip: unset;
```

### Werte

- `none`
  - : Nichts wird ausgelassen. Somit wird die Textdekoration für alle Textinhalte und über atomare Inline-Level-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird ausgelassen, wenn es sich um ein atomares Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Leerzeichen werden ausgelassen: alle [Unicode-Leerzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrenner, plus jeglicher benachbarter {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Wie `spaces`, außer dass nur führende Leerzeichen ausgelassen werden.
- `trailing-spaces`
  - : Wie `spaces`, außer dass nur nachfolgende Leerzeichen ausgelassen werden.
- `edges`
  - : Der Beginn und das Ende der Textdekoration sind leicht eingerückt (z.B. um die Hälfte der Linienstärke) vom Inhaltsrand der dekorierenden Box. Somit erhalten benachbarte Elemente separate Unterstreichungen. (Dies ist wichtig im Chinesischen, wo die Unterstreichung eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Rand-, Rahmen- und Pufferbereichen der Box ausgelassen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet niemals über ihre eigene Box-Dekoration.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ränder überspringen

#### HTML

```html
<p>Hey, grab a cup of <em>coffee!</em></p>
```

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edges;
}
```

#### Ergebnis

{{EmbedLiveSample("Skipping_edges", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`text-decoration-skip-ink`](/de/docs/Web/CSS/text-decoration-skip-ink)
