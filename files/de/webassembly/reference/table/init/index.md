---
title: "init: Wasm table instruction"
short-title: init
slug: WebAssembly/Reference/Table/init
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.init`** [Table-Instruktion](/de/docs/WebAssembly/Reference/Table) kopiert manuell die Referenzen von einer [passiven](/de/docs/WebAssembly/Reference/Definitions/elem#passive_form) [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Definition in eine [`table`](/de/docs/WebAssembly/Reference/Definitions/table).

{{InteractiveExample("Wat Demo: table.init", "tabbed-taller")}}

```wat interactive-example
(module
  (table $return_values 2 funcref)

  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  (elem $funcs funcref (ref.func $f1) (ref.func $f2))

  (func (export "init")
    i32.const 0    ;; destination table index
    i32.const 0    ;; offset into elem segment
    i32.const 2    ;; number of elements to copy
    table.init $funcs
    elem.drop $funcs
  )

  (func (export "accessTable") (param $index i32) (result i32)
    local.get $index
    call_indirect (result i32)
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

Im obigen Beispiel definieren wir eine `table`, zwei Funktionen und ein `elem`-Segment namens `$funcs`, das auf die beiden Funktionen verweist. Anschließend rufen wir `table.init` auf, um die Referenzen von dem `$funcs` `elem` in die `table` zu kopieren, und verwenden [`elem.drop`](/de/docs/WebAssembly/Reference/Elem/drop), um das `elem`-Segment zu löschen, wenn es nicht mehr benötigt wird.

## Syntax

```plain
table.init table_identifier elem_identifier
```

- `table.init`
  - : Der Anweisungstyp `table.init`. Muss immer zuerst angegeben werden.

- `table_identifier` {{optional_inline}}
  - : Der Bezeichner für die `table`, in die Sie die Referenzen einfügen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name, der [für die `table`](/de/docs/WebAssembly/Reference/Definitions/table#name) beim ersten Definieren festgelegt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der `table`, zum Beispiel `0` für die erste `table` im Wasm-Modul, `1` für die zweite usw.

    Wird kein Wert angegeben, ist der Standardwert für `table_identifier` `0`.

- `elem_identifier`
  - : Der Bezeichner für das `elem`, von dem Sie Referenzen kopieren möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name, der [für das `elem`](/de/docs/WebAssembly/Reference/Definitions/elem#name) beim ersten Definieren festgelegt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_elem`.
    - `index`
      - : Die Indexnummer des `elem`, zum Beispiel `0` für das erste `elem` im Wasm-Modul, `1` für das zweite usw.

### Typ

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : Ein Integer, der den Tabellenindex angibt, an dem das Kopieren der Elementreferenzen beginnt. Dies ist ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) oder ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64), passend zum [`index_type`](/de/docs/WebAssembly/Reference/Definitions/table#index_type), mit dem die `table` definiert wurde.
- `source_offset`
  - : Ein `i32`, der den Startoffset in der `elem`- [`element_list`](/de/docs/WebAssembly/Reference/Definitions/elem#element_list) angibt, von dem die Kopie der Elementreferenzen beginnt.
- `length`
  - : Ein `i32`, der die Anzahl der zu kopierenden Referenzen darstellt.

### Traps

Die `table.init`-Anweisung löst eine Falle aus, wenn:

- Der `dest_offset` plus `length` die Größe der `table` überschreitet.
- Der `source_offset` plus `length` die Größe des `elem`-Segments überschreitet.
- Die [`elem.drop`](/de/docs/WebAssembly/Reference/Elem/drop)-Anweisung zuvor auf das [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Segment aufgerufen wurde, das in [`elem_identifier`](#elem_identifier) referenziert wird.

### Binärkodierung

| Anweisung    | Binärformat                        | Beispieltext => binär                     |
| ------------ | ---------------------------------- | ----------------------------------------- |
| `table.init` | `0xfc 12:u32 x:tableidx x:elemidx` | `table.init 0 0` => `0xfc 0x0c 0x00 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
- [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Definition
