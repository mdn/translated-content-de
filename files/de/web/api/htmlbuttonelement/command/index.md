---
title: "HTMLButtonElement: command-Eigenschaft"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: 7307f1c0d3ac3ff499467f7a280fb3172e48e27f
---

{{APIRef("Invoker Commands API")}}

Die **`command`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces erhält und setzt die Aktion, die auf einem Element ausgeführt werden soll, das von diesem Button gesteuert wird. Damit dies Wirkung zeigt, muss [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) gesetzt sein.

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

### Verwenden benutzerdefinierter Werte für Befehle

In diesem Beispiel wurden drei Buttons erstellt, die [benutzerdefinierte Werte](/de/docs/Web/HTML/Reference/Elements/button#custom_values) für `command` verwenden. Jeder Button zielt auf dasselbe Bild ab, indem das `commandfor`-Attribut verwendet wird.

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

Ein Ereignislistener ist an das Bild mit dem [`command` event](/de/docs/Web/API/CommandEvent) angehängt. Wenn einer der Buttons geklickt wird, führt der Listener Code basierend auf dem benutzerdefinierten `command`-Wert aus, der dem Button zugewiesen ist, dreht das Bild und aktualisiert auch seinen `alt`-Text, um den neuen Winkel des Bildes anzuzeigen.

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
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
- [`<button>` `command`-Attribut](/de/docs/Web/HTML/Reference/Elements/button#command)
