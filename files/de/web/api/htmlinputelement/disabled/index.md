---
title: "HTMLInputElement: Eigenschaft disabled"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.disabled`**-Eigenschaft ist ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-HTML-Attribut widerspiegelt, welches angibt, ob das Kontrollfeld deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks. Ein deaktiviertes Element ist nicht benutzbar und nicht anklickbar.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<p>
  <label>
    <input id="check-box" name="b" value="1" type="checkbox" disabled /> Markieren
    Sie dieses Kästchen!
  </label>
</p>
<p>
  <label>
    <input id="toggle-box" name="b" value="2" type="checkbox" /> Aktivieren Sie
    das andere Kästchen.
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

## Kompatibilität der Browser

{{Compat}}
