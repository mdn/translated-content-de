---
title: "Subscriber: Methode complete()"
short-title: complete()
slug: Web/API/Subscriber/complete
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`complete()`** der Schnittstelle [`Subscriber`](/de/docs/Web/API/Subscriber) schließt das Abonnement und benachrichtigt die Observer darüber, dass der Stream erfolgreich abgeschlossen wurde.

## Syntax

```js-nolint
complete()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Beim Aufruf dieser Methode wird [`active`](/de/docs/Web/API/Subscriber/active) auf `false` gesetzt, [`signal`](/de/docs/Web/API/Subscriber/signal) abgebrochen und die registrierten [Teardown-Callbacks](/de/docs/Web/API/Subscriber/addTeardown) ausgeführt. Anschließend ruft die Methode synchron den `complete`-Callback jedes Observers auf, wie er im `observer`-Objekt angegeben wurde, das an [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben wurde. Ist der Subscriber bereits inaktiv, bewirkt die Methode nichts. Ein Aufruf von `complete()` beendet die Ausführung des Producer-Codes nicht; nachfolgende Aufrufe von [`Subscriber.next()`](/de/docs/Web/API/Subscriber/next) für diesen Subscriber haben keine Wirkung.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zuzuweisen](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jedes Abonnement eine eigene Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.

Das [Abbestellen](/de/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable) ruft den `complete`-Callback eines Observers nicht auf. Verwenden Sie `addTeardown()` für Bereinigungsarbeiten, die auch ausgeführt werden müssen, wenn Observer das Abonnement abbestellen oder im Stream ein Fehler auftritt.

## Beispiele

Ein einfaches Beispiel finden Sie auf der Hauptreferenzseite zu [`Subscriber`](/de/docs/Web/API/Subscriber). Weitere Beispiele finden Sie unter [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
