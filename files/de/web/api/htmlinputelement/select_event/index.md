---
title: "HTMLInputElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("HTML DOM")}}

Das **`select`**-Ereignis wird ausgelöst, wenn Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("select", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Ausgewählten Text protokollieren

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

### Die Event-Handler-Eigenschaft `onselect` verwenden

Sie können den Event-Handler auch über die Eigenschaft `onselect` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Event-Listener ersetzt werden, die über `onselect` hinzugefügt wurden:

```js
input.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
