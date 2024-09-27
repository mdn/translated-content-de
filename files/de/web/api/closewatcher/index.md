---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die `CloseWatcher`-Schnittstelle hört auf Schließanforderungen und reagiert darauf.

Einige UI-Komponenten haben ein "Schließverhalten", was bedeutet, dass die Komponente erscheint und vom Benutzer geschlossen werden kann, sobald er damit fertig ist. Zum Beispiel: Seitenleisten, Pop-ups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, ein bestimmtes Mechanismus verwenden zu können, um diese Elemente zu schließen, und der Mechanismus ist tendenziell gerätespezifisch. Zum Beispiel könnte es auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste sein, aber Android könnte die Zurück-Taste verwenden. Für eingebettete Komponenten, wie etwa [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elemente, kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die für das Gerät passende Schließaktion ausführt. Wenn jedoch ein Webentwickler seine eigene schließbare UI-Komponente implementiert (zum Beispiel eine Seitenleiste), ist es schwierig, dieses gerätespezifische Schließverhalten zu implementieren. Die `CloseWatcher`-Schnittstelle löst dieses Problem, indem sie ein `close`-Ereignis übermittelt, wenn der Benutzer die Schließaktion für das Gerät ausführt.

{{InheritanceDiagram}}

Die `CloseWatcher` Schnittstelle erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz von `CloseWatcher`.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, fährt mit der Auslösung eines `close`-Ereignisses fort und deaktiviert schließlich den Close-Watcher, als ob `destroy()` aufgerufen worden wäre.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close) {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne zuerst `cancel` auszulösen, und deaktiviert den Close-Watcher, als ob `destroy()` aufgerufen worden wäre.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) {{Experimental_Inline}}
  - : Deaktiviert den Close-Watcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) {{Experimental_Inline}}
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, damit verhindert werden kann, dass `close` ausgelöst wird.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanforderung empfangen wurde.

## Beispiele

### Verarbeiten von Schließanforderungen

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die Standard-Schließmethode der Plattform (z. B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu bearbeiten.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um eine Schließanforderung zu stellen und Ihre Schließanforderung durch denselben `onclose`-Handler zu leiten, den auch die Schließmethode der Plattform verwendet.

```js
const watcher = new CloseWatcher();
const picker = setUpAndShowPickerDOMElement();
let chosenValue = null;

watcher.onclose = () => {
  chosenValue = picker.querySelector("input").value;
  picker.remove();
};

picker.querySelector(".close-button").onclick = () => watcher.requestClose();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis für [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
