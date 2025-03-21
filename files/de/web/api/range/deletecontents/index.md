---
title: "Range: deleteContents()-Methode"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`Range.deleteContents()`**-Methode entfernt alle vollständig ausgewählten [Knoten](/de/docs/Web/API/Node) innerhalb dieses Bereichs aus dem Dokument. Bei den teilweise ausgewählten Knoten am Anfang oder Ende des Bereichs wird nur der ausgewählte Teil des Textes gelöscht, während der Knoten selbst intakt bleibt. Anschließend wird der Bereich bis zum Ende des letzten ausgewählten Knotens zusammengeklappt.

```plain
<p>paragraph 1</p><p>paragraph 2</p><p>paragraph 3</p>
       ^----------- selection ------------^

deleteContents() returns:

<p>para</p><p>graph 3</p>
```

Im Gegensatz zu [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) gibt diese Methode kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das den gelöschten Inhalt enthält.

## Syntax

```js-nolint
deleteContents()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von deleteContents()

Wählen Sie einen Text aus, der möglicherweise mehrere Absätze umfasst, und klicken Sie dann auf die Schaltfläche, um den ausgewählten Text zu löschen. Öffnen Sie Ihren DOM-Inspektor, um die aktualisierte DOM-Struktur zu überprüfen.

```html
<p>paragraph 1</p>
<p>paragraph 2</p>
<p>paragraph 3</p>
<button id="delete">Delete selected text</button>
<button id="reset">Reset</button>
```

```js
const button = document.getElementById("delete");
const reset = document.getElementById("reset");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const range = document.getSelection().getRangeAt(0);
  range.deleteContents();
});

reset.addEventListener("click", () => {
  window.location.reload();
});
```

{{EmbedLiveSample("using_deletecontents", "", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
