---
title: "HTMLAnchorElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: e02a864c445ce44efe815d921ab8fcc46fbfd4c5
---

{{ApiRef("HTML DOM")}}

Die **`password`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der die Passwortkomponente des `href`-Attributs des `<a>`-Elements enthält. Wenn die URL kein Passwort hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Auswirkung.

Das Passwort wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.password`](/de/docs/Web/API/URL/password).

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> is in the document
const anchor = document.getElementById("myAnchor");
anchor.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem sie gehört.
