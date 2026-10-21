---
title: "HTMLAnchorElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`relList`** von [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) gibt ein aktives [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück. Es enthält die Linktypen, die die Beziehung zwischen der durch das {{HTMLElement("a")}}-Element repräsentierten Ressource und dem aktuellen Dokument angeben.

Sie spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Inhaltsattribut des {{HTMLElement("a")}}-Elements wider.

## Wert

Ein aktives [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Die Eigenschaft `relList` ist insofern schreibgeschützt, als Sie das `DOMTokenList`-Objekt nicht ersetzen können. Sie können `relList` dennoch direkt einen Wert zuweisen. Dies entspricht einer Zuweisung an die Eigenschaft [`value`](/de/docs/Web/API/DOMTokenList/value). Sie können das `DOMTokenList`-Objekt außerdem mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

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

- Die entsprechenden Eigenschaften von {{HTMLElement("area")}} und {{HTMLElement("link")}}:
  [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Dieselbe Liste als durch Leerzeichen getrennte Tokens in einem String:
  [`HTMLAnchorElement.rel`](/de/docs/Web/API/HTMLAnchorElement/rel)
