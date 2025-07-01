---
title: "HTMLLinkElement: media-Eigenschaft"
short-title: media
slug: Web/API/HTMLLinkElement/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`media`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der eine Liste von einem oder mehreren Medienformaten darstellt, auf die die Ressource angewendet wird.

Sie spiegelt das `media`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (width >= 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (width >= 600px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
