---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
Interfaces setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des
`ShadowRoot` zurück.

## Wert

Ein String.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `sr.innerHTML = null` gleichbedeutend mit `sr.innerHTML = ""` ist.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
