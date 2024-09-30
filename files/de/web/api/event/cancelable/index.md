---
title: "Event: cancelable Eigenschaft"
short-title: cancelable
slug: Web/API/Event/cancelable
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`cancelable`** der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt an, ob das Ereignis abgebrochen werden kann und daher verhindert werden kann, als ob das Ereignis nie stattgefunden hätte.

Wenn das Ereignis _nicht_ abbrechbar ist, wird seine `cancelable`-Eigenschaft `false` sein, und der Ereignis-Listener kann das Ereignis nicht vom Auftreten abhalten.

Die meisten von Browsern nativen Ereignisse, die abgebrochen werden können, resultieren aus der Benutzerinteraktion mit der Seite. Das Abbrechen der [`click`](/de/docs/Web/API/Element/click_event)-,
[`wheel`](/de/docs/Web/API/Element/wheel_event)- oder
[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse würde verhindern, dass der Benutzer auf etwas klickt, die Seite mit dem Mausrad scrollt oder die Seite verlässt, jeweils.

[Synthetische Ereignisse](/de/docs/Web/API/Event/Event), die von anderem JavaScript-Code erstellt wurden, definieren, ob sie zum Zeitpunkt ihrer Erstellung abgebrochen werden können.

Um ein Ereignis abzubrechen, rufen Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis auf. Dadurch wird verhindert, dass die Implementierung die Standardaktion ausführt, die mit dem Ereignis verbunden ist.

Ereignis-Listener, die mehrere Arten von Ereignissen verarbeiten, sollten `cancelable` prüfen, bevor sie ihre [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methoden aufrufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis abgebrochen werden kann.

## Beispiel

Zum Beispiel schlagen Browserhersteller vor, dass das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis nur [beim ersten Aufruf des Listeners](https://github.com/WICG/interventions/issues/33) abgebrochen werden kann — alle nachfolgenden `wheel`-Ereignisse können nicht abgebrochen werden.

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
