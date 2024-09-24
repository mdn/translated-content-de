---
title: "Document: queryCommandState()-Methode"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`queryCommandState()`**-Methode informiert Sie darüber, ob die aktuelle Auswahl einen bestimmten {{domxref("Document.execCommand()")}}-Befehl angewendet hat.

## Syntax

```js-nolint
queryCommandState(command)
```

### Parameter

- `command`
  - : Ein Befehl von {{domxref("Document.execCommand()")}}

### Rückgabewert

`queryCommandState()` kann einen booleschen Wert oder `null` zurückgeben, wenn der Zustand unbekannt ist.

## Beispiel

### HTML

```html
<div contenteditable="true">Wählen Sie einen Teil dieses Textes aus!</div>
<button onclick="makeBold();">Testen Sie den Status des 'bold'-Befehls</button>

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
      message = "Die Fettschrift wird vom ausgewählten Text entfernt.";
      break;
    case false:
      message = "Der ausgewählte Text wird fett angezeigt.";
      break;
    default:
      message = "Der Zustand des 'bold'-Befehls ist unbestimmbar.";
      break;
  }
  document.querySelector("#output").textContent = `Ausgabe: ${message}`;
  document.execCommand("bold");
}
```

### Ergebnis

{{EmbedLiveSample('Example', '100', '180')}}

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr darauf ausgelegt, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- Browser-Bugs in Bezug auf `queryCommandState()`: [Scribes "Browser Inconsistencies"-Dokumentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
