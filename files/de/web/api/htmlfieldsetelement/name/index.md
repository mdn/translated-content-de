---
title: "HTMLFieldSetElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLFieldSetElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle gibt den Namen des {{HTMLElement("fieldset")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/fieldset#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

```js
const fs = document.querySelector("fieldset");
console.log(`Element's name: ${fs.name}`);
fs.name = "billing"; // sets or updates the element's name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements)
- [`HTMLFieldSetElement.disabled`](/de/docs/Web/API/HTMLFieldSetElement/disabled)
- [`HTMLLegendElement`](/de/docs/Web/API/HTMLLegendElement)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("legend")}}
- {{HTMLElement("form")}}
