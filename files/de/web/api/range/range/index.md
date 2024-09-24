---
title: "Range: Range()-Konstruktor"
short-title: Range()
slug: Web/API/Range/Range
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Der **`Range()`**-Konstruktor gibt ein neu erstelltes {{domxref("Range")}}-Objekt zurück, dessen Anfang und Ende das globale {{domxref("Document")}}-Objekt ist.

## Syntax

```js-nolint
new Range()
```

### Parameter

Keine.

## Beispiele

In diesem Beispiel erstellen wir einen neuen Bereich mit dem `Range()`-Konstruktor und legen deren Anfangs- und Endpositionen mit den Methoden {{domxref("Range.setStartBefore()")}} und {{domxref("Range.setEndAfter()")}} fest. Anschließend wählen wir den Bereich mit {{domxref("window.getSelection()")}} und {{domxref("Selection.addRange()")}} aus.

### HTML

```html
<p>Erster Absatz.</p>
<p>Zweiter Absatz.</p>
<p>Dritter Absatz.</p>
<p>Vierter Absatz.</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll("p");

// Neuen Bereich erstellen
const range = new Range();

// Bereich am zweiten Absatz beginnen
range.setStartBefore(paragraphs[1]);

// Bereich am dritten Absatz enden
range.setEndAfter(paragraphs[2]);

// Fenster-Auswahl erhalten
const selection = window.getSelection();

// Bereich zur Fenster-Auswahl hinzufügen
selection.addRange(range);
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Übersicht der DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createRange()")}}
