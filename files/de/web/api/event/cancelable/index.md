---
title: "Event: cancelable-Eigenschaft"
short-title: cancelable
slug: Web/API/Event/cancelable
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`cancelable`** des {{domxref("Event")}}-Interfaces gibt an, ob das Ereignis abgebrochen werden kann und somit verhindert werden kann, als ob das Ereignis nie stattgefunden hätte.

Wenn das Ereignis _nicht_ abgebrochen werden kann, ist die `cancelable`-Eigenschaft `false` und der Ereignislistener kann das Auftreten des Ereignisses nicht stoppen.

Die meisten browsernativen Ereignisse, die abgebrochen werden können, resultieren aus der Interaktion des Benutzers mit der Seite. Das Abbrechen der Ereignisse {{domxref("Element/click_event", "click")}}, {{domxref("Element/wheel_event", "wheel")}} oder {{domxref("Window/beforeunload_event", "beforeunload")}} würde verhindern, dass der Benutzer auf etwas klickt, mit dem Mausrad auf der Seite scrollt oder von der Seite weg navigiert.

[Synthetische Ereignisse](/de/docs/Web/API/Event/Event), die von anderem JavaScript-Code erstellt werden, definieren, ob sie beim Erstellen abgebrochen werden können.

Um ein Ereignis abzubrechen, rufen Sie die Methode {{domxref("event.preventDefault", "preventDefault()")}} auf dem Ereignis auf. Dies verhindert, dass die Implementierung die Standardaktion ausführt, die mit dem Ereignis verbunden ist.

Ereignislistener, die mehrere Arten von Ereignissen behandeln, sollten `cancelable` überprüfen, bevor sie ihre {{domxref("event.preventDefault", "preventDefault()")}}-Methoden aufrufen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis abgebrochen werden kann.

## Beispiel

Zum Beispiel schlagen Browseranbieter vor, dass das {{domxref("Element/wheel_event", "wheel")}}-Ereignis nur [beim ersten Aufruf des Listeners](https://github.com/WICG/interventions/issues/33) abgebrochen werden kann — alle folgenden `wheel`-Ereignisse können nicht abgebrochen werden.

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // Das Ereignis kann abgebrochen werden, also tun wir dies.
    event.preventDefault();
  } else {
    // Das Ereignis kann nicht abgebrochen werden, daher ist es nicht sicher,
    // preventDefault() darauf aufzurufen.
    console.warn(`Das folgende Ereignis konnte nicht abgebrochen werden:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
