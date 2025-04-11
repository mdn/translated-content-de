---
title: "HTMLInputElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.disabled`**-Eigenschaft ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-HTML-Attribut widerspiegelt, welches anzeigt, ob die Steuerung deaktiviert ist. Wenn sie deaktiviert ist, akzeptiert sie keine Klicks. Ein deaktiviertes Element ist unbenutzbar und nicht anklickbar.

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

toggleBox.addEventListener(
  "change",
  (event) => {
    checkBox.disabled = !event.target.checked;
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
