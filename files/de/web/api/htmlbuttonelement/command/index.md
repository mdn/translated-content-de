---
title: "HTMLButtonElement: command-Eigenschaft"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die **`command`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces setzt und erhält die Aktion, die auf einem Element ausgeführt werden soll, das durch diesen Button gesteuert wird. Damit dies Wirkung zeigt, muss [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) gesetzt sein.

Sie spiegelt das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-HTML-Attribut wider.

## Wert

Ein String. Siehe das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribut für gültige Werte.

## Beispiele

### Einfaches Beispiel

```html
<button id="toggleBtn" commandfor="mypopover" command="toggle-popover">
  Toggle popover
</button>

<div popover id="mypopover">
  <button commandfor="mypopover" command="hide-popover">Hide popover</button>
</div>
```

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.command = "show-popover";
```

### Benutzerdefiniertes Beispiel unter Verwendung von Ereignissen

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
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
