---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: 184a2adcf533de244f520829045c2ad85c6af1a8
---

Der **`WebAssembly.Exception()`**-Konstruktor wird verwendet, um eine neue [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Objektinstanz zu erstellen.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Eine Instanz von [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), die die erwarteten Datentypen für jeden der Werte im `payload` definiert.
- `payload`
  - : Ein Array von einem oder mehreren Datenfeldern, die die Nutzdaten der Ausnahme bilden.
    Die Elemente müssen den Datentypen der entsprechenden Elemente im `tag` entsprechen.
    Wenn die Anzahl der Datenfelder in den Nutzdaten und deren Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` möglicherweise einen Stack-Trace an ihrer [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft angehängt haben kann, andernfalls `false`.
        Standardmäßig `false`.

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl von Elementen und/oder die Elemente sind nicht von übereinstimmenden Typen.

## Beschreibung

Der [`Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)-Konstruktor akzeptiert ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente.
Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und deren Datentypen.
Der gleiche Tag, der zum Erstellen der `Exception` verwendet wurde, ist erforderlich, um auf die Argumente einer ausgelösten Ausnahme zuzugreifen (mithilfe von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

## Beispiele

### Grundlegende Verwendung

Normalerweise würde dieser Konstruktor nicht manuell verwendet werden, um eine Wasm-Ausnahme zu erstellen. Stattdessen wird ein `WebAssembly.Exception`-Objekt normalerweise beim Umgang mit Wasm-Ausnahmen erstellt, zum Beispiel:

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

Ein funktionierendes Beispiel finden Sie auf der Referenzseite für die [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung.

### Manuelle Nutzung

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
