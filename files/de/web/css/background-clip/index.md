---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 7cee2a2b7ce3a968bc09f2d9cc3b012befa146c6
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unterhalb seiner 'border box', 'padding box' oder 'content box' erstreckt.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur eine visuelle Wirkung, wenn der Rahmen teilweise undurchsichtig oder transparente oder teilweise undurchsichtige Bereiche aufweist. Auch die Eigenschaft `background-clip: text` hat wenig bis keine visuelle Wirkung, wenn der Text vollständig oder teilweise undurchsichtig ist.

> [!NOTE]
> Da das [Wurzelelement](/de/docs/Web/HTML/Element/html) einen anderen Hintergrund-Malbereich hat, hat die Eigenschaft `background-clip` keine Wirkung, wenn sie für dieses angegeben wird. Siehe "[The backgrounds of special elements.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Wurzelelement](/de/docs/Web/HTML/Element/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Wurzelelement `none` ist und seine {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften von diesem Element auf das erste HTML {{HTMLElement("body")}} Kind-Element übertragen. Die tatsächlich verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Initialwerte, und die übertragenen Werte werden so behandelt, als ob sie auf dem Wurzelelement angegeben wären. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Canvas-Hintergrund für das `<body>`-Element anstelle des HTML-Elements angeben.

## Syntax

```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
background-clip: border-area;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
```

### Werte

- `border-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Rahmens (aber unterhalb des Rahmens in der z-Ordnung).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Abstands. Kein Hintergrund wird unter dem Rahmen gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der (zur Inhalt-Box beschnittenen) Inhalt-Box gemalt.
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtexts gemalt (zum Text beschnitten).
- `border-area`
  - : Der Hintergrund wird innerhalb des Bereichs gemalt, der durch den Rahmen bemalt wird, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, jedoch jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Wenn Sie `background-clip: text` verwenden, überprüfen Sie, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüberliegenden Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text nicht lesbar ist. Fügen Sie eine Fallback-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Betrachten Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und eine barrierefreie Alternative bereitzustellen, wo sie nicht unterstützt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p class="border-box">The background extends behind the border.</p>
<p class="padding-box">
  The background extends to the inside edge of the border.
</p>
<p class="content-box">
  The background extends only to the edge of the content box.
</p>
<p class="text">The background is clipped to the foreground text.</p>
<p class="border-area">
  The background is clipped to the area painted by the border.
</p>
```

### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgb(0 0 0 / 20%);
}

.border-area {
  background-clip: border-area;
  border-color: transparent;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 600, 630)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("clip-path")}} Eigenschaft erstellt eine Clip-Region, die definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
