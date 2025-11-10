---
title: "HTMLSourceElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLSourceElement/src
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der die URL einer Medienressource angibt, die als Quelle für das Element verwendet werden soll.

Sie spiegelt das `src`-Attribut des {{HTMLElement("source")}}-Elements wider, das in ein {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element eingebettet ist. Sie hat keine Bedeutung und wird ignoriert, wenn sie in ein {{htmlelement("picture")}}-Element eingebettet ist.

## Wert

Ein String; die URL einer Quellenressource, die im Element verwendet werden soll.

## Beispiele

```html
<video>
  <source
    id="el"
    src="large.webp"
    type="video/webp"
    media="screen and (600px <= width <= 800px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.src); // Output: "large.webp"
el.src = "medium.webp"; // Updates the src value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
- {{htmlelement("source")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
