---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag-and-Drop-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu verwenden.

Der Benutzer kann _ziehbare_ Elemente mit der Maus auswählen, diese Elemente zu einem _ablegbaren_ Element ziehen und sie durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _ziehbaren_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _ziehbar_ werden können, die Art des Feedbacks, das die _ziehbaren_ Elemente erzeugen, und die _ablegbaren_ Elemente.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte, um Drag-and-Drop-Unterstützung zu einer Anwendung hinzuzufügen, und eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Verwendung

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Drag-Ereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) geerbt werden. Ein typischer _Drag-Vorgang_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, fortgesetzt wird, wenn der Benutzer das Element zu einem _ablegbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während Ziehvorgängen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male ausgelöst werden, wie zum Beispiel die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugeordneten Ereignishandler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                      |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                          |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...ein Ziehvorgang endet (wie das Loslassen einer Maustaste oder das Drücken der Esc-Taste; siehe [Abschluss eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Ziel betritt. (Siehe [Festlegen von Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                                         |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ziel verlässt.                                                                                                                                                         |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über ein gültiges Ziel gezogen wird, alle paar Hundert Millisekunden.                                                                                                               |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Start eines Zieh-Vorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                      |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ziel fallen gelassen wird. (Siehe [Ausführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                       |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei vom Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte, um eine Drag-and-Drop-Funktionalität zu einer Anwendung hinzuzufügen.

#### Identifizieren, was ziehbar ist

Um ein Element _ziehbar_ zu machen, muss das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignishandler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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

- [Draggable-Attribut-Referenz](/de/docs/Web/HTML/Global_attributes/draggable)
- [Leitfaden für Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren der Drag-Daten

Die Anwendung ist frei, eine beliebige Anzahl von Datenobjekten in einen Ziehvorgang einzubeziehen. Jedes Datenobjekt ist ein String eines bestimmten `type` — typischerweise ein MIME-Typ wie `text/html`.

Jeder [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist) hat auch Methoden, um _Drag-Daten zu verwalten_. Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) wird verwendet, um ein Objekt zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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
- Für weitere Informationen über Drag-Daten, siehe [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren des Drag-Bildes

Standardmäßig liefert der Browser ein Bild, das während eines Ziehvorgangs neben dem Zeiger erscheint. Eine Anwendung kann jedoch mit der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) ein benutzerdefiniertes Bild definieren, wie im folgenden Beispiel gezeigt.

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

#### Definieren der Drop-Effekt

Die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) wird verwendet, um das Feedback zu steuern, das dem Benutzer während eines Drag-and-Drop-Vorgangs gegeben wird. Sie beeinflusst in der Regel, welcher Cursor der Browser beim Ziehen anzeigt. Zum Beispiel kann, wenn der Benutzer über ein Ziel schwebt, der Cursor des Browsers anzeigen, welche Art von Vorgang vorgenommen wird.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem derzeitigen Standort zum Zielort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem derzeitigen Standort zum Zielort verschoben werden.
3. **`link`** zeigt an, dass eine Art Beziehung oder Verbindung zwischen den Quell- und Zielorten hergestellt wird.

Während des Ziehvorgangs können Zieh-Effekte modifiziert werden, um anzuzeigen, dass an bestimmten Orten bestimmte Effekte erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieh-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren einer Drop-Zone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente fallen gelassen wird. Um dieses Verhalten zu ändern, damit ein Element eine _Drop-Zone_ wird oder _abgelegt_ werden kann, muss das Element auf die Ereignisse [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) hören.

Das folgende Beispiel zeigt, wie diese Attribute verwendet werden und beinhaltet grundlegende Ereignishandler für jedes Attribut.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeigerereignisse](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Festlegen von Zielorten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Umgang mit dem Drop-Effekt

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis ist frei, die Drag-Daten in einer anwendungsspezifischen Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData), um Ziehobjekte abzurufen und sie dann entsprechend zu verarbeiten. Zusätzlich können Semantiken der Anwendung je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Status der Modifikator-Tasten unterschiedlich sein.

Das folgende Beispiel zeigt einen Drop-Handler, der die `id` des Quell-Elements von den Drag-Daten abruft und dann die `id` verwendet, um das Quell-Element zum Zielelement zu verschieben:

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

- [Ausführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Ende des Drag-Vorgangs

Am Ende eines Ziehvorgangs wird das Ereignis [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) am _Quell_-Element ausgelöst — dem Element, das das Ziel des Ziehstarts war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob der Ziehvorgang abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft überprüfen, um festzustellen, ob der Ziehvorgang erfolgreich war oder nicht.

Für weitere Informationen über die Behandlung des Endes eines Ziehvorgangs siehe:

- [Abschluss eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag-and-Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem), und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent) Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte enthalten den Zustand des Ziehereignisses, wie die Art des Ziehens (wie `copy` oder `move`), die Daten des Ziehvorgangs (ein oder mehrere Objekte), und den MIME-Typ jedes _Ziehobjekts_. [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte haben auch Methoden, um Elemente zu den Daten des Ziehvorgangs hinzuzufügen oder zu entfernen.

Die Schnittstellen [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) sollten die einzigen sein, die benötigt werden, um HTML Drag-and-Drop-Funktionen zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items) Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt stellt ein einzelnes _Ziehobjekt_ dar, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type) Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt hat auch Methoden, um die Daten des Ziehobjekts abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Objekt ist eine Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekte. Das Listenobjekt hat Methoden, um ein Ziehobjekt zur Liste hinzuzufügen, ein Ziehobjekt aus der Liste zu entfernen und die Liste von allen Ziehobjekten zu leeren.

Ein wesentlicher Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) ist, dass erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode verwendet, um auf die Daten eines Ziehobjekts zuzugreifen, während letztere die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) Methode verwendet.

> **Hinweis:** [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) werden auf Desktop-Browsern breit unterstützt. Die Schnittstellen [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) haben jedoch eine begrenzte Browser-Unterstützung. Siehe [Interoperabilität](#interoperability) für weitere Informationen zur Drag-and-Drop-Interoperabilität.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt unter Verwendung der Drag and Drop API: <https://park.glitch.me/> (Bearbeitung möglich [hier](https://glitch.com/edit/#!/park))

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML-Living-Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
