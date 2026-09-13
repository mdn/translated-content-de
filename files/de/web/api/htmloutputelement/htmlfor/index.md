---
title: "HTMLOutputElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: 752996f4695156431af4e19feb0542a4d372ce1e
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`htmlFor`**-Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) gibt ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das eine Liste von `id`s derjenigen Elemente enthält, die Eingabewerte zur Berechnung beitragen oder anderweitig beeinflusst werden. Diese Eigenschaft spiegelt das [`for`](/de/docs/Web/HTML/Reference/Elements/output#for)-Attribut des {{HTMLElement("output")}}-Elements wider.

## Wert

Ein dynamisches [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `htmlFor`-Eigenschaft in dem Sinne schreibgeschützt ist, dass Sie das `DOMTokenList`-Objekt nicht ersetzen können, können Sie dennoch direkt der `htmlFor`-Eigenschaft zuweisen, was dem Zuweisen zu ihrer [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht. Sie können das `DOMTokenList`-Objekt auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) ändern.

## Beispiele

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor) {
  const elem = document.getElementById(id);
  elem.style.outline = "2px solid red";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("output")}}
