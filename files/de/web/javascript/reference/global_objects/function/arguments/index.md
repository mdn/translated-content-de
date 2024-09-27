---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}} Objekten ist veraltet. Der empfohlene Weg, um auf das `arguments`-Objekt zuzugreifen, ist die Verwendung der Variable {{jsxref("Functions/arguments", "arguments")}}, die innerhalb von Funktionen verfügbar ist.

Die **`arguments`** Zugriffseigenschaft von {{jsxref("Function")}} Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, async- und Generatorfunktionen führt der Zugriff auf die `arguments`-Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein arrayähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Falle einer Rekursion, d.h. wenn die Funktion `f` mehrmals im Aufrufstapel erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die mit dem letzten Aufruf der Funktion übereinstimmen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn kein laufender Aufruf der Funktion im Gange ist (d.h. die Funktion wurde aufgerufen, aber hat noch nicht zurückgegeben).

Beachten Sie, dass das einzige vom ECMAScript-Spezifikationen festgelegte Verhalten darin besteht, dass `Function.prototype` einen anfänglichen `arguments` Zugang hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "Poison Pill Accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion außer nicht-strikten normalen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, wenn es etwas anderes ist als einen Fehler auszulösen, ist implementierungsabhängig. Beispielsweise definiert Chrome es als eigene Daten-Eigenschaft, während Firefox und Safari den initialen "Poison-Pill" `Function.prototype.arguments` Accessor erweitern, um speziell mit `this`-Werten umzugehen, die nicht-strikte Funktionen sind.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
