---
title: "HTMLInputElement: Methode select()"
short-title: select()
slug: Web/API/HTMLInputElement/select
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.select()`**-Methode markiert den gesamten Text
in einem {{HTMLElement("textarea")}}-Element oder in einem {{HTMLElement("input")}}-Element,
das ein Textfeld enthält.

## Syntax

```js-nolint
select()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um den gesamten Text im
`<input>`-Element auszuwählen.

### HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
<button>Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}

document.querySelector("button").addEventListener("click", selectText);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Anmerkungen

Ein Aufruf von `element.select()` wird das Eingabefeld nicht notwendigerweise fokussieren, daher wird es oft zusammen mit [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.setSelectionRange`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
