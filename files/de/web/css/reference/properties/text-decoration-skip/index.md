---
title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Teile des Inhalts eines Elements von einer Textdekoration, die das Element betrifft, übersprungen werden müssen. Sie steuert alle von dem Element gezeichneten Textdekorationslinien und auch alle von seinen Vorfahren gezeichneten Textdekorationslinien.

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
  - : Es wird nichts übersprungen. Somit wird die Textdekoration für alle Textinhalte und über atomare inline-level Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Margenbox des Elements wird übersprungen, wenn es sich um einen atomaren Inline handelt, wie z. B. ein Bild oder ein Inline-Block.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen-Zeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Das gleiche wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Das gleiche wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration sind leicht (z. B. durch die Hälfte der Liniendicke) vom Inhaltsrand der dekorierenden Box zur Innenseite versetzt. Somit erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist im Chinesischen wichtig, wo das Unterstreichen eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Margen-, Rand- und Polsterungsbereichen der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet nie über ihre eigene Box-Dekoration.

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

- [`text-decoration-skip-ink`](/de/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink)
