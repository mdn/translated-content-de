---
title: "IdleDetector: start()-Methode"
short-title: start()
slug: Web/API/IdleDetector/start
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`start()`**-Methode der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Detektor beginnt, Änderungen im Ruhezustand des Benutzers zu verfolgen. Diese Methode nimmt ein optionales `options`-Objekt mit dem `threshold` in Millisekunden, ab dem Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, das den Ruhezustandsdetektor abbrechen kann.

## Syntax

```js-nolint
start()
start(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `threshold`
      - : Die minimale Anzahl ruhender Millisekunden, bevor die Meldung beginnen soll.
    - `signal`
      - : Ein Verweis auf eine Instanz von [`AbortSignal`](/de/docs/Web/API/AbortSignal), die es Ihnen ermöglicht, die Ruhezustandserkennung abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt, wie die Ruhezustandserkennung mithilfe des `options`-Arguments gestartet wird. Es ruft eine Instanz von `AbortSignal` von einer Instanz von [`AbortController`](/de/docs/Web/API/AbortController) ab.

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
