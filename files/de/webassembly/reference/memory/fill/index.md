---
title: "fill: Wasm memory Instruction"
short-title: fill
slug: WebAssembly/Reference/Memory/fill
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`memory.fill`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein angegebenes Byte.

Dies ist analog zu [`memset`](https://en.cppreference.com/cpp/string/byte/memset) in C.

{{InteractiveExample("Wat Demo: memory.fill", "tabbed-taller")}}

```wat interactive-example
(module
  (memory $my_mem (export "memory") 1)

  (func (export "fill")
    i32.const 0      ;; memory offset
    i32.const 42     ;; value to fill
    i32.const 6      ;; number of bytes to fill
    memory.fill $my_mem
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.fill();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 6);
  console.log(memArray[5]);
});
```

Im obigen Beispiel definieren wir einen exportierten Speicher namens `$my_mem` mit einer maximalen Größe von einer Seite. Dann fügen wir eine exportierte `fill()`-Funktion hinzu, die die ersten sechs Bytes von `$my_mem` mit dem Wert `42` füllt.

Im JavaScript rufen wir die `fill()`-Funktion auf, um den exportierten Speicher mit Daten zu füllen, bringen den Inhalt des exportierten Speichers in ein Array und protokollieren das sechste Array-Element in der Konsole.

## Syntax

```plain
memory.fill dest_memory
```

- `memory.fill`
  - : Der `memory.fill`-Instructionstyp. Muss immer zuerst angegeben werden.
- `dest_memory` {{optional_inline}}
  - : Der Bezeichner des `memory`, den Sie füllen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für den `memory`](/de/docs/WebAssembly/Reference/Definitions/memory#name), der bei der ersten Definition gesetzt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_mem`.
    - `index`
      - : Die Indexnummer des `memory`, zum Beispiel `0` für den ersten `memory` im Wasm-Modul, `1` für den zweiten, usw.

    Wenn `dest_memory` weggelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[dest_offset value length] -> []
```

- `dest_offset`
  - : Ein Integer, der den Offset repräsentiert, an dem der Speicher zu füllen beginnt. Dies wird ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) oder ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64) sein, um dem [`address_type`](/de/docs/WebAssembly/Reference/Definitions/memory#address_type) zu entsprechen, mit dem der `memory` definiert wurde.
- `value`
  - : Ein `i32`, der den Wert darstellt, mit dem die ausgewählten Bytes gefüllt werden sollen. Der `value` wird auf 8 Bits gekürzt, damit er auf jedes Byte angewendet werden kann.
- `length`
  - : Ein `i32` oder ein `i64`, der die Anzahl der Bytes darstellt, die mit dem `value` gefüllt werden sollen. Dies wird dem `address_type` entsprechen, mit dem der `memory` definiert wurde.

### Traps

Wenn der angegebene Speicherbereich außerhalb des gültigen Bereichs liegt, schlägt die Anweisung fehl.

### Binärcodierung

| Instruction   | Binärformat            | Beispieltext => Binär               |
| ------------- | ---------------------- | ----------------------------------- |
| `memory.fill` | `0xfc 11:u32 x:memidx` | `memory.fill 0` => `0xfc 0x0b 0x00` |

## Beispiele

### Füllen innerhalb des Standardspeichers (0-Index)

```wat
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-expression
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

### Füllen innerhalb eines bestimmten Speichers

```wat
;; Fill specific memory referenced by its index
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory 1) ;; Fill memory with index 1

;; Fill memory referenced by its name
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory $memoryName) ;; Fill memory with name "$memoryName"

;; Fill same memory using an S-expression
(memory.fill (memory $memoryName) (i32.const 200) (i32.const 255) (i32.const 100))
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)-Definition
