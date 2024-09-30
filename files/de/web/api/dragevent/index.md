---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DragEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion darstellt. Der Benutzer initiiert einen Drag, indem er ein Zeigegerät (wie eine Maus) auf die Touch-Oberfläche setzt und den Zeiger dann an eine neue Position zieht (wie ein anderes DOM-Element). Anwendungen sind frei, eine Drag-and-Drop-Interaktion auf eine anwendungsspezifische Weise zu interpretieren.

Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Instanz Eigenschaften

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Konstruktoren

Obwohl diese Schnittstelle einen Konstruktor hat, ist es nicht möglich, ein nützliches `DataTransfer`-Objekt aus einem Skript zu erstellen, da `DataTransfer`-Objekte ein Verarbeitungs- und Sicherheitsmodell haben, das vom Browser während Drag-and-Drops koordiniert wird.

- [`DragEvent()`](/de/docs/Web/API/DragEvent/DragEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges DragEvent.

## Ereignistypen

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehziel betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird fortlaufend ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ziehziel ist (alle 50 ms, wenn die Maus sich nicht bewegt, ansonsten viel schneller, zwischen ca. 5 ms (langsames Bewegen) und 1 ms (schnelles Bewegen)). Dieses Auslöseverhalten unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziehziel abgelegt wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, Ereignistyp und globale Ereignis-Handler ist auf ihrer jeweiligen Referenzseite enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
