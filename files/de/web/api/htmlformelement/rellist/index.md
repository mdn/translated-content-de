---
title: "HTMLFormElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLFormElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`relList`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Menge von Link-Typen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("form")}}-Element dargestellt wird, und dem aktuellen Dokument anzeigen. Sie spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut des Inhalts des {{HTMLElement("form")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `relList`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `relList`-Eigenschaft einen Wert zuweisen, was dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

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
