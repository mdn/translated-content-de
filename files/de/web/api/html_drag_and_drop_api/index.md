---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die **HTML Drag and Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _ziehbare_ Elemente mit einer Maus auswählen, diese Elemente zu einem _ablegbaren_ Element ziehen und sie durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _ziehbaren_ Elemente folgt während des Ziehvorgangs dem Zeiger.

Sie können anpassen, welche Elemente _ziehbar_ werden können, die Art des Feedbacks, das die _ziehbaren_ Elemente erzeugen, sowie die _ablegbaren_ Elemente.

Diese Übersicht über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Erweiterung einer Anwendung um Drag-and-Drop-Unterstützung und eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Verwendung

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und die von den [Mausereignissen](/de/docs/Web/API/MouseEvent) abgeleiteten _[Drag-Ereignisse](/de/docs/Web/API/DragEvent)_. Ein typischer _Drag-Vorgang_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, setzt sich fort, wenn der Benutzer das Element zu einem _ablegbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während der Drag-Operationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male ausgelöst werden, wie beispielsweise die [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse.

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugeordneten Ereignishandler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                             |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                 |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...ein Drag-Vorgang endet (z.B. durch Loslassen einer Maustaste oder Drücken der Esc-Taste; siehe [Beenden eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element in ein gültiges Ablageziel eintritt. (Siehe [Spezifizieren von Ablagezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)            |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ablageziel verlässt.                                                                                                                                          |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über ein gültiges Ablageziel gezogen wird, alle paar hundert Millisekunden.                                                                                                |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer anfängt, ein Element zu ziehen. (Siehe [Starten einer Drag-Operation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                          |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ablageziel fallengelassen wird. (Siehe [Durchführen einer Ablage](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                      |

> [!NOTE]
> Weder `dragstart` noch `dragend`-Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte zur Hinzufügung von Drag-and-Drop-Funktionalität zu einer Anwendung.

#### Identifizieren, was ziehbar ist

Um ein Element _ziehbar_ zu machen, muss das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignishandler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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
- [Leitfaden für Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren der Drag-Daten

Die Anwendung kann eine beliebige Anzahl von Datenobjekten in einem Drag-Vorgang einschließen. Jedes Datenobjekt ist ein String eines bestimmten `type` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist) verfügt auch über Methoden, um Drag-Daten zu _verwalten_. Die [`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methode wird verwendet, um ein Element zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Für eine Liste der gebräuchlichen Datentypen, die beim Drag-and-Drop verwendet werden (wie Text, HTML, Links und Dateien), siehe [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für mehr Informationen über Drag-Daten, siehe [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren des Drag-Bildes

Standardmäßig liefert der Browser ein Bild, das während eines Drag-Vorgangs neben dem Zeiger erscheint. Eine Anwendung kann jedoch mit der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)-Methode ein benutzerdefiniertes Bild definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über Drag-Feedback-Bilder in:

- [Festlegen des Drag-Feedback-Bildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definieren des Ablageeffekts

Die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft wird verwendet, um das Feedback zu steuern, das der Benutzer während eines Drag-and-Drop-Vorgangs erhält. Sie beeinflusst in der Regel, welchen Cursor der Browser während des Ziehens anzeigt. Zum Beispiel, wenn der Benutzer über ein Ablageziel schwebt, kann der Cursor des Browsers den Typ der ausgeführten Operation anzeigen.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Ablagestandort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Ablagestandort verschoben werden.
3. **`link`** zeigt an, dass eine Art von Beziehung oder Verbindung zwischen der Quelle und den Ablagestandorten erstellt wird.

Während des Drag-Vorgangs können Drag-Effekte modifiziert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Standorten erlaubt sind.

Das folgende Beispiel zeigt, wie Sie diese Eigenschaft verwenden.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Drag-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren einer Ablagezone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente fallen gelassen wird. Um dieses Verhalten zu ändern, sodass ein Element zu einem _Ablagebereich_ oder _ablegbar_ wird, muss das Element sowohl auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) als auch auf [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse hören.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisbearbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeigereignisse](/de/docs/Web/API/Pointer_events)).

Für mehr Informationen siehe:

- [Spezifizieren von Ablagezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Umgang mit dem Ablageeffekt

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis ist frei, die Drag-Daten auf eine für die Anwendung spezifische Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode, um Drag-Items abzurufen und sie dann entsprechend zu verarbeiten. Außerdem können die Anwendungssemantiken je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Status der Modifikatortasten unterschiedlich sein.

Das folgende Beispiel zeigt einen Drop-Handler, der die `id` des Quell-Elements aus den Drag-Daten erhält und dann die `id` verwendet, um das Quell-Element zum Ablageelement zu verschieben:

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

Für mehr Informationen siehe:

- [Durchführen einer Ablage](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Drag-Ende

Am Ende eines Drag-Vorgangs wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am \_Quell-\_Element ausgelöst — dem Element, das das Ziel der Drag-Start-Operation war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob der Drag abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, ob der Drag-Vorgang erfolgreich war oder nicht.

Für weitere Informationen zum Umgang mit dem Ende eines Drag-Vorgangs siehe:

- [Beenden eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent)-Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte enthalten den Zustand des Drag-Ereignisses, wie den Typ des durchgeführten Drags (z.B. `copy` oder `move`), die Drag-Daten (ein oder mehrere Elemente) und den MIME-Typ jedes _Drag-Elements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte haben auch Methoden, um Elemente zu den Drag-Daten hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent)- und [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag and Drop-Funktionen zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt stellt ein einzelnes _Drag-Element_ dar, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type)-Eigenschaft für den MIME-Typ des Datenelements. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt hat außerdem Methoden, um die Daten des Drag-Elements abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Das Listenobjekt hat Methoden, um ein Drag-Element zur Liste hinzuzufügen, ein Drag-Element aus der Liste zu entfernen und die Liste von allen Drag-Elementen zu löschen.

Ein wesentlicher Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstellen besteht darin, dass die erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet, um auf die Daten eines Drag-Elements zuzugreifen, während die letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkplatzprojekt mit der Drag-and-Drop-API: <https://park.glitch.me/> ([Hier bearbeiten](https://glitch.com/edit/#!/park))

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop-Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
