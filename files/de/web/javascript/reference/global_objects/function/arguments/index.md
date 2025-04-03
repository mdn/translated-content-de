---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}}-Objekten ist veraltet. Der empfohlene Weg, um auf das `arguments`-Objekt zuzugreifen, ist die Verwendung der innerhalb von Funktionen verfügbaren Variablen {{jsxref("Functions/arguments", "arguments")}}.

Die **`arguments`**-Zugriffseigenschaft von {{jsxref("Function")}}-Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Pfeil-, asynchrone und Generator-Funktionen wirft der Zugriff auf die `arguments`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Falle einer Rekursion, das heißt, wenn die Funktion `f` mehrmals auf dem Aufruf-Stack erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die dem aktuellsten Aufruf der Funktion entsprechen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn keine ausstehende Ausführung der Funktion im Gange ist (das heißt, die Funktion wurde aufgerufen, aber noch nicht abgeschlossen).

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `arguments`-Zugriffsmechanismus hat, der bedingungslos für jeden `get`- oder `set`-Zugriff eine {{jsxref("TypeError")}} auslöst (bekannt als "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für Funktionen außer Nicht-strict-Plaine-Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, wenn es etwas anderes als das Auslösen eines Fehlers ist, ist implementierungsdefiniert. Zum Beispiel definiert Chrome es als eigene Daten-Eigenschaft, während Firefox und Safari den anfänglichen "poison pill"-`Function.prototype.arguments`-Accessor erweitern, um speziell `this`-Werte zu behandeln, die Nicht-strict-Funktionen sind.

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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
