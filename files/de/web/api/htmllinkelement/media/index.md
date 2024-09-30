---
title: "HTMLLinkElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLLinkElement/media
l10n:
  sourceCommit: 167bf62480885e850452ea0dfb8d83393cd36ddd
---

{{APIRef("HTML DOM")}}

Die **`media`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die die Ressource zutrifft.

Sie entspricht dem `media`-Attribut des {{HTMLElement("link")}}-Elements.

## Wert

Ein String.

## Beispiele

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (min-width: 600px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
