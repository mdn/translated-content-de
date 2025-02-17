---
title: "HTMLAnchorElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`username`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der den Benutzernamen-Komponenten des `href` des `<a>`-Elements enthält. Wenn die URL keinen Benutzernamen hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Benutzernamen der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keinen Effekt.

Der Benutzername wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, aber nicht dekodiert, wenn er ausgelesen wird.

Siehe [`URL.username`](/de/docs/Web/API/URL/username) für weitere Informationen.

## Wert

Ein String.

## Beispiele

### Den Benutzernamen aus einem Anker-Link auslesen

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

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
