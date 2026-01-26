---
title: "HTMLAnchorElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`relList`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) liefert ein live [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt, das die Menge der Linktypen enthält, die die Beziehung zwischen der Ressource, die durch das {{HTMLElement("a")}}-Element repräsentiert wird, und dem aktuellen Dokument angeben. Sie spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Inhaltsattribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein live [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `relList`-Eigenschaft an sich insofern schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `relList`-Eigenschaft zuweisen, was dem Zuweisen zu dessen [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `New anchor node found with ${list.length} link types in relList.`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die äquivalente Eigenschaft auf {{HTMLElement("area")}} und {{HTMLElement("link")}},
  [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste, allerdings als durch Leerzeichen getrennte Tokens in einem String:
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
