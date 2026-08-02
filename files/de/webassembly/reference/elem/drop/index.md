---
title: "drop: Wasm elem-Anweisung"
short-title: drop
slug: WebAssembly/Reference/Elem/drop
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`elem.drop`**-[`elem`-Anweisung](/de/docs/WebAssembly/Reference/Elem) verwirft die Daten, die durch ein [passives](/de/docs/WebAssembly/Reference/Definitions/elem#passive_form) `elem`-Segment enthalten sind, und gibt den Speicher frei, nachdem sie in einem [`table.init`](/de/docs/WebAssembly/Reference/Table/init) verwendet wurden.

> [!NOTE]
> [Aktive](/de/docs/WebAssembly/Reference/Definitions/elem#active_form) `elem`-Segmente werden während der Modulinistanzierung automatisch verworfen und können daher nicht über `elem.drop` verworfen werden.

{{InteractiveExample("Wat Demo: elem.drop", "tabbed-taller")}}

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
    ;; segment data no longer needed
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

Im obigen Beispiel definieren wir eine `table`, zwei Funktionen und ein `elem` namens `$funcs`, das die beiden Funktionen referenziert. Wir rufen dann `table.init` auf, um die Referenzen aus dem `$funcs`-`elem` in die `table` zu kopieren. Nachdem dies erledigt ist, wird das `elem` nicht mehr benötigt, daher rufen wir `elem.drop` auf, um den von ihm belegten Speicher freizugeben.

## Syntax

```plain
elem.drop identifier
```

- `elem.drop`
  - : Der `elem.drop`-Anweisungstyp. Muss immer zuerst enthalten sein.
- `identifier`
  - : Der Bezeichner für das `elem`, das Sie verwerfen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein Bezeichnername [für das `elem` festgelegt](/de/docs/WebAssembly/Reference/Definitions/elem#name), als es zuerst definiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_elem`.
    - `index`
      - : Die Indexnummer des `elem`, zum Beispiel `0` für das erste `elem` im Wasm-Modul, `1` für das zweite usw.

### Typ

```plain
[] -> []
```

### Binäre Kodierung

| Anweisung   | Binärformat             | Beispieltext => Binär             |
| ----------- | ----------------------- | --------------------------------- |
| `elem.drop` | `0xfc 13:u32 x:elemidx` | `elem.drop 0` => `0xfc 0x0d 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Definition von [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
- Definition von [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)
- [WebAssembly-Tabellenanweisungen](/de/docs/WebAssembly/Reference/Table)
