---
title: "copy: Wasm memory instruction"
short-title: copy
slug: WebAssembly/Reference/Memory/copy
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`memory.copy`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem [`memory`]-Region(/de/docs/WebAssembly/Reference/Definitions/memory) in eine andere.

Dies ist analog zu [`memmove`](https://en.cppreference.com/cpp/string/byte/memmove) in C.

{{InteractiveExample("Wat Demo: memory.copy", "tabbed-taller")}}

```wat interactive-example
(module
  (memory $memory1 (export "memory") 1)
  (data $greeting (memory $memory1) (i32.const 0) "Hello ")

  (func (export "copy")
    i32.const 6      ;; destination memory offset
    i32.const 0      ;; source memory offset
    i32.const 5      ;; number of bytes to copy
    memory.copy
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.copy();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 11);
  console.log(new TextDecoder().decode(memArray));
});
```

Im obigen Beispiel definieren wir einen exportierten Speicher namens `$memory1` mit einer maximalen Größe von einer Seite. Wir beinhalten dann:

- Eine [`data`]-Definition(/de/docs/WebAssembly/Reference/Definitions/data), die den String "Hello " enthält und ihn sofort in `$memory1` kopiert.
- Eine exportierte `copy()`-Funktion, die den String "Hello" ab Byte `0` in `$memory1` in eine Region ab Byte 6 in `$memory1` kopiert. Dies führt dazu, dass der Speicherinhalt zu "Hello Hello" wird.

Im JavaScript rufen wir die `copy()`-Funktion auf, um den Inhalt des exportierten Speichers zu aktualisieren, dekodieren dann den Puffer des exportierten Speichers und protokollieren das Ergebnis in der Konsole.

## Syntax

```plain
memory.copy dest_memory source_memory
```

- `memory.copy`
  - : Der `memory.copy`-Anweisungstyp. Muss immer zuerst eingeschlossen werden.
- `dest_memory` {{optional_inline}}
  - : Der Bezeichner für das `memory`, in das Sie die Daten kopieren möchten.
- `source_memory` {{optional_inline}}
  - : Der Bezeichner für das `memory`, aus dem Sie die Daten kopieren möchten.

`dest_memory` und `source_memory` können eines der folgenden sein:

- `name`
  - : Ein identifizierender Name [für das `memory` gesetzt](/de/docs/WebAssembly/Reference/Definitions/memory#name), als es zuerst definiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_mem`.
- `index`
  - : Die Indexnummer des `memory`, zum Beispiel `0` für das erste `memory` im Wasm-Modul, `1` für das zweite, usw.

Wenn `dest_memory` oder `source_memory` weggelassen werden, wird standardmäßig `0` verwendet.

### Typ

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : Ein Integer, der den Offset zum Start des Schreibens der kopierten Daten im Zielmemory darstellt. Dies wird ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) oder ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64) sein, um den [`address_type`](/de/docs/WebAssembly/Reference/Definitions/memory#address_type) zu entsprechen, mit dem das `memory` definiert wurde.
- `source_offset`
  - : Ein Integer, der den Offset zum Start des Kopierens der Daten aus dem Ursprungsmemory darstellt. Dies wird ein `i32` oder ein `i64` sein, um den `address_type`, mit dem das `memory` definiert wurde, zu entsprechen.
- `length`
  - : Ein Integer, der die Anzahl der zu kopierenden Bytes darstellt. Dies wird ein `i32` oder ein `i64` sein, um den `address_type`, mit dem das `memory` definiert wurde, zu entsprechen. Beim Kopieren zwischen einem 32-Bit- und einem 64-Bit-Memory muss ein `i32` für die `length` verwendet werden.

> [!NOTE]
> `memory.copy` kopiert Speicherbereiche überlappungsbewusst. Mit anderen Worten, der Kopiervorgang wird so durchgeführt, als ob die Quelldaten, die durch `source_offset` und `length` identifiziert werden, zuerst in einem temporären Wert kopiert würden, bevor sie in `dest_offset` kopiert werden. Das bedeutet, dass, wenn Ihre Quell- und Zieldaten überlappen, diese sich nicht gegenseitig beeinträchtigen und die Quelle wie erwartet sauber in den Zielbereich kopiert wird.

### Traps

Wenn ein kopiertes Byte im Quell- oder Zielbereich außerhalb der Grenzen liegt, führt die Anweisung zu einer Falle.

### Binäre Kodierung

| Anweisung     | Binärformat                     | Beispieldatei => Binär                     |
| ------------- | ------------------------------- | ------------------------------------------ |
| `memory.copy` | `0xfc 10:u32 x:memidx x:memidx` | `memory.copy 0 0` => `0xfc 0x0a 0x00 0x00` |

## Beispiele

### Kopieren innerhalb des Standard-Memorys (Index 0)

```wat
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-expression
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

### Kopieren innerhalb eines angegebenen Memorys

```wat
;; Copy data within specific memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory 2) (memory 2) ;; Copy memory within memory with index 2

;; Copy between memories referenced by their names
i32.const 50 ;; Destination address (in $destMem)
i32.const 100 ;; Source address (in $sourceMem)
i32.const 25 ;; Number of bytes to copy
memory.copy (memory $destMem) (memory $sourceMem) ;; Copy memory from "$sourceMem" to "$destMem"

;; Copy between memories using an S-expression
(memory.copy (memory $destMem) (memory $sourceMem) (i32.const 50) (i32.const 100) (i32.const 25))
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory) Definition
