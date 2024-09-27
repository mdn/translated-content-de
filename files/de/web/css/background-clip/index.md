---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 7cee2a2b7ce3a968bc09f2d9cc3b012befa146c6
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements unter seiner Rahmenbox, Polsterbox oder Inhaltsbox erweitert wird.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur dann eine visuelle Wirkung, wenn der Rahmen teilweise opak ist oder transparente oder teilweise opake Bereiche hat. Auch die Eigenschaft `background-clip: text` hat wenig bis gar keine visuelle Wirkung, wenn der Text vollständig oder teilweise opak ist.

> [!NOTE]
> Da das [Root-Element](/de/docs/Web/HTML/Element/html) einen anderen Hintergrund-Malbereich hat, hat die Eigenschaft `background-clip` keine Wirkung, wenn sie darauf angewendet wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Root-Element](/de/docs/Web/HTML/Element/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Root-Element `none` ist und sein {{cssxref("background-color")}} `transparent`, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften von dem ersten HTML-{{HTMLElement("body")}}-Kind-Element dieses Elements übernehmen. Die verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Anfangswerte, und die übernommenen Werte werden so behandelt, als ob sie auf dem Root-Element angegeben worden wären. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Hintergrund der Leinwand für das `<body>`-Element und nicht für das HTML-Element angeben.

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
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Rahmens (aber unter dem Rahmen in der z-Ordnung).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Polsters. Kein Hintergrund wird unterhalb des Rahmens gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Inhaltsbox gemalt (daran geklippt).
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtextes gemalt (daran geklippt).
- `border-area`
  - : Der Hintergrund wird innerhalb des Bereichs gemalt, der vom Rahmen gemalt wird (daran geklippt), wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, aber jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Wenn Sie `background-clip: text` verwenden, überprüfen Sie, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber gelegten Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte der Text auch unlesbar werden. Fügen Sie eine Fallback-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne Bild.

Erwägen Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und eine barrierefreie Alternative bereitzustellen, wo es nicht unterstützt wird.

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

- Die {{cssxref("clip-path")}}-Eigenschaft erstellt einen Clipping-Bereich, der definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
