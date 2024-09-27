---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um Daten zu halten, die zwischen Kontexten übertragen werden, wie z.B. bei einem Drag-and-Drop-Vorgang oder beim Lesen/Schreiben in die Zwischenablage. Es kann ein oder mehrere Datenobjekte enthalten, von denen jedes eine oder mehrere Datentypen haben kann.

`DataTransfer` wurde hauptsächlich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) als die [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft entwickelt und ist nach wie vor im HTML-Drag-and-Drop-Abschnitt spezifiziert. Es wird jedoch nun auch von anderen APIs verwendet, wie z.B. [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer). Andere APIs verwenden jedoch nur bestimmte Teile der Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation von `DataTransfer` wird sich hauptsächlich auf die Verwendung in Drag-and-Drop-Vorgängen konzentrieren, und Sie sollten die Dokumentation der anderen APIs für die Verwendung von `DataTransfer` in diesen Kontexten konsultieren.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanzeigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Ruft die Art des derzeit ausgewählten Drag-and-Drop-Vorgangs ab oder legt den Vorgang auf einen neuen Typ fest. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle möglichen Arten von Vorgängen an. Muss einer von `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized` sein.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die bei der Datenübertragung verfügbar sind. Wenn der Drag-Vorgang nicht das Ziehen von Dateien beinhaltet, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt, das eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen, das die Formate angibt, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanzmethoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Legt die Drag-Quelle für das angegebene Element fest. Dies wird das Element sein, auf dem [`drag`](/de/docs/Web/API/HTMLElement/drag_event)- und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)-Ereignisse ausgelöst werden und nicht das Standardelement (der Knoten, der gezogen wurde). Firefox-spezifisch.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die mit einem gegebenen Typ verbunden sind. Das Typ-Argument ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten, die mit allen Typen verbunden sind, entfernt. Wenn keine Daten für den angegebenen Typ vorhanden sind oder die Datenübertragung keine Daten enthält, hat diese Methode keine Wirkung.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen bestimmten Typ ab oder eine leere Zeichenfolge, wenn keine Daten für diesen Typ vorhanden sind oder die Datenübertragung keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen bestimmten Typ. Wenn keine Daten für den Typ existieren, wird er am Ende hinzugefügt, so dass das letzte Element in der Typenliste das neue Format ist. Wenn Daten für den Typ bereits existieren, werden die vorhandenen Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Legt das Bild fest, das für das Ziehen verwendet werden soll, wenn ein benutzerdefiniertes gewünscht wird.

## Beispiele

Jede in diesem Dokument aufgelistete Methode und Eigenschaft hat ihre eigene Referenzseite, und jede Referenzseite enthält entweder direkt ein Beispiel der Schnittstelle oder hat einen Link zu einem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
