---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: fd9a16a3a56e295eb80fc24a5dbd56a842b2958e
---

{{DefaultAPISidebar("Invoker Commands API")}}

Die **Invoker-Befehls-API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhaltensweisen zuzuweisen, um die Kontrolle über interaktive Elemente zu ermöglichen, wenn die Schaltfläche betätigt wird (durch Klicken oder Aufruf über eine Taste, wie die Leertaste oder die Eingabetaste).

## Konzepte und Verwendung

Ein häufiges Muster im Web ist es, {{HTMLElement("button")}}-Elemente zu verwenden, um verschiedene Aspekte der Seite zu steuern, wie das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderte das Erstellen solcher Steuerungen JavaScript-Ereignislistener, die der Schaltfläche hinzugefügt wurden und dann die APIs auf dem von ihnen gesteuerten Element aufrufen können. Die [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)- und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Eigenschaften bieten eine Möglichkeit, dies deklarativ für einen begrenzten Satz von Aktionen durchzuführen. Dies kann für eingebaute Befehle von Vorteil sein, da der Benutzer nicht darauf warten muss, dass JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor)
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als seinen Wert.
- [`command`](/de/docs/Web/HTML/Element/button#command)
  - : Gibt die Aktion an, die auf einem durch eine Steuer-`<button>` gesteuerten Element ausgeführt werden soll, angegeben über das Attribut `commandfor`.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis. Das Ereignis wird auf dem durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenzierten Element ausgelöst.

## Erweiterungen anderer Schnittstellen

### Instanz-Eigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das Element, das von der Schaltfläche gesteuert wird, ab oder legt es fest. Das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die auszuführende Aktion auf dem von der Schaltfläche gesteuerten Element ab oder legt sie fest. Entspricht dem Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Element/button#command).

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis
  - : Wird auf dem durch die Schaltfläche referenzierten Element ausgelöst.

## Beispiele

### Erstellen von deklarativen Popovers

```html
<button commandfor="mypopover" command="toggle-popover">
  Toggle the popover
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">Close</button>
  Popover content
</div>
```

### Erstellen von deklarativen Dialogen

```html
<button commandfor="mydialog" command="show-modal">Show modal dialog</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">Close</button>
  Dialog Content
</dialog>
```

### Erstellen von benutzerdefinierten Befehlen

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
