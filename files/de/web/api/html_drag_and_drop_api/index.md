---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 9d5666d2ea7b54460f81857d59f80992fd8237c9
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag-and-Drop**-Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _ziehbare_ Elemente mit der Maus auswählen, diese zu einem _fallen lassbaren_ Element ziehen und das Element loslassen, indem er die Maustaste loslässt. Während der Zieh-Operation folgt eine durchscheinende Darstellung der _ziehbaren_ Elemente dem Zeiger.

Sie können anpassen, welche Elemente _ziehbar_ werden können, die Art des Feedbacks, das die _ziehbaren_ Elemente erzeugen, und die _fallen lassbaren_ Elemente.

Diese Übersicht über HTML Drag-and-Drop beinhaltet eine Beschreibung der Schnittstellen, grundlegende Schritte, um Drag-and-Drop-Unterstützung zu einer Anwendung hinzuzufügen, und eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Verwendung

### Zieh-Ereignisse

HTML-Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Zieh-Ereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) abgeleitet sind. Eine typische _Zieh-Operation_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, läuft weiter, wenn der Benutzer das Element zu einem _fallen lassbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während Zieh-Operationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können mehrmals ausgelöst werden, wie z. B. die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

Jeder [Zieh-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignishandler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                                 |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...eine Zieh-Operation endet (z. B. durch das Loslassen einer Maustaste oder das Drücken der Esc-Taste; siehe [Abschluss eines Ziehens](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Ablageziel betritt. (Siehe [Ablageziele festlegen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                                         |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ablageziel verlässt.                                                                                                                                                          |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element wird alle paar hundert Millisekunden über einem gültigen Ablageziel gezogen.                                                                                                               |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Ziehen einer Operation starten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                        |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ablageziel fallen gelassen wird. (Siehe [Durchführung eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                     |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei von der Betriebssystemoberfläche in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte, um einer Anwendung Drag-and-Drop-Funktionalität hinzuzufügen.

#### Identifizieren, was ziehbar ist

Um ein Element _ziehbar_ zu machen, muss das Attribut [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) und der Ereignishandler [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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
- [Leitfaden für Zieh-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren der Ziehdaten

Die Anwendung kann beliebig viele Datenelemente in eine Zieh-Operation einschließen. Jedes Datenelement ist ein String eines bestimmten `Typs` — typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die _die Daten des Ereignisses enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist) hat auch Methoden, um Ziehdaten zu _verwalten_. Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) wird verwendet, um ein Element zu den Ziehdaten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Eine Liste der in Drag-and-Drop verwendeten häufigen Datentypen (wie Text, HTML, Links und Dateien) finden Sie unter [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Weitere Informationen zu Ziehdaten finden Sie unter [Ziehdaten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren des Ziehbildes

Standardmäßig liefert der Browser ein Bild, das während einer Zieh-Operation neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der Methode [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über die Rückmeldungsbilder beim Ziehen in:

- [Festlegen des Rückmeldungsbildes beim Ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definieren der Ablagewirkung

Die Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) wird verwendet, um das Feedback zu steuern, das dem Benutzer während einer Drag-and-Drop-Operation gegeben wird. Diese beeinflusst typischerweise, welchen Cursor der Browser beim Ziehen anzeigt. Zum Beispiel kann der Cursor des Browsers anzeigen, welche Art von Operation stattfinden wird, wenn der Benutzer über einem Ablageziel schwebt.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Ort an den Ablageort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Ort an den Ablageort verschoben werden.
3. **`link`** zeigt an, dass eine gewisse Form von Beziehung oder Verbindung zwischen Quelle und Ablageort hergestellt wird.

Während der Zieh-Operation können Zieheffekte geändert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Positionen zulässig sind.

Das folgende Beispiel zeigt, wie Sie diese Eigenschaft verwenden.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieheffekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren einer Ablagezone

Standardmäßig verhindert der Browser, dass irgendetwas passiert, wenn etwas auf die meisten HTML-Elemente fallen gelassen wird. Um dieses Verhalten zu ändern und ein Element zu einer _Ablagezone_ oder _befallbar_ zu machen, muss das Element sowohl auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) als auch auf [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse hören.

Das folgende Beispiel zeigt, wie diese Ereignisse verwendet werden.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um eine zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Berührungsereignisse](/de/docs/Web/API/Touch_events) oder [Zeigerereignisse](/de/docs/Web/API/Pointer_events)).

Für weitere Informationen siehe:

- [Festlegen von Ablagezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Umgang mit der Ablagewirkung

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis ist frei, die Ziehdaten auf eine anwendungsspezifische Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData), um Ziehelemente abzurufen und sie dann entsprechend zu verarbeiten. Die Anwendung kann auch semantisch je nach Wert der Eigenschaft [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) und/oder dem Zustand von Modifikatortasten unterschiedlich sein.

Das folgende Beispiel zeigt einen Handler, der die `id` des Quell-Elements aus den Ziehdaten erhält und dann die `id` verwendet, um das Quell-Element in das Ziel-Element zu verschieben:

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

- [Durchführung eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Zieh-Ende

Am Ende einer Zieh-Operation wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis am _Quell-Element_ ausgelöst — dem Element, das das Ziel des Ziehstarts war.

Dieses Ereignis wird unabhängig davon ausgelöst, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignishandler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft überprüfen, um festzustellen, ob die Zieh-Operation erfolgreich war oder nicht.

Für weitere Informationen über die Behandlung des Endes einer Zieh-Operation siehe:

- [Abschluss eines Ziehens](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag-and-Drop-Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent) Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte enthalten den Zustand des Zieh-Ereignisses, wie die Art des Ziehens (z.B. `copy` oder `move`), die Daten des Ziehens (eines oder mehrere Elemente) und den MIME-Typ jedes _gezogenen Elements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte haben auch Methoden, um Elemente zu den Ziehdaten hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag-and-Drop-Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items) Eigenschaft, die eine [`list`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt repräsentiert ein einzelnes _ziehbares Element_, jedes mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type) Eigenschaft für den MIME-Typ des Datenelements. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt hat auch Methoden, um die Daten des ziehbaren Elements abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten. Das Listen-Objekt hat Methoden, um ein ziehbares Element zur Liste hinzuzufügen, ein ziehbares Element aus der Liste zu entfernen und die Liste von allen ziehbaren Elementen zu löschen.

Ein wesentlicher Unterschied zwischen den Schnittstellen [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) besteht darin, dass erstere die synchrone Methode [`getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet, um auf die Daten eines ziehbaren Elements zuzugreifen, während letztere stattdessen die asynchrone Methode [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferItemList`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Referenzseiten für jede Schnittstelle haben auch individuelle Beispiele.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Zieh-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Ziehtypen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag-and-Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag-and-Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
