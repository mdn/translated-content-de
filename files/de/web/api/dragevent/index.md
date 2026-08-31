---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DragEvent`**-Interface ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion darstellt. Der Benutzer initiiert ein Ziehvorgang, indem er ein Zeigegerät (wie eine Maus) auf der Berührungsoberfläche platziert und dann den Zeiger zu einem neuen Ort (wie einem anderen DOM-Element) zieht. Anwendungen können eine Drag-and-Drop-Interaktion auf eine anwendungsspezifische Weise interpretieren.

Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Konstruktoren

Obwohl dieses Interface einen Konstruktor hat, ist es nicht möglich, ein nützliches `DataTransfer`-Objekt aus einem Skript zu erstellen, da [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte ein Verarbeitungs- und Sicherheitsmodell haben, das während Drag-and-Drops vom Browser koordiniert wird.

- [`DragEvent()`](/de/docs/Web/API/DragEvent/DragEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `DragEvent`.

## Ereignisarten

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird. Die Häufigkeit der Auslösung hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl über ein potenzielles Ziel gezogen wird. Die Häufigkeit der Auslösung hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziel fallen gelassen wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, jeden Ereignistyp und globale Ereignishandler ist auf ihrer jeweiligen Referenzseite enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Working with the drag data store](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
