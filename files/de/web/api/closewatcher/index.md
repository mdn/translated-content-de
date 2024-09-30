---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Das `CloseWatcher`-Interface hört auf Schließanfragen und reagiert darauf.

Einige UI-Komponenten haben ein "Schließverhalten", was bedeutet, dass die Komponente erscheint und der Benutzer sie schließen kann, wenn er mit ihr fertig ist. Zum Beispiel: Seitenleisten, Popups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, dass sie ein bestimmtes Mechanismus verwenden können, um diese Elemente zu schließen, und der Mechanismus ist in der Regel gerätespezifisch. Zum Beispiel könnte auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste verwendet werden, aber Android könnte die Zurück-Taste nutzen. Für eingebaute Komponenten wie [popover](/de/docs/Web/API/Popover_API) oder `dialog`-Elemente kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die für das Gerät geeignete Schließaktion ausführt. Wenn jedoch ein Webentwickler eine eigene schließbare UI-Komponente implementiert (beispielsweise eine Seitenleiste), ist es schwierig, ein solches gerätespezifisches Schließverhalten zu implementieren. Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `close`-Ereignis auslöst, wenn der Benutzer die Schließaktion für das Gerät ausführt.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Konstruktor

- [`CloseWatcher()`](/de/docs/Web/API/CloseWatcher/CloseWatcher) {{Experimental_Inline}}
  - : Erstellt eine neue `CloseWatcher`-Instanz.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CloseWatcher.requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, wird ein `close`-Ereignis ausgelöst und schließlich der CloseWatcher deaktiviert, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.close()`](/de/docs/Web/API/CloseWatcher/close) {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne vorher `cancel` auszulösen, und deaktiviert den CloseWatcher, als ob `destroy()` aufgerufen wurde.
- [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) {{Experimental_Inline}}
  - : Deaktiviert den CloseWatcher, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- [`cancel`](/de/docs/Web/API/CloseWatcher/cancel_event) {{Experimental_Inline}}
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, damit das `close`-Ereignis daran gehindert werden kann, ausgelöst zu werden.
- [`close`](/de/docs/Web/API/CloseWatcher/close_event) {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanfrage eingegangen ist.

## Beispiele

### Verarbeitung von Schließanfragen

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (einen Picker) und möchten sowohl die Standard-Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre individuelle Schließmethode (einen Schließknopf) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu behandeln.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen anzufordern und Ihre Schließanfrage durch denselben `onclose`-Handler zu leiten, den auch die Schließmethode der Plattform nutzt.

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

- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis bei [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
