---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Teile des Inhalts eines Elements von einer Textdekoration, die das Element betrifft, übersprungen werden müssen. Sie steuert alle durch das Element gezogenen Textdekorationen und auch alle durch seine Vorfahren gezogenen Textdekorationen.

> [!NOTE]
> Die meisten anderen Browser unterstützen zunehmend die einfachere {{cssxref("text-decoration-skip-ink")}} Eigenschaft.

## Syntax

```css
/* Schlüsselwortwerte */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* Mehrere Schlüsselwörter */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* Globale Werte */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: revert;
text-decoration-skip: revert-layer;
text-decoration-skip: unset;
```

### Werte

- `none`
  - : Nichts wird übersprungen. Somit wird die Textdekoration für alle Textinhalte und über alle atomaren Inline-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrenner, plus jeglicher angrenzender {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`

  - : Der Anfang und das Ende der Textdekoration werden leicht (z. B. um die Hälfte der Linienstärke) vom Inhalt des dekorierenden Kastens eingerückt. Somit erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist im Chinesischen wichtig, wo Unterstreichung eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über die Rand-, Rahmen- und Innenabstandsbereiche der Box hinweg übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet niemals über ihre eigene Boxdekoration.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kanten überspringen

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
