---
title: "Subscriber: next()-Methode"
short-title: next()
slug: Web/API/Subscriber/next
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`next()`**-Methode der [`Subscriber`](/de/docs/Web/API/Subscriber)-Schnittstelle sendet einen Wert an jeden Observer der Subscription und ruft dessen `next`-Callback synchron auf. Diese Callbacks werden an [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben.

## Syntax

```js-nolint
next(value)
```

### Parameter

- `value`
  - : Der an die Observer zu sendende Wert. Dies kann ein beliebiger JavaScript-Wert sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Wenn der Subscriber nicht mehr [`active`](/de/docs/Web/API/Subscriber/active) ist, bewirkt diese Methode nichts. Eine Ausnahme, die vom `next`-Callback eines Observers ausgelöst wird, wird an das globale Objekt gemeldet. Sie ruft weder den `error`-Callback dieses Observers auf noch verhindert sie die Weitergabe an andere Observer.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Subscriptions kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde bewirken, dass jede Subscription eine separate Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

## Beispiele

Ein einfaches Beispiel finden Sie auf der Hauptreferenzseite zu [`Subscriber`](/de/docs/Web/API/Subscriber). Weitere Beispiele finden Sie unter [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
