---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Invoker Commands API")}}{{SeeCompatTable}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhaltensweisen zuzuweisen, um interaktive Elemente zu kontrollieren, wenn die Schaltfläche ausgeführt wird (z. B. durch Klicken oder Drücken einer Taste wie der Leertaste oder der Eingabetaste).

## Konzepte und Verwendung

Ein häufiges Muster im Web ist, dass {{HTMLElement("button")}}-Elemente verschiedene Aspekte der Seite steuern, wie das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderte die Erstellung dieser Art von Steuerungen das Hinzufügen von JavaScript-Event-Listenern zur Schaltfläche, die dann die APIs auf dem Element aufrufen können, das sie steuern. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies deklarativ für eine begrenzte Anzahl von Aktionen zu tun. Dies kann für integrierte Befehle von Vorteil sein, da der Benutzer nicht darauf warten muss, dass JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) {{experimental_inline}}
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) {{experimental_inline}}
  - : Gibt die Aktion an, die auf einem Element, das durch eine Steuer-`<button>`-Element gesteuert wird, ausgeführt werden soll, und wird über das `commandfor`-Attribut spezifiziert.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent) {{experimental_inline}}
  - : Stellt ein Ereignis dar, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis. Das Ereignis wird auf dem durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenzierten Element ausgelöst.

## Erweiterungen für andere Schnittstellen

### Instanzeigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das durch die Schaltfläche gesteuerte Element ab und legt es fest. Das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die Aktion ab und legt sie fest, die auf dem durch die Schaltfläche gesteuerten Element ausgeführt werden soll. Bildet den Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) ab.

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis
  - : Wird auf dem durch die Schaltfläche referenzierten Element ausgelöst.

## Beispiele

### Deklarative Popovers erstellen

```html
<button commandfor="mypopover" command="toggle-popover">
  Toggle the popover
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">Close</button>
  Popover content
</div>
```

### Deklarative Dialoge erstellen

```html
<button commandfor="mydialog" command="show-modal">Show modal dialog</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">Close</button>
  Dialog Content
</dialog>
```

### Benutzerdefinierte Befehle erstellen

```html
<button commandfor="my-img" command="--rotate-left">Rotate left</button>
<button commandfor="my-img" command="--rotate-right">Rotate right</button>
<img id="my-img" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command == "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command == "--rotate-right") {
    myImg.style.rotate = "90deg";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`command`](/de/docs/Web/API/HTMLButtonElement/command) Eigenschaft
- [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) Eigenschaft
- [`CommandEvent`](/de/docs/Web/API/CommandEvent) Schnittstelle
