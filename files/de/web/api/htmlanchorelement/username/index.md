---
title: "HTMLAnchorElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.username`**-Eigenschaft ist ein
String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben wird.

## Wert

Ein String.

## Beispiele

### Abrufen des Benutzernamens aus einem Anker-Link

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.username; // returns 'anonymous'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
