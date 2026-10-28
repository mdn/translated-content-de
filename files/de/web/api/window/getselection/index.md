---
title: "Window: Methode getSelection()"
short-title: getSelection()
slug: Web/API/Window/getSelection
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("Selection API")}}

Die Methode **`getSelection()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt das [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das dem [`document`](/de/docs/Web/API/Document) des Fensters zugeordnet ist. Es repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke.

`window.getSelection()` ist eine Kurzform für `window.document.getSelection()`. Weitere Informationen finden Sie unter [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection).

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Selection`](/de/docs/Web/API/Selection)-Objekt oder `null`, wenn das zugehörige Dokument keinen {{Glossary("Browsing_context", "Browsing Context")}} hat (beispielsweise wenn das Fenster ein {{htmlelement("iframe")}} ist, das nicht in ein Dokument eingebunden ist).

Wird die Methode für ein {{htmlelement("iframe")}} aufgerufen, das nicht angezeigt wird (z. B. weil `display: none` gesetzt ist), gibt Firefox `null` zurück. Andere Browser geben dagegen ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, bei dem [`Selection.type`](/de/docs/Web/API/Selection/type) auf `None` gesetzt ist.

## Beispiele

### Ein Selection-Objekt abrufen

```js
const selection = window.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

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
