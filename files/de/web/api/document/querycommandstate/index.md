---
title: "Dokument: queryCommandState()-Methode"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}{{Non-standard_header}}

> [!NOTE]
> Obwohl die Methode [`execCommand()`](/de/docs/Web/API/Document/execCommand) veraltet ist, gibt es immer noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt, wie im Artikel zu `execCommand()` erwähnt. In diesen Fällen kann sich diese Methode als nützlich erweisen, um ein vollständiges Benutzererlebnis zu implementieren, aber testen Sie, um eine plattformübergreifende Browser-Kompatibilität sicherzustellen.

Die **`queryCommandState()`**-Methode informiert Sie darüber, ob die aktuelle Auswahl einen bestimmten [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)-Befehl angewendet hat.

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

Dieses Merkmal ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- Browser-Fehler im Zusammenhang mit `queryCommandState()`: [Scribe's "Browser Inconsistencies" Dokumentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
