---
title: "`text-decoration-skip` CSS property"
short-title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`text-decoration-skip`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, welche Teile des Inhalts eines Elements von jeder Textdekoration, die das Element betrifft, übersprungen werden müssen. Sie steuert alle von dem Element gezeichneten Textdekorationslinien sowie alle von seinen Vorfahren gezeichneten Textdekorationslinien.

> [!NOTE]
> Die meisten anderen Browser neigen dazu, die einfachere {{cssxref("text-decoration-skip-ink")}}-Eigenschaft zu unterstützen.

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
  - : Nichts wird übersprungen. Somit wird die Textdekoration für den gesamten Textinhalt und über atomare Inline-Level-Boxen gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird übersprungen, wenn es sich um ein atomares Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichenzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus alle angrenzenden {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Entspricht `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Entspricht `spaces`, außer dass nur folgende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration sind leicht (z.B. um die Hälfte der Linienstärke) vom Inhaltsrand der dekorierenden Box eingerückt. Somit erhalten angrenzende Elemente separate Unterstriche. (Dies ist im Chinesischen wichtig, da Unterstreichen eine Form der Interpunktion darstellt.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Rand, die Umrandung und die Innenabstände der Box übersprungen. Dies hat nur Auswirkungen auf Dekorationen, die von einem Vorfahren auferlegt werden; eine _dekorierende Box_ zeichnet niemals über ihre eigene Box-Dekoration.

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

- {{cssxref("text-decoration-skip-ink")}}
