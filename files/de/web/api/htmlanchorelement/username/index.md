---
title: "HTMLAnchorElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: e02a864c445ce44efe815d921ab8fcc46fbfd4c5
---

{{ApiRef("HTML DOM")}}

Die **`username`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der die Benutzername-Komponente des `href`-Attributs des `<a>`-Elements enthält. Wenn die URL keinen Benutzernamen hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Benutzernamen der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung.

Der Benutzername wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.username`](/de/docs/Web/API/URL/username).

## Wert

Ein String.

## Beispiele

### Den Benutzernamen aus einem Anker-Link abrufen

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.username; // returns 'anonymous'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
