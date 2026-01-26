---
title: GeneratorFunction() Konstruktor
short-title: GeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Die an diesen Konstruktor übergebenen Argumente werden dynamisch als JavaScript geparst und ausgeführt.
> Solche APIs sind bekannt als [Einschleusungs-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function#security_considerations) im `Function()` Konstruktorreferenz für mehr Informationen.

Der **`GeneratorFunction()`** Konstruktor erstellt {{jsxref("GeneratorFunction")}} Objekte.

Beachten Sie, dass `GeneratorFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const GeneratorFunction = function* () {}.constructor;
```

Der `GeneratorFunction()` Konstruktor ist nicht zur direkten Verwendung gedacht, und alle im {{jsxref("Function/Function", "Function()")}} genannten Einschränkungen gelten auch für `GeneratorFunction()`.

## Syntax

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `GeneratorFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `GeneratorFunction` Instanz.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze die Verwendung von vertrauenswürdigen Typen weglassen. Für Code, der den empfohlenen Ansatz zeigt, siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Erstellen und Verwenden eines GeneratorFunction() Konstruktors

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Functions", "Funktionen", "", 1)}}
