---
title: "Document: getSelection()-Methode"
short-title: getSelection()
slug: Web/API/Document/getSelection
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("DOM")}}

Die **`getSelection()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt das diesem Dokument zugeordnete [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück. Es repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Textcursors.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Selection`](/de/docs/Web/API/Selection)-Objekt oder `null`, wenn das Dokument keinen {{Glossary("Browsing_context", "Browsing Context")}} hat (beispielsweise, wenn es das Dokument eines {{htmlelement("iframe")}} ist, das nicht an ein Dokument angehängt ist).

## Hinweise zur Verwendung

Sie können auch [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) aufrufen. Dies ist identisch mit `window.document.getSelection()`.

Derzeit funktioniert `getSelection()` in Firefox nicht für den Inhalt von {{htmlelement("textarea")}}- und {{htmlelement("input")}}-Elementen.
Als Umgehung können Sie [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) oder die Eigenschaften `selectionStart` und `selectionEnd` verwenden.

Beachten Sie auch den Unterschied zwischen _Auswahl_ und _Fokus_. [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) gibt das fokussierte Element zurück.

## Beispiele

### Ein Selection-Objekt abrufen

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Selection API](/de/docs/Web/API/Selection_API)
- [`Selection`](/de/docs/Web/API/Selection)
- [`Range`](/de/docs/Web/API/Range)
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
