---
title: "HTMLSelectElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLSelectElement/disabled
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.disabled`**-Eigenschaft ist ein boolescher Wert, der das
[`disabled`](/de/docs/Web/HTML/Element/select#disabled)
HTML-Attribut widerspiegelt, welches angibt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, nimmt es keine Klicks an. Ein deaktiviertes Element ist unbrauchbar und nicht klickbar.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<label>
  Getränke erlauben?
  <input id="allow-drinks" type="checkbox" />
</label>

<label for="drink-select">Getränkeauswahl:</label>
<select id="drink-select" disabled>
  <option value="1">Wasser</option>
  <option value="2">Bier</option>
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

## Kompatibilität der Browser

{{Compat}}
