---
title: element()
slug: Web/CSS/Reference/Values/element
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

Die **`element()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert einen {{cssxref("image")}}-Wert, der aus einem beliebigen HTML-Element generiert wird. Dieses Bild ist dynamisch, was bedeutet, dass wenn das HTML-Element geändert wird, die CSS-Eigenschaften, die den resultierenden Wert verwenden, automatisch aktualisiert werden.

Ein besonders nützliches Szenario für die Verwendung wäre, ein Bild in einem HTML-{{HTMLElement("canvas")}}-Element zu rendern und dieses dann als Hintergrund zu verwenden.

In Gecko-Browsern können Sie die nicht standardisierte Methode [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um das Element zu ändern, das als Hintergrund für ein bestimmtes CSS-Hintergrundelement verwendet wird.

## Syntax

```css
element(id)
```

wo:

- _id_
  - : Die ID eines Elements, das als Hintergrund verwendet werden soll, angegeben mithilfe des HTML-Attributs #_id_ am Element.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Diese Beispiele funktionieren in Firefox-Versionen, die `-moz-element()` unterstützen.

### Ein einigermaßen realistisches Beispiel

Dieses Beispiel verwendet ein verborgenes {{HTMLElement("div")}} als Hintergrund. Das Hintergrundelement verwendet einen Verlauf, beinhaltet aber auch Text, der als Teil des Hintergrunds gerendert wird.

```html
<div id="target-box">
  <p>This box uses the element with the #my-background ID as its background!</p>
</div>

<div id="background-container">
  <div id="my-background">
    <p>This text is part of the background. Cool, huh?</p>
  </div>
</div>
```

```css
#target-box {
  width: 400px;
  height: 400px;
  background: -moz-element(#my-background) no-repeat;
}

#background-container {
  overflow: hidden;
  height: 0;
}

#my-background {
  width: 1024px;
  height: 1024px;
  background-image: linear-gradient(to right, red, orange, yellow, white);
}

#my-background p {
  transform-origin: 0 0;
  rotate: 45deg;
  color: white;
}
```

{{EmbedLiveSample("A_somewhat_realistic_example")}}

Das {{HTMLElement("div")}}-Element mit der ID "my-background" wird als Hintergrund für den Inhalt verwendet, einschließlich des Absatzes "This box uses the element with the #my-background ID as its background!".

### Seitenvorschau

Dieses [Beispiel, basierend auf Vincent De Oliveiras](https://iamvdo.me/en/blog/css-element-function), erstellt eine Vorschau des `<div id="css-source">` innerhalb von `<div id="css-result">`.

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
- {{cssxref("image")}}
- {{cssxref("gradient")}}
- {{cssxref("cross-fade()")}}
- [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)
