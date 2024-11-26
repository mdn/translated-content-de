---
title: "HTMLSourceElement: Eigenschaft media"
short-title: media
slug: Web/API/HTMLSourceElement/media
l10n:
  sourceCommit: da9701a81a92538abef8763e69d88158e6215703
---

{{APIRef("HTML DOM")}}

Die **`media`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der das vorgesehene Zielmedium für die Ressource darstellt. Der Wert ist eine [media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die eine kommagetrennte Liste von Medientypen, Medien-Features und logischen Operatoren ist.

Sie spiegelt das `media`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<source
  id="el"
  src="largeVideo.mov"
  type="video/quicktime"
  media="screen and (min-width: 600px)" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (min-width: 600px)"
el.media = "(min-width: 800px)"; // Updates the media value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
- [`HTMLSourceElement.sizes`](/de/docs/Web/API/HTMLSourceElement/sizes)
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)
- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
