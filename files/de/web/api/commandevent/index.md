---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: 7307f1c0d3ac3ff499467f7a280fb3172e48e27f
---

{{APIRef("Invoker Commands API")}}

Das **`CommandEvent`** Interface repräsentiert ein Ereignis, das den Benutzer informiert, wenn ein [`button`](/de/docs/Web/API/HTMLButtonElement)-Element mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Attributen dabei ist, ein interaktives Element aufzurufen.

Dies ist das Ereignisobjekt für das `command`-Ereignis von `HTMLElement`, welches eine Aktion von einem Invoker Control darstellt, wenn es aufgerufen wird (zum Beispiel, wenn es angeklickt oder gedrückt wird).

{{InheritanceDiagram}}

## Konstruktor

- [`CommandEvent()`](/de/docs/Web/API/CommandEvent/CommandEvent)
  - : Erstellt ein `CommandEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elterninterface, [`Event`](/de/docs/Web/API/Event)._

- [`CommandEvent.source`](/de/docs/Web/API/CommandEvent/source) {{ReadOnlyInline}}
  - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button repräsentiert, der diese Aktion ausgelöst hat.
- [`CommandEvent.command`](/de/docs/Web/API/CommandEvent/command) {{ReadOnlyInline}}
  - : Ein String, der den [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Wert des Quellbuttons repräsentiert.

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

### Verwendung von benutzerdefinierten Werten für Befehle

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

Ein Event-Listener wird an das Bild mithilfe des [`command`-Ereignisses](/de/docs/Web/API/CommandEvent) angehängt.
Wenn einer der Buttons angeklickt wird, führt der Listener Code basierend auf dem benutzerdefinierten `command`-Wert aus, der dem Button zugewiesen ist, rotiert das Bild und aktualisiert auch dessen `alt`-Text, um den neuen Winkel des Bildes anzuzeigen.

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0");
  if (event.command == "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate === -270 ? (rotate = 0) : (rotate = rotate - 90);
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate === 270 ? (rotate = 0) : (rotate = rotate + 90);
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
