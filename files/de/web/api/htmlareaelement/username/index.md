---
title: "HTMLAreaElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.username`**-Eigenschaft ist ein
String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Wert

Ein String.

## Beispiele

### Den Benutzernamen aus einem Area-Link erhalten

```js
// Ein <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/de/docs/HTMLAreaElement"> Element ist im Dokument vorhanden
const area = document.getElementByID("myArea");
area.username; // gibt 'anonymous' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
