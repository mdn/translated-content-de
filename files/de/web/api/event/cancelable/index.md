---
title: "Event: cancelable-Eigenschaft"
short-title: cancelable
slug: Web/API/Event/cancelable
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`cancelable`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces zeigt an, ob das Ereignis abgebrochen werden kann und daher verhindert werden könnte, als ob das Ereignis nie stattgefunden hätte.

Wenn das Ereignis _nicht_ abgebrochen werden kann, dann wird seine `cancelable`-Eigenschaft `false` sein und der Event-Listener kann das Ereignis nicht daran hindern, stattzufinden.

Die meisten vom Browser nativen Ereignisse, die abgebrochen werden können, sind solche, die aus der Interaktion des Benutzers mit der Seite resultieren. Das Abbrechen der [`click`](/de/docs/Web/API/Element/click_event)-,
[`wheel`](/de/docs/Web/API/Element/wheel_event)- oder
[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse würde verhindern, dass der Benutzer auf etwas klickt, die Seite mit dem Mausrad scrollt oder die Seite verlässt.

[Synthetische Ereignisse](/de/docs/Web/API/Event/Event), die von anderem JavaScript-Code erstellt werden, definieren bei ihrer Erstellung, ob sie abgebrochen werden können.

Um ein Ereignis abzubrechen, rufen Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode für das Ereignis auf. Dies verhindert, dass die Implementierung die Standardaktion ausführt, die mit dem Ereignis verbunden ist.

Event-Listener, die mehrere Arten von Ereignissen verarbeiten, möchten möglicherweise `cancelable` überprüfen, bevor sie ihre [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methoden aufrufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis abgebrochen werden kann.

## Beispiel

Zum Beispiel schlagen Browseranbieter vor, dass das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis [nur beim ersten Aufruf des Listeners](https://github.com/WICG/interventions/issues/33) abgebrochen werden kann — alle folgenden `wheel`-Ereignisse können nicht abgebrochen werden.

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
