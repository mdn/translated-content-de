---
title: "HTMLTextAreaElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef}}

Das **`select`**-Ereignis tritt auf, wenn Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auswahllogger

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

### Äquivalent zu onselect

Sie können den Ereignishandler auch mit der `onselect`-Eigenschaft einrichten:

```js
textarea.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
