---
title: "IdleDetector: start()-Methode"
short-title: start()
slug: Web/API/IdleDetector/start
l10n:
  sourceCommit: a28ce291736be0291feb822083b92c6f4385d57c
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`start()`**-Methode der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Detektor mit dem Lauschen auf Änderungen des Leerlaufzustands des Benutzers beginnt. Diese Methode nimmt ein optionales `options`-Objekt mit dem `threshold` in Millisekunden, bei dem Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, um den Leerlaufdetektor abzubrechen.

## Syntax

```js-nolint
start()
start(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `threshold`
      - : Die minimale Anzahl von Leerlauf-Millisekunden, bevor die Meldung beginnen soll.
    - `signal`
      - : Eine Referenz auf eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Instanz, die es Ihnen ermöglicht, die Leerlauferkennung abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt, wie man die Leerlauferkennung mit dem `options`-Argument startet. Es wird eine Instanz von `AbortSignal` von einer Instanz von [`AbortController`](/de/docs/Web/API/AbortController) abgerufen.

```js
const controller = new AbortController();
const signal = controller.signal;

await idleDetector.start({
  threshold: 60_000,
  signal,
});
console.log("IdleDetector is active.");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
