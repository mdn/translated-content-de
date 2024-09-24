---
title: "HTMLFormElement: method-Eigenschaft"
short-title: method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.method`**-Eigenschaft repräsentiert die
{{Glossary("HTTP")}}-Methode, die zum Senden des {{HtmlElement("form")}} verwendet wird.

Sofern nicht ausdrücklich angegeben, ist die Standardmethode 'get'.

## Wert

Ein String.

## Beispiele

```js
document.forms["myform"].method = "post";

const formElement = document.createElement("form"); // Create a form
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
