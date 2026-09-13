---
title: "HTMLButtonElement: command-Eigenschaft"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: 4ad860d817cf6d8ca24f41b3846b29e158934d27
---

{{APIRef("Invoker Commands API")}}

Die **`command`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces legt die Aktion fest, die auf einem von diesem Button gesteuerten Element ausgeführt werden soll, und ruft diese ab. Damit dies wirksam ist, muss [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) gesetzt sein.

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

### Verwendung benutzerdefinierter Werte für Befehle

In diesem Beispiel wurden drei Buttons mit [benutzerdefinierten Werten](/de/docs/Web/HTML/Reference/Elements/button#custom_values) für `command` erstellt. Jeder Button zielt mit dem `commandfor`-Attribut auf dasselbe Bild.

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

Ein Ereignis-Listener wird an das Bild mit dem [`command`-Ereignis](/de/docs/Web/API/CommandEvent) angehängt. Wenn einer der Buttons geklickt wird, führt der Listener Code basierend auf dem benutzerdefinierten `command`-Wert aus, der dem Button zugewiesen wurde, dreht das Bild und aktualisiert auch dessen `alt`-Text, um den neuen Winkel des Bildes anzuzeigen.

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
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
- [`<button>`-`command`-Attribut](/de/docs/Web/HTML/Reference/Elements/button#command)
