---
title: "HTMLAnchorElement: Password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.password`**-Eigenschaft ist eine Zeichenfolge, die das Passwort enthält, das vor dem Domainnamen angegeben ist.

Wenn es gesetzt wird, ohne zuvor die [`username`](/de/docs/Web/API/HTMLAnchorElement/username) Eigenschaft zu setzen, schlägt es lautlos fehl.

## Wert

Eine Zeichenfolge.

## Beispiele

```js
// Ein <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/de/docs/HTMLAnchorElement"> befindet sich im Dokument
const anchor = document.getElementByID("myAnchor");
anchor.password; // gibt 'flabada' zurück
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
