---
title: "HTMLImageElement: Image()-Konstruktor"
short-title: Image()
slug: Web/API/HTMLImageElement/Image
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Der **`Image()`**-Konstruktor erstellt eine neue Instanz von {{DOMxRef("HTMLImageElement")}}. Er ist funktional äquivalent zu {{DOMxRef("Document.createElement()", "document.createElement('img')")}}.

> [!NOTE]
> Diese Funktion sollte nicht mit der CSS-Funktion [`image()`](/de/docs/Web/CSS/image/image) verwechselt werden.

## Syntax

```js-nolint
new Image()
new Image(width)
new Image(width, height)
```

### Parameter

- `width` {{optional_inline}}
  - : Die Breite des Bildes (d.h. der Wert für das [`width`](/de/docs/Web/HTML/Element/img#width)-Attribut).
- `height` {{optional_inline}}
  - : Die Höhe des Bildes (d.h. der Wert für das [`height`](/de/docs/Web/HTML/Element/img#height)-Attribut).

## Hinweis zur Nutzung

Das gesamte Bitmap wird ungeachtet der im Konstruktor angegebenen Größen geladen. Die im Konstruktor angegebene Größe spiegelt sich in den Eigenschaften {{DOMxRef("HTMLImageElement.width")}} und {{DOMxRef("HTMLImageElement.height")}} der resultierenden Instanz wider. Die intrinsische Breite und Höhe des Bildes in CSS-Pixeln werden durch die Eigenschaften {{DOMxRef("HTMLImageElement.naturalWidth")}} und {{DOMxRef("HTMLImageElement.naturalHeight")}} wiedergegeben. Wenn im Konstruktor keine Größe angegeben ist, haben beide Eigenschaftspaare die gleichen Werte.

## Beispiele

```js
const myImage = new Image(100, 200);
myImage.src = "picture.jpg";
document.body.appendChild(myImage);
```

Dies wäre äquivalent zur Definition des folgenden HTML-Tags innerhalb des {{HTMLElement("body")}}:

```html
<img width="100" height="200" src="picture.jpg" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
