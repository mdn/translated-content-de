---
title: "HTMLFormElement: method-Eigenschaft"
short-title: method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.method`**-Eigenschaft repräsentiert die
{{Glossary("HTTP", "HTTP")}}-Methode, die verwendet wird, um das {{HtmlElement("form")}} zu übermitteln.

Sofern nicht ausdrücklich angegeben, ist die Standardmethode 'get'.

## Wert

Ein String.

## Beispiele

```js
document.forms["my-form"].method = "post";

const formElement = document.createElement("form"); // Create a form
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
