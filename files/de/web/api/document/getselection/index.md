---
title: "Document: Methode getSelection()"
short-title: getSelection()
slug: Web/API/Document/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("DOM")}}

Die **`getSelection()`**-Methode der {{DOMxRef("Document")}}-Schnittstelle gibt das {{DOMxRef("Selection")}}-Objekt zurück, das mit diesem Dokument verbunden ist und den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors repräsentiert.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein {{DOMxRef("Selection")}}-Objekt oder `null`, wenn das Dokument keinen [Browsing-Kontext](/de/docs/Glossary/Browsing_context) hat (zum Beispiel, wenn es sich um das Dokument eines {{htmlelement("iframe")}} handelt, das nicht an ein Dokument angehängt ist).

## Beispiele

### Abrufen eines Selection-Objekts

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// Führen Sie Aktionen mit dem Bereich aus

console.log(selection); // Selection-Objekt
```

### Zeichenketten-Darstellung des Selection-Objekts

Einige Funktionen (wie {{DOMxRef("Window.alert()")}}) rufen automatisch {{JSxRef("Object.toString", "toString()")}} auf und der zurückgegebene Wert wird an die Funktion übergeben. Folglich wird der ausgewählte Text und nicht das `Selection`-Objekt zurückgegeben:

```js
alert(selection);
```

Jedoch rufen nicht alle Funktionen `toString()` automatisch auf.
Um ein `Selection`-Objekt als Zeichenkette zu verwenden, rufen Sie direkt die Methode `toString()` auf:

```js
let selectedText = selection.toString();
```

## Verwandte Objekte

Sie können {{domxref("Window.getSelection()")}} aufrufen, was identisch zu `window.document.getSelection()` ist.

Es ist zu beachten, dass `getSelection()` derzeit nicht mit dem Inhalt von {{htmlelement("input")}}-Elementen in Firefox funktioniert.
{{domxref("HTMLInputElement.setSelectionRange()")}}) könnte als Umgehung verwendet werden.

Beachten Sie auch den Unterschied zwischen _Auswahl_ und _Fokus_.
{{domxref("Document.activeElement")}} gibt das fokussierte Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
