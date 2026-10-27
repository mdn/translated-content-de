---
title: "HTMLTextAreaElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Selection API")}}

Das **`select`**-Ereignis wird ausgelöst, wenn Text ausgewählt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("select", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onselect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Ausgewählten Text protokollieren

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

### Die Event-Handler-Eigenschaft `onselect` verwenden

Sie können den Event-Handler auch über die Eigenschaft `onselect` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onselect` hinzugefügte Event-Listener ersetzt werden:

```js
textarea.onselect = logSelection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
