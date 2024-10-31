---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: 3d1ad539dbce65e3cd7af4c24410d87fcfc5147c
---

{{DefaultAPISidebar("Invoker Commands API")}}{{SeeCompatTable}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhaltensweisen zuzuweisen, um interaktive Elemente zu steuern, wenn die Schaltfläche betätigt wird (durch Klicken oder über eine Tasteneingabe, wie die Leertaste oder die Eingabetaste).

## Konzepte und Verwendung

Ein häufiges Muster im Web ist es, {{HTMLElement("button")}}-Elemente zur Steuerung verschiedener Aspekte der Seite zu verwenden, wie z. B. das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, das Formatieren von Text und mehr.

Historisch gesehen erforderte die Erstellung dieser Art von Steuerungen JavaScript-Ereignislistener, die dem Button hinzugefügt wurden, um dann die APIs auf dem Element aufzurufen, das sie steuern. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies für eine begrenzte Anzahl von Aktionen deklarativ zu tun. Dies kann vorteilhaft für eingebaute Befehle sein, da der Benutzer nicht darauf warten muss, dass JavaScript heruntergeladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor) {{experimental_inline}}
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`command`](/de/docs/Web/HTML/Element/button#command) {{experimental_inline}}
  - : Gibt die Aktion an, die auf einem durch eine Steuerungs-`<button>` gesteuerten Element ausgeführt werden soll, spezifiziert über das `commandfor`-Attribut.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent) {{experimental_inline}}
  - : Stellt ein Ereignis dar, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis. Das Ereignis wird auf dem Element ausgelöst, das durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenziert wird.

## Erweiterungen zu anderen Schnittstellen

### Instanzeigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Holt und setzt das von der Schaltfläche gesteuerte Element. Das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Holt und setzt die Aktion, die auf dem von der Schaltfläche gesteuerten Element ausgeführt werden soll. Spiegelt den Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Element/button#command) wider.

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
