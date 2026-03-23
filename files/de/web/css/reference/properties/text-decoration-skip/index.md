---
title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{deprecated_header}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, über welche Teile des Inhalts eines Elements jede das Element betreffende Textdekoration überspringen muss. Sie steuert alle von dem Element gezeichneten Textdekorationslinien und auch alle von seinen Vorfahren gezeichneten Textdekorationslinien.

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
  - : Nichts wird übersprungen. Daher wird die Textdekoration für den gesamten Textinhalt und über atomare Inline-Level-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Randbox des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen-Zeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen sowie alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachlaufende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration sind leicht (z. B. um die Hälfte der Linienstärke) vom Inhalt der dekorierenden Box zurückgesetzt. So erhalten angrenzende Elemente getrennte Unterstreichungen. (Dies ist im Chinesischen wichtig, da Unterstreichungen eine Form der Interpunktion darstellen.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über der Rand-, Rahmen- und Polsterfläche der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen von einem Vorfahren; eine _dekorierende Box_ zeichnet niemals über ihre eigene Boxdekoration.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überspringen der Ränder

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

- {{cssxref("text-decoration-skip-ink")}}
