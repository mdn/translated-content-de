---
title: "HTMLAreaElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.password`**-Eigenschaft ist ein
String, der das Passwort enthält, das vor dem Domainnamen angegeben ist.

Wenn es gesetzt wird, ohne zuvor die
[`username`](/de/docs/Web/API/HTMLAreaElement/username)
Eigenschaft zu setzen, schlägt es stillschweigend fehl.

## Wert

Ein String.

## Beispiele

```js
// Ein <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/de/docs/HTMLAreaElement"> ist im Dokument
const area = document.getElementByID("myArea");
area.password; // gibt 'flabada' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
