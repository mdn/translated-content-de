---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("Shadow DOM")}}

Die **`innerHTML`**-Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, daher ist `sr.innerHTML = null` gleichbedeutend mit `sr.innerHTML = ""`.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>This element should be more important!</strong>";
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
