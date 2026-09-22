---
title: "HTMLAreaElement: username-Eigenschaft"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: e02a864c445ce44efe815d921ab8fcc46fbfd4c5
---

{{ApiRef("HTML DOM")}}

Die **`username`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface ist ein String, der die Username-Komponente des `href`-Attributs des `<area>`-Elements enthält. Wenn die URL keinen Username hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Username der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAreaElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung.

Der Username wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, aber beim Lesen nicht prozentdecodiert.

Weitere Informationen finden Sie unter [`URL.username`](/de/docs/Web/API/URL/username).

## Wert

Ein String.

## Beispiele

### Den Username aus einem Bereichs-Link abrufen

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.username; // returns 'anonymous'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface.
