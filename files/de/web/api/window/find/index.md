---
title: "Window: find()-Methode"
short-title: find()
slug: Web/API/Window/find
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> Die Unterstützung für `Window.find()` könnte sich in zukünftigen
> Versionen von Gecko ändern. Siehe [Firefox Fehler 672395](https://bugzil.la/672395).

Die **`Window.find()`**-Methode sucht sequenziell nach einem String in einem Fenster.

## Syntax

```js-nolint
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### Parameter

- `aString`
  - : Der Textstring, nach dem gesucht werden soll.
- `aCaseSensitive`
  - : Ein boolescher Wert. Wenn `true`, wird eine groß- und kleinschreibungssensitive Suche durchgeführt.
- `aBackwards`
  - : Ein boolescher Wert. Wenn `true`, wird eine Rückwärtssuche durchgeführt.
- `aWrapAround`
  - : Ein boolescher Wert. Wenn `true`, wird eine Umrundungssuche durchgeführt.
- `aWholeWord`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche nach ganzen Wörtern durchgeführt.
- `aSearchInFrames`
  - : Ein boolescher Wert. Wenn `true`, wird in Frames gesucht.
- `aShowDialog`
  - : Ein boolescher Wert. Wenn `true`, wird ein Suchdialog angezeigt.

### Rückgabewert

`true`, wenn der String gefunden wird; andernfalls `false`.

## Beispiele

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent = `String found? ${window.find(
    text,
  )}`;
}
```

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" onClick='findString("Apples")'>Search for Apples</button>
<button type="button" onClick='findString("Bananas")'>
  Search for Bananas
</button>
<button type="button" onClick='findString("Orange")'>Search for Orange</button>

<p id="output"></p>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Anmerkungen

In einigen Browsern hebt `Window.find()` den gefundenen Inhalt auf der
Seite hervor.

## Spezifikationen

Dies ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
