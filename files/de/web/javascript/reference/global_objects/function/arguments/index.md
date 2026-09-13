---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}} Objekten ist veraltet. Der empfohlene Weg, auf das `arguments`-Objekt zuzugreifen, besteht darin, auf die innerhalb von Funktionen verfügbare Variable {{jsxref("Functions/arguments", "arguments")}} zu verweisen.

Die **`arguments`** Zugriffs-Eigenschaft von {{jsxref("Function")}} Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Für [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generator-Funktionen wirft der Zugriff auf die `arguments`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Falle der Rekursion, d.h. wenn die Funktion `f` mehrmals im Aufruf-Stack erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die der letzten Aufruf der Funktion entsprechen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("null")}}, wenn kein ausstehender Aufruf der Funktion im Gange ist (d.h. die Funktion wurde aufgerufen, hat aber noch nicht zurückgegeben).

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation spezifiziert ist, darin besteht, dass `Function.prototype` einen anfänglichen `arguments`-Zugriffsmechanismus hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage wirft (bekannt als ein "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für jede Funktion außer für nicht-strikte einfache Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, sofern es etwas anderes als das Werfen eines Fehlers ist, ist implementierungsabhängig. Beispielsweise definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den anfänglichen `Function.prototype.arguments`-Zugriffsmechanismus erweitern, um speziell `this`-Werte zu behandeln, die nicht-strikte Funktionen sind.

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// In Chrome:
// arguments is an own property with descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// In Firefox:
// f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments
// Arguments { … }
```

## Beispiele

### Die arguments-Eigenschaft verwenden

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`before: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`after: ${g.arguments[0]}`);
}

f(2);

console.log(`returned: ${g.arguments}`);

// Logs:
// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
