---
title: "HTMLIFrameElement: privateToken-Eigenschaft"
short-title: privateToken
slug: Web/API/HTMLIFrameElement/privateToken
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("HTML DOM")}}

Die **`privateToken`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces gibt eine Zeichenfolgenrepräsentation eines Optionsobjekts zurück, das einen Vorgang im Zusammenhang mit einem [private state token](/de/docs/Web/API/Private_State_Token_API/Using) darstellt; dieses Objekt hat die gleiche Struktur wie die `RequestInit`-Dictionary-Eigenschaft [`privateToken`](/de/docs/Web/API/RequestInit#privatetoken).

Dieses Attribut spiegelt den Inhalt des zugehörigen `<iframe>`-Elements im Attribut [`privateToken`](/de/docs/Web/HTML/Reference/Elements/iframe#privatetoken) wider.

## Wert

Eine Zeichenkette.

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
