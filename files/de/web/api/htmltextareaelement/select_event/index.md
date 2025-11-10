---
title: "HTMLTextAreaElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

Das **`select`**-Ereignis wird ausgelöst, wenn ein Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auswahl-Logger

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

### onselect-Äquivalent

Sie können den Ereignishandler auch über die `onselect`-Eigenschaft einrichten:

```js
textarea.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
