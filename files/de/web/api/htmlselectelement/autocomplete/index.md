---
title: "HTMLSelectElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLSelectElement/autocomplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt an, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Element/select#autocomplete)-Attribut des `<select>`-Elements wider.

## Wert

Ein String, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"` oder eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) oder der leere String (`""`), wenn nicht angegeben.

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
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Deaktivieren der Autovervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
