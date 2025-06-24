---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{SeeCompatTable}}

Die **`text-decoration-skip`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, welche Teile des Inhalts eines Elements bei einer Textdekoration, die das Element beeinflusst, übersprungen werden müssen. Sie steuert alle Textdekorationslinien, die vom Element sowie von seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser bewegen sich in Richtung Unterstützung der einfacheren Eigenschaft {{cssxref("text-decoration-skip-ink")}}.

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
  - : Nichts wird übersprungen. Somit wird die Textdekoration für den gesamten Textinhalt und über atomare Inline-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Randbox des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder einen Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichenzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Entspricht `spaces`, jedoch werden nur führende Leerzeichen übersprungen.
- `trailing-spaces`
  - : Entspricht `spaces`, jedoch werden nur nachfolgende Leerzeichen übersprungen.
- `edges`

  - : Der Anfang und das Ende der Textdekoration werden leicht von der Inhaltsecke der dekorierenden Box nach innen versetzt (z. B. um die halbe Linienbreite). Dadurch erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist wichtig im Chinesischen, wo das Unterstreichen eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Randbereich, die Rahmen und die Abstände der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren vorgegeben werden; eine _dekorierende Box_ wird niemals über ihre eigene Boxdekoration gezeichnet.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

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

- [`text-decoration-skip-ink`](/de/docs/Web/CSS/text-decoration-skip-ink)
