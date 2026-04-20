---
title: "`text-decoration-skip` CSS property"
short-title: text-decoration-skip
slug: Web/CSS/Reference/Properties/text-decoration-skip
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

Die **`text-decoration-skip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, über welche Teile des Inhalts eines Elements jegliche Textdekoration, die das Element beeinflusst, überspringen muss. Sie steuert alle von dem Element gezeichneten Textdekorationslinien sowie alle Textdekorationslinien, die von seinen Vorfahren gezeichnet werden.

> [!NOTE]
> Die meisten anderen Browser neigen dazu, die einfachere Eigenschaft {{cssxref("text-decoration-skip-ink")}} zu unterstützen.

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
  - : Nichts wird übersprungen. Somit wird die Textdekoration für allen Textinhalt und über atomare Inline-Level-Boxen gezeichnet.
- `objects`
  - : Die gesamte Margin-Box des Elements wird übersprungen, wenn es sich um ein atomarisches Inline-Element wie ein Bild oder ein Inline-Block handelt.
- `spaces`
  - : Alle Abstände werden übersprungen: alle [Unicode-Leerzeichenzeichen](https://www.unicode.org/reports/tr44/#White_Space) und alle Worttrennzeichen, plus jedes angrenzende {{cssxref("letter-spacing")}} oder {{cssxref("word-spacing")}}.
- `leading-spaces`
  - : Dasselbe wie `spaces`, außer dass nur führende Leerzeichen übersprungen werden.
- `trailing-spaces`
  - : Dasselbe wie `spaces`, außer dass nur nachfolgende Leerzeichen übersprungen werden.
- `edges`
  - : Der Anfang und das Ende der Textdekoration werden leicht (z.B. um die Hälfte der Linienstärke) vom Rand des dekorierenden Kastens eingezogen. Somit erhalten angrenzende Elemente separate Unterstreichungen. (Dies ist im Chinesischen wichtig, wo Unterstreichungen eine Form der Interpunktion darstellen.)

    ![Ein Beispiel für "text-decoration-skip: edges;".](decoration-skip-edges.png)

- `box-decoration`
  - : Die Textdekoration wird über den Margin-, Border- und Paddingbereich des Kastens übersprungen. Dies hat nur eine Auswirkung auf Dekorationen, die von einem Vorfahren auferlegt werden; ein _dekorierender Kasten_ zeichnet niemals über seine eigene Kastendekoration.

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
