---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
l10n:
  sourceCommit: 733c9dda98c76fa0a67e2136a355219eca821bb9
---

Das **`SuppressedError`**-Objekt stellt einen Fehler dar, der beim Behandeln eines anderen Fehlers erzeugt wird. Es wird bei der Ressourcenfreigabe mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} erzeugt.

Im Vergleich zu {{jsxref("AggregateError")}} stellt `SuppressedError` einen Fehler dar, der während der Behandlung eines anderen Fehlers aufgetreten ist, während `AggregateError` eine Liste nicht zusammenhängender Fehler darstellt. Es ist jedoch möglich, dass ein `SuppressedError` eine Kette unterdrückter Fehler enthält (`e.suppressed.suppressed.suppressed...`). Außerdem unterscheidet es sich semantisch von {{jsxref("Error/cause", "cause")}}, da der Fehler nicht _durch_ einen anderen Fehler verursacht wird, sondern _bei der_ Behandlung eines anderen Fehlers auftritt.

`SuppressedError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : Erstellt ein neues `SuppressedError`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von seinem übergeordneten {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `SuppressedError.prototype` definiert und werden von allen `SuppressedError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `SuppressedError`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}}.
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : Stellt den Namen für den Fehlertyp dar. Für `SuppressedError.prototype.name` ist der Anfangswert `"SuppressedError"`.

> [!NOTE]
> `SuppressedError` hat niemals die Eigenschaft {{jsxref("Error/cause", "cause")}}, da sich die Semantik von `cause` mit `suppressed` überschneidet.

Diese Eigenschaften sind eigene Eigenschaften jeder `SuppressedError`-Instanz.

- {{jsxref("SuppressedError/error", "error")}}
  - : Eine Referenz auf den Fehler, der zur Unterdrückung führt.
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : Eine Referenz auf den Fehler, der durch `error` unterdrückt wird.

## Instanzmethoden

_Erbt Instanzmethoden von seinem übergeordneten {{jsxref("Error")}}_.

## Beispiele

### Abfangen eines SuppressedError

Ein `SuppressedError` wird ausgelöst, wenn während der [Ressourcenfreigabe](/de/docs/Web/JavaScript/Guide/Resource_management) ein Fehler auftritt. Das Auslösen eines Fehlers führt zur Bereinigung des Gültigkeitsbereichs, und jeder Disposer während der Bereinigung kann einen eigenen Fehler auslösen. All diese Fehler werden in einer Kette von `SuppressedError`-Instanzen gesammelt, wobei der ursprüngliche Fehler die Eigenschaft `suppressed` und der vom nächsten Disposer ausgelöste neue Fehler die Eigenschaft `error` erhält.

```js
try {
  using resource1 = {
    [Symbol.dispose]() {
      throw new Error("resource1 disposal failed");
    },
  };
  using resource2 = {
    [Symbol.dispose]() {
      throw new Error("resource2 disposal failed");
    },
  };
  throw new TypeError("Original error");
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "An error was suppressed during disposal"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: resource1 disposal failed
  console.log(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.log(e.suppressed.error); // Error: resource2 disposal failed
  console.log(e.suppressed.suppressed); // TypeError: Original error
}
```

Die Kette sieht folgendermaßen aus:

```plain
     SuppressedError --suppressed--> SuppressedError --suppressed--> TypeError
            |                               |
          error                           error
            |                               |
            v                               v
resource1 disposal failed       resource2 disposal failed
 (Disposal happens later)       (Disposal happens earlier)
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
