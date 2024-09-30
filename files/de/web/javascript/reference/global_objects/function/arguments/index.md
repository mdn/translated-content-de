---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments` Eigenschaft von {{jsxref("Function")}} Objekten ist veraltet. Der empfohlene Weg, um auf das `arguments` Objekt zuzugreifen, besteht darin, auf die Variable {{jsxref("Functions/arguments", "arguments")}} zu verweisen, die innerhalb von Funktionen verfügbar ist.

Die **`arguments`** Accessor-Eigenschaft von {{jsxref("Function")}} Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generator-Funktionen führt der Zugriff auf die `arguments` Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Fall von Rekursion, d.h. wenn die Funktion `f` mehrmals im Aufruf-Stack erscheint, repräsentiert der Wert von `f.arguments` die Argumente der jüngsten Ausführung der Funktion.

Der Wert der `arguments` Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn kein ausstehender Aufruf der Funktion im Gange ist (d.h. die Funktion wurde aufgerufen, hat aber noch nicht zurückgegeben).

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen initialen `arguments` Accessor hat, der bedingungslos für jede `get` oder `set` Anfrage einen {{jsxref("TypeError")}} auslöst (bekannt als ein "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion außer nicht-strikten einfachen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments` Eigenschaft, falls es etwas anderes als das Auslösen eines Fehlers ist, ist implementierungsspezifisch. Zum Beispiel definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den initialen poison-pill `Function.prototype.arguments` Accessor erweitern, um speziell mit `this` Werten umzugehen, die nicht-strikte Funktionen sind.

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

### Verwendung der arguments-Eigenschaft

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
