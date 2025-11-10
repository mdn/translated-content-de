---
title: "HTMLFormElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLFormElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`relList`**-Schreibgeschützte Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut wider. Es handelt sich um eine live-[`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Satz von Linktypen enthält, der die Beziehung zwischen der durch das {{HTMLElement("form")}}-Element dargestellten Ressource und dem aktuellen Dokument angibt.

Die Eigenschaft selbst ist schreibgeschützt, was bedeutet, dass Sie die Eigenschaft nicht mit einer anderen [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) neu zuweisen können, aber der Inhalt der zurückgegebenen Liste kann geändert werden.

Um eine Zeichenkette mit den Werten als leerzeichengetrennte Tokens abzurufen, verwenden Sie [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel). Die `rel`-Eigenschaft kann auch verwendet werden, um den `rel`-Attributwert festzulegen.

## Wert

Eine live-[`DOMTokenList`](/de/docs/Web/API/DOMTokenList) von Zeichenfolgen.

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
