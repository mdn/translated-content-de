---
title: WebAssembly.Exception Konstruktor
slug: WebAssembly/JavaScript_interface/Exception/Exception
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Exception()`** Konstruktor wird verwendet, um eine neue [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) zu erstellen.

Der Konstruktor akzeptiert ein [`Tag`](/de/docs/WebAssembly/JavaScript_interface/Exception) Argument und ein `payload`-Array von Datenfeldern.
Die Datentypen jedes der Payload-Elemente müssen den entsprechenden Datentypen entsprechen, die im `Tag` angegeben sind.

Der Konstruktor kann auch ein `options`-Objekt entgegennehmen.
Die `options.traceStack`-Eigenschaft kann auf `true` gesetzt werden (standardmäßig ist sie `false`), um anzugeben, dass ein Wasm-Stacktrace an die [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack) Eigenschaft der Ausnahme angehängt werden kann.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameter

- `tag`
  - : Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/JavaScript_interface/Tag), das die erwarteten Datentypen für jedes der Werte im `payload` definiert.
- `payload`
  - : Ein Array von einem oder mehreren Datenfeldern, die die Nutzlast der Ausnahme bilden.
    Die Elemente müssen den Datentypen der entsprechenden Elemente im `tag` entsprechen.
    Wenn die Anzahl der Datenfelder im Payload und ihre Typen nicht übereinstimmen, wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : Ein Objekt mit den folgenden optionalen Feldern:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true`, wenn die `Exception` möglicherweise einen Stacktrace an ihre [`stack`](/de/docs/WebAssembly/JavaScript_interface/Exception/stack) Eigenschaft angehängt hat, andernfalls `false`.
        Dies ist standardmäßig `false` (wenn `options` oder `options.traceStack` nicht angegeben sind).

### Ausnahmen

- `TypeError`
  - : Die `payload`- und `tag`-Sequenzen haben nicht die gleiche Anzahl von Elementen und/oder die Elemente sind nicht von übereinstimmenden Typen.

## Beispiele

Dieses Beispiel zeigt die Erstellung einer Ausnahme mit einem einfachen Tag.

```js
// Erstellen Sie einen Tag und verwenden Sie ihn, um eine Ausnahme zu erstellen
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

Das [`stack` Beispiel](/de/docs/WebAssembly/JavaScript_interface/Exception/stack#examples) zeigt die Erstellung einer Ausnahme, die den `options` Parameter verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
