---
title: "HTMLSelectElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLSelectElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt an, ob der Wert des Steuerelements automatisch vom Browser vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/select#autocomplete)-Attribut des `<select>`-Elements wider.

## Wert

Ein Zeichenfolgenwert, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"` oder eine [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens)) oder die leere Zeichenfolge (`""`), wenn nicht angegeben.

## Beispiele

```js
const selectElement = document.getElementById("favorite-fruit");
console.log(textArea.autocomplete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Abschalten der Autovervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
