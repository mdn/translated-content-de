---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
---

{{APIRef("HTML Drag and Drop API")}}

Das **`DataTransfer`**-Objekt wird verwendet, um Daten zwischen Kontexten zu übertragen, wie beispielsweise bei einem Drag-and-Drop-Vorgang oder beim Lesen/Schreiben der Zwischenablage. Es kann ein oder mehrere Datenelemente halten, wobei jedes Element einen oder mehrere Datentypen haben kann.

`DataTransfer` wurde ursprünglich für die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) entwickelt, als die Eigenschaft [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer), und ist immer noch im Bereich Drag-and-Drop im HTML-Standard spezifiziert. Es wird jedoch mittlerweile auch von anderen APIs wie [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) verwendet. Andere APIs nutzen jedoch nur bestimmte Teile der Schnittstelle und ignorieren Eigenschaften wie `dropEffect`. Die Dokumentation von `DataTransfer` wird sich hauptsächlich mit der Verwendung bei Drag-and-Drop-Vorgängen befassen, und Sie sollten die Dokumentationen der anderen APIs für deren Einsatz von `DataTransfer` in diesen Kontexten konsultieren.

## Konstruktor

- [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)
  - : Erstellt und gibt ein neues `DataTransfer`-Objekt zurück.

## Instanz-Eigenschaften

- [`DataTransfer.dropEffect`](/de/docs/Web/API/DataTransfer/dropEffect)
  - : Ruft den Typ des derzeit ausgewählten Drag-and-Drop-Vorgangs ab oder legt den Vorgang auf einen neuen Typ fest. Der Wert muss `none`, `copy`, `link` oder `move` sein.
- [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)
  - : Gibt alle Arten von möglichen Vorgängen an. Muss einer von `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` oder `uninitialized` sein.
- [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) {{ReadOnlyInline}}
  - : Enthält eine Liste aller lokalen Dateien, die beim Datentransfer verfügbar sind. Wenn der Drag-Vorgang nicht das Ziehen von Dateien beinhaltet, ist diese Eigenschaft eine leere Liste.
- [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)-Objekt zurück, das eine Liste aller Drag-Daten ist.
- [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) {{ReadOnlyInline}}
  - : Ein Array von Strings, das die Formate angibt, die im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt wurden.

## Instanz-Methoden

- [`DataTransfer.addElement()`](/de/docs/Web/API/DataTransfer/addElement) {{experimental_inline}} {{non-standard_inline}}
  - : Legt die Drag-Quelle für das angegebene Element fest. Dies wird das Element sein, bei dem die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) ausgelöst werden und nicht das Standardziel (der Knoten, der gezogen wurde). Firefox-spezifisch.
- [`DataTransfer.clearData()`](/de/docs/Web/API/DataTransfer/clearData)
  - : Entfernt die Daten, die mit einem bestimmten Typ verknüpft sind. Das Argument `type` ist optional. Wenn der Typ leer oder nicht angegeben ist, werden die Daten aller Typen entfernt. Wenn Daten für den angegebenen Typ nicht existieren oder der Datentransfer keine Daten enthält, hat diese Methode keine Wirkung.
- [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData)
  - : Ruft die Daten für einen gegebenen Typ ab oder gibt einen leeren String zurück, wenn keine Daten für diesen Typ existieren oder der Datentransfer keine Daten enthält.
- [`DataTransfer.setData()`](/de/docs/Web/API/DataTransfer/setData)
  - : Setzt die Daten für einen bestimmten Typ. Wenn für den Typ keine Daten existieren, wird dieser am Ende hinzugefügt, sodass das letzte Element in der Typenliste das neue Format ist. Wenn Daten für den Typ bereits existieren, werden die vorhandenen Daten an derselben Position ersetzt.
- [`DataTransfer.setDragImage()`](/de/docs/Web/API/DataTransfer/setDragImage)
  - : Setzt das Bild, das zum Ziehen verwendet werden soll, falls ein benutzerdefiniertes gewünscht wird.

## Beispiele

Jede Methode und Eigenschaft, die in diesem Dokument aufgeführt ist, hat ihre eigene Referenzseite und jede Referenzseite enthält entweder direkt ein Beispiel der Schnittstelle oder einen Link zu einem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)
