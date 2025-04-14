---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

Das **`CommandEvent`**-Interface stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn ein [`button`](/de/docs/Web/API/HTMLButtonElement)-Element mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)- und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Attributen ein interaktives Element aufrufen soll.

Dies ist das Ereignisobjekt für das `HTMLElement`-[`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis, das eine Aktion von einem Invoker Control darstellt, wenn es aufgerufen wird (zum Beispiel, wenn es geklickt oder gedrückt wird).

{{InheritanceDiagram}}

## Konstruktor

- [`CommandEvent()`](/de/docs/Web/API/CommandEvent/CommandEvent)
  - : Erstellt ein `CommandEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CommandEvent.source`](/de/docs/Web/API/CommandEvent/source) {{ReadOnlyInline}}
  - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button repräsentiert, der diese Auslösung verursacht hat.
- [`CommandEvent.command`](/de/docs/Web/API/CommandEvent/command) {{ReadOnlyInline}}
  - : Ein String, der den [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Wert des Quell-Buttons darstellt.

## Beispiele

### Einfaches Beispiel

```html
<button commandfor="mypopover" command="show-popover">Show popover</button>

<div popover id="mypopover" role="[declare appropriate ARIA role]">
  <!-- popover content here -->
  <button commandfor="mypopover" command="hide-popover">Hide popover</button>
</div>
```

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Benutzerdefiniertes Beispiel

```html
<button commandfor="the-image" command="--rotate-left">Rotate Left</button>

<button commandfor="the-image" command="--rotate-right">Rotate Right</button>

<img id="the-image" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  if (event.command == "--rotate-left") {
    event.target.style.rotate = "-90deg";
  } else if (event.command == "--rotate-right") {
    event.target.style.rotate = "90deg";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
