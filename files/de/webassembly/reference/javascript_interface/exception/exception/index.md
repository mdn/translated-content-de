---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

Der Konstruktor **`WebAssembly.Exception()`** wird verwendet, um eine neue Instanz eines [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts zu erstellen.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Eine [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)-Instanz, die die erwarteten Datentypen für jeden Wert in `payload` definiert.
- `payload`
  - : Ein Array mit einem oder mehreren Datenfeldern, die die Nutzdaten der Ausnahme bilden.
    Die Elemente müssen den Datentypen der entsprechenden Elemente in `tag` entsprechen.
    Wenn die Anzahl oder die Typen der Datenfelder nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn der `Exception`-Instanz ein Stacktrace in ihrer [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft zugeordnet werden darf, andernfalls `false`.
        Der Standardwert ist `false`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Sequenzen `payload` und `tag` enthalten nicht gleich viele Elemente und/oder die Typen der Elemente stimmen nicht überein.

## Beschreibung

Der Konstruktor `Exception()` nimmt ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente entgegen.
Das Tag definiert den _Typ_ einer Ausnahme eindeutig, einschließlich der Reihenfolge ihrer Argumente und deren Datentypen.
Um auf die Argumente einer ausgelösten Ausnahme zuzugreifen, wird dasselbe Tag benötigt, mit dem die `Exception` erstellt wurde (mithilfe von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

## Beispiele

### Grundlegende Verwendung

Normalerweise verwenden Sie diesen Konstruktor nicht, um eine Wasm-Ausnahme manuell zu erstellen. Stattdessen entsteht ein `WebAssembly.Exception`-Objekt üblicherweise bei der Behandlung von Wasm-Ausnahmen, beispielsweise:

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(
  (result) => {
    try {
      // Cause function to throw
      result.instance.exports.throw(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        const errorCode = e.getArg(myErrorTag, 0); // 0 = first payload value
        console.log("Error code:", errorCode); // 42
      } else {
        throw e; // throw other errors
      }
    }
  },
);
```

Ein funktionsfähiges Beispiel finden Sie auf der Referenzseite zur Anweisung [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw).

### Manuelle Verwendung

Dieses Beispiel zeigt, wie Sie eine `WebAssembly.Exception`-Instanz manuell erstellen.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

> [!NOTE]
> Das [Beispiel zu `stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack#examples) zeigt die Erstellung einer Ausnahme, die den Parameter `options` verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
