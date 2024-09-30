---
title: Selection API
slug: Web/API/Selection_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

Die **Selection API** ermöglicht es Entwicklern, auf den vom Benutzer ausgewählten Teil eines Dokuments zuzugreifen und diesen zu manipulieren.

Die Methoden [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) und [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) geben ein [`Selection`](/de/docs/Web/API/Selection) Objekt zurück, das den vom Benutzer ausgewählten Teil des Dokuments repräsentiert. Ein `Selection` Objekt bietet Methoden, um:

- auf die derzeit ausgewählten Knoten zuzugreifen
- die aktuelle Auswahl zu ändern, sie zu erweitern oder zu verkleinern oder einen völlig anderen Teil des Dokuments auszuwählen
- Teile der aktuellen Auswahl aus dem DOM zu löschen.

Die Selection API bietet auch zwei Ereignisse, die beide auf [`Document`](/de/docs/Web/API/Document) ausgelöst werden:

- das [`selectstart`](/de/docs/Web/API/Node/selectstart_event) Ereignis wird ausgelöst, wenn der Benutzer beginnt, eine neue Auswahl zu treffen
- das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignis wird ausgelöst, wenn sich die aktuelle Auswahl ändert.

## Schnittstellen

- [`Selection`](/de/docs/Web/API/Selection)
  - : Eine Schnittstelle, die den vom Benutzer ausgewählten Teil des Dokuments oder die aktuelle Position des Cursors repräsentiert.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Eine Methode, die ein `Selection` Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors repräsentiert.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Eine Methode, die ein `Selection` Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors repräsentiert.
- [`Document.selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die aktuelle Auswahl geändert wird.
- [`Node.selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Benutzer eine neue Auswahl beginnt.

## Spezifikationen

{{Specifications}}
