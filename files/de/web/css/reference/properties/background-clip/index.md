---
title: background-clip
slug: Web/CSS/Reference/Properties/background-clip
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`background-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob der Hintergrund eines Elements sich unterhalb seiner Randbox, Polsterbox oder Inhaltsbox erstreckt.

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
  - : Der Hintergrund erstreckt sich bis zum Außenrand des Rahmens (liegt aber unterhalb des Rahmens in der Z-Ordnung).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zum Außenrand der Polsterung. Es wird kein Hintergrund unter dem Rahmen gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb der Inhaltsbox gemalt (daran abgeschnitten).
- `text`
  - : Der Hintergrund wird innerhalb des Vordergrundtextes gemalt (daran abgeschnitten).
- `border-area`
  - : Der Hintergrund wird innerhalb des Bereichs gemalt (daran abgeschnitten), der vom Rahmen bemalt wird, unter Berücksichtigung von {{Cssxref("border-width")}} und {{Cssxref("border-style")}}, aber ohne Transparenz, die durch {{Cssxref("border-color")}} eingeführt wird.

## Beschreibung

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur dann einen visuellen Effekt, wenn der Rahmen teilweise opak oder transparente oder teilweise opake Bereiche aufweist. Auch die Eigenschaft `background-clip: text` hat wenig bis keinen visuellen Effekt, wenn der Text vollständig oder teilweise opak ist.

> [!NOTE]
> Da das [Wurzelelement](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrund-Malanwendungsbereich hat, hat die Eigenschaft `background-clip` keine Wirkung, wenn sie darauf angewendet wird. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Wurzelelement](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Wurzelelement `none` ist und seine {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften vom ersten HTML {{HTMLElement("body")}} untergeordneten Element dieses Elements übernehmen. Die verwendeten Werte der `background`-Eigenschaften dieses `<body>`-Elements sind ihre Anfangswerte, und die propagierten Werte werden behandelt, als wären sie auf dem Wurzelelement angegeben worden. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Leinwandhintergrund für das `<body>`-Element statt für das HTML-Element angeben.

## Barrierefreiheit

Wenn `background-clip: text` verwendet wird, stellen Sie sicher, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der Farbe des darüber platzierten Textes hoch genug ist, damit Personen mit Sehbeeinträchtigungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text unlesbar wird. Fügen Sie einen Fallback-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie die Verwendung von Feature-Abfragen mit {{cssxref("@supports")}}, um die Unterstützung von `background-clip: text` zu testen und eine barrierefreie Alternative anzubieten, falls es nicht unterstützt wird.

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

- Die {{cssxref("clip-path")}} Eigenschaft erstellt einen Clip-Bereich, der definiert, welcher Teil eines _gesamten Elements_ angezeigt werden soll.
- Hintergrund-Eigenschaften: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
