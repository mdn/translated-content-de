---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DragEvent`** Interface ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion darstellt. Der Benutzer initiiert einen Drag, indem er ein Zeigegerät (wie eine Maus) auf der Touch-Oberfläche platziert und dann den Zeiger an eine neue Position zieht (wie ein anderes DOM-Element). Anwendungen sind frei, eine Drag-and-Drop-Interaktion auf eine anwendungsspezifische Weise zu interpretieren.

Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Konstruktoren

Obwohl dieses Interface einen Konstruktor hat, ist es nicht möglich, ein nützliches `DataTransfer`-Objekt aus einem Skript zu erstellen, da `DataTransfer`-Objekte ein Verarbeitungs- und Sicherheitsmodell haben, das vom Browser während Drag-and-Drop-Vorgängen koordiniert wird.

- [`DragEvent()`](/de/docs/Web/API/DragEvent/DragEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `DragEvent`.

## Ereignistypen

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Zielgebiet betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Zielgebiet verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Zielgebiet steht (alle 50 ms, WENN die Maus nicht bewegt wird, SONST viel schneller zwischen 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung) ungefähr. Dieses Auslöse-Muster ist anders als bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Zielgebiet fallengelassen wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, jeden Ereignistyp und globale Ereignis-Handler ist in ihrer jeweiligen Referenzseite enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
