---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unterhalb seiner Rahmenbox, Auffüllungsbox oder Inhaltsbox erstreckt.

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

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur dann einen visuellen Effekt, wenn der Rahmen teilweise undurchsichtig ist oder transparente oder teilweise undurchsichtige Bereiche aufweist. Auch die Eigenschaft `background-clip: text` hat wenig bis gar keinen visuellen Effekt, wenn der Text vollständig oder teilweise undurchsichtig ist.

> [!NOTE]
> Da das [Root-Element](/de/docs/Web/HTML/Element/html) einen anderen Hintergrund-Malbereich hat, hat die `background-clip` Eigenschaft keine Wirkung, wenn sie darauf angewendet wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Bei Dokumenten, deren [Root-Element](/de/docs/Web/HTML/Element/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Root-Element `none` ist und dessen {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften vom ersten HTML {{HTMLElement("body")}} Kind-Element dieses Elements propagieren. Die verwendeten Werte der `background`-Eigenschaften jenes `<body>` Elements sind ihre Anfangswerte, und die propagierten Werte werden behandelt, als wären sie auf dem Root-Element spezifiziert. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Hintergrund der Zeichenfläche für das `<body>` Element statt für das HTML-Element spezifizieren.

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
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Rahmens (aber unter dem Rahmen in der Z-Ordnung).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Abstands. Kein Hintergrund wird unter dem Rahmen gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Inhaltsbox gezeichnet (dorthin beschränkt).
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtexts gezeichnet (dorthin beschränkt).
- `border-area`
  - : Der Hintergrund wird innerhalb des durch den Rahmen gezeichneten Bereichs dargestellt (dorthin beschränkt), wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, jedoch jegliche durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Bei der Verwendung von `background-clip: text` sollte sichergestellt werden, dass der Kontrast zwischen der Hintergrundfarbe und der darüber liegenden Textfarbe hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text unlesbar wird. Fügen Sie eine Rückfall-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie, Feature-Anfragen mit {{cssxref("@supports")}} zu verwenden, um die Unterstützung von `background-clip: text` zu testen und eine zugängliche Alternative bereitzustellen, wo sie nicht unterstützt wird.

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

- Die {{cssxref("clip-path")}} Eigenschaft erstellt eine Schnittregion, die definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrundeigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
