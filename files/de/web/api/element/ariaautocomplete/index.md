---
title: "Element: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaAutoComplete`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attributs wider. Dieses Attribut gibt an, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Wertes für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und legt fest, wie Vorhersagen dargestellt würden, wenn sie gemacht werden.

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann text, der eine Möglichkeit zur Vervollständigung der gegebenen Eingabe vorschlägt, dynamisch hinter dem Cursor eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die gegebene Eingabe vervollständigen könnten, angezeigt werden.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die gegebene Eingabe vervollständigen könnten, angezeigt werden. Falls angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint hinter dem Cursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht vorherzusagen, wie der Benutzer die Eingabe vervollständigen möchte.

## Beispiele

In diesem Beispiel ist das `aria-autocomplete`-Attribut des Elements mit der ID `animal` auf `"inline"` gesetzt. Mit `ariaAutoComplete` ändern wir den Wert auf `"list"`, was der erwartete Wert für ein Kombinationsfeld ist, das ein `listbox`-Popup aufruft.

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
