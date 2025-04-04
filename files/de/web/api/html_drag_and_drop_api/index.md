---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann mit der Maus _ziehbare_ Elemente auswählen, diese zu einem _ablegbaren_ Element ziehen und durch Loslassen der Maustaste ablegen. Eine durchsichtige Darstellung der _ziehbaren_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _ziehbar_ werden können, welche Art von Feedback die _ziehbaren_ Elemente erzeugen und welche Elemente _abgelegt_ werden können.

Diese Übersicht über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung zu einer Anwendung sowie eine Interoperabilitätszusammenfassung der Schnittstellen.

## Konzepte und Verwendung

### Zieh-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Zieh-Ereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) geerbt werden. Ein typischer _Ziehvorgang_ beginnt, wenn ein Benutzer ein _ziehbares_ Element auswählt, weitergeht, wenn der Benutzer das Element zu einem _ablegbaren_ Element zieht, und endet, wenn der Benutzer das gezogene Element freigibt.

Während Ziehvorgängen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male auftreten, wie z. B. die [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse.

Jeder [Typ eines Zieh-Ereignisses](/de/docs/Web/API/DragEvent#event_types) hat einen zugeordneten Ereignis-Handler:

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                                                                                                                                 |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                                                     |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...ein Ziehvorgang endet (wie das Loslassen einer Maustaste oder das Drücken der Esc-Taste; siehe [Abschluss eines Ziehens](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein gezogenes Element ein gültiges Ziel betritt. (Siehe [Festlegen von Ablegezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)                              |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein gezogenes Element ein gültiges Ziel verlässt.                                                                                                                                                    |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein gezogenes Element über einem gültigen Ziel gezogen wird, alle paar hundert Millisekunden.                                                                                                        |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Starten eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)                                |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...ein Element auf ein gültiges Ziel fallengelassen wird. (Siehe [Durchführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                               |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt ist eine Zusammenfassung der grundlegenden Schritte zur Hinzufügung von Drag-and-Drop-Funktionalität zu einer Anwendung.

#### Ermitteln, was ziehbar ist

Um ein Element _ziehbar_ zu machen, muss das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) Attribut und der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis-Handler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

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

- [Erwähnung des draggable Attributs](/de/docs/Web/HTML/Global_attributes/draggable)
- [Leitfaden zu Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Definieren der Zieht-Daten

Die Anwendung hat die Freiheit, eine beliebige Anzahl von Datenobjekten in einen Ziehvorgang einzufügen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `Typs` - typischerweise ein MIME-Typ wie `text/html`.

Jedes [`DragEvent`](/de/docs/Web/API/DragEvent) hat eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die die Daten des Ereignisses _enthält_. Diese Eigenschaft (die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist) hat auch Methoden, um die Zieht-Daten zu _verwalten_. Die [`setData()`](/de/docs/Web/API/DataTransfer/setData) Methode wird verwendet, um ein Objekt zu den Zieht-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

- Eine Liste häufiger Datentypen, die beim Ziehen und Ablegen verwendet werden (wie Text, HTML, Links und Dateien), finden Sie unter [Empfohlene Zieht-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Weitere Informationen zu Zieht-Daten finden Sie unter [Zieht-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Definieren des Ziehbilder

Standardmäßig liefert der Browser ein Bild, das während eines Ziehvorgangs neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der [`setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage) Methode definieren, wie im folgenden Beispiel gezeigt.

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

Erfahren Sie mehr über Zieht-Feedback-Bilder in:

- [Festlegen des Zieh-Feedback-Bildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Definieren der Ableg-Effekte

Die [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft wird verwendet, um das Feedback zu steuern, das der Benutzer während eines Drag-and-Drop-Vorgangs erhält. Es beeinflusst typischerweise, welchen Cursor der Browser beim Ziehen anzeigt. Wenn der Benutzer z. B. über ein Ablageziel schwebt, kann der Cursor des Browsers den Typ der Operation anzeigen, die ausgeführt wird.

Drei Effekte können definiert werden:

1. **`copy`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Ablageort kopiert werden.
2. **`move`** zeigt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Ablageort verschoben werden.
3. **`link`** zeigt an, dass irgendeine Art von Beziehung oder Verbindung zwischen der Quelle und dem Ablageort hergestellt wird.

Während der Zieh-Operation können Zieh-Effekte modifiziert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Orten erlaubt sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Für weitere Details siehe:

- [Zieht-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Definieren einer Ablagezone

Standardmäßig verhindert der Browser, dass etwas passiert, wenn etwas auf die meisten HTML-Elemente abgeladen wird. Um dieses Verhalten zu ändern, sodass ein Element zu einer _Ablagezone_ oder _ablegbar_ wird, muss das Element sowohl [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) als auch [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse abhören.

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

Beachten Sie, dass jeder Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Zeiger-Ereignisse](/de/docs/Web/API/Pointer_events)).

Weitere Informationen finden Sie unter:

- [Festlegen von Ablegezielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Umgang mit dem Ableg-Effekt

Der Handler für das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis ist frei, um die Ziehdaten auf eine anwendungsspezifische Weise zu verarbeiten.

Typischerweise verwendet eine Anwendung die [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode, um die Zieht-Elemente abzurufen und sie dann entsprechend zu verarbeiten. Außerdem können sich die Anwendungssemantiken je nach Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft und/oder dem Zustand der Modifikator-Tasten unterscheiden.

Das folgende Beispiel zeigt einen Ablage-Handler, der die `id` des Quell-Elements aus den Ziehdaten abruft und dann die `id` verwendet, um das Quell-Element zum Ablage-Element zu verschieben:

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

- [Durchführen eines Abwurfs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop)

#### Zieh-Ende

Am Ende eines Ziehvorgangs wird das [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis auf das \_Quell-\_Element ausgelöst — das Element, das das Ziel des Ziehstarts war.

Dieses Ereignis wird ausgelöst, unabhängig davon, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignis-Handler kann den Wert der [`dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect) Eigenschaft überprüfen, um festzustellen, ob der Ziehvorgang erfolgreich war oder nicht.

Weitere Informationen zum Umgang mit dem Ende eines Ziehvorgangs finden Sie unter:

- [Abschluss eines Ziehvorgangs](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag and Drop Schnittstellen sind [`DragEvent`](/de/docs/Web/API/DragEvent), [`DataTransfer`](/de/docs/Web/API/DataTransfer), [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList).

Die [`DragEvent`](/de/docs/Web/API/DragEvent) Schnittstelle hat einen Konstruktor und eine [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist.

[`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte enthalten den Status des Zieh-Ereignisses, wie den Typ des Ziehens (z. B. `copy` oder `move`), die Zieht-Daten (ein oder mehrere Objekte) und den MIME-Typ jedes _Zieht-Elements_. [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekte haben auch Methoden, um Objekte zu den Zieht-Daten hinzuzufügen oder zu entfernen.

Die [`DragEvent`](/de/docs/Web/API/DragEvent) und [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstellen sollten die einzigen sein, die benötigt werden, um HTML Drag and Drop Fähigkeiten zu einer Anwendung hinzuzufügen.

Jedes [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt enthält eine [`items`](/de/docs/Web/API/DataTransfer/items) Eigenschaft, die eine [`Liste`](/de/docs/Web/API/DataTransferItemList) von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten ist. Ein [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt stellt ein einzelnes _Zieht-Element_ dar, jeder mit einer [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft (entweder `string` oder `file`) und einer [`type`](/de/docs/Web/API/DataTransferItem/type) Eigenschaft für den MIME-Typ des Datenobjekts. Das [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt hat auch Methoden, um die Daten des Zieht-Elements abzurufen.

Das [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) Objekt ist eine Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekten. Das Listenobjekt hat Methoden, um ein Zieht-Element zur Liste hinzuzufügen, ein Zieht-Element aus der Liste zu entfernen und die Liste aller Zieht-Elemente zu löschen.

Ein wesentlicher Unterschied zwischen den [`DataTransfer`](/de/docs/Web/API/DataTransfer) und [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Schnittstellen ist, dass die erstere die synchrone [`getData()`](/de/docs/Web/API/DataTransfer/getData) Methode verwendet, um auf die Daten eines Zieht-Elements zuzugreifen, während die letztere stattdessen die asynchrone [`getAsString()`](/de/docs/Web/API/DataTransferItem/getAsString) Methode verwendet.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (Alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt mit der Drag and Drop API: <https://park.glitch.me/> (Bearbeiten Sie es [hier](https://glitch.com/edit/#!/park))

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Zieh-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieht-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag-and-Drop-Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
