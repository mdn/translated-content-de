---
title: "HTMLAnchorElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.username`**-Eigenschaft ist eine
Zeichenkette, die den Benutzernamen enthält, der vor dem Domainnamen angegeben wurde.

## Wert

Eine Zeichenkette.

## Beispiele

### Den Benutzernamen aus einem Anker-Link abrufen

```js
// Ein <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/de/docs/HTMLAnchorElement"> Element befindet sich im Dokument
const anchor = document.getElementByID("myAnchor");
anchor.username; // gibt 'anonymous' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
