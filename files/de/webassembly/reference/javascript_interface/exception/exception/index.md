---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
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
  - : Ein Array aus einem oder mehreren Datenfeldern, die die Nutzlast der Ausnahme bilden.
    Die Elemente müssen den Datentypen der entsprechenden Elemente im `tag` entsprechen.
    Wenn die Anzahl der Datenfelder in der Nutzlast und ihre Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` einen Stack-Trace an seiner [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft haben darf, andernfalls `false`.
        Standardwert ist `false`.

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl von Elementen und/oder die Elemente sind nicht von passenden Typen.

## Beschreibung

Der `Exception()`-Konstruktor akzeptiert einen [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), ein Array von Werten und ein `options`-Objekt als Argumente.
Der Tag definiert eindeutig den _Typ_ einer Ausnahme, einschließlich der Reihenfolge ihrer Argumente und deren Datentypen.
Der gleiche Tag, der verwendet wurde, um die `Exception` zu erstellen, ist erforderlich, um auf die Argumente einer ausgelösten Ausnahme zuzugreifen (unter Verwendung von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

## Beispiele

### Grundlegende Verwendung

Normalerweise würden Sie diesen Konstruktor nicht verwenden, um eine Wasm-Ausnahme manuell zu erstellen. Stattdessen wird ein `WebAssembly.Exception`-Objekt normalerweise beim Umgang mit Wasm-Ausnahmen erstellt, zum Beispiel:

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

Für ein Arbeitsbeispiel sehen Sie sich die Referenzseite zur [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung an.

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

- Überblick über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
