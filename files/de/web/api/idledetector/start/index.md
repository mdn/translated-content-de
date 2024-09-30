---
title: "IdleDetector: start()-Methode"
short-title: start()
slug: Web/API/IdleDetector/start
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`start()`**-Methode des [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Interfaces gibt ein
{{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Detektor beginnt, auf Änderungen im Ruhezustand des Benutzers zu hören. Diese
Methode nimmt ein optionales `options`-Objekt mit dem `threshold` in Millisekunden entgegen, ab dem Inaktivität gemeldet werden soll, sowie einem `signal` für ein `AbortSignal`, um den Idle-Detektor abzubrechen.

## Syntax

```js-nolint
start()
start(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `threshold`
      - : Die Mindestanzahl von Ruhemillisekunden, bevor die Meldung beginnen soll.
    - `signal`
      - : Eine Referenz zu einer [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Instanz, die es Ihnen erlaubt, die Ruheerkennung abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

Das folgende Beispiel zeigt, wie die Ruheerkennung mit dem `options`-Argument gestartet wird. Es ruft eine Instanz von `AbortSignal` von einer Instanz des [`AbortController`](/de/docs/Web/API/AbortController) ab.

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
