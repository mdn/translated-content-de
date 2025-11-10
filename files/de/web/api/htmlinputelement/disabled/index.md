---
title: "HTMLInputElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.disabled`** Eigenschaft ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) HTML-Attribut widerspiegelt, welches angibt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, nimmt es keine Klicks an. Ein deaktiviertes Element ist nicht nutzbar und nicht anklickbar.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<p>
  <label>
    <input id="check-box" name="b" value="1" type="checkbox" disabled /> Check
    this box!
  </label>
</p>
<p>
  <label>
    <input id="toggle-box" name="b" value="2" type="checkbox" /> Enable the
    other checkbox.
  </label>
</p>
```

### JavaScript

```js
const checkBox = document.getElementById("check-box");
const toggleBox = document.getElementById("toggle-box");

toggleBox.addEventListener("change", (event) => {
  checkBox.disabled = !event.target.checked;
});
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
