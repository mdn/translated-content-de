---
title: "HTMLSourceElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLSourceElement/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`media`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der das beabsichtigte Zielmedium für die Ressource repräsentiert. Der Wert ist eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), die eine durch Kommas getrennte Liste von Medientypen, Medieneigenschaften und logischen Operatoren ist.

Sie spiegelt das `media`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<source
  id="el"
  src="largeVideo.mov"
  type="video/quicktime"
  media="screen and (width >= 600px)" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (width >= 600px)"
el.media = "(width >= 800px)"; // Updates the media value
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
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
