---
title: AsyncFunction() Konstruktor
short-title: AsyncFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Die an diesen Konstruktor übergebenen Argumente werden dynamisch als JavaScript geparst und ausgeführt.
> Solche APIs sind bekannt als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function#security_considerations) in der Referenz zum `Function()` Konstruktor.

Der **`AsyncFunction()`** Konstruktor erstellt {{jsxref("AsyncFunction")}} Objekte.

Beachten Sie, dass `AsyncFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const AsyncFunction = async function () {}.constructor;
```

Der `AsyncFunction()` Konstruktor ist nicht dazu gedacht, direkt verwendet zu werden, und alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnten Warnhinweise gelten für `AsyncFunction()`.

## Syntax

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `AsyncFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `AsyncFunction` Instanz.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

Beachten Sie, dass in diesen Beispielen zur Kürze auf die Verwendung vertrauenswürdiger Typen verzichtet wird. Für Code, der den empfohlenen Ansatz zeigt, siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Erstellen einer asynchronen Funktion mit einem AsyncFunction() Konstruktor

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
