---
title: "HTMLAnchorElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`password`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der die Passwort-Komponente des `href`-Attributs des `<a>`-Elements enthält. Wenn die URL kein Passwort hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung.

Das Passwort wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, aber beim Abrufen nicht prozent-dekodiert.

Siehe [`URL.password`](/de/docs/Web/API/URL/password) für weitere Informationen.

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> is in the document
const anchor = document.getElementByID("myAnchor");
anchor.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
