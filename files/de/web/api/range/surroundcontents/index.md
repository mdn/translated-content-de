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
Nach dem Umgeben beinhalten die Randpunkte des `range`
`newNode`.

Eine Ausnahme wird jedoch ausgelöst, wenn der [`Range`](/de/docs/Web/API/Range) einen nicht-[`Text`](/de/docs/Web/API/Text)
Knoten mit nur einem seiner Randpunkte teilt. Das bedeutet, im Gegensatz zu der
oben genannten Alternative, dass teilweise ausgewählte Knoten nicht geklont werden und
stattdessen die Operation fehlschlägt.

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

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
