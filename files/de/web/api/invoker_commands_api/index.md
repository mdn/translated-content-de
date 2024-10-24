---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{DefaultAPISidebar("Invoker Commands API")}}

Die **Invoker Commands API** bietet eine Möglichkeit, Schaltflächen deklarativ Verhaltensweisen zuzuweisen, um die Steuerung interaktiver Elemente zu ermöglichen, wenn die Schaltfläche aktiviert wird (beispielsweise durch Klicken oder Drücken einer Taste wie der Leertaste oder der Eingabetaste).

## Konzepte und Verwendung

Ein häufiges Muster im Web ist es, {{HTMLElement("button")}}-Elemente zu verwenden, um verschiedene Aspekte der Seite zu steuern, wie das Öffnen und Schließen von [Popovers](/de/docs/Web/API/Popover_API) oder {{HTMLElement("dialog")}}-Elementen, Textformatierung und mehr.

Historisch gesehen erforderte die Erstellung solcher Steuerungen JavaScript-Event-Listener, die dem Button hinzugefügt werden können, um dann die APIs auf dem Element, das sie steuern, aufzurufen. Die Eigenschaften [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) bieten eine Möglichkeit, dies deklarativ für einen begrenzten Satz von Aktionen zu tun. Dies kann für eingebaute Befehle von Vorteil sein, da der Benutzer nicht darauf warten muss, dass JavaScript geladen und ausgeführt wird, um diese Schaltflächen interaktiv zu machen.

## HTML-Attribute

- [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor)
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`command`](/de/docs/Web/HTML/Element/button#command)
  - : Gibt die Aktion an, die auf einem von einer Steuerungs-`<button>`-Element gesteuerten Element ausgeführt werden soll, angegeben über das `commandfor`-Attribut.

## Schnittstellen

- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
  - : Repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass ein Befehl ausgegeben wurde. Es ist das Ereignisobjekt für das [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis. Das Ereignis wird auf dem Element ausgelöst, das durch [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) referenziert wird.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ruft das Element ab, das von der Schaltfläche gesteuert wird, bzw. legt es fest. Entspricht dem JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor).
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ruft die Aktion ab, die auf dem von der Schaltfläche gesteuerten Element ausgeführt wird, bzw. legt sie fest. Entspricht dem Wert des HTML-Attributs [`command`](/de/docs/Web/HTML/Element/button#command).

### Ereignisse

- [`command`](/de/docs/Web/API/HTMLElement/command_event)-Ereignis
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
<button commandfor="myimg" command="--rotate-left">Rotate left</button>
<button commandfor="myimg" command="--rotate-right">Rotate right</button>
<img id="myimg" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const myImg = document.getElementById("myimg");

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

- [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Eigenschaft
- [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)-Eigenschaft
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Schnittstelle
