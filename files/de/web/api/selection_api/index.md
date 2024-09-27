---
title: Selection API
slug: Web/API/Selection_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht verfügbar über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

Die **Selection API** ermöglicht Entwicklern den Zugriff auf und die Manipulation des vom Benutzer ausgewählten Teils eines Dokuments.

Die Methoden [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) und [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) geben ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Teil des Dokuments darstellt. Ein `Selection`-Objekt bietet Methoden zum:

- Zugriff auf die derzeit ausgewählten Knoten
- Modifizieren der aktuellen Auswahl, indem es diese erweitert, verkleinert oder einen völlig anderen Teil des Dokuments auswählt
- Löschen von Teilen der aktuellen Auswahl aus dem DOM.

Die Selection API bietet außerdem zwei Ereignisse, die beide auf [`Document`](/de/docs/Web/API/Document) ausgelöst werden:

- das [`selectstart`](/de/docs/Web/API/Node/selectstart_event)-Ereignis wird ausgelöst, wenn der Benutzer beginnt, eine neue Auswahl zu treffen
- das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis wird ausgelöst, wenn sich die aktuelle Auswahl ändert.

## Schnittstellen

- [`Selection`](/de/docs/Web/API/Selection)
  - : Eine Schnittstelle, die den vom Benutzer ausgewählten Teil des Dokuments oder die aktuelle Position des Cursors darstellt.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors darstellt.
- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors darstellt.
- [`Document.selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn sich die aktuelle Auswahl ändert.
- [`Node.selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Benutzer eine neue Auswahl beginnt.

## Spezifikationen

{{Specifications}}
