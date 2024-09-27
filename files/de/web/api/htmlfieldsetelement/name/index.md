---
title: "HTMLFieldSetElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLFieldSetElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces gibt den Namen des {{HTMLElement("fieldset")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/fieldset#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements repräsentiert.

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
