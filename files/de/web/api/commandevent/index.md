---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: 0acc152bfff15e69e458c6d99902061951588b1e
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die **`CommandEvent`**-Schnittstelle stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn ein [`button`](/de/docs/Web/API/HTMLButtonElement)-Element mit gültigen Attributen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) ein interaktives Element auslösen soll.

Dies ist das Ereignisobjekt für das `HTMLElement`-[`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis, das eine Aktion eines "Invoker Control" repräsentiert, wenn es ausgelöst wird (zum Beispiel durch Klick oder Drücken).

{{InheritanceDiagram}}

## Konstruktor

- [`CommandEvent()`](/de/docs/Web/API/CommandEvent/CommandEvent) {{experimental_inline}}
  - : Erstellt ein `CommandEvent`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternobjekt [`Event`](/de/docs/Web/API/Event)._

- [`CommandEvent.source`](/de/docs/Web/API/CommandEvent/source) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button repräsentiert, der diese Ausführung ausgelöst hat.
- [`CommandEvent.command`](/de/docs/Web/API/CommandEvent/command) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der den [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Wert des verursachenden Buttons darstellt.

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
