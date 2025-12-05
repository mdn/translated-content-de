---
title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{SeeCompatTable}}

Die **`text-decoration-skip`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, welche Teile des Inhalts eines Elements von einer Textdekoration, die das Element betrifft, übersprungen werden müssen. Sie steuert alle Textdekorationslinien, die vom Element selbst sowie von allen seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser nähern sich der Unterstützung der einfacheren {{cssxref("text-decoration-skip-ink")}}-Eigenschaft an.

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
  - : Nichts wird übersprungen. Somit wird die Textdekoration für den gesamten Textinhalt und über atomare Inline-Level-Boxen hinweg gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird übersprungen, wenn es sich um ein atomares Inline wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichenzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, sowie jeder angrenzende {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Entspricht `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Entspricht `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration ist leicht eingezogen (z.B. um die Hälfte der Liniendicke) vom Rand des dekorierenden Kastens. Somit erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist wichtig im Chinesischen, wo Unterstreichungen eine Form der Interpunktion darstellen.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Rand, die Grenze und die Auffüllungsbereiche des Kastens übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; ein _dekorierender Kasten_ zeichnet niemals über seine eigene Kastendekoration.

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

- {{cssxref("text-decoration-skip-ink")}}
