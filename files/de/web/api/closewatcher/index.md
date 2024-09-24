---
title: CloseWatcher
slug: Web/API/CloseWatcher
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Das `CloseWatcher`-Interface überwacht und reagiert auf Schließanfragen.

Einige UI-Komponenten haben ein „Schließverhalten“, was bedeutet, dass die Komponente erscheint und der Benutzer sie schließen kann, wenn er fertig ist. Zum Beispiel: Seitenleisten, Popups, Dialoge oder Benachrichtigungen.

Benutzer erwarten im Allgemeinen, ein bestimmtes Mechanismus zu verwenden, um diese Elemente zu schließen, und dieser Mechanismus ist tendenziell gerätespezifisch. Zum Beispiel könnte es auf einem Gerät mit Tastatur die <kbd>Esc</kbd>-Taste sein, aber Android könnte die Zurück-Taste verwenden. Für integrierte Komponenten wie [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elemente kümmert sich der Browser um diese Unterschiede und schließt das Element, wenn der Benutzer die für das Gerät geeignete Schließaktion durchführt. Wenn jedoch ein Webentwickler seine eigene schließbare UI-Komponente implementiert (zum Beispiel eine Seitenleiste), ist es schwierig, dieses gerätespezifische Schließverhalten zu implementieren. Das `CloseWatcher`-Interface löst dieses Problem, indem es ein `close`-Ereignis auslöst, wenn der Benutzer die Schließaktion für das Gerät ausführt.

{{InheritanceDiagram}}

Das `CloseWatcher`-Interface erbt von {{domxref("EventTarget")}}.

## Konstruktor

- {{domxref("CloseWatcher.CloseWatcher", "CloseWatcher()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz von `CloseWatcher`.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("CloseWatcher.requestClose()")}} {{Experimental_Inline}}
  - : Löst ein `cancel`-Ereignis aus und wenn dieses Ereignis nicht mit {{domxref("Event.preventDefault()")}} abgebrochen wird, fährt es fort, ein `close`-Ereignis auszulösen und deaktiviert schließlich den Schließwächter, als ob `destroy()` aufgerufen wurde.
- {{domxref("CloseWatcher.close()")}} {{Experimental_Inline}}
  - : Löst sofort das `close`-Ereignis aus, ohne vorher `cancel` auszulösen, und deaktiviert den Schließwächter, als ob `destroy()` aufgerufen wurde.
- {{domxref("CloseWatcher.destroy()")}} {{Experimental_Inline}}
  - : Deaktiviert den Schließwächter, sodass er keine `close`-Ereignisse mehr empfängt.

## Ereignisse

- {{domxref("CloseWatcher.cancel_event", "cancel")}} {{Experimental_Inline}}
  - : Ein Ereignis, das vor dem `close`-Ereignis ausgelöst wird, sodass das `close`-Ereignis verhindert werden kann.
- {{domxref("CloseWatcher.close_event", "close")}} {{Experimental_Inline}}
  - : Ein Ereignis, das ausgelöst wird, wenn eine Schließanfrage eingegangen ist.

## Beispiele

### Verarbeitung von Schließanfragen

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (einen Picker) und möchten sowohl die standardmäßige Schließmethode der Plattform (z. B. die <kbd>Esc</kbd>-Taste) als auch Ihre eigene Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Sie erstellen einen `CloseWatcher`, um alle `close`-Ereignisse zu behandeln.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um eine Schließung anzufordern und Ihre Schließanfrage über denselben `onclose`-Handler zu leiten, den die Plattform-Schließmethode verwendet.

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

- {{domxref("HTMLDialogElement.close_event", "close")}} Ereignis auf {{domxref("HTMLDialogElement")}}
