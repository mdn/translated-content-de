---
title: WebAssembly.Exception-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der **`WebAssembly.Exception()`**-Konstruktor wird verwendet, um eine neue [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zu erstellen.

Der Konstruktor akzeptiert ein [`Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception)-Argument und ein `payload`-Array von Datenfeldern. Die Datentypen jedes der Elemente im `payload` müssen mit dem entsprechenden Datentyp übereinstimmen, der im `Tag` angegeben ist.

Der Konstruktor kann auch ein `options`-Objekt annehmen. Die `options.traceStack`-Eigenschaft kann auf `true` gesetzt werden (standardmäßig ist sie `false`), um anzugeben, dass ein Wasm-Stack-Trace an die [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft der Ausnahme angehängt werden kann.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), das die erwarteten Datentypen für jedes der Werte im `payload` definiert.
- `payload`
  - : Ein Array von einem oder mehreren Datenfeldern, die das `payload` der Ausnahme bilden. Die Elemente müssen den Datentypen der entsprechenden Elemente im `tag` entsprechen. Wenn die Anzahl der Datenfelder im `payload` und deren Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` möglicherweise einen Stack-Trace an ihrer [`stack`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)-Eigenschaft haben kann, andernfalls `false`. Dies ist standardmäßig `false` (wenn `options` oder `options.traceStack` nicht bereitgestellt werden).

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl von Elementen und/oder die Elemente sind nicht von übereinstimmenden Typen.

## Beispiele

Dieses Beispiel zeigt die Erstellung einer Ausnahme mithilfe eines einfachen Tags.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

Das [`stack`-Beispiel](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack#examples) zeigt die Erstellung einer Ausnahme, die den `options`-Parameter verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)-Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
