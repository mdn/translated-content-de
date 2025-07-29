---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Das **`SuppressedError`**-Objekt repräsentiert einen Fehler, der beim Behandeln eines anderen Fehlers erzeugt wird. Es wird während der Ressourcenverwaltung mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} generiert.

Im Vergleich zu {{jsxref("AggregateError")}} wird `SuppressedError` verwendet, um einen einzelnen Fehler darzustellen, der durch einen anderen Fehler unterdrückt wird, während `AggregateError` eine Liste von nicht zusammenhängenden Fehlern darstellt. Es ist jedoch möglich, dass ein `SuppressedError` eine Kette von unterdrückten Fehlern enthält (`e.suppressed.suppressed.suppressed...`). Es unterscheidet sich auch semantisch von {{jsxref("Error/cause", "cause")}}, da der Fehler nicht _durch_ einen anderen Fehler verursacht wird, sondern _auftritt, während_ ein anderer Fehler behandelt wird.

`SuppressedError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : Erstellt ein neues `SuppressedError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `SuppressedError.prototype` definiert und werden von allen `SuppressedError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `SuppressedError`-Instanzen ist der Anfangswert der {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}}-Konstruktor.
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `SuppressedError.prototype.name` ist der Anfangswert `"SuppressedError"`.

> [!NOTE]
> `SuppressedError` besitzt niemals die Eigenschaft {{jsxref("Error/cause", "cause")}}, da die Semantik von `cause` mit `suppressed` überlappt.

Diese Eigenschaften sind eigene Eigenschaften jeder `SuppressedError`-Instanz.

- {{jsxref("SuppressedError/error", "error")}}
  - : Ein Verweis auf den Fehler, der zur Unterdrückung führt.
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : Ein Verweis auf den Fehler, der durch `error` unterdrückt wird.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Einen SuppressedError abfangen

Ein `SuppressedError` wird ausgelöst, wenn ein Fehler während der [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management) auftritt. Das Auslösen eines Fehlers verursacht das Bereinigen des Gültigkeitsbereichs, und jeder Disposer während der Bereinigung kann seinen eigenen Fehler auslösen. Alle diese Fehler werden in einer Kette von `SuppressedError`-Instanzen gesammelt, wobei der ursprüngliche Fehler als `suppressed`-Eigenschaft und der neue von dem nächsten Disposer geworfene Fehler als `error`-Eigenschaft verwendet wird.

```js
try {
  using resource1 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource1");
    },
  };
  using resource2 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource2");
    },
  };
  throw new Error("Original error");
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "An error was suppressed during disposal"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: Error while disposing resource1
  console.log(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.log(e.suppressed.error); // Error: Error while disposing resource2
  console.log(e.suppressed.suppressed); // Error: Original error
}
```

Die Kette sieht folgendermaßen aus:

```plain
       SuppressedError --suppressed--> SuppressedError --suppressed--> Original error
              |                               |
            error                           error
              v                               v
Error while disposing resource1   Error while disposing resource2
    (Disposal happens later)        (Disposal happens earlier)
```

### Einen SuppressedError erstellen

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: "New error"
  console.log(e.suppressed); // Error: "Original error"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `SuppressedError` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- {{jsxref("Error")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}
