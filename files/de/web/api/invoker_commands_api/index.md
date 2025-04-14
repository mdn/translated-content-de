---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{DefaultAPISidebar("Invoker Commands API")}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhalten zuzuweisen, wodurch interaktive Elemente gesteuert werden können, wenn die Schaltfläche aktiviert (geklickt oder über eine Tastatureingabe wie die Leertaste oder die Eingabetaste aufgerufen) wird.

## Konzepte und Verwendung

Ein häufiges Muster im Web ist, dass {{HTMLElement("button")}}-Elemente verschiedene Aspekte der Seite steuern, wie das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderte die Erstellung dieser Art von Steuerelementen JavaScript-Ereignislistener, die der Schaltfläche hinzugefügt wurden, wodurch die APIs auf das von ihnen gesteuerte Element aufgerufen werden konnten. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies deklarativ für eine begrenzte Anzahl von Aktionen zu tun. Dies kann für integrierte Befehle vorteilhaft sein, da der Benutzer nicht darauf warten muss, dass JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert an.
- [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)
  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einer Steuerungs`<button>` gesteuert wird, die über das Attribut `commandfor` angegeben wird.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis. Das Ereignis wird auf dem Element ausgelöst, das durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenziert wird.

## Erweiterungen zu anderen Schnittstellen

### Instanzeigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das vom Button gesteuerte Element ab und legt es fest. Das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die Aktion ab und legt sie fest, die auf dem vom Button gesteuerten Element ausgeführt werden soll. Entspricht dem Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Reference/Elements/button#command).

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis
  - : Wird auf dem Element ausgelöst, das durch den Button referenziert wird.

## Beispiele

### Erstellung deklarativer Popovers

```html
<button commandfor="mypopover" command="toggle-popover">
  Toggle the popover
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">Close</button>
  Popover content
</div>
```

### Erstellung deklarativer Dialoge

```html
<button commandfor="mydialog" command="show-modal">Show modal dialog</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">Close</button>
  Dialog Content
</dialog>
```

### Erstellung benutzerdefinierter Befehle

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
