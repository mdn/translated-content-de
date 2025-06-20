---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die Eigenschaft `arguments` von {{jsxref("Function")}}-Objekten ist veraltet. Die empfohlene Methode zum Zugriff auf das `arguments`-Objekt besteht darin, auf die innerhalb von Funktionen verfügbare Variable {{jsxref("Functions/arguments", "arguments")}} zu verweisen.

Die **`arguments`**-Zugriffseigenschaft von {{jsxref("Function")}}-Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Bei [strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Arrow-, Async- und Generatorfunktionen führt der Zugriff auf die `arguments`-Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Falle von Rekursion, d.h. wenn die Funktion `f` mehrmals im Aufruf-Stack erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die dem letzten Aufruf der Funktion entsprechen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn kein derzeitiger Aufruf der Funktion im Gange ist (d.h. die Funktion wurde aufgerufen, hat aber noch nicht zurückgegeben).

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `arguments`-Zugriff hat, der bei jedem `get`- oder `set`-Antrag bedingungslos einen {{jsxref("TypeError")}} auslöst (ein sogenannter "poison pill accessor"), und dass Implementierungen nicht in der Lage sind, diese Semantik für Funktionen außer nicht-strikten einfachen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, falls es etwas anderes als das Auslösen eines Fehlers ist, ist implementierungsdefiniert. Beispielsweise definiert Chrome es als eigene Dateneigenschaft, während Firefox und Safari den anfänglichen poison-pill `Function.prototype.arguments`-Zugriff erweitern, um `this`-Werte, die nicht-strikte Funktionen sind, speziell zu behandeln.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
