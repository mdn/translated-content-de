---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`srcdoc`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) legt den Inhalt der Seite fest.

## Beispiele

```js
const iframe = document.createElement("iframe");
iframe.srcdoc = `<!doctype html><p>Hello World!</p>`;
document.body.appendChild(iframe);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
