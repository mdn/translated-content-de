---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef('HTMLIFrameElement')}}

Die **`srcdoc`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) spezifiziert den Inhalt der Seite.

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
