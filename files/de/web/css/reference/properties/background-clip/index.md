---
title: background-clip
slug: Web/CSS/Reference/Properties/background-clip
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unterhalb seines Border-Box, Padding-Box oder Content-Box erstreckt.

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
  border: 10px dashed #333333;
  font-size: 2em;
  font-weight: bold;
}
```

Der Hintergrund wird immer hinter dem Rand gezeichnet, daher hat `background-clip: border-box` nur dann einen visuellen Effekt, wenn der Rand teilweise undurchsichtig oder transparente oder teilweise transparente Bereiche hat. Auch hat die Eigenschaft `background-clip: text` kaum bis keinen visuellen Effekt, wenn der Text vollständig oder teilweise undurchsichtig ist.

> [!NOTE]
> Da das [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrundmalbereich hat, hat die `background-clip`-Eigenschaft keine Wirkung, wenn sie darauf angegeben wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Stammelement](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Stammelement `none` ist und dessen {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften vom ersten HTML {{HTMLElement("body")}}-Kindelement dieses Elements übernehmen. Die verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Anfangswerte, und die übernommenen Werte werden behandelt, als ob sie auf dem Stammelement angegeben wären. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Canvas-Hintergrund für das `<body>`-Element und nicht für das HTML-Element angeben.

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
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Randes (aber unterhalb des Randes in der Z-Ordnung).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Paddings. Es wird kein Hintergrund unter dem Rand gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Content-Box (zugeschnitten auf diesen Bereich) gezeichnet.
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtextes (zugeschnitten auf diesen Bereich) gezeichnet.
- `border-area`
  - : Der Hintergrund wird innerhalb des Bereichs gezeichnet, der vom Rand gezeichnet wird, und berücksichtigt {{Cssxref("border-width")}} und {{Cssxref("border-style")}}, ignoriert jedoch jegliche Transparenz, die durch {{Cssxref("border-color")}} eingeführt wird.

## Barrierefreiheit

Wenn Sie `background-clip: text` verwenden, überprüfen Sie, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der darüber platzierten Textfarbe hoch genug ist, damit Personen mit Sehschwächen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text unlesbar wird. Fügen Sie eine Ersatz-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Berücksichtigen Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und bieten Sie eine zugängliche Alternative, falls es nicht unterstützt wird.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

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
