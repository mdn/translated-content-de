---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Invoker Commands API")}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ mit Verhaltensweisen zu versehen, um die Kontrolle über interaktive Elemente zu ermöglichen, wenn die Schaltfläche aktiviert wird (z. B. durch Klicken oder Auslösen über eine Tasteneingabe wie die Leertaste oder die Eingabetaste).

## Konzepte und Nutzung

Ein häufiges Muster im Web besteht darin, dass {{HTMLElement("button")}}-Elemente verschiedene Aspekte der Seite steuern, wie z. B. das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderte das Erstellen dieser Art von Steuerungen JavaScript-Ereignislistener, die der Schaltfläche hinzugefügt wurden. Diese Listener können dann die APIs auf dem Element aufrufen, das sie steuern. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies deklarativ für einen begrenzten Satz von Aktionen zu tun. Dies kann vorteilhaft für eingebaute Befehle sein, da der Benutzer nicht warten muss, bis JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)
  - : Verwandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)
  - : Spezifiziert die Aktion, die auf einem durch ein `<button>`-Steuerelement kontrollierten Element ausgeführt werden soll, angegeben über das `commandfor`-Attribut.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass ein Befehl erteilt wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis. Das Ereignis wird auf dem Element ausgelöst, auf das [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) verweist.

## Erweiterungen für andere Schnittstellen

### Instanz-Eigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das Element ab, das von der Schaltfläche gesteuert wird, und setzt es. Das JavaScript-Äquivalent des [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) HTML-Attributes.
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die Aktion ab, die auf dem von der Schaltfläche gesteuerten Element ausgeführt werden soll, und setzt sie. Spiegelt den Wert des [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) HTML-Attributes wider.

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event) Ereignis
  - : Wird auf dem Element ausgelöst, auf das die Schaltfläche verweist.

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
