---
title: "Subscriber: Eigenschaft signal"
short-title: signal
slug: Web/API/Subscriber/signal
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`signal`** der Schnittstelle [`Subscriber`](/de/docs/Web/API/Subscriber) stellt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) bereit, das abgebrochen wird, wenn das Abonnement endet. Ein Produzent kann dieses Signal an APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, um nicht mehr benötigte Vorgänge abzubrechen.

## Wert

Ein intern erzeugtes [`AbortSignal`](/de/docs/Web/API/AbortSignal). Es wird abgebrochen, wenn [`Subscriber.complete()`](/de/docs/Web/API/Subscriber/complete) oder [`Subscriber.error()`](/de/docs/Web/API/Subscriber/error) aufgerufen wird oder wenn sich alle Beobachter abmelden.

## Beschreibung

Dieses Signal ist ein anderes Objekt als ein Signal, das an [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben wird. Ein an `subscribe()` übergebenes Signal steuert die damit angemeldeten Beobachter; `subscriber.signal` überwacht das gemeinsame Abonnement. Wenn sich ein Beobachter abmeldet, wird `subscriber.signal` nicht abgebrochen, solange noch andere Beobachter angemeldet sind.

> [!NOTE]
> Dieses Verhalten des gemeinsamen Abonnements könnte sich ändern. Ein [Vorschlag, jedem Beobachter einen eigenen `Subscriber` zuzuweisen](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jedes Abonnement eine separate Ausführung startet, statt eine aktive Ausführung wiederzuverwenden.

Für Aufräumarbeiten ohne eine API, die ein `AbortSignal` akzeptiert, verwenden Sie [`Subscriber.addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown). Anders als bei der Registrierung eines `abort`-Event-Listeners führt `addTeardown()` den Callback auch sofort aus, wenn der Subscriber bereits inaktiv ist.

## Beispiele

### Eine fetch-Anfrage abbrechen

Dieses Beispiel kapselt eine Anfrage an `/data.json` in einem Observable. Durch die Übergabe von `subscriber.signal` an `fetch()` wird die Anfrage an die Lebensdauer des Abonnements gebunden.

```js
const observable = new Observable((subscriber) => {
  fetch("/data.json", { signal: subscriber.signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      subscriber.next(data);
      subscriber.complete();
    })
    .catch((error) => {
      if (subscriber.active) {
        subscriber.error(error);
      }
    });
});

const controller = new AbortController();
observable.subscribe(
  {
    next(data) {
      console.log(data);
    },
    error(error) {
      console.error(error);
    },
  },
  { signal: controller.signal },
);

// To cancel the subscription and any pending request:
// controller.abort();
```

Wird `controller.abort()` aufgerufen, während die Anfrage noch aussteht, meldet sich der einzige Beobachter ab. Dadurch wird `subscriber.signal` abgebrochen und die Anfrage beendet. Der Handler für die Ablehnung des Promise prüft `subscriber.active`, damit der Abbruch nicht zu einem Aufruf von `error()` bei einem inaktiven Subscriber führt, der einen Fehler an das globale Objekt melden würde.

Bei Erfolg sendet der Produzent die geparsten Daten und schließt das Abonnement ab. Anfragefehler werden an den `error`-Callback des Beobachters weitergeleitet, solange das Abonnement aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
