---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DragEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion repräsentiert. Der Benutzer initiiert ein Ziehen, indem er ein Zeigegerät (wie eine Maus) auf die Touch-Oberfläche legt und dann den Zeiger an einen neuen Ort zieht (wie ein anderes DOM-Element). Anwendungen sind frei, eine Drag-and-Drop-Interaktion auf eine anwendungsspezifische Weise zu interpretieren.

Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Konstruktoren

Obwohl diese Schnittstelle einen Konstruktor hat, ist es nicht möglich, ein nützliches `DataTransfer`-Objekt aus einem Skript zu erstellen, da [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte ein vom Browser während Drag-and-Drop koordiniertes Verarbeitungs- und Sicherheitsmodell haben.

- [`DragEvent()`](/de/docs/Web/API/DragEvent/DragEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `DragEvent`.

## Ereignistypen

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Zieh-Operation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ziel ist (alle 50 ms, WENN die Maus sich nicht bewegt, SONST viel schneller, zwischen ungefähr 5 ms (langsamer Bewegung) und 1 ms (schneller Bewegung). Dieses Auslöseverhalten unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel fallen gelassen wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, jeden Ereignistyp und jede globale Ereignisbehandlung ist auf ihrer jeweiligen Referenzseite enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Datenspeicher für Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
