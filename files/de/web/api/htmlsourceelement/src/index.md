---
title: "HTMLSourceElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLSourceElement/src
l10n:
  sourceCommit: da9701a81a92538abef8763e69d88158e6215703
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der die URL einer Mediendatei angibt, die als Quelle für das Element verwendet werden soll.

Sie spiegelt das `src`-Attribut des {{HTMLElement("source")}}-Elements wider, das in einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element eingebettet ist. Es hat keine Bedeutung und wird ignoriert, wenn es in einem {{htmlelement("picture")}}-Element eingebettet ist.

## Wert

Ein String; die URL einer Quellenressource, die im Element verwendet werden soll.

## Beispiele

```html
<source
  id="el"
  src="large.webp"
  type="video/webp"
  media="screen and (600px <= width <= 800px)" />
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
