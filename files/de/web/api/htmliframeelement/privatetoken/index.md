---
title: "HTMLIFrameElement: Eigenschaft privateToken"
short-title: privateToken
slug: Web/API/HTMLIFrameElement/privateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`privateToken`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces gibt eine Zeichenkette zurück, die ein Optionsobjekt darstellt. Dies steht im Zusammenhang mit einer [Private State Token](/de/docs/Web/API/Private_State_Token_API/Using)-Operation; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Wörterbuchseigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken).

Dieses Attribut spiegelt den Inhalt des zugehörigen `<iframe>`-Elements und dessen [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken)-Attribut wider.

## Wert

Ein String.

## Beispiele

```html
<iframe id="el" privateToken="{version: 1,operation: 'token-request'}">
</iframe>
```

```js
const el = document.getElementById("el");
console.log(el.privateToken);
// Logs "{version: 1,operation: 'token-request'}"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
