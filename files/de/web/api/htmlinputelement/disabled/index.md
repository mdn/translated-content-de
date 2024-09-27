---
title: "HTMLInputElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.disabled`**-Eigenschaft ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-HTML-Attribut widerspiegelt, welches anzeigt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, nimmt es keine Klicks an. Ein deaktiviertes Element ist unbenutzbar und kann nicht angeklickt werden.

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
