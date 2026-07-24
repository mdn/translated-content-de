---
title: "grow: Wasm-Tabelle-Anweisung"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`table.grow`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) erhöht die Größe einer Tabelle um eine bestimmte Anzahl von Elementen.

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
  - : Der `table.grow` Anweisungstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [der für die Tabelle festgelegt wurde](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$` Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der Anfangswert, der für die neuen Tabellenelemente festgelegt wird. Sein Typ muss derselbe sein wie der [anfänglich festgelegte Typ](/de/docs/WebAssembly/Reference/Definitions/table#type), als die Tabelle erstellt wurde.
- `grow_amount`
  - : Die Anzahl von Elementen, um die die Tabelle vergrößert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, der der Größe der Tabelle entspricht, bevor die `grow`-Anweisung darauf angewendet wird, oder `-1`, wenn die Tabelle nicht vergrößert werden konnte, zum Beispiel aufgrund eines Speichermangels (OOM-Fehler) oder die neue Größe größer ist als die [maximale Größe der Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#max_size).

Um die neue Tabellengröße zu erhalten, nachdem die `grow`-Anweisung darauf angewendet wurde, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Anweisung.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => binär                                                                |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------ |
| `table.grow` | `0xfc 15:u32 𝑥:table_idx` | `(table.grow (i32.const 1) (ref.null func))` => `0xfc 0x0f 0x00 0x41 0x01 0xd0 0x70` |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine bestimmte Anzahl von Elementen zu erhöhen.

Eine Wasm-Tabelle kann von JavaScript aus mit der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) Methode vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch ändert und dann die Funktion aufruft, die zu jedem Zeitpunkt in der Tabelle gespeichert ist.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}} Element zu erhalten, in das wir Ergebnisse ausgeben werden. Wir definieren dann ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Dann kompilieren und instanziieren wir unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode, wobei wir das `obj`-Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist und übergeben das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, und stellen sicher, dass wir deklarieren, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und ein `i32`.

Dann definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Anschließend definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die darin definierten Werte zurückgeben und deklarieren sie voraus mit `(elem declare func $f1 $f2)`, sodass sie später referenziert werden können. Danach definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und anfänglich leer ist.

Schließlich exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem initialen `ref.null`-Wert, und überprüfen, ob das Operationsergebnis `-1` ist, was auf ein Scheitern hindeuten würde.
- Setzen unser Tabellenelement, um die Funktion `$f1` zu enthalten, mittels [`table.set`](/de/docs/WebAssembly/Reference/Table/set), und rufen dann die importierte `$output`-Funktion auf und übergeben ihr die als Parameter übergebenen `$elem`-`externref` an die `output()`-Funktion, und den Wert, der von der `$f1`-Funktion zurückgegeben wird, die aus der Tabelle mithilfe `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen unser Tabellenelement, um die Funktion `$f2` zu enthalten, und rufen dann die `output()`-Funktion erneut auf.

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

Die Ausgabe erfolgt wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies macht Sinn, da jedes Mal, wenn die `output()`-Funktion vom Inneren des Wasm-Moduls aus aufgerufen wird, der Wert, der als zweiter Parameter an sie übergeben wird, in unser Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist der von den `$f1`- und `$f2`-Funktionen zurückgegebene Wert — `42` bzw. `100`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
