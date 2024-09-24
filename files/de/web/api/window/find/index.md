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
> Versionen von Gecko ändern. Siehe [Firefox Bug 672395](https://bugzil.la/672395).

Die **`Window.find()`**-Methode findet einen String nacheinander in einem Fenster.

## Syntax

```js-nolint
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### Parameter

- `aString`
  - : Der Textstring, nach dem gesucht werden soll.
- `aCaseSensitive`
  - : Ein boolescher Wert. Wenn `true`, wird eine groß-/kleinbuchstabenempfindliche Suche festgelegt.
- `aBackwards`
  - : Ein boolescher Wert. Wenn `true`, wird eine rückwärtsgerichtete Suche festgelegt.
- `aWrapAround`
  - : Ein boolescher Wert. Wenn `true`, wird eine Endlossuche festgelegt.
- `aWholeWord`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche nach ganzen Wörtern festgelegt.
- `aSearchInFrames`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche in Frames festgelegt.
- `aShowDialog`
  - : Ein boolescher Wert. Wenn `true`, wird ein Suchdialog angezeigt.

### Rückgabewert

`true` wenn der String gefunden wird; andernfalls `false`.

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
<p>Äpfel, Bananen und Orangen.</p>
<button type="button" onClick='findString("Apples")'>Suche nach Äpfeln</button>
<button type="button" onClick='findString("Bananas")'>
  Suche nach Bananen
</button>
<button type="button" onClick='findString("Orange")'>Suche nach Orange</button>

<p id="output"></p>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Hinweise

In einigen Browsern markiert (hervorhebt) `Window.find()` den gefundenen Inhalt auf der Seite.

## Spezifikationen

Dies ist nicht Teil einer Spezifikation.

## Kompatibilität der Browser

{{Compat}}
