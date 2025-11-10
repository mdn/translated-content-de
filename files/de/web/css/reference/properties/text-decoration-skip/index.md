---
title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Teile des Inhalts eines Elements von einer Textdekoration, die das Element betrifft, übersprungen werden müssen. Sie steuert alle von dem Element gezeichneten Textdekorationen sowie alle Textdekorationen, die von seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser unterstützen zunehmend die einfachere Eigenschaft {{cssxref("text-decoration-skip-ink")}}.

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
  - : Nichts wird übersprungen. Daher wird die Textdekoration für alle Textinhalte und über atomare Inline-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Randbox des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus jeglicher angrenzender {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration sind leicht (z. B. um die Hälfte der Linienstärke) von der Inhaltkante der dekorierenden Box eingezogen. So erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist in Chinesisch wichtig, wo Unterstreichung eine Form der Interpunktion ist.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über die Rand-, Rahmen- und Auffüllungsbereiche der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet nie über ihre eigene Box-Dekoration.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überspringen von Kanten

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
