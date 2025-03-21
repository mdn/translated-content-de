---
title: "Range: surroundContents() Methode"
short-title: surroundContents()
slug: Web/API/Range/surroundContents
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`surroundContents()`** Methode des [`Range`](/de/docs/Web/API/Range)-Interfaces umgibt den ausgewählten Inhalt mit einem bereitgestellten Knoten. Sie [extrahiert](/de/docs/Web/API/Range/extractContents) den Inhalt des Bereichs, ersetzt die Kinder von `newParent` mit dem extrahierten Inhalt, [fügt](/de/docs/Web/API/Range/insertNode) `newParent` an der Stelle des extrahierten Inhalts ein und lässt den Bereich `newParent` auswählen.

Eine Ausnahme wird ausgelöst, wenn der Bereich teilweise einen Nicht-[`Text`](/de/docs/Web/API/Text)-Knoten enthält. Der Bereich darf nur Textknoten und vollständig ausgewählte Knoten enthalten.

## Syntax

```js-nolint
surroundContents(newParent)
```

### Parameter

- `newParent`
  - : Ein [`Node`](/de/docs/Web/API/Node), mit dem der Inhalt umgeben wird.

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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
