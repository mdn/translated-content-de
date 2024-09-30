---
title: "Range: Range() Konstruktor"
short-title: Range()
slug: Web/API/Range/Range
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

Der **`Range()`** Konstruktor gibt ein neu erstelltes [`Range`](/de/docs/Web/API/Range)-Objekt zurück, dessen Anfang und Ende das globale [`Document`](/de/docs/Web/API/Document)-Objekt ist.

## Syntax

```js-nolint
new Range()
```

### Parameter

Keine.

## Beispiele

In diesem Beispiel erstellen wir einen neuen `Range` mit dem `Range()` Konstruktor und setzen seine Anfangs- und Endpositionen mit den Methoden [`Range.setStartBefore()`](/de/docs/Web/API/Range/setStartBefore) und [`Range.setEndAfter()`](/de/docs/Web/API/Range/setEndAfter). Anschließend wählen wir den Range mit [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) und [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange) aus.

### HTML

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<p>Third paragraph.</p>
<p>Fourth paragraph.</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll("p");

// Create new range
const range = new Range();

// Start range at second paragraph
range.setStartBefore(paragraphs[1]);

// End range at third paragraph
range.setEndAfter(paragraphs[2]);

// Get window selection
const selection = window.getSelection();

// Add range to window selection
selection.addRange(range);
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
- [`Document.createRange()`](/de/docs/Web/API/Document/createRange)
