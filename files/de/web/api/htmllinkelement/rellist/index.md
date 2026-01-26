---
title: "HTMLLinkElement: relList-Eigenschaft"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`relList`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Menge der Link-Typen enthält, die die Beziehung zwischen der vom {{HTMLElement("link")}}-Element dargestellten Ressource und dem aktuellen Dokument anzeigen. Sie spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Inhaltsattribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Auch wenn die `relList`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `relList`-Eigenschaft zuweisen, was gleichbedeutend mit der Zuweisung zu seiner [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("New link found.");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die entsprechende Eigenschaft auf {{HTMLElement("a")}} und {{HTMLElement("area")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLAreaElement.relList`](/de/docs/Web/API/HTMLAreaElement/relList).
- Dieselbe Liste, aber als durch Leerzeichen getrennte Tokens in einem String:
  [`HTMLLinkElement.rel`](/de/docs/Web/API/HTMLLinkElement/rel)
