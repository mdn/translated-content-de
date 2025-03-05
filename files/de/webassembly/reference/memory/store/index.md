---
title: "store: Wasm-Text-Instruktion"
short-title: store
slug: WebAssembly/Reference/Memory/Store
l10n:
  sourceCommit: 5af6da1da593fae9b3208eb9fd308213d5c3359c
---

Die **`store`**-[Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) werden verwendet, um eine Zahl vom Stapel in einem Speicher abzulegen.

Es gibt `store`-Instruktionen zum Speichern eines `i32`, `i64`, `f32` und `f64` im Speicher. Für die Ganzzahlen gibt es separate Instruktionsvarianten, um eine breit typisierte Zahl in eine schmalere Zahl im Speicher zu speichern. Zum Beispiel können Sie eine 32-Bit-Zahl in einem 8-Bit-Feld im Speicher mit `i32.store8` speichern. Wenn die Zahl nicht in den schmaleren Zahlentyp passt, wird sie umgeschlagen. Alle Varianten sind [unten aufgelistet](#anweisungen_und_opcodes).

{{InteractiveExample("Wat Demo: store", "tabbed-taller")}}

```wat interactive-example
(module

  (memory $memory 1)
  (export "memory" (memory $memory))

  (func (export "store_in_mem") (param $num i32)
    i32.const 0
    local.get $num

    ;; store $num at position 0
    i32.store
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
const result = await WebAssembly.instantiateStreaming(fetch(url));

const store_in_mem = result.instance.exports.store_in_mem;
const memory = result.instance.exports.memory;

store_in_mem(100);

const dataView = new DataView(memory.buffer);
const first_number_in_mem = dataView.getUint32(0, true);

console.log(first_number_in_mem);
// Expected output: 100
```

## Syntax

Speichern im Standardspeicher

```wasm
;; Store value in default memory at particular offset
i32.const 0 ;; stack variable with offset in memory to store the number
i32.const 20 ;; stack variable with the number to store
i32.store ;; store in default memory

;; Store using S-function (same values and offset)
(i32.store (i32.const 0) (i32.const 20))
```

Speichern in angegebenem Speicher (wenn Multi-Memory unterstützt wird)

```wasm
;; Store in memory referenced by its index
i32.const 0 ;; offset in memory to store the number
i32.const 20 ;; the number to store
i32.store (memory 2)  ;; store in memory with index 2

;; Store in memory referenced by its name
i32.const 0 ;; offset to store the number
i32.const 20 ;; the number to store
i32.store (memory $memoryName)  ;; store in memory with name "$memoryName"

;; Store in same memory using an S function
(i32.store (memory $memoryName) (i32.const 0) (i32.const 20))
```

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `i32.store`   | `0x36`         |
| `i64.store`   | `0x37`         |
| `f32.store`   | `0x38`         |
| `f64.store`   | `0x39`         |
| `i32.store8`  | `0x3a`         |
| `i32.store16` | `0x3b`         |
| `i64.store8`  | `0x3c`         |
| `i64.store16` | `0x3d`         |
| `i64.store32` | `0x3e`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Unterstützung für Speicher in Wasm-Modulen stimmt mit der JavaScript API [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) überein.
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt die Versionen an, in denen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
