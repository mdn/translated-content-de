---
title: "HTMLInputElement: select()-Methode"
short-title: select()
slug: Web/API/HTMLInputElement/select
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.select()`**-Methode wählt den gesamten Text in einem {{HTMLElement("textarea")}}-Element oder in einem {{HTMLElement("input")}}-Element aus, das ein Textfeld enthält.

## Syntax

```js-nolint
select()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um den gesamten Text im `<input>`-Element auszuwählen.

### HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
<button onclick="selectText()">Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Hinweise

Das Aufrufen von `element.select()` fokussiert nicht unbedingt das Eingabefeld. Daher wird es oft mit [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) verwendet.

In Browsern, in denen es nicht unterstützt wird, kann es durch einen Aufruf von [HTMLInputElement.setSelectionRange()](/de/docs/Web/API/HTMLInputElement/setSelectionRange) mit den Parametern 0 und der Länge des Wertes des Eingabefelds ersetzt werden:

```html
<input onClick="this.select();" value="Sample Text" />
<!-- equivalent to -->
<input
  onClick="this.setSelectionRange(0, this.value.length);"
  value="Sample Text" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
