---
title: "Dokument: queryCommandState()-Methode"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

> [!NOTE]
> Obwohl die [`execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode veraltet ist, gibt es immer noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt, wie im Artikel zu `execCommand()` erwähnt. In diesen Fällen kann es nützlich sein, diese Methode für ein umfassendes Benutzererlebnis zu implementieren, jedoch sollte die Browser-Kompatibilität getestet werden.

Die **`queryCommandState()`**-Methode teilt Ihnen mit, ob die aktuelle Auswahl einen bestimmten [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Befehl angewendet hat.

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
<button>Test the state of the 'bold' command</button>
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

document.querySelector("button").addEventListener("click", makeBold);
```

### Ergebnis

{{EmbedLiveSample('Example', '100', '180')}}

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand-Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- Browserfehler in Bezug auf `queryCommandState()`: [Scribes "Browser Inconsistencies"-Dokumentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
