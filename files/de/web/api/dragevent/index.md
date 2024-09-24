---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DragEvent`**-Interface ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Drag-and-Drop-Interaktion darstellt. Der Benutzer initiiert einen Drag, indem er ein Zeigegerät (wie eine Maus) auf der Berührungsoberfläche platziert und den Zeiger dann an einen neuen Ort zieht (wie ein anderes DOM-Element). Anwendungen sind frei, eine Drag-and-Drop-Interaktion auf anwendungsspezifische Weise zu interpretieren.

Dieses Interface erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Konstruktoren

Obwohl dieses Interface einen Konstruktor hat, ist es nicht möglich, ein nützliches DataTransfer-Objekt aus einem Skript zu erstellen, da {{domxref("DataTransfer")}}-Objekte ein Verarbeitungs- und Sicherheitsmodell haben, das vom Browser während Drag-and-Drop koordiniert wird.

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges DragEvent.

## Ereignistypen

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : Dieses Ereignis wird ausgelöst, wenn eine Drag-Operation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel zum Ablegen betritt.
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel zum Ablegen verlässt.
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ziel zum Ablegen ist (alle 50 ms, wenn sich die Maus nicht bewegt, ansonsten viel schneller, zwischen ungefähr 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung)). Dieses Auslösemuster ist anders als bei {{domxref("Element/mouseover_event", "mouseover")}}.
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel zum Ablegen fallen gelassen wird.

## Beispiel

Ein Beispiel für jede Eigenschaft, jeden Konstruktor, jeden Ereignistyp und globale Ereignishandler ist auf deren jeweiligen Referenzseite enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
