---
title: "HTMLInputElement: select()-Methode"
short-title: select()
slug: Web/API/HTMLInputElement/select
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die **`select()`**-Methode der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle wählt den gesamten Text in einem {{HTMLElement("input")}}-Element mit einem Textfeld aus.

Ein Aufruf von `element.select()` setzt den Fokus nicht unbedingt auf das Eingabefeld. Daher wird die Methode häufig zusammen mit [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) verwendet.

## Syntax

```js-nolint
select()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um den gesamten Text im `<input>`-Element auszuwählen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
