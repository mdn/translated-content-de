---
title: "IdleDetector: start() Methode"
short-title: start()
slug: Web/API/IdleDetector/start
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`start()`** Methode der [`IdleDetector`](/de/docs/Web/API/IdleDetector) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Detektor beginnt, Änderungen im Ruhezustand des Benutzers zu überwachen. Diese Methode nimmt ein optionales `options` Objekt mit der `threshold` in Millisekunden, bei dem Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, um den Ruhedetektor abzubrechen.

## Syntax

```js-nolint
start()
start(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `threshold`
      - : Die minimale Anzahl von Ruhemillisekunden, bevor die Berichterstattung beginnen sollte.
    - `signal`
      - : Eine Referenz zu einer [`AbortSignal`](/de/docs/Web/API/AbortSignal) Instanz, die es Ihnen ermöglicht, die Ruheerkennung abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt, wie die Ruheerkennung mit dem `options` Argument gestartet wird. Es ruft eine Instanz von `AbortSignal` von einer Instanz von [`AbortController`](/de/docs/Web/API/AbortController) ab.

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
