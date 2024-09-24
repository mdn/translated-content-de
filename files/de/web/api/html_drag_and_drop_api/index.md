---
title: HTML Drag-and-Drop-API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die **HTML Drag-and-Drop** Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionalitäten in Browsern zu nutzen.

Der Benutzer kann mit der Maus _draggable_ Elemente auswählen, diese zu einem _droppable_ Element ziehen und durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _draggable_ werden können, welche Art von Feedback die _draggable_ Elemente erzeugen und welche Elemente _droppable_ sind.

Diese Übersicht über das HTML Drag-and-Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung zu einer Anwendung und eine Übersicht über die Interoperabilität der Schnittstellen.

## Konzepte und Nutzung

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Drag-Ereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausereignissen](/de/docs/Web/API/MouseEvent) geerbt werden. Eine typische _Drag-Operation_ beginnt, wenn ein Benutzer ein _draggable_ Element auswählt, fortgesetzt wird, wenn der Benutzer das Element zu einem _droppable_ Element zieht, und endet, wenn der Benutzer das gezogene Element loslässt.

Während der Drag-Operationen werden mehrere Ereignistypen ausgelöst, und einige Ereignisse können viele Male ausgelöst werden, wie die {{domxref('HTMLElement/drag_event', 'drag')}} und {{domxref('HTMLElement/dragover_event', 'dragover')}} Ereignisse.

Jeder [Drag-Ereignistyp](/de/docs/Web/API/DragEvent#event_types) hat einen zugehörigen Ereignishandler:

| Ereignis                                              | Wird ausgelöst, wenn...                                                                                                                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('HTMLElement/drag_event', 'drag')}}         | ...ein _gezogenes Element_ (Element oder Textauswahl) gezogen wird.                                                                                                         |
| {{domxref('HTMLElement/dragend_event', 'dragend')}}   | ...eine Drag-Operation endet (wie das Loslassen einer Maustaste oder das Drücken der Esc-Taste; siehe [Abschluss eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag).) |
| {{domxref('HTMLElement/dragenter_event', 'dragenter')}} | ...ein gezogenes Element ein gültiges Drop-Ziel betritt. (Siehe [Festlegen von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).)        |
| {{domxref('HTMLElement/dragleave_event', 'dragleave')}} | ...ein gezogenes Element ein gültiges Drop-Ziel verlässt.                                                                                                                   |
| {{domxref('HTMLElement/dragover_event', 'dragover')}} | ...ein gezogenes Element alle paar Hundert Millisekunden über ein gültiges Drop-Ziel gezogen wird.                                                                          |
| {{domxref('HTMLElement/dragstart_event', 'dragstart')}} | ...der Benutzer beginnt, ein Element zu ziehen. (Siehe [Starten einer Drag-Operation](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag_operation).)         |
| {{domxref('HTMLElement/drop_event', 'drop')}}         | ...ein Element auf ein gültiges Drop-Ziel fallen gelassen wird. (Siehe [Durchführen eines Drops](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)      |

> [!NOTE]
> Weder `dragstart` noch `dragend` Ereignisse werden ausgelöst, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.

### Die Grundlagen

Dieser Abschnitt fasst die grundlegenden Schritte zur Hinzufügung von Drag-and-Drop-Funktionalität zu einer Anwendung zusammen.

#### Identifizieren, was ziehbar ist

Um ein Element _draggable_ zu machen, muss das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable) Attribut und der {{domxref("HTMLElement.dragstart_event","dragstart")}} Ereignishandler hinzugefügt werden, wie im folgenden Codebeispiel gezeigt:

```html
<script>
  function dragstartHandler(ev) {
    // Fügen Sie die ID des Zielelements zum Datentransferobjekt hinzu
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Holen Sie sich das Element nach der ID
    const element = document.getElementById("p1");
    // Fügen Sie den ondragstart-Ereignislistener hinzu
    element.addEventListener("dragstart", dragstartHandler);
  });
</script>

<p id="p1" draggable="true">Dieses Element ist ziehbar.</p>
```

Weitere Informationen finden Sie unter:

- [Referenz für das draggable-Attribut](/de/docs/Web/HTML/Global_attributes/draggable)
- [Leitfaden für Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#the_draggable_attribute)

#### Die Daten des Drags definieren

Die Anwendung kann jederzeit beliebig viele Datenobjekte in eine Drag-Operation einbeziehen. Jedes Datenobjekt ist eine Zeichenkette eines bestimmten `Typs` — typischerweise ein MIME-Typ wie `text/html`.

Jedes {{domxref("DragEvent")}} hat eine {{domxref("DragEvent.dataTransfer","dataTransfer")}} Eigenschaft, die die Daten des Ereignisses _hält_. Diese Eigenschaft (ein {{domxref("DataTransfer")}} Objekt) hat auch Methoden zur _Verwaltung_ von Drag-Daten. Die Methode {{domxref("DataTransfer.setData","setData()")}} wird verwendet, um ein Element zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

```js
function dragstartHandler(ev) {
  // Fügen Sie verschiedene Arten von Drag-Daten hinzu
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}
```

- Für eine Liste von häufig verwendeten Datentypen in Drag-and-Drop (wie Text, HTML, Links und Dateien), siehe [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Für weitere Informationen zu Drag-Daten siehe [Drag-Daten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_data).

#### Das Drag-Bild definieren

Standardmäßig stellt der Browser ein Bild bereit, das während einer Drag-Operation neben dem Zeiger erscheint. Eine Anwendung kann jedoch ein benutzerdefiniertes Bild mit der Methode {{domxref("DataTransfer.setDragImage","setDragImage()")}} definieren, wie im folgenden Beispiel gezeigt.

```js
// Erstellen Sie ein Bild und verwenden Sie es dann für das Drag-Bild.
// HINWEIS: Ändern Sie "example.gif" in eine reale Bild-URL, oder das Bild
// wird nicht erstellt und das Standard-Drag-Bild wird verwendet.
let img = new Image();
img.src = "example.gif";
function dragstartHandler(ev) {
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Erfahren Sie mehr über Drag-Rückmeldungsbilder unter:

- [Festlegen des Drag-Rückmeldungsbildes](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image)

#### Den Drop-Effekt definieren

Die {{domxref("DataTransfer.dropEffect","dropEffect")}} Eigenschaft wird verwendet, um das Feedback zu steuern, das der Benutzer während einer Drag-and-Drop-Operation erhält. Sie beeinflusst normalerweise, welchen Cursor der Browser beim Ziehen anzeigt. Zum Beispiel kann der Browser beim Überfahren eines Drop-Ziels mit dem Cursor anzeigen, welche Art von Operation durchgeführt wird.

Drei Effekte können definiert werden:

1. **`copy`** gibt an, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort kopiert werden.
2. **`move`** bedeutet, dass die gezogenen Daten von ihrem aktuellen Standort zum Drop-Standort verschoben werden.
3. **`link`** bedeutet, dass eine Form von Beziehung oder Verbindung zwischen dem Quell- und dem Drop-Standort erstellt wird.

Während der Drag-Operation können Drag-Effekte geändert werden, um anzuzeigen, dass bestimmte Effekte an bestimmten Standorten zulässig sind.

Das folgende Beispiel zeigt, wie diese Eigenschaft verwendet wird.

```js
function dragstartHandler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Weitere Details finden Sie unter:

- [Drag-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)

#### Eine Drop-Zone definieren

Standardmäßig verhindert der Browser, dass bei den meisten HTML-Elementen etwas passiert, wenn darauf etwas fallen gelassen wird. Um dieses Verhalten zu ändern, damit ein Element zu einer _Drop-Zone_ oder _droppable_ wird, muss das Element sowohl dem {{domxref("HTMLElement.dragover_event","dragover")}} als auch dem {{domxref("HTMLElement.drop_event","drop")}} Ereignis lauschen.

Das folgende Beispiel zeigt, wie diese Attribute verwendet werden, und enthält grundlegende Ereignishandler für jedes Attribut.

```html
<script>
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Holen Sie sich die ID des Ziels und fügen Sie das verschobene Element zum DOM des Ziels hinzu
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="target" ondrop="dropHandler(event)" ondragover="dragoverHandler(event)">
  Drop Zone
</p>
```

Beachten Sie, dass jeder Handler {{domxref("Event.preventDefault","preventDefault()")}} aufruft, um die zusätzliche Ereignisverarbeitung für dieses Ereignis zu verhindern (wie [Touch-Ereignisse](/de/docs/Web/API/Touch_events) oder [Pointeur-Ereignisse](/de/docs/Web/API/Pointer_events)).

Weitere Informationen finden Sie unter:

- [Festlegen von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets)

#### Den Drop-Effekt bearbeiten

Der Handler für das {{domxref("HTMLElement/drop_event", "drop")}} Ereignis kann die Drag-Daten auf anwendungsspezifische Weise verarbeiten.

Typischerweise verwendet eine Anwendung die Methode {{domxref("DataTransfer.getData","getData()")}}, um Drag-Elemente abzurufen und diese entsprechend zu verarbeiten. Darüber hinaus können sich die Anwendungssemantiken abhängig vom Wert des {{domxref("DataTransfer.dropEffect","dropEffect")}} und/oder dem Zustand der Modifier-Tasten unterscheiden.

Das folgende Beispiel zeigt einen Drop-Handler, der die `id` des Quell-Elements aus den Drag-Daten abruft und dann die `id` verwendet, um das Quell-Element zum Drop-Element zu verschieben:

```html
<script>
  function dragstartHandler(ev) {
    // Fügen Sie die ID des Zielelements zum Datentransferobjekt hinzu
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function dropHandler(ev) {
    ev.preventDefault();
    // Holen Sie sich die ID des Ziels und fügen Sie das verschobene Element zum DOM des Ziels hinzu
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="p1" draggable="true" ondragstart="dragstartHandler(event)">
  Dieses Element ist ziehbar.
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

Am Ende einer Drag-Operation wird das {{domxref("HTMLElement/dragend_event", "dragend")}} Ereignis am _Quell-_Element ausgelöst — das Element, das das Ziel des Drag-Starts war.

Dieses Ereignis wird ausgelöst, unabhängig davon, ob das Ziehen abgeschlossen oder abgebrochen wurde. Der {{domxref("HTMLElement/dragend_event", "dragend")}} Ereignishandler kann den Wert der {{domxref("DataTransfer.dropEffect","dropEffect")}} Eigenschaft überprüfen, um festzustellen, ob die Drag-Operation erfolgreich war oder nicht.

Weitere Informationen zum Umgang mit dem Ende einer Drag-Operation finden Sie unter:

- [Abschluss eines Drags](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag)

## Schnittstellen

Die HTML Drag-and-Drop-Schnittstellen sind {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} und {{domxref("DataTransferItemList")}}.

Das {{domxref("DragEvent")}} Interface hat einen Konstruktor und eine {{domxref("DragEvent.dataTransfer","dataTransfer")}} Eigenschaft, die ein {{domxref("DataTransfer")}} Objekt ist.

{{domxref("DataTransfer")}} Objekte umfassen den Zustand des Drag-Ereignisses, wie den Typ des durchgeführten Drags (wie `copy` oder `move`), die Drag-Daten (ein oder mehrere Elemente) und den MIME-Typ jedes _Drag-Elements_. {{domxref("DataTransfer")}} Objekte haben auch Methoden, um Elemente zu den Drag-Daten hinzuzufügen oder zu entfernen.

Die {{domxref("DragEvent")}} und {{domxref("DataTransfer")}} Schnittstellen sollten die einzigen benötigten sein, um HTML Drag and Drop-Funktionen für eine Anwendung hinzuzufügen.

Jedes {{domxref("DataTransfer")}} Objekt enthält eine {{domxref("DataTransfer.items","items")}} Eigenschaft, die eine {{domxref("DataTransferItemList","Liste")}} von {{domxref("DataTransferItem")}} Objekten ist. Ein {{domxref("DataTransferItem")}} Objekt repräsentiert ein einzelnes _Drag-Element_, jedes mit einer {{domxref("DataTransferItem.kind","kind")}} Eigenschaft (entweder `string` oder `file`) und einer {{domxref("DataTransferItem.type","type")}} Eigenschaft für den MIME-Typ des Datenobjekts. Das {{domxref("DataTransferItem")}} Objekt hat auch Methoden, um die Daten des Drag-Elements abzurufen.

Das {{domxref("DataTransferItemList")}} Objekt ist eine Liste von {{domxref("DataTransferItem")}} Objekten. Das Listenobjekt hat Methoden, um ein Drag-Element der Liste hinzuzufügen, ein Drag-Element aus der Liste zu entfernen und die Liste von allen Drag-Elementen zu leeren.

Ein wesentlicher Unterschied zwischen den {{domxref("DataTransfer")}} und {{domxref("DataTransferItem")}} Schnittstellen besteht darin, dass die erste die synchrone Methode {{domxref("DataTransfer.getData","getData()")}} verwendet, um auf die Daten eines Drag-Elements zuzugreifen, während die letzte stattdessen die asynchrone Methode {{domxref("DataTransferItem.getAsString","getAsString()")}} verwendet.

> **Hinweis:** {{domxref("DragEvent")}} und {{domxref("DataTransfer")}} werden auf Desktop-Browsern breit unterstützt. Die {{domxref("DataTransferItem")}} und {{domxref("DataTransferItemList")}} Schnittstellen haben jedoch eine eingeschränkte Browserunterstützung. Siehe [Interoperabilität](#interoperability) für weitere Informationen zur Interoperabilität von Drag-and-Drop.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Ziehen und Ablegen von Dateien (nur Firefox): <https://jsfiddle.net/9C2EF/>
- Ziehen und Ablegen von Dateien (alle Browser): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Ein Parkprojekt unter Verwendung der Drag-and-Drop-API: <https://park.glitch.me/> (Sie können [hier](https://glitch.com/edit/#!/park) bearbeiten)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag-and-drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
