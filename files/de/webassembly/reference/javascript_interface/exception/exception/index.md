---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Der **`WebAssembly.Exception()`**-Konstruktor wird verwendet, um eine neue Instanz eines [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objekts zu erstellen.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Eine Instanz von [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), die die erwarteten Datentypen für jeden der Werte im `payload` definiert.
- `payload`
  - : Ein Array aus einem oder mehreren Datenfeldern, die die Nutzdaten der Ausnahme bilden. Die Elemente müssen den Datentypen der entsprechenden Elemente im `tag` entsprechen. Wenn die Anzahl der Datenfelder im `payload` und deren Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` möglicherweise einen Stack-Trace in ihrer [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängt hat, andernfalls `false`. Standardmäßig `false`.

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl an Elementen und/oder die Elemente sind nicht von übereinstimmenden Typen.

## Beschreibung

Der [`Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)-Konstruktor akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente. Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge seiner Argumente und deren Datentypen. Derselbe Tag, der verwendet wurde, um die `Exception` zu erstellen, ist erforderlich, um die Argumente einer ausgelösten Ausnahme zuzugreifen (mittels [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

## Beispiele

### Grundlegende Verwendung

Normalerweise würden Sie diesen Konstruktor nicht verwenden, um manuell eine Wasm-Ausnahme zu erstellen. Stattdessen wird ein `WebAssembly.Exception`-Objekt normalerweise erstellt, wenn Wasm-Ausnahmen behandelt werden, zum Beispiel:

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

Für ein funktionierendes Beispiel siehe die Referenzseite zur [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung.

### Manuelle Verwendung

Dieses Beispiel zeigt die manuelle Erstellung einer `WebAssembly.Exception`-Instanz.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

> [!NOTE]
> Das [`stack`-Beispiel](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack#examples) zeigt die Erstellung einer Ausnahme, die den `options`-Parameter verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)-Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
