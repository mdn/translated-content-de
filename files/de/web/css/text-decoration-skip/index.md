---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, über welche Teile des Inhalts eines Elements eine auf das Element wirkende Textdekoration überspringen muss. Sie steuert alle von dem Element gezeichneten Textdekorationen sowie alle von seinen Vorfahren gezeichneten Textdekorationen.

> [!NOTE]
> Die meisten anderen Browser nähern sich an, die einfachere Eigenschaft {{cssxref("text-decoration-skip-ink")}} zu unterstützen.

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
  - : Der gesamte Randbereich des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrenner sowie alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`

  - : Der Anfang und das Ende der Textdekoration sind leicht (zum Beispiel um die Hälfte der Linienstärke) vom Inhaltsrand der dekorierenden Box eingerückt. So erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist im Chinesischen wichtig, wo Unterstreichungen eine Form der Interpunktion darstellen.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Rand-, Rahmen- und Pufferbereichen der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet niemals über ihre eigene Boxdekoration.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Edges überspringen

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
