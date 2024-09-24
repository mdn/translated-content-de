---
title: "Range: surroundContents()-Methode"
short-title: surroundContents()
slug: Web/API/Range/surroundContents
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.surroundContents()`**-Methode verschiebt den Inhalt des
{{ domxref("Range") }} in einen neuen Knoten und platziert den neuen Knoten am Anfang des
angegebenen Bereichs.

Diese Methode ist nahezu äquivalent zu
`newNode.appendChild(range.extractContents()); range.insertNode(newNode)`.
Nach dem Umbinden umfassen die Grenzpunkte des `range`
`newNode`.

Es wird jedoch eine Ausnahme geworfen, wenn der {{ domxref("Range") }} einen nicht-{{domxref("Text") }}-Knoten mit nur einem seiner Grenzpunkte teilt. Das heißt, anders als im obigen Beispiel, werden teilweise ausgewählte Knoten nicht geklont und stattdessen schlägt der Vorgang fehl.

## Syntax

```js-nolint
surroundContents(newParent)
```

### Parameter

- `newParent`
  - : Ein {{ domxref("Node") }}, mit dem der Inhalt umgeben wird.

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

- [Die DOM-Schnittstellen-Übersicht](/de/docs/Web/API/Document_Object_Model)
