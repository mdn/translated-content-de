---
title: "Range: Methode selectNodeContents()"
short-title: selectNodeContents()
slug: Web/API/Range/selectNodeContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.selectNodeContents()`**-Methode setzt den {{domxref("Range")}} so, dass er den Inhalt eines {{domxref("Node")}} enthält.

Der übergeordnete `Node` des Anfangs und Endes des `Range` wird der Referenzknoten sein. Der `startOffset` ist 0 und der `endOffset` ist die Anzahl der enthaltenen untergeordneten `Node`s oder die Anzahl der Zeichen, die im Referenzknoten enthalten sind.

## Syntax

```js-nolint
selectNodeContents(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der {{domxref("Node")}}, dessen Inhalt innerhalb einer {{domxref("Range")}} ausgewählt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.querySelector("div");
range.selectNodeContents(referenceNode);
```

### Live-Beispiel

Dieses Beispiel ermöglicht es dem Benutzer, einen Absatz mit Schaltflächen auszuwählen und abzuwählen. {{domxref("Document.createRange()")}}, `Range.selectNodeContents()`, und {{domxref("Selection.addRange()")}} werden verwendet, um den Inhalt auszuwählen. {{domxref("Window.getSelection()")}} und {{domxref("Selection.removeAllRanges()")}} werden verwendet, um ihn abzuwählen.

#### HTML

```html
<p id="p">
  <strong>Nutzen Sie die Schaltflächen unten</strong>, um den Inhalt dieses Absatzes auszuwählen oder abzuwählen.
</p>
<button id="select-button">Absatz auswählen</button>
<button id="deselect-button">Absatz abwählen</button>
```

#### JavaScript

```js
const p = document.getElementById("p");
const selectButton = document.getElementById("select-button");
const deselectButton = document.getElementById("deselect-button");

selectButton.addEventListener("click", (e) => {
  // Aktuelle Auswahl löschen
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Absatz auswählen
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener("click", (e) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### Ergebnis

{{EmbedLiveSample("Live_sample")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Index der DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model)
