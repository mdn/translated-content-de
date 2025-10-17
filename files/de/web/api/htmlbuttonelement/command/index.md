---
title: "HTMLButtonElement: command-Eigenschaft"
short-title: command
slug: Web/API/HTMLButtonElement/command
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{APIRef("Invoker Commands API")}}

Die **`command`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ruft die Aktion ab und legt sie fest, die bei einem durch diese Schaltfläche gesteuerten Element ausgeführt werden soll. Damit dies Wirkung zeigt, muss [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) gesetzt sein.

Sie spiegelt das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-HTML-Attribut wider.

## Wert

Ein String. Siehe das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) Attribut für gültige Werte.

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

In diesem Beispiel wurden drei Schaltflächen mit [benutzerdefinierten Werten](/de/docs/Web/HTML/Reference/Elements/button#custom_values) für `command` erstellt.
Jede Schaltfläche zielt auf dasselbe Bild unter Verwendung des `commandfor`-Attributs ab.

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

Ein Event-Listener wird dem Bild mit dem [`command` event](/de/docs/Web/API/CommandEvent) zugeordnet.
Wenn eine der Schaltflächen angeklickt wird, führt der Listener Code basierend auf dem benutzerdefinierten `command`-Wert aus, der der Schaltfläche zugewiesen ist, dreht das Bild und aktualisiert auch den `alt`-Text, um den neuen Winkel des Bildes anzuzeigen.

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
- [`<button>` `command` attribute](/de/docs/Web/HTML/Reference/Elements/button#command)
