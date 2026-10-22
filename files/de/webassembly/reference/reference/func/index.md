---
title: "func: Wasm-Referenzanweisung"
short-title: func
slug: WebAssembly/Reference/Reference/func
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die **`ref.func`**-[Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) erstellt eine Referenz auf eine bestimmte Funktion.

{{InteractiveExample("Wat Demo: ref.func", "tabbed-taller")}}

```wat interactive-example
(module
  (func $double (param i32) (result i32)
    (i32.mul (local.get 0) (i32.const 2))
  )
  ;; Make $double referenceable by ref.func
  (elem declare func $double)

  (func (export "getDouble") (result funcref)
    ref.func $double
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
const { instance } = await WebAssembly.instantiateStreaming(fetch(url));

// The returned funcref can be called like a JavaScript function
const double = instance.exports.getDouble();
console.log(double(21));
```

## WAT-Syntax

```plain
ref.func function
```

- `ref.func`
  - : Die `ref.func`-Anweisung.

### Unmittelbare Operanden

- `function`
  - : Die Funktion, auf die eine Referenz erstellt werden soll. Dies kann der Name der Funktion sein, zum Beispiel `$my_function`, oder ihr Index.

### Operandenstapel

```plain
[] -> [output:(ref function_type)]
```

- `output`
  - : Eine nicht leere Referenz auf `function`. Ihr Typ ist eine Referenz auf den Typ der Funktion. Sie kann überall verwendet werden, wo ein [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref) erwartet wird.

### Binärkodierung

| Anweisung  | Binärformat       | Beispiel: Text => Binärdarstellung |
| ---------- | ----------------- | ---------------------------------- |
| `ref.func` | `0xd2 x:func_idx` | `ref.func 0` => `0xd2 0x00`        |

## Beschreibung

Die `ref.func`-Anweisung erstellt eine Referenz auf eine Funktion, die im Modul definiert oder in das Modul importiert wurde. Sie können die Referenz in einer Tabelle speichern, an eine andere Funktion übergeben oder an JavaScript zurückgeben. Dort kann sie wie eine gewöhnliche JavaScript-Funktion aufgerufen werden.

Ein Modul wird nur dann erfolgreich validiert, wenn jede Funktion, die mit `ref.func` innerhalb eines Funktionskörpers verwendet wird, auch an einer Stelle außerhalb der Funktionskörper referenziert wird: beispielsweise in einem Export, einem Initialisierer für [`global`](/de/docs/WebAssembly/Reference/Definitions/global) oder einem [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Segment. Wenn eine Funktion nicht anderweitig referenziert wird, können Sie sie mit einem deklarativen `elem`-Segment deklarieren, etwa mit `(elem declare func $my_function)`.

Da `ref.func` eine konstante Anweisung ist, kann sie auch in konstanten Ausdrücken verwendet werden, beispielsweise als Initialisierer für `global` oder als Eintrag in einem `elem`-Segment.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
- [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)
- [`ref.null`](/de/docs/WebAssembly/Reference/Reference/null)
