---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unterhalb seines Rahmenkastens, Polsterungskastens oder Inhaltskastens erstreckt.

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
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur einen visuellen Effekt, wenn der Rahmen teilweise undurchsichtig ist oder transparente oder teilweise undurchsichtige Bereiche hat. Auch die `background-clip: text` Eigenschaft hat wenig bis keinen visuellen Effekt, wenn der Text vollständig oder teilweise undurchsichtig ist.

> [!NOTE]
> Da das [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrundmalbereich hat, hat die `background-clip` Eigenschaft keine Wirkung, wenn sie darauf spezifiziert wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Stammelement `none` ist und seine {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background` Eigenschaften vom ersten HTML {{HTMLElement("body")}} Kindelement dieses Elements übernehmen. Die verwendeten Werte dieser `<body>` Element-Hintergrundeigenschaften sind ihre Initialwerte, und die übernommenen Werte werden behandelt, als ob sie auf dem Stammelement spezifiziert wären. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Leinwandhintergrund für das `<body>` Element anstelle des HTML-Elements spezifizieren.

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
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des Rahmens (aber in der Z-Ordnung unterhalb des Rahmens).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand der Polsterung. Kein Hintergrund wird unter dem Rahmen gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb (abgeschnitten zum) des Inhaltskastens gemalt.
- `text`
  - : Der Hintergrund wird innerhalb (abgeschnitten zum) des Vordergrundtexts gemalt.
- `border-area`
  - : Der Hintergrund wird innerhalb (abgeschnitten zum) des vom Rahmen gemalten Bereichs gemalt, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, aber jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Beim Verwenden von `background-clip: text`, stellen Sie sicher, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber liegenden Textes hoch genug ist, damit Menschen mit Sehschwächen den Inhalt der Seite lesen können.

Falls das Hintergrundbild nicht lädt, könnte das auch dazu führen, dass der Text unlesbar wird. Fügen Sie einen Fallback {{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie, Feature-Abfragen mit {{cssxref("@supports")}} zu verwenden, um die Unterstützung von `background-clip: text` zu testen und eine zugängliche Alternative bereitzustellen, wo es nicht unterstützt wird.

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
