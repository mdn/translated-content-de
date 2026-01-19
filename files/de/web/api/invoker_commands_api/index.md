---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: 2dc85e884e1c0c755e36b599d1ea2ce499b8b11c
---

{{DefaultAPISidebar("Invoker Commands API")}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhaltensweisen zuzuweisen, sodass interaktive Elemente gesteuert werden können, wenn die Schaltfläche ausgelöst wird (geklickt oder über eine Tasteneingabe wie die Leertaste oder Eingabetaste aktiviert).

## Konzepte und Verwendung

Ein häufiges Muster im Web ist, dass {{HTMLElement("button")}}-Elemente verschiedene Aspekte der Seite steuern, wie das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderten die Erstellung dieser Art von Steuerungen JavaScript-Ereignislistener, die der Schaltfläche hinzugefügt wurden, um dann die APIs auf dem von ihnen gesteuerten Element aufzurufen. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies deklarativ für eine begrenzte Anzahl von Aktionen zu tun. Dies kann vorteilhaft für integrierte Befehle sein, da der Benutzer nicht darauf warten muss, dass JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)
  - : Wandelt ein {{htmlelement("button")}}-Element in einen Befehlsauslöser um, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)
  - : Gibt die Aktion an, die auf einem vom Steuerungselement `<button>` gesteuerten Element ausgeführt werden soll, das über das Attribut `commandfor` angegeben wird.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis. Das Ereignis wird auf dem durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenzierten Element ausgelöst.

## Erweiterungen zu anderen Schnittstellen

### Instanzen-Eigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das von der Schaltfläche gesteuerte Element ab und legt es fest. Das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die Aktion ab und legt sie fest, die auf dem von der Schaltfläche gesteuerten Element ausgeführt werden soll. Entspricht dem Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Reference/Elements/button#command).

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis
  - : Wird auf dem vom Button referenzierten Element ausgelöst.

## Beispiele

### Erstellen deklarativer Popovers

```html
<button commandfor="mypopover" command="toggle-popover">
  Toggle the popover
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">Close</button>
  Popover content
</div>
```

### Erstellen deklarativer Dialoge

```html
<button commandfor="mydialog" command="show-modal">Show modal dialog</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">Close</button>
  Dialog Content
</dialog>
```

### Erstellen benutzerdefinierter Befehle

```html
<button commandfor="my-img" command="--rotate-left">Rotate left</button>
<button commandfor="my-img" command="--rotate-right">Rotate right</button>
<img id="my-img" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command === "--rotate-right") {
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
