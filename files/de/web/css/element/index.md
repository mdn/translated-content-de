---
title: element()
slug: Web/CSS/element
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}{{SeeCompatTable}}

Die **`element()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen {{cssxref("&lt;image&gt;")}} Wert, der von einem beliebigen HTML-Element generiert wird. Dieses Bild ist live, was bedeutet, dass wenn das HTML-Element geändert wird, die CSS-Eigenschaften, die diesen Wert verwenden, automatisch aktualisiert werden.

Ein besonders nützliches Szenario für die Verwendung davon wäre, ein Bild in einem HTML-{{HTMLElement("canvas")}} Element zu rendern und dieses dann als Hintergrund zu verwenden.

In Gecko-Browsern können Sie die nicht standardisierte Methode [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um das Element zu ändern, das als Hintergrund für ein gegebenes CSS-Hintergrundelement verwendet wird.

## Syntax

```css
element(id)
```

wobei:

- _id_
  - : Die ID eines Elements, das als Hintergrund verwendet werden soll, angegeben durch das HTML-Attribut #_id_ des Elements.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Diese Beispiele funktionieren in Firefox-Versionen, die `-moz-element()` unterstützen.

### Ein etwas realistisches Beispiel

Dieses Beispiel verwendet ein verborgenes {{HTMLElement("div")}} als Hintergrund. Das Hintergrundelement verwendet einen Verlauf, enthält aber auch Text, der als Teil des Hintergrunds gerendert wird.

```html
<div
  style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div
    id="myBackground1"
    style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
    <p style="transform-origin:0 0; rotate: 45deg; color:white;">
      This text is part of the background. Cool, huh?
    </p>
  </div>
</div>
```

{{EmbedLiveSample("A_somewhat_realistic_example")}}

Das {{HTMLElement("div")}} Element mit der ID "myBackground1" wird als Hintergrund für den Inhalt verwendet, einschließlich des Absatzes "This box uses the element with the #myBackground1 ID as its background!".

### Seitenvorschau

Dieses <a href="https://iamvdo.me/en/blog/css-element-function">Beispiel basierend auf Vincent De Oliveiras</a> erstellt eine Vorschau des `<div id="css-source">` innerhalb `<div id="css-result">`.

#### HTML

```html
<div id="css-source">
  <h1>Page Preview</h1>
</div>
<div id="css-result"></div>
```

#### CSS

```css
#css-result {
  background: -moz-element(#css-source) no-repeat;
  width: 256px;
  height: 32px;
  background-size: 80%;
  border: dashed;
}
```

#### Ergebnis

{{EmbedLiveSample("Page_Preview")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
- [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)
