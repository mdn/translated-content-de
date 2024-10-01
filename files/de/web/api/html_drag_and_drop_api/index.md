---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die **HTML Drag and Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann mit der Maus _draggable_ Elemente auswählen, diese Elemente zu einem _droppable_ Element ziehen und durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während der Ziehoperation.

Sie können anpassen, welche Elemente _draggable_ werden können, welche Art von Rückmeldung die _draggable_ Elemente erzeugen und welche _droppable_ Elemente vorhanden sind.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung in einer Anwendung und eine Interoperabilitätsübersicht der Schnittstellen.

## Konzepte und Anwendung

### Drag Events

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Drag Events](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) erben. Eine typische _Drag-Operation_ beginnt, wenn ein Benutzer ein _draggable_ Element auswählt, fortfährt, wenn der Benutzer das Element zu einem _droppable_ Element zieht, und endet, wenn der Benutzer das gezogene Element wieder freigibt.

Während der Drag-Operationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male ausgelöst werden, wie die [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse.

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignis-Handler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                         |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                             |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...eine Drag-Operation endet (wie durch das Loslassen einer Maustaste oder das Drücken der Esc-Taste; siehe [Abschluss eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Ziel betritt. (Siehe [Festlegen von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                                       |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ziel verlässt.                                                                                                                                                            |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über ein gültiges Ziel gezogen wird, alle paar hundert Millisekunden.                                                                                                                  |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Beginn einer Drag-Operation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                       |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ziel fallen gelassen wird. (Siehe [Durchführung eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                       |

> [!NOTE]
> Weder `dragstart`- noch `dragend`-Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte, um einer Anwendung Drag-and-Drop-Funktionalität hinzuzufügen.

#### Bestimmen, was draggable ist

Um ein Element _draggable_ zu machen, muss das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

```html
<script>
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p>
```

Weitere Informationen finden Sie unter:

- [Draggable-Attributreferenz](/de/docs/Web/HTML/Global_attributes/draggable)
- [Leitfaden zu Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren der Drag-Daten

Die Anwendung ist frei, eine beliebige Anzahl von Datenobjekten in eine Drag-Operation einzubeziehen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `Typs` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die die Daten des Ereignisses _hält_. Diese Eigenschaft (ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt) hat auch Methoden, um Drag-Daten zu _verwalten_. Die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode wird verwendet, um ein Element zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

```js
function dragstartHandler(ev) {
  // Add different types of drag data
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}
```

- Für eine Liste der gängigen Datentypen, die in Drag-and-Drop verwendet werden (z.B. Text, HTML, Links und Dateien), siehe [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Weitere Informationen zu Drag-Daten finden Sie unter [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren des Drag-Bildes

Standardmäßig stellt der Browser ein Bild bereit, das während einer Drag-Operation neben dem Zeiger angezeigt wird. Eine Anwendung kann jedoch mit der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode ein benutzerdefiniertes Bild definieren, wie im folgenden Beispiel gezeigt.

```js
// Create an image and then use it for the drag image.
// NOTE: change "example.gif" to a real image URL or the image
// will not be created and the default drag image will be used.
let img = new Image();
img.src = "example.gif";
function dragstartHandler(ev) {
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Weitere Informationen über Drag-Rückmeldebilder finden Sie in:

- [Festlegen des Drag-Rückmeldebildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definieren des Drop-Effekts

Die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft wird verwendet, um die Rückmeldung zu steuern, die dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Sie beeinflusst typischerweise, welchen Cursor der Browser beim Ziehen anzeigt. Beispielsweise kann beim Überhovern mit dem Benutzer über ein Drop-Ziel der Cursor des Browsers den Typ der durchgeführten Operation anzeigen.

Drei Effekte können definiert werden:

1. **`copy`** gibt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort kopiert werden.
2. **`move`** gibt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort verschoben werden.
3. **`link`** gibt an, dass eine Art von Beziehung oder Verbindung zwischen dem Quell- und Drop-Standort erstellt wird.

Während der Drag-Operation können Drag-Effekte geändert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Standorten erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Weitere Details finden Sie unter:

- [Drag-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren einer Drop-Zone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente fallengelassen wird. Um dieses Verhalten zu ändern, damit ein Element eine _Drop-Zone_ oder _droppable_ wird, muss das Element sowohl auf die [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)- als auch auf die [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse hören.

Das folgende Beispiel zeigt, wie Sie diese Attribute verwenden, und enthält grundlegende Ereignis-Handler für jedes Attribut.

```html
<script>
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="target" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)">
  Drop Zone
</p>
```

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events)).

Weitere Informationen finden Sie unter:

- [Festlegen von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Umgang mit der Drop-Wirkung

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis ist frei, die Drag-Daten auf eine anwendungsspezifische Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode, um Drag-Elemente abzurufen und sie entsprechend zu verarbeiten. Darüber hinaus können sich Anwendungselemente je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder Zustand der Modifikationstasten unterscheiden.

Das folgende Beispiel zeigt einen Drop-Handler, der die `id` des Quell-Elements aus den Drag-Daten abruft und dann die `id` verwendet, um das Quell-Element zum Drop-Element zu bewegen:

```html
<script>
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="p1" draggable="true" ondragstart="dragstartHandler(event)">
  This element is draggable.
</p>
<div
  id="target"
  ondrop="dropHandler(event)"
  ondragover="dragoverHandler(event)">
  Drop Zone
</div>
```

Weitere Informationen finden Sie unter:

- [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Drag-Ende

Am Ende einer Drag-Operation wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am \_Quell-\_Element ausgelöst — dem Element, das das Ziel des Drag-Beginns war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob das Drag abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis-Handler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, ob die Drag-Operation erfolgreich war oder nicht.

Weitere Informationen zum Umgang mit dem Ende einer Drag-Operation finden Sie unter:

- [Abschluss eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent)-Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte enthalten den Status des Drag-Ereignisses, wie die Art des Drags (z.B. `copy` oder `move`), die Drag-Daten (ein oder mehrere Objekte) und den MIME-Typ jedes _Drag-Objekts_. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte haben auch Methoden, um Elemente zu den Drag-Daten hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent)- und [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag-and-Drop-Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt stellt ein einzelnes _Drag-Objekt_ dar, jeweils mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type)-Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt hat auch Methoden, um die Daten des Drag-Objekts abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Die Listen-Objekt hat Methoden, um ein Drag-Objekt zur Liste hinzuzufügen, ein Drag-Objekt aus der Liste zu entfernen und die Liste von allen Drag-Objekten zu löschen.

Ein wesentlicher Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstellen ist, dass erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet, um auf die Daten eines Drag-Elements zuzugreifen, während letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

> **Hinweis:** [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) werden in Desktop-Browsern umfassend unterstützt. Die [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)- und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Schnittstellen haben jedoch nur eine begrenzte Browser-Unterstützung. Siehe [Interoperabilität](#interoperability) für weitere Informationen zur Drag-and-Drop-Interoperabilität.

## Beispiele

- [Kopieren und Bewegen von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Bewegen von Elementen mit der `DataTransferListItem`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt mit der Drag and Drop API: <https://park.glitch.me/> (Sie können [hier](https://glitch.com/edit/#!/park) bearbeiten)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
