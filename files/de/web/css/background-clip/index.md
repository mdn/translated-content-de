---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 8f187430b057edfefb8bd0cbd0c9876bc92ae764
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unter der Border-Box, Padding-Box oder Content-Box erstreckt.

{{InteractiveExample("CSS Demo: background-clip")}}

```css interactive-example-choice
background-clip: border-box;
```

```css interactive-example-choice
background-clip: padding-box;
```

```css interactive-example-choice
background-clip: content-box;
```

```css interactive-example-choice
background-clip: text;
color: transparent;
text-shadow: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: white;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Der Hintergrund wird immer hinter dem Rand gezeichnet, daher hat `background-clip: border-box` nur dann einen visuellen Effekt, wenn der Rand teilweise undurchsichtig ist oder transparente oder teilweise durchsichtige Bereiche aufweist. Auch die Eigenschaft `background-clip: text` hat wenig bis keinen visuellen Effekt, wenn der Text vollständig oder teilweise undurchsichtig ist.

> [!NOTE]
> Da das [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrund-Malbereich hat, hat die Eigenschaft `background-clip` keine Wirkung, wenn sie darauf angegeben wird. Siehe "[The backgrounds of special elements.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Stammelement `none` ist und dessen {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften vom ersten HTML {{HTMLElement("body")}} Kind-Element dieses Elements übernehmen. Die verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Anfangswerte, und die übernommenen Werte werden so behandelt, als ob sie auf dem Stammelement angegeben wurden. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Hintergrund des Canvas für das `<body>`-Element anstelle des HTML-Elements angeben.

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
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand der Grenze (aber unter der Grenze in z-Reihenfolge).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Paddings. Kein Hintergrund wird unter der Grenze gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Content-Box gemalt (eingeschnitten).
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtextes gemalt (eingeschnitten).
- `border-area`
  - : Der Hintergrund wird innerhalb des Bereichs gemalt, der von der Grenze bemalt wird, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} beachtet werden, aber jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Zugänglichkeit

Bei der Verwendung von `background-clip: text` überprüfen Sie, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber liegenden Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies ebenfalls dazu führen, dass der Text unlesbar wird. Fügen Sie eine Rückfall-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und eine zugängliche Alternative zu bieten, falls es nicht unterstützt wird.

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

- Die {{cssxref("clip-path")}} Eigenschaft erstellt einen Schnittbereich, der darlegt, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
