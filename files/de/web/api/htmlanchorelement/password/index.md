---
title: "HTMLAnchorElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.password`**-Eigenschaft ist ein
String, der das Passwort enthält, das vor dem Domainnamen angegeben ist.

Wenn es gesetzt wird, ohne vorher die
[`username`](/de/docs/Web/API/HTMLAnchorElement/username)-Eigenschaft zu setzen, schlägt es stillschweigend fehl.

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> is in the document
const anchor = document.getElementByID("myAnchor");
anchor.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
