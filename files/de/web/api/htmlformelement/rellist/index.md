---
title: "HTMLFormElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLFormElement/relList
l10n:
  sourceCommit: b6a1290ec691116f79e10df990f9cee55c6991d2
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`relList`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces spiegelt das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut wider. Es handelt sich um eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die die Menge von Link-Typen enthält, welche die Beziehung zwischen der Ressource, die durch das {{HTMLElement("form")}}-Element repräsentiert wird, und dem aktuellen Dokument angeben.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die Eigenschaft nicht mit einer anderen [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) neu zuweisen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

Um einen String mit den Werten als leerzeichengetrennte Tokens zu erhalten, verwenden Sie [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel). Die `rel`-Eigenschaft kann auch verwendet werden, um den Wert des `rel`-Attributs festzulegen.

## Wert

Eine dynamische [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Strings.

## Beispiele

```js
const form = document.querySelector("form");
form.relList.forEach((relEntry) => {
  console.log(relEntry);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList)
- [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList)
- [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel)
