---
title: "HTMLInputElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`select`**-Ereignis wird ausgelöst, wenn ein Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auswahl-Logger

```html
<input value="Try selecting some text in this element." />
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect-Äquivalent

Sie können den Ereignis-Handler auch über die `onselect`-Eigenschaft einrichten:

```js
input.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
