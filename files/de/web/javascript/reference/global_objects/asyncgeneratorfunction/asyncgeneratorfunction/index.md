---
title: AsyncGeneratorFunction() Konstruktor
short-title: AsyncGeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Die an diesen Konstruktor übergebenen Argumente werden dynamisch als JavaScript geparst und ausgeführt.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen.
>
> Sie können das Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenketten übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie in den [Sicherheitsüberlegungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function#security_considerations) in der `Function()`-Konstruktorreferenz.

Der **`AsyncGeneratorFunction()`** Konstruktor erstellt {{jsxref("AsyncGeneratorFunction")}} Objekte.

Beachten Sie, dass `AsyncGeneratorFunction` kein globales Objekt ist. Es kann durch die Auswertung des folgenden Codes erhalten werden.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

Der `AsyncGeneratorFunction()` Konstruktor ist nicht dafür vorgesehen, direkt verwendet zu werden, und alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnten Warnhinweise gelten auch für `AsyncGeneratorFunction()`.

## Syntax

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `AsyncGeneratorFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `AsyncGeneratorFunction`-Instanz.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

Beachten Sie, dass in diesen Beispielen zur Vereinfachung auf die Verwendung von Trusted Types verzichtet wird. Für Code, der den empfohlenen Ansatz zeigt, siehe [Verwenden von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Verwendung des Konstruktors

Das folgende Beispiel verwendet den `AsyncGeneratorFunction` Konstruktor, um eine asynchrone Generatorfunktion zu erstellen.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iterator und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Functions", "Functions", "", 1)}}
