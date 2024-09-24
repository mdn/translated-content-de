---
title: "Element: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaAutoComplete`**-Eigenschaft des {{domxref("Element")}}-Interfaces spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attributs wider, welches angibt, ob die Eingabe von Text eine Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Wertes des Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und wie diese Vorhersagen präsentiert würden, falls sie gemacht werden.

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer Eingaben macht, kann dynamisch Text eingefügt werden, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingaben vorschlägt, und zwar nach dem Cursor.
- `"list"`
  - : Wenn ein Benutzer Eingaben macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer Eingaben macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten. Falls angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt und der Text, der zur Vervollständigung des automatisch ausgewählten Wertes benötigt wird, erscheint nach dem Cursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer Eingaben macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht, vorherzusagen, wie der Benutzer die Eingabe abschließen möchte.

## Beispiele

In diesem Beispiel ist das `aria-autocomplete`-Attribut des Elements mit der ID `animal` auf "`inline`" gesetzt. Mithilfe von `ariaAutoComplete` aktualisieren wir den Wert auf "`list`", was der erwartete Wert für ein Kombinationsfeld ist, das ein `listbox`-Popup aufruft.

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="inline"
    aria-controls="animals-listbox"
    aria-expanded="false"
    aria-haspopup="listbox" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaAutoComplete); // inline
el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
