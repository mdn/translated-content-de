---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die **`CommandEvent`**-Schnittstelle stellt ein Ereignis dar, das den Benutzer benachrichtigt, wenn ein [`button`](/de/docs/Web/API/HTMLButtonElement)-Element mit gültigen Attributen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) ein interaktives Element aufzurufen beabsichtigt.

Es ist das Ereignisobjekt für das `HTMLElement`-Ereignis [`command`](/de/docs/Web/API/HTMLElement/command_event), das eine Aktion eines Invoker-Controls darstellt, das ausgelöst wurde (zum Beispiel wenn es angeklickt oder gedrückt wird).

{{InheritanceDiagram}}

## Konstruktor

- [`CommandEvent()`](/de/docs/Web/API/CommandEvent/CommandEvent)
  - : Erstellt ein `CommandEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

- [`CommandEvent.source`](/de/docs/Web/API/CommandEvent/source) {{ReadOnlyInline}}
  - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button darstellt, der diese Auslösung verursacht hat.
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

### Individuelles Beispiel

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
