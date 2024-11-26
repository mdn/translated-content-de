---
title: "HTMLSourceElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLSourceElement/srcset
l10n:
  sourceCommit: da9701a81a92538abef8763e69d88158e6215703
---

{{APIRef("HTML DOM")}}

Die **`srcset`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der eine durch Kommata getrennte Liste von Bildkandidaten enthält.

Jeder Bildkandidat umfasst die URL einer Bildressource, die als Quelle für das Element verwendet werden soll, und optional einen Deskriptor, der angibt, unter welchen Umständen das Bild verwendet werden soll. Der Deskriptor ist entweder eine Zahl gefolgt von `'w'`, die die Breite des Elements angibt, oder eine Zahl gefolgt von `'x'`, die die Pixeldichte des Geräts angibt.

Sie spiegelt das `srcset`-Attribut des {{HTMLElement("source")}}-Elements wider, das in ein {{htmlelement("picture")}}-Element eingebettet ist. Sie hat keine Bedeutung und wird ignoriert, wenn sie in einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element eingebettet ist, die stattdessen das [`src`](/de/docs/Web/API/HTMLSourceElement/src)-Attribut verwenden.

## Wert

Ein String.

## Beispiele

```html
<source
  id="el"
  srcset="smile.png, smile-1.5x.png 1.5x, smile-2x.png 2x"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.srcset); // Output: "smile.png, smile-1.5x.png 1.5x, smile-large 800w"
el.srcset = "smile.png, smile-med.png 600w, smile-large.png 800w"; // Updates the srcset value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
