---
title: "HTMLImageElement: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`referrerPolicy`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle definiert, welcher Referrer gesendet wird, wenn die Ressource abgerufen wird. Sie spiegelt das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert einer der folgenden ist: `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, `strict-origin-when-cross-origin` oder `unsafe-url`. Für ihre Bedeutungen siehe den HTML [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) Referenz.

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
