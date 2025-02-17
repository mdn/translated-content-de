---
title: "HTMLAreaElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`username`**-Eigenschaft der Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ist ein String, der die Benutzerkomponente des `href` des `<area>`-Elements enthält. Wenn die URL keinen Benutzernamen enthält, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Benutzernamen der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAreaElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Auswirkung.

Der Benutzername wird {{Glossary("Percent-encoding", "percent-codiert")}}, wenn er gesetzt wird, aber nicht percent-dekodiert, wenn er gelesen wird.

Weitere Informationen finden Sie unter [`URL.username`](/de/docs/Web/API/URL/username).

## Wert

Ein String.

## Beispiele

### Den Benutzernamen aus einem Bereichslink abrufen

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.username; // returns 'anonymous'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement), zu der sie gehört.
