---
title: "InputEvent: data-Eigenschaft"
short-title: data
slug: Web/API/InputEvent/data
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("UI Events")}}

Die **`data`** schreibgeschützte Eigenschaft des
[`InputEvent`](/de/docs/Web/API/InputEvent)-Interfaces gibt einen String mit eingefügten
Zeichen zurück. Dieser kann ein leerer String sein, wenn die Änderung keinen Text einfügt, wie zum Beispiel beim Löschen von Zeichen.

## Wert

Ein String oder `null`. Die Spezifikation bietet eine [Übersicht](https://w3c.github.io/input-events/#overview) der Werte in verschiedenen Fällen.

## Beispiele

Im folgenden Beispiel empfängt ein Event-Listener das [input](/de/docs/Web/API/Element/input_event)-Ereignis. Jede textuelle Änderung
am {{htmlelement("input")}}-Element wird durch `InputEvent.data` abgerufen und in einen Paragraphen eingefügt, indem die
[`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft verwendet wird.

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
