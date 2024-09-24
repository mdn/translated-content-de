---
title: "InputEvent: data-Eigenschaft"
short-title: data
slug: Web/API/InputEvent/data
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("UI Events")}}

Die **`data`**-Eigenschaft des {{domxref("InputEvent")}}-Interfaces gibt eine Zeichenkette mit eingefügten Zeichen zurück. Dies kann eine leere Zeichenkette sein, wenn die Änderung keinen Text einfügt, wie z.B. wenn Zeichen gelöscht werden.

## Wert

Eine Zeichenkette oder `null`. Die Spezifikation bietet einen [Überblick](https://w3c.github.io/input-events/#overview) über ihren Wert in verschiedenen Fällen.

## Beispiele

Im folgenden Beispiel empfängt ein Event-Listener das [input](/de/docs/Web/API/Element/input_event)-Ereignis. Jede textuelle Änderung am {{htmlelement("input")}}-Element wird durch `InputEvent.data` abgerufen und in einen Absatz mittels der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft eingefügt.

```html
<p>Einige Texte zum Kopieren und Einfügen.</p>

<input type="text" />

<p class="result"></p>
```

```js
const editable = document.querySelector("input");
const result = document.querySelector(".result");

editable.addEventListener("input", (e) => {
  result.textContent = `Eingegebener Text: ${e.data}`;
});
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
