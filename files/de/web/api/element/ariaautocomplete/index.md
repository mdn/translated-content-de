---
title: "Element: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

Die **`ariaAutoComplete`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attributs wider, welches angibt, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte, und spezifiziert, wie Vorhersagen präsentiert würden, wenn sie gemacht würden.

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer Eingaben macht, kann der Text, der eine Möglichkeit zur Vervollständigung der Eingabe vorschlägt, dynamisch nach dem Cursor eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer Eingaben macht, kann ein Element, das eine Sammlung von Werten enthält, die die Eingabe vervollständigen könnten, angezeigt werden.
- `"both"`
  - : Wenn ein Benutzer Eingaben macht, kann ein Element, das eine Sammlung von Werten enthält, die die Eingabe vervollständigen könnten, angezeigt werden. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer Eingaben macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht vorherzusagen, wie der Benutzer die Eingabe vervollständigen möchte.

## Beispiele

In diesem Beispiel wird das `aria-autocomplete`-Attribut des Elements mit der ID `animal` auf `"inline"` gesetzt. Mit `ariaAutoComplete` aktualisieren wir den Wert auf `"list"`, was der erwartete Wert für ein Kombinationsfeld ist, das ein `listbox`-Popup aufruft.

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
