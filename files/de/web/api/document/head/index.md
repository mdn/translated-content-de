---
title: "Dokument: head-Eigenschaft"
short-title: head
slug: Web/API/Document/head
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`head`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.

## Wert

Ein [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement).

## Beispiele

```html
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>
```

```js
const theHead = document.head;

console.log(theHead.id); // "my-document-head";
console.log(theHead === document.querySelector("head")); // true
```

## Hinweise

`document.head` ist schreibgeschützt. Der Versuch, dieser Eigenschaft einen Wert zuzuweisen, schlägt entweder stillschweigend fehl oder löst im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.body`](/de/docs/Web/API/Document/body)
