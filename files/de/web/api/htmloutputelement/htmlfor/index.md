---
title: "HTMLOutputElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`htmlFor`**-Eigenschaft des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) gibt ein live [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt zurück, das eine Liste von `id`s derjenigen Elemente enthält, die Eingabewerte zu der Berechnung beitragen (oder anderweitig davon betroffen sind). Diese spiegelt das [`for`](/de/docs/Web/HTML/Reference/Elements/output#for)-Inhaltsattribut des {{HTMLElement("output")}}-Elements wider.

## Wert

Ein live [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt.

Obwohl die `htmlFor`-Eigenschaft in dem Sinne schreibgeschützt ist, dass das `DOMTokenList`-Objekt nicht ersetzt werden kann, kann man immer noch direkt der `htmlFor`-Eigenschaft etwas zuweisen, was gleichbedeutend mit der Zuweisung zur [`value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft ist. Das `DOMTokenList`-Objekt kann auch mit den Methoden [`add()`](/de/docs/Web/API/DOMTokenList/add), [`remove()`](/de/docs/Web/API/DOMTokenList/remove), [`replace()`](/de/docs/Web/API/DOMTokenList/replace) und [`toggle()`](/de/docs/Web/API/DOMTokenList/toggle) modifiziert werden.

## Beispiele

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor.split(" ")) {
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
