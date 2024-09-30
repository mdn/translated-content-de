---
title: "HTMLFormElement: method-Eigenschaft"
short-title: method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.method`**-Eigenschaft repräsentiert die
[HTTP](/de/docs/Glossary/HTTP)-Methode, die verwendet wird, um das {{HtmlElement("form")}} zu übermitteln.

Sofern nicht ausdrücklich festgelegt, ist die Standardmethode 'get'.

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

## Browser-Kompatibilität

{{Compat}}
