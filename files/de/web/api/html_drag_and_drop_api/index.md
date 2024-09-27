---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu verwenden.

Der Benutzer kann _ziehbare_ Elemente mit der Maus auswählen, diese zu einem _abwerfbaren_ Element ziehen und sie durch Loslassen der Maustaste ablegen. Eine durchsichtige Darstellung der _ziehbaren_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _ziehbar_ werden, welche Art von Feedback die _ziehbaren_ Elemente erzeugen und welche Elemente _abwerfbar_ sind.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung zu einer Anwendung und eine Übersicht über die Interoperabilität der Schnittstellen.

## Konzepte und Verwendung

### Drag-Ereignisse

HTML-Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und die _[Drag-Ereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) abgeleitet sind. Ein typischer _Ziehvorgang_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, setzt sich fort, wenn der Benutzer das Element zu einem _abwerfbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während der Ziehvorgänge werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male auftreten, wie die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignishandler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                               |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...ein Ziehvorgang endet (wie das Loslassen einer Maustaste oder das Drücken der Escape-Taste; siehe [Abschließen eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element einen gültigen Abwurfbereich betritt. (Siehe [Spezifizieren von Abwurfbereichen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                      |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element einen gültigen Abwurfbereich verlässt.                                                                                                                                                   |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über einen gültigen Abwurfbereich gezogen wird, alle paar hundert Millisekunden.                                                                                                         |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Starten eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                          |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Abwurfziel fallen gelassen wird. (Siehe [Durchführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                  |

> [!NOTE]
> Weder `dragstart`- noch `dragend`-Ereignisse werden ausgelöst, wenn man eine Datei aus dem Betriebssystem in den Browser zieht.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte, um Drag-and-Drop-Funktionalität zu einer Anwendung hinzuzufügen.

#### Identifizieren, was ziehbar ist

Um ein Element _ziehbar_ zu machen, muss das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable) und der Ereignishandler [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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

- [Draggable-Attributreferenz](/de/docs/Web/HTML/Global_attributes/draggable)
- [Leitfaden für Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Die Daten des Ziehvorgangs definieren

Die Anwendung kann beliebig viele Datenobjekte in einem Ziehvorgang einschließen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `type` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt) verfügt auch über Methoden zum _Verwalten_ der Ziehdaten. Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) wird verwendet, um ein Objekt zu den Ziehdaten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Für eine Liste der gängigen Datentypen, die beim Ziehen-und-Ablegen verwendet werden (wie Text, HTML, Links und Dateien), siehe [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für weitere Informationen über Ziehdaten siehe [Ziehdaten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Das Ziehbild definieren

Standardmäßig stellt der Browser ein Bild bereit, das während eines Ziehvorgangs neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) definieren, wie im folgenden Beispiel gezeigt.

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

Weitere Informationen zu Drag-Feedback-Bildern finden Sie unter:

- [Festlegen des Drag-Feedback-Bildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Den Abwurfeffekt definieren

Die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft wird verwendet, um das Feedback zu steuern, das der Benutzer während eines Zieh- und Abwurfvorgangs erhält. Sie beeinflusst typischerweise, welchen Cursor der Browser beim Ziehen anzeigt. Zum Beispiel kann der Cursor des Browsers beim Überfahren eines Abwurfziels anzeigen, welcher Typ von Vorgang stattfinden wird.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Ort zum Abwurfziel kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Ort zum Abwurfziel bewegt werden.
3. **`link`** zeigt an, dass eine Art von Beziehung oder Verbindung zwischen der Quelle und dem Abwurfziel erstellt wird.

Während des Ziehvorgangs können die Zieheffekte modifiziert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Orten erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieheffekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Eine Abwurfzone definieren

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente fallen gelassen wird. Um dieses Verhalten zu ändern, damit ein Element zu einer _Abwurfzone_ wird oder _ablegbar_ ist, muss das Element sowohl auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)- als auch auf [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse hören.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeigerereignisse](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Spezifizieren von Abwurfzielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Den Abwurfeffekt handhaben

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis kann die Ziehdaten auf eine anwendungsspezifische Weise verarbeiten.

Typischerweise verwendet eine Anwendung die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData), um die Ziehelemente abzurufen und sie dann entsprechend zu verarbeiten. Darüber hinaus können die Semantiken der Anwendung je nach Wert des [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Zustand der Modifikatortasten unterschiedlich sein.

Das folgende Beispiel zeigt einen Abwurfhandler, der die `id` des Quell-Elements aus den Ziehdaten holt und die `id` dann verwendet, um das Quell-Element zum Abwurfelement zu verschieben:

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

- [Durchführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Zieh-Ende

Am Ende eines Ziehvorgangs wird das Ereignis [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) am \_Quell-\_Element ausgelöst — dem Element, das Ziel des Ziehbeginns war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)-Eigenschaft überprüfen, um festzustellen, ob der Ziehvorgang erfolgreich war oder nicht.

Für weitere Informationen zur Handhabung des Endes eines Ziehvorgangs siehe:

- [Abschließen eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent)-Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte beinhalten den Zustand des Drag-Ereignisses, wie die Art des Drohende (wie `copy` oder `move`), die Drag-Daten (eines oder mehrere Objekte) und den MIME-Typ jedes _Zugobjekts_. [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte haben außerdem Methoden, um Objekte zu den Ziehdaten hinzuzufügen oder zu entfernen.

Die Schnittstellen [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) sollten die einzigen benötigten sein, um HTML Drag and Drop-Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt repräsentiert ein einzelnes _Zugobjekt_, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type)-Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt hat auch Methoden, um die Daten des Zugobjekts abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten. Das Listenobjekt verfügt über Methoden, um ein Zugobjekt zur Liste hinzuzufügen, ein Zugobjekt aus der Liste zu entfernen und die Liste von allen Zugobjekten zu leeren.

Ein wesentlicher Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) besteht darin, dass die erstere die synchrone Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet, um auf die Daten eines Zugobjekts zuzugreifen, während die letztere die asynchrone Methode [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) verwendet.

> **Hinweis:** [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) sind breit auf Desktop-Browsern unterstützt. Die Schnittstellen [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) haben jedoch eine eingeschränkte Browser-Unterstützung. Weitere Informationen zur Drag-and-Drop-Interoperabilität finden Sie unter [Interoperabilität](#interoperability).

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Dateien ziehen und ablegen (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Dateien ziehen und ablegen (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt unter Verwendung der Drag and Drop-API: <https://park.glitch.me/> (Sie können [hier](https://glitch.com/edit/#!/park) bearbeiten)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop-Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
