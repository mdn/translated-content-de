---
title: "Window: find() Methode"
short-title: find()
slug: Web/API/Window/find
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> Die Unterstützung für `Window.find()` könnte sich in zukünftigen
> Versionen von Gecko ändern. Siehe [Firefox-Bug 672395](https://bugzil.la/672395).

Die **`Window.find()`**-Methode findet eine Zeichenkette sequenziell in einem Fenster.

## Syntax

```js-nolint
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### Parameter

- `aString`
  - : Die zu suchende Textzeichenkette.
- `aCaseSensitive`
  - : Ein boolescher Wert. Wenn `true`, wird eine groß-/kleinschreibungssensitive Suche durchgeführt.
- `aBackwards`
  - : Ein boolescher Wert. Wenn `true`, wird eine Rückwärtssuche durchgeführt.
- `aWrapAround`
  - : Ein boolescher Wert. Wenn `true`, wird eine umschließende Suche durchgeführt.
- `aWholeWord`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche nach ganzen Wörtern durchgeführt.
- `aSearchInFrames`
  - : Ein boolescher Wert. Wenn `true`, wird in Frames gesucht.
- `aShowDialog`
  - : Ein boolescher Wert. Wenn `true`, wird ein Suchdialog angezeigt.

### Rückgabewert

`true`, wenn die Zeichenkette gefunden wird; andernfalls `false`.

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

## Hinweise

In einigen Browsern markiert (hervorhebt) `Window.find()` den gefundenen Inhalt auf
der Seite.

## Spezifikationen

Dies ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
