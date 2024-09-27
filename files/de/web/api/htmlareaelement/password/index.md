---
title: "HTMLAreaElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.password`**-Eigenschaft ist ein
String, der das vor dem Domainnamen angegebene Passwort enthält.

Wenn sie gesetzt wird, ohne dass zuvor die
[`username`](/de/docs/Web/API/HTMLAreaElement/username)
Eigenschaft festgelegt wurde, schlägt sie ohne Hinweis fehl.

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> is in the document
const area = document.getElementByID("myArea");
area.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Interface, zu dem es gehört.
