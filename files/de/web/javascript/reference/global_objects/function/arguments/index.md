---
title: Function.prototype.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Die `arguments`-Eigenschaft von {{jsxref("Function")}}-Objekten ist veraltet. Der empfohlene Weg, um auf das `arguments`-Objekt zuzugreifen, besteht darin, auf die Variable {{jsxref("Functions/arguments", "arguments")}} zu verweisen, die innerhalb von Funktionen verfügbar ist.

Die **`arguments`** Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Argumente zurück, die an diese Funktion übergeben wurden. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, asynchrone und Generatorfunktionen wirft der Zugriff auf die `arguments`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Der Wert von `arguments` ist ein array-ähnliches Objekt, das den an eine Funktion übergebenen Argumenten entspricht.

Im Falle der Rekursion, d.h., wenn die Funktion `f` mehrmals im Aufrufstapel erscheint, repräsentiert der Wert von `f.arguments` die Argumente, die dem letzten Aufruf der Funktion entsprechen.

Der Wert der `arguments`-Eigenschaft ist normalerweise {{jsxref("Operators/null", "null")}}, wenn kein ausstehender Aufruf der Funktion in Bearbeitung ist (d.h. die Funktion wurde aufgerufen, aber noch nicht zurückgegeben).

Beachten Sie, dass das einzige Verhalten, das von der ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `arguments`-Accessor hat, der bedingungslos für jeden `get`- oder `set`-Aufruf einen {{jsxref("TypeError")}} wirft (bekannt als "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendwelche Funktionen außer nicht-strikten einfachen Funktionen zu ändern. Das tatsächliche Verhalten der `arguments`-Eigenschaft, falls es sich um etwas anderes als das Werfen eines Fehlers handelt, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den anfänglichen "poison pill" `Function.prototype.arguments`-Accessor erweitern, um `this`-Werte, die nicht-strikte Funktionen sind, speziell zu behandeln.

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

### Verwendung der arguments Eigenschaft

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

// Protokolle:
// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Spezifikationen

Nicht Teil eines Standards.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
