---
title: element()
slug: Web/CSS/Reference/Values/element
l10n:
  sourceCommit: e253c3abaca1994b6b940699ea582091df5207f3
---

{{SeeCompatTable}}

Die **`element()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert einen {{cssxref("&lt;image&gt;")}} Wert, der aus einem beliebigen HTML-Element erzeugt wird. Dieses Bild ist live, was bedeutet, dass wenn das HTML-Element geändert wird, die CSS-Eigenschaften, die den resultierenden Wert verwenden, automatisch aktualisiert werden.

Ein besonders nützliches Szenario für die Verwendung wäre das Rendern eines Bildes in einem HTML-{{HTMLElement("canvas")}}-Element und dieses dann als Hintergrund zu verwenden.

In Gecko-Browsern können Sie die nicht standardisierte Methode [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um das Element zu ändern, das als Hintergrund für ein gegebenes CSS-Hintergrundelement verwendet wird.

## Syntax

```css
element(id)
```

wo:

- _id_
  - : Die ID eines Elements, das als Hintergrund verwendet werden soll, angegeben durch das HTML-Attribut #_id_ auf dem Element.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

Diese Beispiele funktionieren in Versionen von Firefox, die `-moz-element()` unterstützen.

### Ein etwas realistisches Beispiel

Dieses Beispiel verwendet ein verstecktes {{HTMLElement("div")}} als Hintergrund. Das Hintergrundelement verwendet einen Verlauf, enthält aber auch Text, der als Teil des Hintergrunds gerendert wird.

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

Das {{HTMLElement("div")}}-Element mit der ID "my-background" wird als Hintergrund für den Inhalt verwendet, einschließlich des Absatzes "Dieser Kasten verwendet das Element mit der #my-background ID als seinen Hintergrund!".

### Seitenvorschau

Dieses [auf Vincent De Oliveiras Beispiel basierende Beispiel](https://iamvdo.me/en/blog/css-element-function) erstellt eine Vorschau des `<div id="css-source">` innerhalb von `<div id="css-result">`.

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
