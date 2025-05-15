---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _ziehbare_ Elemente mit der Maus auswählen, diese Elemente zu einem _abwerfbaren_ Element ziehen und sie loslassen, indem er die Maustaste freigibt. Eine durchscheinende Darstellung der _ziehbaren_ Elemente folgt dem Zeiger während der Ziehoperation.

Sie können anpassen, welche Elemente _ziehbar_ werden können, welche Art von Rückmeldung die _ziehbaren_ Elemente erzeugen, und die _abwerfbaren_ Elemente.

Dieser Überblick über HTML Drag and Drop umfasst eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung zu einer Anwendung und eine Interoperabilitätszusammenfassung der Schnittstellen.

## Konzepte und Verwendung

### Ziehereignisse

HTML-Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Ziehen-Ereignisse](/de/docs/Web/API/DragEvent)_ , die von [Mausereignissen](/de/docs/Web/API/MouseEvent) geerbt werden. Eine typische _Ziehoperation_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, fortgesetzt, wenn der Benutzer das Element zu einem _abwerfbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element freigibt.

Während Ziehoperationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse könnten viele Male auftreten, wie z. B. die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

Jeder [Ziehen-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignis-Handler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                        |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...eine Ziehoperation endet (z.B. durch Loslassen der Maustaste oder Drücken der Esc-Taste; siehe [Beenden eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Abwurfziel betritt. (Siehe [Spezifizierung von Abwurfzielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                      |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Abwurfziel verlässt.                                                                                                                                                 |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über ein gültiges Abwurfziel gezogen wird, alle paar hundert Millisekunden.                                                                                                       |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer mit dem Ziehen eines Elements beginnt. (Siehe [Starten einer Ziehoperation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                           |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Abwurfziel fällt. (Siehe [Ausführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                            |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte, um einer Anwendung Drag-and-Drop-Funktionalität hinzuzufügen.

#### Identifizieren, was ziehbar ist

Damit ein Element _ziehbar_ wird, muss das Attribut [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) hinzugefügt und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignishandler definiert werden, wie im folgenden Codebeispiel gezeigt:

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

- [Draggable-Attribut-Referenz](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
- [Leitfaden zu Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Daten des Zugs definieren

Die Anwendung kann beliebig viele Datenobjekte in einer Ziehoperation einbeziehen. Jedes Datenobjekt ist eine Zeichenfolge eines bestimmten `type` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt) hat auch Methoden zur _Verwaltung_ von Ziehdaten. Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) wird verwendet, um ein Element zu den Ziehdaten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Für eine Liste der gängigen Datentypen, die im Drag-and-Drop verwendet werden (wie Text, HTML, Links und Dateien), siehe [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für weitere Informationen über Ziehdaten siehe [Ziehdaten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Zugbild definieren

Standardmäßig liefert der Browser ein Bild, das neben dem Zeiger während einer Ziehoperation erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über Bilder für Zugsfeedback in:

- [Festlegen des Zug-Feedback-Bilds](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Abwurfeffekt definieren

Die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) wird verwendet, um die Rückmeldung zu steuern, die dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Sie beeinflusst typischerweise, welchen Cursor der Browser während des Ziehens anzeigt. Beispielsweise kann, wenn der Benutzer über ein Abwurfziel schwebt, der Cursor des Browsers angeben, welche Art von Operation stattfinden wird.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort an den Abwurfstandort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort an den Abwurfstandort verschoben werden.
3. **`link`** zeigt an, dass eine Art von Beziehung oder Verbindung zwischen dem Quellort und dem Abwurfstandort hergestellt wird.

Während der Ziehoperation können die Zieh-Effekte so modifiziert werden, dass angezeigt wird, dass bestimmte Effekte an bestimmten Standorten erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieh-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Abwurfzone definieren

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente abgeworfen wird. Um dieses Verhalten zu ändern, sodass ein Element zu einer _Abwurfzone_ oder _abwerfbar_ wird, muss das Element sowohl auf die Ereignisse [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) als auch [`drop`](/de/docs/Web/API/HTMLElement/drop_event) hören.

Das folgende Beispiel zeigt, wie diese Attribute verwendet werden, und enthält grundlegende Ereignishandler für jedes Attribut.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um die zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeigerereignisse](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Spezifizieren von Abwurfzielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Abwurf-Effekt behandeln

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis kann die Ziehdaten auf eine anwendungsspezifische Weise verarbeiten.

Typischerweise verwendet eine Anwendung die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData), um Ziehelemente zu erhalten und sie dann entsprechend zu verarbeiten. Zusätzlich können sich die Semantiken der Anwendung je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Zustand der Modifikatortasten unterscheiden.

Das folgende Beispiel zeigt einen Abwurf-Handler, der die `id` des Quellements aus den Ziehdaten erhält und dann die `id` verwendet, um das Quellement zum Abwurfelement zu verschieben:

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

- [Ausführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Ende der Ziehoperation

Am Ende einer Ziehoperation wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignis am _Quell_ element ausgelöst — dem Element, das das Ziel des Ziehstarts war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen abgeschlossen wurde oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, ob die Ziehoperation erfolgreich war oder nicht.

Für weitere Informationen zur Verarbeitung des Endes einer Ziehoperation siehe:

- [Beenden eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent) Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte enthalten den Status des Zieh-Ereignisses, wie z. B. den Typ des Ziehens (wie `copy` oder `move`), die Daten des Zugs (eines oder mehrere Elemente) und den MIME-Typ jedes _Ziehelements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte haben auch Methoden, um Elemente zu den Daten des Zugs hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag and Drop Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft, die eine [`Liste`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt stellt ein einzelnes _Ziehelement_ dar, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type)-Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt hat außerdem Methoden, um die Daten des Ziehelements zu erhalten.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Das Listenobjekt hat Methoden, um ein Ziehelement zur Liste hinzuzufügen, ein Ziehelement aus der Liste zu entfernen und die Liste von allen Ziehelementen zu löschen.

Ein wesentlicher Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer)- und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstellen besteht darin, dass die erstgenannte die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData)-Methode verwendet, um auf Daten eines Ziehelements zuzugreifen, während letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString)-Methode verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt mit der Drag and Drop API: <https://park.glitch.me/> ([Hier bearbeiten](https://glitch.com/edit/#!/park))

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag-and-Drop-Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
