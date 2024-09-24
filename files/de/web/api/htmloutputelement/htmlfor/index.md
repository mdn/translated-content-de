---
title: "HTMLOutputElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: 4c8b7533087b60fb75e98de28ac6bccc4139e735
---

{{ APIRef("HTML DOM") }}

Die **`htmlFor`**-Eigenschaft der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle ist ein String, der eine durch Leerzeichen getrennte Liste von `id`s anderer Elemente enthält. Sie gibt an, dass diese Elemente Eingabewerte zur Berechnung beigetragen haben (oder diese auf andere Weise beeinflusst haben). Sie spiegelt das [`for`](/de/docs/Web/HTML/Element/output#for)-Attribut des {{HTMLElement("output")}}-Elements wider.

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
