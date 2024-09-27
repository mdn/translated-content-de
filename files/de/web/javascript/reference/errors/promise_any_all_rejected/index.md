---
title: "AggregateError: Kein Promise in Promise.any wurde aufgelöst"
slug: Web/JavaScript/Reference/Errors/Promise_any_all_rejected
l10n:
  sourceCommit: a487c2f8fa1e605489df2efd6da4e9e8d93fd75a
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Kein Promise in Promise.any wurde aufgelöst" tritt auf, wenn alle an {{jsxref("Promise.any()")}} übergebenen Promises abgelehnt werden. Es ist der einzige eingebaute Gebrauch von {{jsxref("AggregateError")}}.

## Nachricht

```plain
AggregateError: All promises were rejected (V8-based)
AggregateError: No Promise in Promise.any was resolved (Firefox)
AggregateError (Safari)
```

## Fehlertyp

{{jsxref("AggregateError")}}

## Was ist schiefgelaufen?

`Promise.any()` wird nur dann abgelehnt, wenn alle ihm übergebenen Promises abgelehnt werden. Sie sollten auf {{jsxref("AggregateError/errors", "errors")}} zugreifen, um das Array der Ablehnungsgründe zu erhalten. Siehe [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#error_handling) für weitere Informationen darüber, wie Sie asynchron abgelehnte Promises behandeln können. Dieser Fehler tritt auch auf, wenn `Promise.any()` ein leeres Iterable erhält.

## Beispiele

### Leeres Iterable

```js
Promise.any([]).catch((error) => {
  console.error(error); // AggregateError: No Promise in Promise.any was resolved
});
```

### Behandlung aller Ablehnungen

```js
const promises = [
  fetch("/data-location1"),
  fetch("/data-location1"),
  fetch("/data-location1"),
];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((error) => {
    // None of the fetches were successful
    for (const e of error.errors) {
      console.error(e);
    }
  });

// Using await
async function fetchFirstSuccessful() {
  try {
    const value = await Promise.any(promises);
    console.log(value);
  } catch (error) {
    for (const e of error.errors) {
      console.error(e);
    }
  }
}
```

## Siehe auch

- {{jsxref("AggregateError")}}
- {{jsxref("Promise.any()")}}
