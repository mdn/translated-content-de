---
title: "Range: surroundContents() Methode"
short-title: surroundContents()
slug: Web/API/Range/surroundContents
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.surroundContents()`** Methode verschiebt den Inhalt des
[`Range`](/de/docs/Web/API/Range) in einen neuen Knoten und platziert den neuen Knoten am Anfang des
angegebenen Bereichs.

Diese Methode ist nahezu gleichwertig zu
`newNode.appendChild(range.extractContents()); range.insertNode(newNode)`.
Nach dem Umhüllen schließen die Begrenzungspunkte des `range`
`newNode` ein.

Es wird jedoch eine Ausnahme ausgelöst, wenn der [`Range`](/de/docs/Web/API/Range) einen nicht-[`Text`](/de/docs/Web/API/Text)
Knoten mit nur einem seiner Begrenzungspunkte teilt. Das heißt, im Gegensatz zur
alternativen Methode oben, werden teilweise ausgewählte Knoten nicht geklont und
stattdessen schlägt die Operation fehl.

## Syntax

```js-nolint
surroundContents(newParent)
```

### Parameter

- `newParent`
  - : Ein [`Node`](/de/docs/Web/API/Node), mit dem die Inhalte umgeben werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<span class="header-text">Put this in a headline</span>
```

### JavaScript

```js
const range = document.createRange();
const newParent = document.createElement("h1");

range.selectNode(document.querySelector(".header-text"));
range.surroundContents(newParent);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
