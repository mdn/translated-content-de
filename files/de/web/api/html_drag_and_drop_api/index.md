---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die **HTML Drag and Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu verwenden.

Der Benutzer kann _draggable_ Elemente mit der Maus auswählen, diese Elemente zu einem _droppable_ Element ziehen und sie durch Loslassen der Maustaste fallen lassen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während der Ziehoperation.

Sie können anpassen, welche Elemente _draggable_ werden können, welche Art von Rückmeldung die _draggable_ Elemente erzeugen und die _droppable_ Elemente.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zum Hinzufügen von Drag-and-Drop-Unterstützung zu einer Anwendung und eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Verwendung

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Event-Modell](/de/docs/Web/API/Event) und _[drag events](/de/docs/Web/API/DragEvent)_, die von [mouse events](/de/docs/Web/API/MouseEvent) erben. Eine typische _Ziehoperation_ beginnt, wenn ein Benutzer ein _draggable_ Element auswählt, geht weiter, wenn der Benutzer das Element zu einem _droppable_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während Ziehoperationen werden verschiedene Ereignistypen ausgelöst, und einige Ereignisse können viele Male auftreten, wie z.B. die [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse.

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignis-Handler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                               |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                   |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...eine Ziehoperation endet (z.B. durch Loslassen der Maustaste oder Drücken der Esc-Taste; siehe [Beenden eines Ziehens](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Ziel betritt. (Siehe [Spezifizieren von Zieh-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                         |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ziel verlässt.                                                                                                                                                  |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element alle paar hundert Millisekunden über einem gültigen Ziel gezogen wird.                                                                                                       |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Starten einer Ziehoperation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                             |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ziel fallen gelassen wird. (Siehe [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                              |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte zur Hinzufügung von Drag-and-Drop-Funktionalität zu einer Anwendung.

#### Ermitteln, was ziehbar ist

Damit ein Element _draggable_ wird, muss das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis-Handler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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

Für weitere Informationen siehe:

- [Referenz zum Draggable-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- [Leitfaden zu Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren Sie die Daten des Ziehens

Die Anwendung kann beliebig viele Datenobjekte in eine Ziehoperation einbeziehen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `type` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist) hat auch Methoden, um die Ziehdaten zu _verwalten_. Die [`setData()`](/de/docs/Web/API/DataTransfer/setData) Methode wird verwendet, um ein Element zu den Ziehdaten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Für eine Liste der häufig verwendeten Datentypen in Drag-and-Drop (wie Text, HTML, Links und Dateien) siehe [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für weitere Informationen über Ziehdaten siehe [Ziehdaten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren Sie das Ziehbild

Standardmäßig liefert der Browser ein Bild, das während einer Ziehoperation neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) Methode definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über Bilder zum Zieh-Feedback in:

- [Festlegen des Drag-Feedback-Bildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definieren Sie den Drop-Effekt

Die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft wird verwendet, um die Rückmeldung zu steuern, die der Benutzer während einer Drag-and-Drop-Operation erhält. Sie beeinflusst typischerweise, welchen Cursor der Browser beim Ziehen anzeigt. Beispielsweise kann der Cursor des Browsers beim Überfahren eines Zieh-Ziels den Typ der Operation anzeigen, die stattfinden wird.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Abwurf-Zielort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Abwurf-Zielort verschoben werden.
3. **`link`** zeigt an, dass eine Form von Beziehung oder Verbindung zwischen der Quelle und den Abwurf-Zielen hergestellt wird.

Während der Ziehoperation können Zieh-Effekte modifiziert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Orten erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieh-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren Sie eine Drop-Zone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente fallen gelassen wird. Um dieses Verhalten zu ändern, so dass ein Element zu einer _Drop-Zone_ oder _droppable_ wird, muss das Element sowohl auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) als auch auf [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse hören.

Das folgende Beispiel zeigt, wie diese Attribute verwendet werden und enthält grundlegende Ereignis-Handler für jedes Attribut.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeiger-Ereignisse](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Spezifizieren von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Behandeln des Drop-Effekts

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis ist frei, die Ziehdaten auf eine anwendungsspezifische Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode, um Ziehobjekte zu erfassen und sie dann entsprechend zu verarbeiten. Zusätzlich können sich die Semantiken der Anwendung je nach dem Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Zustand der Modifikatortasten unterscheiden.

Das folgende Beispiel zeigt, wie ein Drop-Handler die `id` des Quell-Elements aus den Ziehdaten ermittelt und dann diese `id` verwendet, um das Quell-Element zum Drop-Element zu bewegen:

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

Für weitere Informationen siehe:

- [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Drag-Ende

Am Ende einer Ziehoperation wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis auf dem _Quell_-Element ausgelöst — dem Element, das das Ziel des Ziehbeginns war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis-Handler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft überprüfen, um zu bestimmen, ob die Ziehoperation erfolgreich war oder nicht.

Für weitere Informationen über die Behandlung des Endes einer Ziehoperation siehe:

- [Beenden eines Ziehens](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent) Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte umfassen den Zustand des Zieh-Ereignisses, wie die Art des durchgeführten Ziehens (wie `copy` oder `move`), die Ziehdaten (eines oder mehrere Elemente) und den MIME-Typ jedes _Zieh-Elements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte haben auch Methoden, um Elemente zu den Ziehdaten hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag and Drop Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items) Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt repräsentiert ein einzelnes _Zieh-Element_, jeweils mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type) Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt hat auch Methoden, um die Daten des Zieh-Elements zu erfassen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten. Das Listenobjekt hat Methoden, um ein Zieh-Element zur Liste hinzuzufügen, ein Zieh-Element aus der Liste zu entfernen und die Liste aller Zieh-Elemente zu leeren.

Ein wesentlicher Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) besteht darin, dass erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode verwendet, um auf die Daten eines Zieh-Elements zuzugreifen, während letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) Methode verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Dateien ziehen und ablegen (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Dateien ziehen und ablegen (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt unter Verwendung der Drag and Drop API: <https://park.glitch.me/> (Sie können [hier](https://glitch.com/edit/#!/park) bearbeiten)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
