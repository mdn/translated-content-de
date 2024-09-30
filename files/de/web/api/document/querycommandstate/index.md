---
title: "Document: queryCommandState() Methode"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`queryCommandState()`** Methode gibt an, ob die aktuelle Auswahl einen bestimmten [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) Befehl angewendet hat.

## Syntax

```js-nolint
queryCommandState(command)
```

### Parameter

- `command`
  - : Ein Befehl von [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)

### Rückgabewert

`queryCommandState()` kann einen booleschen Wert oder `null` zurückgeben, wenn der Status unbekannt ist.

## Beispiel

### HTML

```html
<div contenteditable="true">Select a part of this text!</div>
<button onclick="makeBold();">Test the state of the 'bold' command</button>

<hr />

<div id="output"></div>
```

```css hidden
hr,
button {
  margin: 1rem 0;
}
```

### JavaScript

```js
function makeBold() {
  const state = document.queryCommandState("bold");
  let message;
  switch (state) {
    case true:
      message = "The bold formatting will be removed from the selected text.";
      break;
    case false:
      message = "The selected text will be displayed in bold.";
      break;
    default:
      message = "The state of the 'bold' command is indeterminable.";
      break;
  }
  document.querySelector("#output").textContent = `Output: ${message}`;
  document.execCommand("bold");
}
```

### Ergebnis

{{EmbedLiveSample('Example', '100', '180')}}

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- Browser-Bugs im Zusammenhang mit `queryCommandState()`: [Scribes Dokumentation zu "Browser Inconsistencies"](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
