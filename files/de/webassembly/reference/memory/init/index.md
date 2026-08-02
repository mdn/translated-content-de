---
title: "init: Wasm Speicheranweisung"
short-title: init
slug: WebAssembly/Reference/Memory/init
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`memory.init`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) kopiert manuell die Bytes von einer [passiven](/de/docs/WebAssembly/Reference/Definitions/data#passive_form) [`Daten`](/de/docs/WebAssembly/Reference/Definitions/data)-Definition in einen [`Speicher`](/de/docs/WebAssembly/Reference/Definitions/memory).

{{InteractiveExample("Wat Demo: memory.init", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting "Hello World")

  (func (export "init")
    i32.const 0       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 11      ;; number of bytes to copy
    memory.init $greeting
    data.drop $greeting
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 11);
  console.log(new TextDecoder().decode(memArray));
});
```

Im obigen Beispiel definieren wir eine `Daten`-Definition mit dem Bezeichner `$greeting`, die den String "Hello World" enthält. In der Funktion `init()` wird das `Daten`-Segment mit der Anweisung `memory.init` in den Speicher geschrieben; anschließend löschen wir das `Daten`-Segment mit [`data.drop`](/de/docs/WebAssembly/Reference/Data/drop), da es nicht mehr benötigt wird.

Im JavaScript rufen wir die exportierte `init()`-Funktion auf, um die Datendefinition in den Speicher zu schreiben, dekodieren dann den exportierten Speicherpuffer und geben das Ergebnis in der Konsole aus.

## Syntax

```plain
memory.init memory_identifier data_identifier
```

- `memory.init`
  - : Der Anweisungstyp `memory.init`. Muss immer zuerst enthalten sein.

- `memory_identifier` {{optional_inline}}
  - : Der Bezeichner für den `Speicher`, in den Sie die `Daten` kopieren möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein Bezeichnername [gesetzt für den `Speicher`](/de/docs/WebAssembly/Reference/Definitions/memory#name), als er erstmals definiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_mem`.
    - `index`
      - : Die Indexnummer des `Speichers`, zum Beispiel `0` für den ersten `Speicher` im Wasm-Modul, `1` für den zweiten usw.

    Wird `memory_identifier` weggelassen, wird es standardmäßig auf `0` gesetzt.

- `data_identifier`
  - : Der Bezeichner für die `Daten`-Definition, von der Sie die Daten kopieren möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein Bezeichnername [gesetzt für die `Daten`](/de/docs/WebAssembly/Reference/Definitions/data#name), als sie erstmals definiert wurden. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_data`.
    - `index`
      - : Die Indexnummer der `Daten`, zum Beispiel `0` für die ersten `Daten` im Wasm-Modul, `1` für die zweiten usw.

### Typ

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : Ein Integer, der die Verschiebung darstellt, an der die kopierten Daten im Zielspeicher zu schreiben beginnen sollen. Dies wird ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) oder ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64) sein, um dem [`address_type`](/de/docs/WebAssembly/Reference/Definitions/memory#address_type) zu entsprechen, mit dem der `Speicher` definiert wurde.
- `source_offset`
  - : Ein `i32`, das die Byte-Verschiebung im `Daten`-Segment darstellt, ab der Daten gelesen werden sollen.
- `length`
  - : Ein `i32`, der die Anzahl der zu kopierenden Bytes darstellt.

### Traps

Die `memory.init`-Anweisung erzeugt einen Fehler, wenn:

- Die `dest_offset` plus der `length` die Größe des `Speichers` überschreitet.
- Die `source_offset` plus der `length` die Größe des `Daten`-Segments überschreitet.
- Die [`data.drop`](/de/docs/WebAssembly/Reference/Data/drop)-Anweisung zuvor auf das im [`data_identifier`](#data_identifier) referenzierte [`Daten`](/de/docs/WebAssembly/Reference/Definitions/data)-Segment aufgerufen wurde.

### Binärcodierung

| Anweisung     | Binärformat                     | Beispieltext => binär                      |
| ------------- | ------------------------------- | ------------------------------------------ |
| `memory.init` | `0xfc 8:u32 x:memidx x:dataidx` | `memory.init 0 0` => `0xfc 0x08 0x00 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)-Definition
- [`data`](/de/docs/WebAssembly/Reference/Definitions/data)-Definition
