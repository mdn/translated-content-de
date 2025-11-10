---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`SuppressedError`**-Objekt repräsentiert einen Fehler, der während der Behandlung eines anderen Fehlers erzeugt wurde. Es wird bei der Freigabe von Ressourcen mittels {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} erzeugt.

Im Vergleich zu {{jsxref("AggregateError")}} wird `SuppressedError` verwendet, um einen einzelnen Fehler darzustellen, der durch einen anderen Fehler unterdrückt wird, während `AggregateError` eine Liste von nicht zusammenhängenden Fehlern darstellt. Es ist jedoch möglich, dass ein `SuppressedError` eine Kette von unterdrückten Fehlern enthält (`e.suppressed.suppressed.suppressed...`). Es unterscheidet sich auch semantisch von {{jsxref("Error/cause", "cause")}}, da der Fehler nicht _durch_ einen anderen Fehler verursacht wird, sondern _auftritt, wenn_ ein anderer Fehler gehandhabt wird.

`SuppressedError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : Erstellt ein neues `SuppressedError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}._

Diese Eigenschaften sind auf `SuppressedError.prototype` definiert und werden von allen `SuppressedError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SuppressedError`-Instanzen ist der anfängliche Wert der {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}}-Konstruktor.
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `SuppressedError.prototype.name` ist der Anfangswert `"SuppressedError"`.

> [!NOTE]
> `SuppressedError` hat niemals die {{jsxref("Error/cause", "cause")}}-Eigenschaft, da sich die Bedeutung von `cause` mit `suppressed` überschneidet.

Diese Eigenschaften sind eigene Eigenschaften jeder `SuppressedError`-Instanz.

- {{jsxref("SuppressedError/error", "error")}}
  - : Ein Verweis auf den Fehler, der zur Unterdrückung führt.
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : Ein Verweis auf den Fehler, der durch `error` unterdrückt wird.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}._

## Beispiele

### Abfangen eines SuppressedError

Ein `SuppressedError` wird ausgelöst, wenn während der [Ressourcenfreigabe](/de/docs/Web/JavaScript/Guide/Resource_management) ein Fehler auftritt. Das Auslösen eines Fehlers bewirkt die Bereinigung des Geltungsbereichs, und jeder Disposer während der Bereinigung kann seinen eigenen Fehler auslösen. All diese Fehler werden in eine Kette von `SuppressedError`-Instanzen gesammelt, wobei der ursprüngliche Fehler als `suppressed`-Eigenschaft und der neue Fehler, der vom nächsten Disposer ausgelöst wird, als `error`-Eigenschaft fungiert.

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

Die Kette sieht so aus:

```plain
       SuppressedError --suppressed--> SuppressedError --suppressed--> Original error
              |                               |
            error                           error
              v                               v
Error while disposing resource1   Error while disposing resource2
    (Disposal happens later)        (Disposal happens earlier)
```

### Erstellen eines SuppressedError

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
