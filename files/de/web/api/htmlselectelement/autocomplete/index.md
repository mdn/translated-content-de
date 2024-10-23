---
title: "HTMLSelectElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLSelectElement/autocomplete
l10n:
  sourceCommit: 68cc84f475a189d25551619d62e6e29b3db161fe
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt an, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Element/select#autocomplete)-Attribut des `<select>`-Elements wider.

## Wert

Ein String, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"`, oder eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) oder der leere String (`""`), wenn nicht angegeben.

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
- HTML [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut
- ARIA [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attribut
- [Autovervollständigung deaktivieren](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
