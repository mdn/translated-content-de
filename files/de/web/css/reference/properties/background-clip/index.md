---
title: background-clip
slug: Web/CSS/Reference/Properties/background-clip
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background-clip`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob der Hintergrund eines Elements unterhalb seines Randkastens, Innenabstandskastens oder Inhaltkastens erweitert wird.

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

Der Hintergrund wird immer hinter dem Rahmen gezeichnet, daher hat `background-clip: border-box` nur einen visuellen Effekt, wenn der Rahmen teilweise opak ist oder transparente oder teilweise opake Bereiche hat. Ebenso hat die `background-clip: text`-Eigenschaft nur wenig oder keinen visuellen Effekt, wenn der Text vollständig oder teilweise opak ist.

> [!NOTE]
> Weil das [Wurzelelement](/de/docs/Web/HTML/Reference/Elements/html) einen anderen Hintergrundmalbereich hat, hat die `background-clip`-Eigenschaft keine Wirkung, wenn sie darauf spezifiziert ist. Siehe "[Die Hintergründe spezieller Elemente.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> [!NOTE]
> Für Dokumente, deren [Wurzelelement](/de/docs/Web/HTML/Reference/Elements/html) ein HTML-Element ist: Wenn der berechnete Wert von {{cssxref("background-image")}} auf dem Wurzelelement `none` ist und sein {{cssxref("background-color")}} `transparent` ist, müssen Benutzeragenten stattdessen die berechneten Werte der `background`-Eigenschaften von dem ersten HTML-{{HTMLElement("body")}}-Kindelement dieses Elements übernehmen. Die verwendeten Werte dieser `background`-Eigenschaften des `<body>`-Elements sind ihre Anfangswerte, und die übernommenen Werte werden behandelt, als wären sie auf dem Wurzelelement spezifiziert. Es wird empfohlen, dass Autoren von HTML-Dokumenten den Hintergrund für die Zeichenfläche des `<body>`-Elements anstelle des HTML-Elements angeben.

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
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Rahmens (aber unter dem Rahmen in der Z-Reihenfolge).
- `padding-box`
  - : Der Hintergrund erstreckt sich bis zur Außenkante des Innenabstands. Kein Hintergrund wird unterhalb des Rahmens gezeichnet.
- `content-box`
  - : Der Hintergrund wird innerhalb (abgeschnitten auf) des Inhaltkastens gemalt.
- `text`
  - : Der Hintergrund wird innerhalb (abgeschnitten auf) des Vordergrundtexts gemalt.
- `border-area`
  - : Der Hintergrund wird innerhalb (abgeschnitten auf) des Bereichs gemalt, der vom Rahmen gemalt wird, wobei {{Cssxref("border-width")}} und {{Cssxref("border-style")}} berücksichtigt werden, jedoch jede durch {{Cssxref("border-color")}} eingeführte Transparenz ignoriert wird.

## Barrierefreiheit

Beim Verwenden von `background-clip: text` prüfen Sie, dass der Kontrast zwischen der Hintergrundfarbe und der Farbe des darüber gelegten Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Wenn das Hintergrundbild nicht geladen wird, könnte dies auch dazu führen, dass der Text unlesbar wird. Fügen Sie eine Fallback-{{cssxref("background-color")}} hinzu, um dies zu verhindern, und testen Sie ohne das Bild.

Erwägen Sie die Verwendung von Funktionsabfragen mit {{cssxref("@supports")}}, um zu testen, ob `background-clip: text` unterstützt wird, und bieten Sie eine barrierefreie Alternative an, wo dies nicht unterstützt wird.

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
