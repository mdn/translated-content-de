---
title: "HTMLAreaElement: password-Eigenschaft"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`password`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der die Passworth-Komponente des `href`-Attributs des `<area>`-Elements enthält. Wenn die URL kein Passwort hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAreaElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung.

Das Passwort wird beim Setzen {{Glossary("Percent-encoding", "percent-encodiert")}}, aber nicht percent-decodiert, wenn es gelesen wird.

Siehe [`URL.password`](/de/docs/Web/API/URL/password) für weitere Informationen.

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> is in the document
const area = document.getElementByID("myArea");
area.password; // returns 'flabada'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
