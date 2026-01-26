---
title: "HTMLAreaElement: relList Eigenschaft"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`relList`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das die Menge der Linktypen enthält, die die Beziehung zwischen der durch das {{HTMLElement("area")}}-Element dargestellten Ressource und dem aktuellen Dokument angeben. Es spiegelt das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Inhaltsattribut des {{HTMLElement("area")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `relList`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass das `DOMTokenList`-Objekt nicht ersetzt werden kann, können Sie dennoch direkt der `relList`-Eigenschaft einen Wert zuweisen, was gleichbedeutend mit dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifizieren.

## Beispiele

```js
const areas = document.getElementsByTagName("area");

for (const area of areas) {
  console.log("New area found.");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die äquivalente Eigenschaft an {{HTMLElement("a")}} und {{HTMLElement("link")}},
  [`HTMLAnchorElement.relList`](/de/docs/Web/API/HTMLAnchorElement/relList) und [`HTMLLinkElement.relList`](/de/docs/Web/API/HTMLLinkElement/relList).
- Die gleiche Liste aber als durch Leerzeichen getrennte Token in einem String:
  [`HTMLAreaElement.rel`](/de/docs/Web/API/HTMLAreaElement/rel)
