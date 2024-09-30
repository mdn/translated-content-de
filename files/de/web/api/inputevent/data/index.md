---
title: "InputEvent: data-Eigenschaft"
short-title: data
slug: Web/API/InputEvent/data
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("UI Events")}}

Die **`data`**-Eigenschaft der schreibgeschützten [`InputEvent`](/de/docs/Web/API/InputEvent)-Schnittstelle gibt einen String mit eingefügten Zeichen zurück. Dies kann ein leerer String sein, wenn die Änderung keinen Text einfügt, wie z.B. beim Löschen von Zeichen.

## Wert

Ein String oder `null`. Die Spezifikation hat einen [Überblick](https://w3c.github.io/input-events/#overview) über seinen Wert in verschiedenen Fällen.

## Beispiele

Im folgenden Beispiel empfängt ein Ereignis-Listener das [input](/de/docs/Web/API/Element/input_event)-Ereignis. Jede textuelle Änderung an dem {{htmlelement("input")}}-Element wird durch `InputEvent.data` abgerufen und mit der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft in einen Absatz eingefügt.

```html
<p>Some text to copy and paste.</p>

<input type="text" />

<p class="result"></p>
```

```js
const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `Inputted text: ${e.data}`;
});
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
