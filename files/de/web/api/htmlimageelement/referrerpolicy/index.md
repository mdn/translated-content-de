---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: 7b9f3c730d1909846f80c70d84ac265d93d82af2
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird. Sie spiegelt das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert einer der folgenden ist: `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, `strict-origin-when-cross-origin` oder `unsafe-url`. Für deren Bedeutungen siehe die HTML-Referenz für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy).

## Beispiele

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.referrerPolicy`](/de/docs/Web/API/HTMLAnchorElement/referrerPolicy)
- [`HTMLAreaElement.referrerPolicy`](/de/docs/Web/API/HTMLAreaElement/referrerPolicy)
- [`HTMLIFrameElement.referrerPolicy`](/de/docs/Web/API/HTMLIFrameElement/referrerPolicy)
