---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 7cee2a2b7ce3a968bc09f2d9cc3b012befa146c6
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements unterhalb seiner Rahmenbox, Padding-Box oder Inhalt-Box erweitert wird.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur eine visuelle Auswirkung, wenn der Rahmen teilweise opak ist oder transparente oder teilweise opake Bereiche hat. Auch die Eigenschaft `background-clip: text` hat wenig bis gar keine visuelle Wirkung, wenn der Text vollständig oder teilweise opak ist.

> [!NOTE]
> Da das [Wurzelelement](/de/docs/Web/HTML/Element/html) einen anderen Hintergrundmalbereich hat, hat die Eigenschaft `background-clip` keine Wirkung, wenn sie darauf angewendet wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Wurzelelement](/de/docs/Web/HTML/Element/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Wurzelelement `none` ist und seine {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background` Eigenschaften von dem ersten HTML {{HTMLElement("body")}} Kinder-Element dieses Elements propagieren. Die verwendeten Werte der `background` Eigenschaften dieses `<body>` Elements sind ihre Anfangswerte, und die propagierten Werte werden so behandelt, als ob sie auf dem Wurzelelement angegeben wurden. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Hintergrund der Zeichenfläche für das `<body>` Element und nicht für das HTML-Element angeben.

## Syntax

```css
/* Schlüsselwortwerte */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
background-clip: border-area;

/* Globale Werte */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
```

### Werte

- `border-box`
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Rahmens (aber unterhalb des Rahmens in der Z-Reihenfolge).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Paddings. Kein Hintergrund wird unter dem Rahmen gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Inhaltsbox gemalt (d.h. darauf zugeschnitten).
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtexts gemalt.
- `border-area`
  - : Der Hintergrund wird innerhalb des vom Rahmen gemalten Bereichs gemalt, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, jedoch jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignorierend.

## Barrierefreiheit

Wenn Sie `background-clip: text` verwenden, stellen Sie sicher, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber liegenden Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text unleserlich wird. Fügen Sie einen Fallback {{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie, Merkmalabfragen mit {{cssxref("@supports")}} zu verwenden, um die Unterstützung von `background-clip: text` zu testen und eine zugängliche Alternative bereitzustellen, wenn es nicht unterstützt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p class="border-box">Der Hintergrund erstreckt sich hinter den Rahmen.</p>
<p class="padding-box">
  Der Hintergrund erstreckt sich bis zum Innenrand des Rahmens.
</p>
<p class="content-box">
  Der Hintergrund erstreckt sich nur bis zum Rand der Inhaltsbox.
</p>
<p class="text">Der Hintergrund wird auf den Vordergrundtext zugeschnitten.</p>
<p class="border-area">
  Der Hintergrund wird auf den vom Rahmen gemalten Bereich zugeschnitten.
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

- Die {{cssxref("clip-path")}} Eigenschaft erstellt eine Zuschnittsregion, die definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
