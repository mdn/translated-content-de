---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`background-clip`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, ob sich der Hintergrund eines Elements unterhalb des `border`-Box, `padding`-Box oder `content`-Box erstreckt.

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

Der Hintergrund wird immer hinter der Grenze gezeichnet, daher hat `background-clip: border-box` nur einen visuellen Effekt, wenn die Grenze teilweise opak ist oder transparente oder teilweise opake Bereiche hat. Auch die Eigenschaft `background-clip: text` hat wenig bis keinen visuellen Effekt, wenn der Text vollständig oder teilweise opak ist.

> [!NOTE]
> Da das [Root-Element](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrund-Malbereich hat, hat die `background-clip`-Eigenschaft keine Wirkung, wenn sie darauf angewendet wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Root-Element](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Root-Element `none` ist und seine {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften vom ersten HTML-{{HTMLElement("body")}}-Kindelement dieses Elements übernehmen. Die verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Anfangswerte, und die übernommenen Werte werden behandelt, als ob sie auf dem Root-Element spezifiziert wären. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Canvas-Hintergrund für das `<body>`-Element statt für das HTML-Element angeben.

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
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand der Grenze (aber unterhalb der Grenze in der Z-Ordnungsfolge).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum äußeren Rand des `padding`. Kein Hintergrund wird unterhalb der Grenze gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der `content`-Box gemalt (daran angepasst).
- `text`
  - : Der Hintergrund wird innerhalb des vordergründigen Textes gemalt (daran angepasst).
- `border-area`
  - : Der Hintergrund wird innerhalb des von der Grenze gemalten Bereichs gelegt, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, aber jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Wenn Sie `background-clip: text` verwenden, stellen Sie sicher, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber liegenden Textes hoch genug ist, damit Personen mit Seheinschränkungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, kann dies auch dazu führen, dass der Text unlesbar wird. Fügen Sie eine Fallback-{{cssxref("background-color")}} hinzu, um dies zu verhindern und testen Sie es ohne Bild.

Erwägen Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und eine zugängliche Alternative bereitzustellen, wo es nicht unterstützt wird.

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

- Die {{cssxref("clip-path")}}-Eigenschaft erstellt einen Ausschnittbereich, der definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
