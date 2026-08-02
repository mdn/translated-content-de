---
title: "copy: Wasm table instruction"
short-title: copy
slug: WebAssembly/Reference/Table/copy
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.copy`** [Table-Anweisung](/de/docs/WebAssembly/Reference/Table) kopiert Element-Referenzen von einer [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Position zu einer anderen.

{{InteractiveExample("Wat Demo: table.copy", "tabbed-taller")}}

```wat interactive-example
(module
  (table $first_table 2 funcref)
  (table $second_table 3 funcref)

  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  (elem $funcs (table $first_table) (i32.const 0) funcref (ref.func $f1) (ref.func $f2))

  (func (export "copy")
    i32.const 1    ;; destination table offset
    i32.const 0    ;; source table offset
    i32.const 2    ;; number of elements to copy
    table.copy $second_table $first_table
  )

  (func (export "accessTable") (param $index i32) (result i32)
    local.get $index
    call_indirect $second_table (result i32)
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.copy();
  const value = result.instance.exports.accessTable(2);
  console.log(value);
});
```

Im obigen Beispiel definieren wir zwei Tabellen: `$first_table` mit einer Kapazität von zwei Elementen und `$second_table` mit einer Kapazität von drei Elementen. Wir definieren dann zwei Funktionen, die jeweils einen unterschiedlichen Integer zurückgeben und speichern diese Funktionen in `$first_table` unter Verwendung einer aktiven [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Definition.

Wir definieren dann zwei exportierte Funktionen:

- `copy()`, die eine `table.copy`-Anweisung verwendet, um die beiden Referenzen von `$first_table` in die zweiten und dritten Elementplätze von `$second_table` zu kopieren.
- `accessTable()`, die (über `call_indirect`) das Element referenziert, das in `$second_table` im Slot mit der Nummer des Funktionsparameters ist. Sie gibt dann den Wert zurück, der von der aufgerufenen Funktion zurückgegeben wird.

Im JavaScript rufen wir die beiden Wasm-Funktionen auf und protokollieren dann den Wert, der von `accessTable()` in die Konsole ausgegeben wird, welcher dem Rückgabewert der im dritten Slot von `$second_table` gespeicherten Funktion entspricht.

## Syntax

```plain
table.copy dest_table source_table
```

- `table.copy`
  - : Der `table.copy`-Anweisungstyp. Muss immer zuerst angegeben werden.
- `dest_table` {{optional_inline}}
  - : Der Bezeichner für die `table`, in die Sie die Referenzen kopieren möchten.
- `source_table` {{optional_inline}}
  - : Der Bezeichner für die `table`, aus der Sie die Referenzen kopieren möchten.

`dest_table` und `source_table` können eines der folgenden sein:

- `name`
  - : Ein Bezeichnername [für die `table` gesetzt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst definiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
- `index`
  - : Die Indexnummer der `table`, zum Beispiel `0` für die erste `table` im Wasm-Modul, `1` für die zweite, usw.

Wenn `dest_table` oder `source_table` weggelassen werden, standardmäßig auf `0`.

### Typ

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : Ein Integer, der den Offset repräsentiert, ab dem die kopierten Element-Referenzen in der Ziel-Tabelle geschrieben werden sollen. Dies wird ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) oder ein [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64) sein, um mit dem [`index_type`](/de/docs/WebAssembly/Reference/Definitions/table#index_type) übereinzustimmen, mit dem die `table` definiert wurde.
- `source_offset`
  - : Ein Integer, der den Offset repräsentiert, ab dem die Element-Referenzen in der Quell-Tabelle kopiert werden sollen. Dies wird ein `i32` oder ein `i64` sein, um mit dem `index_type` übereinzustimmen, mit dem die `table` definiert wurde.
- `length`
  - : Ein Integer, der die Anzahl der zu kopierenden Referenzen repräsentiert. Dies wird ein `i32` oder ein `i64` sein, um mit dem `index_type` zu übereinstimmen, mit dem die `table` definiert wurde. Beim Kopieren zwischen einer 32-Bit-Index-Tabelle und einer 64-Bit-Index-Tabelle muss ein `i32` für die `length` verwendet werden.

> [!NOTE]
> `table.copy` kopiert Referenzen auf eine überlappungsbewusste Weise. Mit anderen Worten, die Kopie erfolgt so, als ob die vom `source_offset` und `length` identifizierten Quell-Referenzen zuerst in einen temporären Wert kopiert wurden, bevor sie zu `dest_offset` kopiert wurden. Das bedeutet, dass, wenn Ihre Quell- und Ziel-Daten überlappen, sie sich nicht gegenseitig beeinflussen und die Quelle wie erwartet sauber in den Zielbereich kopiert wird.

### Traps

Wenn eine kopierte Element-Referenz außerhalb der Grenzen in der Quelle oder im Ziel liegen würde, löst die Anweisung eine Falle aus.

### Binärcodierung

| Anweisung    | Binärformat                         | Beispieltext => Binär                     |
| ------------ | ----------------------------------- | ----------------------------------------- |
| `table.copy` | `0xfc 14:u32 x:tableidx x:tableidx` | `table.copy 0 0` => `0xfc 0x0e 0x00 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
