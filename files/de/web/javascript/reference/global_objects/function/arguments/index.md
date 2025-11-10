---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}}-Objekten ist veraltet. Der empfohlene Weg, auf das `arguments`-Objekt zuzugreifen, besteht darin, auf die Variable {{jsxref("Functions/arguments", "arguments")}} zu verweisen, die innerhalb von Funktionen verfügbar ist.

Die **`arguments`** Zugriffseigenschaft von {{jsxref("Function")}}-Instanzen gibt die Argumente zurück, die an diese Funktion übergeben wurden. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeilfunktionen, asynchrone und Generatorfunktionen wirft der Zugriff auf die `arguments`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den Argumenten entspricht, die an eine Funktion übergeben wurden.

Im Fall von Rekursion, d.h. wenn die Funktion `f` mehrfach im Aufrufstapel erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die dem letzten Aufruf der Funktion entsprechen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn kein ausstehender Aufruf der Funktion gerade im Gange ist (d.h. die Funktion wurde aufgerufen, aber noch nicht beendet).

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt wird, darin besteht, dass `Function.prototype` einen initialen `arguments`-Zugriffsmechanismus hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "poison-pill accessor"), und dass Implementierungen nicht erlauben, diese Semantik für irgendeine Funktion außer nicht-strikten einfachen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, wenn es mehr ist als nur einen Fehler zu werfen, wird durch die Implementierung bestimmt. Zum Beispiel definiert Chrome sie als eigene Dateneigenschaft, während Firefox und Safari den initialen poison-pill `Function.prototype.arguments`-Zugriffsmechanismus erweitern, um speziell `this`-Werte zu behandeln, die nicht-strikte Funktionen sind.

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
