---
title: "Subscriber: Methode addTeardown()"
short-title: addTeardown()
slug: Web/API/Subscriber/addTeardown
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`addTeardown()`** der Schnittstelle [`Subscriber`](/de/docs/Web/API/Subscriber) registriert eine Callback-Funktion, die Ressourcen bereinigt, wenn die Subscription endet. Das geschieht, wenn entweder [`Subscriber.complete()`](/de/docs/Web/API/Subscriber/complete) oder [`Subscriber.error()`](/de/docs/Web/API/Subscriber/error) aufgerufen wird oder wenn sich alle Observer [abmelden](/de/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable).

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Subscriptions kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jede Subscription eine separate Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

Der Producer ruft diese Methode aus der Callback-Funktion auf, die dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) übergeben wurde. Ein Aufruf von `addTeardown()` registriert die Bereinigungsfunktion; er beendet die Subscription nicht.

## Syntax

```js-nolint
addTeardown(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die keine Argumente entgegennimmt und ausgeführt wird, wenn die Subscription endet. Ihr Rückgabewert wird ignoriert; ein zurückgegebenes Promise wird daher nicht abgewartet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Callbacks, die registriert werden, während der Subscriber aktiv ist, werden synchron in umgekehrter Registrierungsreihenfolge ausgeführt, nachdem [`active`](/de/docs/Web/API/Subscriber/active) den Wert `false` angenommen hat und [`signal`](/de/docs/Web/API/Subscriber/signal) abgebrochen wurde. Wenn der Producer `complete()` oder `error()` aufruft, werden die Bereinigungs-Callbacks vor den entsprechenden Observer-Callbacks ausgeführt.

Wenn der Subscriber beim Aufruf von `addTeardown()` bereits inaktiv ist, wird die übergebene Callback-Funktion sofort ausgeführt. Wenn ein Bereinigungs-Callback eine Ausnahme auslöst, wird diese an das globale Objekt gemeldet; die übrigen Bereinigungs-Callbacks werden trotzdem ausgeführt.

## Beispiele

### Reihenfolge der Callbacks

Dieses Beispiel registriert zwei Bereinigungs-Callbacks vor dem Abschluss und einen danach. Die ersten beiden werden in umgekehrter Registrierungsreihenfolge vor dem `complete()`-Callback des Observers ausgeführt; der letzte wird sofort bei seiner Registrierung ausgeführt.

```js
const observable = new Observable((subscriber) => {
  subscriber.addTeardown(() => console.log("First registered"));
  subscriber.addTeardown(() => console.log("Second registered"));
  subscriber.complete();
  subscriber.addTeardown(() => console.log("Registered after completion"));
});

observable.subscribe({
  complete() {
    console.log("Complete");
  },
});

// Second registered
// First registered
// Complete
// Registered after completion
```

Ein grundlegendes Beispiel finden Sie auf der Hauptreferenzseite zu [`Subscriber`](/de/docs/Web/API/Subscriber). Weitere Beispiele finden Sie unter [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
