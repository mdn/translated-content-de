---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Teile des Inhalts eines Elements bei der Anwendung von Textdekorationen übersprungen werden müssen. Sie steuert alle vom Element gezeichneten Textdekorationen sowie alle Textdekorationen, die von seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser bewegen sich dahin, die einfachere Eigenschaft {{cssxref("text-decoration-skip-ink")}} zu unterstützen.

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
  - : Es wird nichts übersprungen. Somit wird die Textdekoration für alle Textinhalte und über atomare Inline-Level-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird übersprungen, wenn es sich um ein atomare Inline-Formatierungseinheit wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`

  - : Der Anfang und das Ende der Textdekoration sind leicht (z.B. um die Hälfte der Linienstärke) vom Inhaltsrand der dekorierenden Box eingezogen. Somit erhalten benachbarte Elemente separate Unterstreichungen. (Dies ist im Chinesischen wichtig, wo Unterstreichen eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Rand, die Umrandung und den Padding-Bereich der Box übersprungen. Dies hat nur eine Auswirkung auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _Dekorationsbox_ wird niemals über ihre eigene Boxdekoration zeichnen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überspringen von Rändern

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
