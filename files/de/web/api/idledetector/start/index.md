---
title: "IdleDetector: start()-Methode"
short-title: start()
slug: Web/API/IdleDetector/start
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`start()`**-Methode der {{domxref("IdleDetector")}}-Schnittstelle liefert ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Detektor beginnt, Änderungen im Leerlaufzustand des Benutzers zu überwachen. Diese Methode akzeptiert ein optionales `options`-Objekt mit dem `threshold` in Millisekunden, bei dem Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, um den Leerlaufdetektor abzubrechen.

## Syntax

```js-nolint
start()
start(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `threshold`
      - : Die Mindestanzahl an Leerlauf-Millisekunden, bevor die Berichterstellung beginnen soll.
    - `signal`
      - : Eine Referenz zu einer {{domxref('AbortSignal')}}-Instanz, die es Ihnen ermöglicht, die Leerlauferkennung abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt, wie die Leerlauferkennung unter Verwendung des `options`-Arguments gestartet wird. Es ruft eine Instanz von `AbortSignal` von einer Instanz von {{domxref("AbortController")}} ab.

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
