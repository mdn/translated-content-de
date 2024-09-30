---
title: "HTMLInputElement: select Ereignis"
short-title: select
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`select`**-Ereignis wird ausgelöst, wenn ein Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auswahl-Protokollierer

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

Sie können den Ereignishandler auch über die `onselect`-Eigenschaft einrichten:

```js
input.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
