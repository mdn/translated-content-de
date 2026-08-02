---
title: "grow: Wasm table instruction"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.grow`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) erhöht die Größe einer Tabelle um eine angegebene Anzahl von Elementen.

{{InteractiveExample("Wat Demo: table.grow", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 0 function slots
  (table $return_funcs 0 funcref)

  ;; Define a function of the specified type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func $populate
    (table.grow $return_funcs
      ref.null func
      (i32.const 1)
    )
    (drop)
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f1)
    )
  )

  (func (export "run") (result i32)
    (call $populate)
    (call_indirect (type $ret_i32) (i32.const 0))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.run();
  console.log(value);
});
```

## Syntax

```plain
table.grow identifier
```

- `table.grow`
  - : Der `table.grow` Anweisungstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein Bezeichnername [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Modul, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird der Wert `0` standardmäßig verwendet.

### Type

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der Anfangswert, der für die neuen Tabellenelemente festgelegt wird. Sein Typ muss mit dem [`type`](/de/docs/WebAssembly/Reference/Definitions/table#type) übereinstimmen, der beim Erstellen der Tabelle initial festgelegt wurde.
- `grow_amount`
  - : Die Anzahl der Elemente, um die die Tabelle vergrößert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, der der Größe der Tabelle entspricht, bevor die `grow`-Anweisung auf sie angewendet wird, oder `-1`, wenn die Tabelle nicht vergrößert werden konnte, zum Beispiel aufgrund eines Out-of-Memory (OOM) Fehlers oder wenn die neue Größe größer als die [maximale Größe der Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#max_size) ist.

Um die neue Tabellengröße nach dem Anwenden der `grow`-Anweisung zu ermitteln, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Anweisung.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => Binär                                                                |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------ |
| `table.grow` | `0xfc 15:u32 𝑥:table_idx` | `(table.grow (i32.const 1) (ref.null func))` => `0xfc 0x0f 0x00 0x41 0x01 0xd0 0x70` |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine bestimmte Anzahl von Elementen zu erhöhen.

Eine wasm-Tabelle kann aus JavaScript heraus mithilfe der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) Methode vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch geändert und dann die in der Tabelle gespeicherte Funktion bei jedem Punkt aufgerufen werden kann.

#### JavaScript

In unserem Skript beginnen wir, indem wir einen Verweis auf ein {{htmlelement("p")}} Element erhalten, in das wir die Ergebnisse ausgeben werden. Wir definieren dann ein `obj` Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `obj` Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem` Element als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

const obj = {
  output(elem, val) {
    elem.textContent += `${val} `;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  obj,
}).then((result) => {
  value = result.instance.exports.run(outputElem);
});
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und einen `i32`.

Als nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32` Wert zurückgibt. Wir definieren dann zwei Funktionen basierend auf diesem Typ, genannt `$f1` und `$f2`, die die darin definierten Werte zurückgeben und diese mit `(elem declare func $f1 $f2)` vorab deklarieren, damit sie später referenziert werden können. Als nächstes definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter erhält. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu vergrößern, mit einem anfänglichen `ref.null` Wert, und prüfen, ob das Ergebnis der Operation `-1` ist, was auf einen Fehler hinweisen würde.
- Setzen wir unser Tabellenelement, um die `$f1` Funktion mithilfe von [`table.set`](/de/docs/WebAssembly/Reference/Table/set) zu enthalten, und rufen dann die importierte `$output` Funktion auf, wobei wir als Parameter den an die `output()` Funktion übergebenen `$elem` `externref` und den von der `$f1` Funktion zurückgegebenen Wert übergeben, der aus der Tabelle mithilfe von `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen wir unser Tabellenelement, um die `$f2` Funktion mit `table.set` zu enthalten, und rufen dann erneut die `output()` Funktion auf.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  (elem declare func $f1 $f2)

  ;; Define an initially empty table of funcrefs
  (table $func_table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial value to null.
    ;; Check the result for -1, which indicates failure.
    (if
      (i32.eq
        (table.grow $func_table
          ref.null func
          (i32.const 1)
        )
        i32.const -1
      )

      ;; Trap if we failed to grow the table
      (then unreachable)
    )

    ;; Set the first function in the table to f1
    (table.set $func_table
        (i32.const 0)
        (ref.func $f1)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    ;; Set the first function in the table to f2
    (table.set $func_table
        (i32.const 0)
        (ref.func $f2)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ist sinnvoll, da jedes Mal, wenn die `output()` Funktion aus dem Inneren des Wasm-Moduls ausgeführt wird, der Wert, der als zweiter Parameter in sie übergeben wird, in unserem Ergebnis `<p>` im DOM ausgegeben wird. Jeder Wert ist der Wert, der von den `$f1` und `$f2` Funktionen zurückgegeben wird — `42` und `100` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
