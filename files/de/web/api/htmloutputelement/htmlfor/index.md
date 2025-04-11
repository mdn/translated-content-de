---
title: "HTMLOutputElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`htmlFor`**-Eigenschaft der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle ist ein String, der eine durch Leerzeichen getrennte Liste von `id`s anderer Elemente enthält. Diese kennzeichnen, dass diese Elemente Eingabewerte zur Berechnung beigetragen haben (oder anderweitig die Berechnung beeinflusst haben). Sie entspricht dem [`for`](/de/docs/Web/HTML/Reference/Elements/output#for)-Attribut des {{HTMLElement("output")}}-Elements.

## Wert

Ein String.

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
