---
title: "HTMLInputElement: select-Ereignis"
short-title: select
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Das **`select`**-Ereignis der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) wird ausgelöst, wenn sich der Umfang oder die Richtung der Auswahl programmgesteuert ändert oder wenn die Benutzerin oder der Benutzer Text auswählt.

Dieses Ereignis wird nicht ausgelöst, wenn nichts ausgewählt ist und die Benutzerin oder der Benutzer die Einfügemarke verschiebt. In diesem Fall wird nur das [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)-Ereignis ausgelöst.

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

### Auswahl protokollieren

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
