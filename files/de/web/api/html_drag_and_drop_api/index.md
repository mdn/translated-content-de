---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 038c318db6c16e7cce2bf6be3f809e1a04c33a3e
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _ziehbare_ Elemente mit der Maus auswählen, diese zu einem _fallbaren_ Element ziehen und durch Loslassen der Maustaste fallen lassen. Während der Ziehoperation folgt eine durchscheinende Darstellung der _ziehbaren_ Elemente dem Zeiger.

Sie können anpassen, welche Elemente _ziehbar_ werden können, die Art des Feedbacks, das die _ziehbaren_ Elemente erzeugen, und die _fallbaren_ Elemente.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung der Drag-and-Drop-Unterstützung zu einer Anwendung und eine Interoperabilitätszusammenfassung der Schnittstellen.

## Konzepte und Verwendung

### Ziehereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Ziehereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) erben. Eine typische _Ziehoperation_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, fortgesetzt wird, wenn der Benutzer das Element zu einem _fallbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während Ziehoperationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse könnten viele Male ausgelöst werden, wie die [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisse.

Jeder [Ziehereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugeordneten Ereignishandler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                      |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Objekt_ (Element oder Textauswahl) gezogen wird.                                                                                                                                           |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...eine Ziehoperation endet (zum Beispiel durch Loslassen einer Maustaste oder Drücken der Esc-Taste; siehe [Beenden eines Zugs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Objekt in ein gültiges Ziel fällt. (Siehe [Angeben von Zielzonen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                                        |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Objekt ein gültiges Ziel verlässt.                                                                                                                                                          |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Objekt über ein gültiges Ziel gezogen wird, alle paar hundert Millisekunden.                                                                                                                |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Objekt zu ziehen. (Siehe [Starten einer Ziehoperation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                     |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Objekt auf ein gültiges Ziel fällt. (Siehe [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                                     |

> [!NOTE]
> Weder `dragstart` noch `dragend`-Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt fasst die grundlegenden Schritte zusammen, um Drag-and-Drop-Funktionalität zu einer Anwendung hinzuzufügen.

#### Bestimmen, was ziehbar ist

Ein Element _ziehbar_ zu machen, erfordert das Hinzufügen des [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attributs und des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandlers, wie im folgenden Codebeispiel gezeigt:

```html
<p id="p1" draggable="true">This element is draggable.</p>
```

```js
// Get the element by id
const element = document.getElementById("p1");
// Add the ondragstart event listener
element.addEventListener("dragstart", (ev) => {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
```

Für weitere Informationen siehe:

- [Draggable-Attribut-Referenz](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- [Leitfaden zu Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definition der Daten des Zugs

Die Anwendung ist frei, eine beliebige Anzahl von Datenobjekten in einer Ziehoperation einzubeziehen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `typs` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) verfügt über eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist) hat auch Methoden, um die Ziehdaten zu _verwalten_. Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) wird verwendet, um ein Objekt zu den Ziehdaten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Für eine Liste der in Drag-and-Drop häufig verwendeten Datentypen (wie Text, HTML, Links und Dateien) siehe [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für weitere Informationen zu Ziehdaten siehe [Ziehdaten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definition des Ziehbildes

Standardmäßig liefert der Browser ein Bild, das während einer Ziehoperation neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über Zieh-Feedback-Bilder in:

- [Festlegen des Zieh-Feedback-Bildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definition des Drop-Effekts

Die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) wird verwendet, um das Feedback zu steuern, das der Benutzer während einer Drag-and-Drop-Operation erhält. Es betrifft typischerweise, welchen Cursor der Browser während des Ziehens anzeigt. Zum Beispiel kann der Cursor des Browsers, wenn der Benutzer über ein Drop-Ziel schwebt, den Typ der Operation anzeigen, die stattfinden wird.

Es können drei Effekte definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort verschoben werden.
3. **`link`** zeigt an, dass eine Art von Beziehung oder Verbindung zwischen den Quell- und Zielorten erstellt wird.

Während der Ziehoperation können Zieheffekte modifiziert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Orten erlaubt sind.

Das folgende Beispiel zeigt, wie Sie diese Eigenschaft verwenden.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieheffekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definition einer Drop-Zone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas in die meisten HTML-Elemente gezogen wird. Um dieses Verhalten zu ändern, sodass ein Element zu einer _Drop-Zone_ wird oder _fallbar_ ist, muss das Element sowohl auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)- als auch auf [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse hören.

Das folgende Beispiel zeigt, wie Sie diese Ereignisse verwenden.

```html
<p id="target">Drop Zone</p>
```

```js
const target = document.getElementById("target");

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
});
```

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (z.B. [Touchevents](/de/docs/Web/API/Touch_events) oder [Zeigerevents](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Angeben von Zielzonen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Verarbeiten des Drop-Effekts

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis kann die Ziehdaten auf eine anwendungsspezifische Weise verarbeiten.

Typischerweise verwendet eine Anwendung die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData), um Ziehelemente abzurufen und dann entsprechend zu verarbeiten. Zusätzlich können sich die Semantiken einer Anwendung je nach Wert des [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Zustand der Modifikatortasten unterscheiden.

Das folgende Beispiel zeigt einen Drop-Handler, der die `id` des Quellements aus den Ziehdaten erhält und dann die `id` verwendet, um das Quellement zum Drop-Element zu bewegen:

```html
<p id="p1" draggable="true">This element is draggable.</p>
<div id="target">Drop Zone</div>
```

```js
const source = document.getElementById("p1");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
});
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("application/my-app");
  ev.target.appendChild(document.getElementById(data));
});
```

Für weitere Informationen siehe:

- [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Ziehende

Am Ende einer Ziehoperation löst das [_dragend_](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am _Quell_-Element aus — dem Element, das das Ziel des Ziehstarts war.

Dieses Ereignis löst unabhängig davon aus, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, ob die Ziehoperation erfolgreich war oder nicht.

Für weitere Informationen zur Behandlung des Endes einer Ziehoperation siehe:

- [Beenden eines Zugs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent)-Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte enthalten den Zustand des Ziehereignisses, wie die Art des Zugs, der durchgeführt wird (z. B. `Kopie` oder `verschieben`), die Daten des Zugs (ein oder mehrere Elemente) und den MIME-Typ jedes _Ziehelements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte haben auch Methoden zum Hinzufügen oder Entfernen von Elementen zu den Daten des Zugs.

Die [`DragEvent`](/de/docs/Web/API/DragEvent)- und [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag and Drop-Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft, die eine [`Liste`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt stellt ein einzelnes _Ziehelement_ dar, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type)-Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt hat auch Methoden, um die Daten des Ziehelements abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Das Listenobjekt hat Methoden, um ein Ziehelement zur Liste hinzuzufügen, ein Ziehelement von der Liste zu entfernen und die Liste aller Ziehelemente zu leeren.

Ein wesentlicher Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstellen besteht darin, dass erstere die synchrone Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet, um auf die Daten eines Ziehelements zuzugreifen, während letztere stattdessen die asynchrone Methode [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferItemList`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
