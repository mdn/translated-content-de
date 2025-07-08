---
title: "AggregateError: Kein Promise in Promise.any wurde erfüllt"
slug: Web/JavaScript/Reference/Errors/Promise_any_all_rejected
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "Kein Promise in Promise.any wurde erfüllt" tritt auf, wenn alle Promises, die an {{jsxref("Promise.any()")}} übergeben werden, abgelehnt werden. Dies ist die einzige eingebaute Anwendung von {{jsxref("AggregateError")}}.

## Nachricht

```plain
AggregateError: All promises were rejected (V8-based)
AggregateError: No Promise in Promise.any was resolved (Firefox)
AggregateError (Safari)
```

## Fehlertyp

{{jsxref("AggregateError")}}

## Was ist schiefgelaufen?

`Promise.any()` lehnt nur ab, wenn alle Promises, die übergeben wurden, abgelehnt werden. Sie sollten auf {{jsxref("AggregateError/errors", "errors")}} zugreifen, um das Array mit den Ablehnungsgründen zu erhalten. Lesen Sie den [Umgang mit Promises](/de/docs/Web/JavaScript/Guide/Using_promises#error_handling) für weitere Informationen darüber, wie asynchron abgelehnte Promises behandelt werden. Dieser Fehler tritt auch auf, wenn `Promise.any()` ein leeres iterierbares Objekt erhält.

## Beispiele

### Leeres iterierbares Objekt

```js
Promise.any([]).catch((error) => {
  console.error(error); // AggregateError: No Promise in Promise.any was resolved
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
