---
title: "AggregateError: Kein Promise in Promise.any wurde aufgelöst"
slug: Web/JavaScript/Reference/Errors/Promise_any_all_rejected
l10n:
  sourceCommit: a487c2f8fa1e605489df2efd6da4e9e8d93fd75a
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Kein Promise in Promise.any wurde aufgelöst" tritt auf, wenn alle Promises, die an {{jsxref("Promise.any()")}} übergeben werden, abgelehnt werden. Es ist die einzige eingebaute Verwendung von {{jsxref("AggregateError")}}.

## Meldung

```plain
AggregateError: All promises were rejected (V8-based)
AggregateError: Kein Promise in Promise.any wurde aufgelöst (Firefox)
AggregateError (Safari)
```

## Fehlertyp

{{jsxref("AggregateError")}}

## Was ist schiefgelaufen?

`Promise.any()` lehnt nur ab, wenn alle übergebenen Promises abgelehnt werden. Sie sollten auf {{jsxref("AggregateError/errors", "errors")}} zugreifen, um das Array der Ablehnungsgründe zu erhalten. Weitere Informationen zum Umgang mit asynchron abgelehnten Promises finden Sie unter [Umgang mit Promises](/de/docs/Web/JavaScript/Guide/Using_promises#error_handling). Dieser Fehler tritt auch auf, wenn `Promise.any()` ein leeres Iterable erhält.

## Beispiele

### Leeres Iterable

```js
Promise.any([]).catch((error) => {
  console.error(error); // AggregateError: Kein Promise in Promise.any wurde aufgelöst
});
```

### Umgang mit allen Ablehnungen

```js
const promises = [
  fetch("/data-location1"),
  fetch("/data-location1"),
  fetch("/data-location1"),
];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((error) => {
    // Keiner der fetches war erfolgreich
    for (const e of error.errors) {
      console.error(e);
    }
  });

// Verwendung von await
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
