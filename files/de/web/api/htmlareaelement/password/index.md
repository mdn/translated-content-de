---
title: "HTMLAreaElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: e02a864c445ce44efe815d921ab8fcc46fbfd4c5
---

{{ApiRef("HTML DOM")}}

Die **`password`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der die Passwortkomponente des `href`-Attributs des `<area>`-Elements enthält. Wenn die URL kein Passwort hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAreaElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Auswirkung.

Das Passwort wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.password`](/de/docs/Web/API/URL/password).

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> is in the document
const area = document.getElementById("myArea");
area.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der sie gehört.
