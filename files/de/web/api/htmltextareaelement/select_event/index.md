---
title: "HTMLTextAreaElement: select-Event"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`select`**-Ereignis wird ausgelöst, wenn Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auswahlprotokollierer

```html
<textarea>Try selecting some text in this element.</textarea>
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

const textarea = document.querySelector("textarea");
textarea.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### Gleichwertig mit onselect

Sie können den Ereignis-Handler auch mit der `onselect`-Eigenschaft einrichten:

```js
textarea.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
