---
title: "HTMLSelectElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLSelectElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.disabled`**-Eigenschaft ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/select#disabled) HTML-Attribut widerspiegelt, welches angibt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks. Ein deaktiviertes Element ist nicht benutzbar und nicht anklickbar.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<label>
  Allow drinks?
  <input id="allow-drinks" type="checkbox" />
</label>

<label for="drink-select">Drink selection:</label>
<select id="drink-select" disabled>
  <option value="1">Water</option>
  <option value="2">Beer</option>
  <option value="3">Pepsi</option>
  <option value="4">Whisky</option>
</select>
```

### JavaScript

```js
const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false,
);
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
