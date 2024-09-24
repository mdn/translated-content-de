---
title: Auswahl-API
slug: Web/API/Selection_API
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über {{domxref("WorkerNavigator")}} verfügbar).

Die **Auswahl-API** ermöglicht es Entwicklern, auf den vom Benutzer ausgewählten Teil eines Dokuments zuzugreifen und diesen zu manipulieren.

Die Methoden {{domxref("Window/getSelection()", "Window.getSelection()")}} und {{domxref("Document/getSelection()", "Document.getSelection()")}} geben ein {{domxref("Selection")}}-Objekt zurück, das den vom Benutzer ausgewählten Teil des Dokuments darstellt. Ein `Selection`-Objekt bietet Methoden, um:

- auf die aktuell ausgewählten Knoten zuzugreifen
- die aktuelle Auswahl zu ändern, sie zu erweitern oder zu verkleinern oder einen vollständig anderen Teil des Dokuments auszuwählen
- Teile der aktuellen Auswahl aus dem DOM zu löschen.

Die Auswahl-API stellt zudem zwei Ereignisse zur Verfügung, die beide auf {{domxref("Document")}} ausgelöst werden:

- das {{domxref("Node/selectstart_event", "selectstart")}}-Ereignis wird ausgelöst, wenn der Benutzer beginnt, eine neue Auswahl zu treffen
- das {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis wird ausgelöst, wenn die aktuelle Auswahl geändert wird.

## Schnittstellen

- {{domxref("Selection")}}
  - : Eine Schnittstelle, die den vom Benutzer ausgewählten Teil des Dokuments oder die aktuelle Position des Cursors darstellt.
- {{domxref("Document/getSelection()", "Document.getSelection()")}}
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors darstellt.
- {{domxref("Window/getSelection()", "Window.getSelection()")}}
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Cursors darstellt.
- {{domxref("Document/selectionchange_event", "Document.selectionchange")}}
  - : Ein Ereignis, das ausgelöst wird, wenn die aktuelle Auswahl geändert wird.
- {{domxref("Node/selectstart_event", "Node.selectstart")}}
  - : Ein Ereignis, das ausgelöst wird, wenn ein Benutzer eine neue Auswahl beginnt.

## Spezifikationen

{{Specifications}}
