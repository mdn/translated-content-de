---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`** Objekt wird verwendet, um jegliche Daten zwischen Kontexten zu übertragen, wie zum Beispiel bei einem Drag-and-Drop-Vorgang oder beim Lesen/Schreiben der Zwischenablage. Es kann ein oder mehrere Datenobjekte halten, von denen jedes eine oder mehrere Datentypen hat.

`DataTransfer` wurde primär für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entworfen, als die {{domxref("DragEvent.dataTransfer")}} Eigenschaft, und ist immer noch in der HTML-Drag-and-Drop-Sektion spezifiziert, wird aber nun auch von anderen APIs verwendet, wie etwa {{domxref("ClipboardEvent.clipboardData")}} und {{domxref("InputEvent.dataTransfer")}}. Allerdings nutzen andere APIs nur bestimmte Teile der Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation von `DataTransfer` wird sich hauptsächlich mit der Nutzung bei Drag-and-Drop-Operationen beschäftigen; für die Verwendung von `DataTransfer` in anderen Kontexten sollten Sie die Dokumentation der jeweiligen APIs konsultieren.

## Konstruktor

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : Erstellt und gibt ein neues `DataTransfer` Objekt zurück.

## Instanz-Eigenschaften

- {{domxref("DataTransfer.dropEffect")}}
  - : Ruft den Typ der aktuell ausgewählten Drag-and-Drop-Operation ab oder setzt die Operation auf einen neuen Typ. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- {{domxref("DataTransfer.effectAllowed")}}
  - : Bietet alle möglichen Operationstypen. Muss einer der folgenden Werte sein: `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized`.
- {{domxref("DataTransfer.files")}} {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die bei der Datenübertragung verfügbar sind. Wenn der Drag-Vorgang nicht das Ziehen von Dateien beinhaltet, ist diese Eigenschaft eine leere Liste.
- {{domxref("DataTransfer.items")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("DataTransferItemList")}} Objekt zurück, welches eine Liste aller Drag-Daten ist.
- {{domxref("DataTransfer.types")}} {{ReadOnlyInline}}
  - : Ein Array von Strings, die die Formate angeben, die im {{domxref("HTMLElement/dragstart_event", "dragstart")}} Ereignis festgelegt wurden.

## Instanz-Methoden

- {{domxref("DataTransfer.addElement()")}} {{experimental_inline}} {{non-standard_inline}}
  - : Setzt die Drag-Quelle für das gegebene Element. Dies wird das Element sein, auf dem die {{domxref("HTMLElement/drag_event", "drag")}} und {{domxref("HTMLElement/dragend_event", "dragend")}} Ereignisse ausgelöst werden, und nicht das Standardziel (der Knoten, der gezogen wurde). Spezifisch für Firefox.
- {{domxref("DataTransfer.clearData()")}}
  - : Entfernt die Daten, die mit einem gegebenen Typ assoziiert sind. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten, die mit allen Typen assoziiert sind, entfernt. Wenn keine Daten für den angegebenen Typ existieren oder die Datenübertragung keine Daten enthält, hat diese Methode keine Wirkung.
- {{domxref("DataTransfer.getData()")}}
  - : Ruft die Daten für einen gegebenen Typ ab oder einen leeren String, wenn keine Daten für diesen Typ existieren oder die Datenübertragung keine Daten enthält.
- {{domxref("DataTransfer.setData()")}}
  - : Setzt die Daten für einen gegebenen Typ. Wenn keine Daten für den Typ existieren, werden sie am Ende hinzugefügt, sodass das letzte Element in der Typenliste das neue Format ist. Wenn Daten für den Typ bereits existieren, werden die bestehenden Daten an derselben Position ersetzt.
- {{domxref("DataTransfer.setDragImage()")}}
  - : Setzt das Bild, das für das Ziehen verwendet wird, falls ein benutzerdefiniertes gewünscht wird.

## Beispiele

Jede in diesem Dokument aufgelistete Methode und Eigenschaft hat ihre eigene Referenzseite, und jede Referenzseite enthält entweder direkt ein Beispiel der Schnittstelle oder hat einen Link zu einem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
