---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Exception()`**-Konstruktor wird verwendet, um eine neue [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) zu erstellen.

Der Konstruktor akzeptiert ein [`Tag`](/de/docs/WebAssembly/JavaScript_interface/Exception)-Argument und ein `payload`-Array von Datenfeldern. Die Datentypen jedes Elements des Payloads müssen mit dem entsprechenden Datentyp übereinstimmen, der im `Tag` angegeben ist.

Der Konstruktor kann auch ein `options`-Objekt akzeptieren. Die Eigenschaft `options.traceStack` kann auf `true` gesetzt werden (standardmäßig ist sie `false`), um anzugeben, dass ein Wasm-Stack-Trace der [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack)-Eigenschaft der Ausnahme angefügt werden kann.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), der die erwarteten Datentypen für jeden der Werte im `payload` definiert.
- `payload`
  - : Ein Array aus einem oder mehreren Datenfeldern, die den Payload der Ausnahme bilden. Die Elemente müssen mit den Datentypen der korrespondierenden Elemente im `tag` übereinstimmen. Wenn die Anzahl der Datenfelder im Payload und deren Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` möglicherweise einen Stack-Trace in ihrer [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack)-Eigenschaft angefügt hat, ansonsten `false`. Dies ist standardmäßig `false` (wenn `options` oder `options.traceStack` nicht bereitgestellt werden).

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl von Elementen und/oder die Elemente sind nicht von passenden Typen.

## Beispiele

Dieses Beispiel zeigt die Erstellung einer Ausnahme mit einem einfachen Tag.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

Das [`stack`-Beispiel](/de/docs/WebAssembly/JavaScript_interface/Exception/stack#examples) zeigt die Erstellung einer Ausnahme, bei der der `options`-Parameter verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
