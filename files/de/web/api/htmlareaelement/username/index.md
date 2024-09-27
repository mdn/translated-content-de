---
title: "HTMLAreaElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.username`**-Eigenschaft ist eine Zeichenkette, die den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Wert

Eine Zeichenkette.

## Beispiele

### Den Benutzernamen aus einem area-Link abrufen

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.username; // returns 'anonymous'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Interface, zu dem es gehört.
