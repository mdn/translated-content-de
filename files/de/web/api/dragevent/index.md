---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DragEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion darstellt. Der Benutzer beginnt einen Ziehvorgang, indem er ein Zeigegerät (z. B. eine Maus) auf einer Oberfläche positioniert und den Zeiger anschließend an eine neue Stelle zieht (z. B. über ein anderes DOM-Element). Anwendungen können eine Drag-and-Drop-Interaktion auf anwendungsspezifische Weise interpretieren.

Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Konstruktoren

Obwohl diese Schnittstelle einen Konstruktor besitzt, lässt sich per Skript kein nutzbares DataTransfer-Objekt erstellen, da [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekte einem Verarbeitungs- und Sicherheitsmodell unterliegen, das der Browser während Drag-and-Drop-Vorgängen steuert.

- [`DragEvent()`](/de/docs/Web/API/DragEvent/DragEvent)
  - : Erstellt ein synthetisches, nicht vertrauenswürdiges DragEvent.

## Instanzeigenschaften

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Ereignistypen

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl gezogen wird. Die Häufigkeit hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ablageziel erreicht.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ablageziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl über ein potenzielles Ablageziel gezogen wird. Die Häufigkeit hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ablageziel abgelegt wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, jeden Ereignistyp und jeden globalen Event-Handler finden Sie auf der jeweiligen Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
