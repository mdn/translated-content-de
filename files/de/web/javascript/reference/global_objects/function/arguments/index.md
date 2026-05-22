---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}}-Objekten ist veraltet. Der empfohlene Weg, um auf das `arguments`-Objekt zuzugreifen, ist die Verwendung der innerhalb von Funktionen verfügbaren Variablen {{jsxref("Functions/arguments", "arguments")}}.

Die **`arguments`**-Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die an diese Funktion übergebenen Argumente zurück. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Pfeil-, asynchrone und Generatorfunktionen wirft der Zugriff auf die `arguments`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Fall von Rekursion, d.h. wenn die Funktion `f` mehrmals im Aufrufstapel erscheint, repräsentiert der Wert von `f.arguments` die Argumente der zuletzt aufgerufenen Instanz der Funktion.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("null")}}, wenn kein aktueller Aufruf der Funktion im Gange ist (d.h. die Funktion wurde aufgerufen, aber noch nicht zurückgegeben).

Beachten Sie, dass das einzige Verhalten, das von der ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen initialen `arguments`-Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jeden `get`- oder `set`-Anfrage auslöst (bekannt als "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion außer nicht-strikten einfachen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, falls es sich um etwas anderes als das Auslösen eines Fehlers handelt, ist implementationsabhängig. Beispielsweise definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den initialen `Function.prototype.arguments`-Accessor mit Gift-Pille erweitern, um `this`-Werte speziell zu behandeln, die nicht-strikte Funktionen sind.

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
