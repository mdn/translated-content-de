---
title: "HTMLSourceElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLSourceElement/media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Die **`media`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der das beabsichtigte Zielmedium für die Ressource darstellt. Der Wert ist eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using), die eine durch Kommas getrennte Liste von Medientypen, medienbezogenen Eigenschaften und logischen Operatoren ist.

Sie spiegelt das `media`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<video>
  <source
    id="el"
    src="largeVideo.mov"
    type="video/quicktime"
    media="screen and (width >= 600px)" />
</video>
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
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
