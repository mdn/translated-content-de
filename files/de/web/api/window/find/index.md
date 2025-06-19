---
title: "Fenster: find()-Methode"
short-title: find()
slug: Web/API/Window/find
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> Die Unterstützung für `Window.find()` kann sich in zukünftigen
> Versionen von Gecko ändern. Siehe [Firefox Bug 672395](https://bugzil.la/672395).

Die **`Window.find()`**-Methode findet einen String nacheinander in einem Fenster.

## Syntax

```js-nolint
find(string, caseSensitive, backwards, wrapAround, wholeWord, searchInFrames, showDialog)
```

### Parameter

- `string`
  - : Der Textstring, nach dem gesucht werden soll.
- `caseSensitive`
  - : Ein boolescher Wert. Wenn `true`, wird eine groß-/kleinschreibungssensitive Suche angegeben.
- `backwards`
  - : Ein boolescher Wert. Wenn `true`, wird eine rückwärts gerichtete Suche angegeben.
- `wrapAround`
  - : Ein boolescher Wert. Wenn `true`, wird eine Rundum-Suche angegeben.
- `wholeWord`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche nach ganzen Wörtern angegeben.
- `searchInFrames`
  - : Ein boolescher Wert. Wenn `true`, wird eine Suche in Frames angegeben.
- `showDialog`
  - : Ein boolescher Wert. Wenn `true`, wird ein Suchdialog angezeigt.

### Rückgabewert

`true`, wenn der String gefunden wird; andernfalls `false`.

## Beispiele

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" id="find-apples">Search for Apples</button>
<button type="button" id="find-bananas">Search for Bananas</button>
<button type="button" id="find-orange">Search for Orange</button>
<p id="output"></p>
```

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent = `String found? ${window.find(
    text,
  )}`;
}

document.getElementById("find-apples").addEventListener("click", () => {
  findString("Apples");
});
document.getElementById("find-bananas").addEventListener("click", () => {
  findString("Bananas");
});
document.getElementById("find-orange").addEventListener("click", () => {
  findString("Orange");
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Hinweise

In einigen Browsern markiert (hervorhebt) `Window.find()` den gefundenen Inhalt auf
der Website.

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
