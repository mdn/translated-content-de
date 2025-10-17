---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{APIRef("Invoker Commands API")}}

Das **`CommandEvent`**-Interface repräsentiert ein Ereignis, das den Benutzer benachrichtigt, wenn ein [`button`](/de/docs/Web/API/HTMLButtonElement)-Element mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)- und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Attributen ein interaktives Element aufzurufen beabsichtigt.

Dies ist das Ereignisobjekt für das `HTMLElement`-[`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis, das eine Aktion von einem Invoker Control darstellt, wenn es aufgerufen wird (zum Beispiel, wenn es angeklickt oder gedrückt wird).

{{InheritanceDiagram}}

## Konstruktor

- [`CommandEvent()`](/de/docs/Web/API/CommandEvent/CommandEvent)
  - : Erstellt ein `CommandEvent`-Objekt.

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`CommandEvent.source`](/de/docs/Web/API/CommandEvent/source) {{ReadOnlyInline}}
  - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button repräsentiert, der diese Ausführung verursacht hat.
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

// …

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Verwendung benutzerdefinierter Werte für Befehle

In diesem Beispiel wurden drei Buttons mit [`commands` mit benutzerdefinierten Werten](/de/docs/Web/HTML/Reference/Elements/button#custom_values) erstellt.

```html
<div class="controls">
  <button commandfor="the-image" command="--rotate-left">Rotate Left</button>
  <button commandfor="the-image" command="--reset">Reset</button>
  <button commandfor="the-image" command="--rotate-right">Rotate Right</button>
</div>

<img
  id="the-image"
  src="/shared-assets/images/examples/dino.svg"
  alt="dinosaur head rotated 0 degrees" />
```

```css hidden
.controls {
  margin-block-end: 20px;
}
```

Ein Event-Listener ist an das Bild mit dem [`command`-Ereignis](/de/docs/Web/API/HTMLElement/command_event) angehängt. Wenn einer der Buttons angeklickt wird, führt der Listener Code basierend auf dem benutzerdefinierten `command`-Wert aus, der dem Button zugewiesen wurde, rotiert das Bild und aktualisiert auch den `alt`-Text, um den neuen Winkel des Bildes anzugeben.

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0", 10);
  if (event.command === "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate = rotate === -270 ? 0 : rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate = rotate === 270 ? 0 : rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `dinosaur head rotated ${rotate} degrees`;
});
```

{{EmbedLiveSample('using_custom_values_for_commands', '100%', "220")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
