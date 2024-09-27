---
title: "Window: getSelection() Methode"
short-title: getSelection()
slug: Web/API/Window/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("Selection API")}}

Die **`getSelection()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das mit dem [`document`](/de/docs/Web/API/Document) des Fensters verbunden ist und den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Selection`](/de/docs/Web/API/Selection)-Objekt oder `null`, wenn das zugehörige Dokument keinen [Browsing-Kontext](/de/docs/Glossary/Browsing_context) hat (zum Beispiel, wenn das Fenster ein {{htmlelement("iframe")}} ist, das nicht an ein Dokument angehängt ist).

Wenn die Methode auf einem {{htmlelement("iframe")}} aufgerufen wird, das nicht angezeigt wird (z. B. mit `display: none`), gibt Firefox `null` zurück, während andere Browser ein [`Selection`](/de/docs/Web/API/Selection)-Objekt mit [`Selection.type`](/de/docs/Web/API/Selection/type), das auf `None` gesetzt ist, zurückgeben.

## Beispiele

```js
function foo() {
  const selObj = window.getSelection();
  alert(selObj);
  const selRange = selObj.getRangeAt(0);
  // do stuff with the range
}
```

## Anmerkungen

### Zeichenketten-Darstellung des Selection-Objekts

In JavaScript wird, wenn ein Objekt an eine Funktion übergeben wird, die eine Zeichenkette erwartet (wie [`window.alert()`](/de/docs/Web/API/Window/alert) oder [`document.write()`](/de/docs/Web/API/Document/write)), die Methode {{jsxref("Object.toString", "toString()")}} des Objekts aufgerufen und der zurückgegebene Wert an die Funktion übergeben.
Das kann dazu führen, dass das Objekt als Zeichenkette erscheint, wenn es mit anderen Funktionen verwendet wird, obwohl es wirklich ein Objekt mit Eigenschaften und Methoden ist.

Im obigen Beispiel wird `selObj.toString()` automatisch aufgerufen, wenn es an [`window.alert()`](/de/docs/Web/API/Window/alert) übergeben wird. Der Versuch, direkt eine JavaScript [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Eigenschaft oder Methode wie [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) oder [`substr`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substr) auf ein [`Selection`](/de/docs/Web/API/Selection)-Objekt anzuwenden, führt zu einem Fehler, wenn das Objekt diese Eigenschaft oder Methode nicht hat, und kann unerwartete Ergebnisse liefern, wenn es sie hat. Um ein `Selection`-Objekt als Zeichenkette zu verwenden, rufen Sie direkt die `toString()`-Methode auf:

```js
const selectedText = selObj.toString();
```

- `selObj` ist ein `Selection`-Objekt.
- `selectedText` ist eine Zeichenkette (Ausgewählter Text).

### Verwandte Objekte

Sie können [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) aufrufen, das identisch zu `Window.getSelection()` funktioniert.

Es ist erwähnenswert, dass `getSelection()` derzeit nicht im Inhalt von {{htmlelement("textarea")}}- und {{htmlelement("input")}}-Elementen in Firefox und Edge (Legacy) funktioniert. [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) oder die Eigenschaften `selectionStart` und `selectionEnd` könnten zur Umgehung genutzt werden.

Beachten Sie auch den Unterschied zwischen _selection_ und _focus_.
[`Document.activeElement`](/de/docs/Web/API/Document/activeElement) gibt das fokussierte Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Selection API](/de/docs/Web/API/Selection)
- [`Selection`](/de/docs/Web/API/Selection)
- [`Range`](/de/docs/Web/API/Range)
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
