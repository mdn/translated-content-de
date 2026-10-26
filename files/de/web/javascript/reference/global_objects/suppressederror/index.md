---
title: SuppressedError
slug: Web/JavaScript/Reference/Global_Objects/SuppressedError
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`SuppressedError`**-Objekt stellt einen Fehler dar, der bei der Behandlung eines anderen Fehlers entsteht. Er wird bei der Freigabe von Ressourcen mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} erzeugt.

Im Gegensatz zu {{jsxref("AggregateError")}} stellt `SuppressedError` einen Fehler dar, der bei der Behandlung eines anderen Fehlers aufgetreten ist. `AggregateError` stellt dagegen eine Liste voneinander unabhängiger Fehler dar. Ein `SuppressedError` kann allerdings eine Kette unterdrückter Fehler enthalten (`e.suppressed.suppressed.suppressed...`). Er unterscheidet sich auch semantisch von {{jsxref("Error/cause", "cause")}}: Der Fehler wird nicht durch einen anderen Fehler _verursacht_, sondern tritt _bei der Behandlung_ eines anderen Fehlers auf.

`SuppressedError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("SuppressedError/SuppressedError", "SuppressedError()")}}
  - : Erstellt ein neues `SuppressedError`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("Error")}}._

Diese Eigenschaften sind auf `SuppressedError.prototype` definiert und werden von allen `SuppressedError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "SuppressedError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `SuppressedError`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("SuppressedError/SuppressedError", "SuppressedError")}}.
- {{jsxref("Error/name", "SuppressedError.prototype.name")}}
  - : Gibt den Namen des Fehlertyps an. Bei `SuppressedError.prototype.name` ist der Anfangswert `"SuppressedError"`.

> [!NOTE]
> `SuppressedError` hat nie die Eigenschaft {{jsxref("Error/cause", "cause")}}, da sich die Bedeutung von `cause` mit der von `suppressed` überschneidet.

Die folgenden Eigenschaften gehören jeder `SuppressedError`-Instanz selbst.

- {{jsxref("SuppressedError/error", "error")}}
  - : Eine Referenz auf den Fehler, der zur Unterdrückung führt.
- {{jsxref("SuppressedError/suppressed", "suppressed")}}
  - : Eine Referenz auf den Fehler, der durch `error` unterdrückt wird.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("Error")}}._

## Beispiele

### Einen SuppressedError abfangen

Ein `SuppressedError` wird ausgelöst, wenn bei der [Freigabe von Ressourcen](/de/docs/Web/JavaScript/Guide/Resource_management) ein Fehler auftritt. Das Auslösen eines Fehlers bewirkt, dass der Gültigkeitsbereich bereinigt wird. Dabei kann jede Freigabefunktion ihrerseits einen Fehler auslösen. Alle diese Fehler werden zu einer Kette von `SuppressedError`-Instanzen zusammengefasst: Der ursprüngliche Fehler steht in der Eigenschaft `suppressed`, der von der nächsten Freigabefunktion ausgelöste Fehler in der Eigenschaft `error`.

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

Die Kette sieht wie folgt aus:

```plain
     SuppressedError --suppressed--> SuppressedError --suppressed--> TypeError
            |                               |
          error                           error
            |                               |
            v                               v
resource1 disposal failed       resource2 disposal failed
 (Disposal happens later)       (Disposal happens earlier)
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

- [Polyfill für `SuppressedError` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- {{jsxref("Error")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}
