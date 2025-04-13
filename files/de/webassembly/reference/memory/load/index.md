---
title: "load: Wasm-Textanweisung"
short-title: load
slug: WebAssembly/Reference/Memory/Load
l10n:
  sourceCommit: d47940f987297e6d5202c55576afef1ddc8565e7
---

Die **`load`**-Anweisungen für den [Speicher](/de/docs/WebAssembly/Reference/Memory) werden verwendet, um eine Zahl aus einem Speicher auf den Stack zu laden.

Es gibt `load`-Anweisungen zum Laden aus einem Speicher in ein `i32`, `i64`, `f32` und `f64`.
Für die ganzen Zahlen gibt es separate Anweisungsvarianten zum Laden einer engeren vorzeichenbehafteten Zahl und einer vorzeichenlosen Zahl aus dem Speicher und deren Erweiterung in einen breiteren Typ.
Zum Beispiel können Sie eine vorzeichenlose 8-Bit-Zahl laden und in ein `i32` umwandeln, indem Sie `i32.load8_u` verwenden.
Alle Varianten sind [unten aufgeführt](#anweisungen_und_opcodes).

{{InteractiveExample("Wat Demo: load", "tabbed-taller")}}

```wat interactive-example
(module

  (memory $memory 1)
  (export "memory" (memory $memory))

  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    i32.const 0

    ;; load first item in memory and return the result
    i32.load
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
const result = await WebAssembly.instantiateStreaming(fetch(url));
const load_first_item_in_mem = result.instance.exports.load_first_item_in_mem;
const memory = result.instance.exports.memory;

const dataView = new DataView(memory.buffer);
// Store 30 at the beginning of memory
dataView.setUint32(0, 30, true);

console.log(load_first_item_in_mem(100));
// Expected output: 30
```

## Syntax

Aus dem Standardspeicher laden

```wat
;; Load from default memory at offset specified by value on top of stack
i32.const 0 ;; Stack variable containing memory offset (0) of number to be loaded.
i32.load    ;; Load from specified offset in default memory

;; Load from same location using an S-function
(i32.load (i32.const 0))
```

Aus einem angegebenen Speicher laden (wenn Multi-Memory unterstützt wird)

```wat
;; Load from memory specified by index
i32.const 0 ;; offset in memory to load from (0)
i32.load (memory 1) ;; load from memory index 1

;; Load from memory specified by name
i32.const 1  ;; offset in memory to load from (1)
i32.load (memory $memory1) ;; load from named memory $memory1

;; Load from memory specified by name using an S-function
(i32.load (memory $memory1) (i32.const 0))
```

### Anweisungen und Opcodes

| Anweisung      | Binärer Opcode |
| -------------- | -------------- |
| `i32.load`     | `0x28`         |
| `i64.load`     | `0x29`         |
| `f32.load`     | `0x2a`         |
| `f64.load`     | `0x2b`         |
| `i32.load8_s`  | `0x2c`         |
| `i32.load8_u`  | `0x2d`         |
| `i32.load16_s` | `0x2e`         |
| `i32.load16_u` | `0x2f`         |
| `i64.load8_s`  | `0x30`         |
| `i64.load8_u`  | `0x31`         |
| `i64.load16_s` | `0x32`         |
| `i64.load16_u` | `0x33`         |
| `i64.load32_s` | `0x34`         |
| `i64.load32_u` | `0x35`         |

## Beispiele

### Elemente aus dem Standardspeicher laden

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0.
Wir können aus diesem Speicher laden, indem wir eine Variable hinzufügen, die den Offset im Standardspeicher der Zahl, die auf den Stack geladen werden soll, angibt, und dann `load` aufrufen.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wat
(module
  ;; Define memory named $memory and export
  (memory $memory 1)  ;; First memory declared is default, with index 0
  (export "memory" (memory $memory))

  ;; Exported function to load first item in default memory
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; load 0-offset item in memory and return the result
    i32.const 0
    i32.load
  )
)
```

Oben mussten wir den Speicher in der Ladeanweisung nicht angeben, aber wir hätten es tun können, indem wir entweder den Namen oder den Index des Standardspeichers verwenden.
Dies wird im folgenden Beispiel gezeigt.

Vollständigkeitshalber können wir die kompilierte Version der obigen Datei `load_single.wasm` mit einem ähnlichen Code wie unten gezeigt verwenden:

```js
// await on the specified .wasm file to be fetched and loaded
const result = await WebAssembly.instantiateStreaming(
  fetch("load_single.wasm"),
);

// Get the exported function that we will call below
const load_first_item_in_mem = result.instance.exports.load_first_item_in_mem;

// Get the exported memory and store 30 at the 0 offset
const memory = result.instance.exports.memory;
const dataView = new DataView(memory.buffer);
dataView.setUint32(0, 30, true);

// Log the result of calling the exported Wasm function
console.log(load_first_item_in_mem(100)); // 30
```

### Elemente aus einem angegebenen Speicher laden

Da Speicher in einem Wasm-Modul definiert werden, erhalten sie nacheinander eine Indexnummer ab null.
Sie können aus einem bestimmten Speicher laden, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen nach der `load`-Anweisung angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie einen Speicher direkt über den Index referenzieren können.

```wat
(module
  ;; Define memory for the module
  (memory $memory0 1)  ;; First (default) memory with memory index 0 (and 1 page)
  (memory $memory1 1)  ;; Second memory with index 1, named $memory1
  (export "memory" (memory $memory1))  ;; Export $memory1

  ;; Exported function to load first item in default memory
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; load 0-offset item in memory index 1 and return the result
    i32.const 0
    i32.load (memory 1)
  )
)
```

Der Funktionskörper könnte auch mit jeder der folgenden Optionen geschrieben werden:

```wat
i32.const 0
i32.load (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(i32.load (memory 1) (i32.const 0))  ;; reference memory by index
(i32.load (memory $memory1) (i32.const 0)) ;; reference memory by name
```

Wir haben im Beispiel nicht den Standardspeicher verwendet.
Aber Sie können diesen Index auch angeben, wenn Sie möchten:

```wat
i32.const 0
i32.load (memory 0)  ;; referencing memory by index

;; Using S-functions
(i32.load (i32.const 0))
(i32.load (memory 0) (i32.const 0))  ;; reference memory by index
(i32.load (memory $memory0) (i32.const 0)) ;; reference memory by name
```

Die WAT-Dateien können mit demselben JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle zeigt Versionen an, in denen `load` mit einem angegebenen Speicher verwendet werden kann.
