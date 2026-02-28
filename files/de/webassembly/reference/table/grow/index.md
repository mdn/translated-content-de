---
title: "grow: Wasm-Tabelle-Anweisung"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die **`table.grow`** [Tabelle-Anweisung](/de/docs/WebAssembly/Reference/Table) erhöht die Größe einer Tabelle um eine bestimmte Anzahl von Elementen.

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
  - : Der `table.grow`-Anweisungstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein bei der Erstellung der Tabelle [festgelegter Name](/de/docs/WebAssembly/Reference/Definitions/table#name), der mit einem `$`-Symbol beginnen muss, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Type

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der Initialwert, der für die neuen Tabellenelemente festgelegt wird. Sein Typ muss derselbe sein wie der [`type`](/de/docs/WebAssembly/Reference/Definitions/table#type), der ursprünglich bei der Erstellung der Tabelle festgelegt wurde.
- `grow_amount`
  - : Die Anzahl von Elementen, um die die Tabelle vergrößert werden soll. Dies muss ein `i32` Wert sein, zum Beispiel `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, der der Größe der Tabelle vor der Anwendung der `grow`-Anweisung entspricht, oder `-1`, wenn die Tabelle nicht vergrößert werden konnte, zum Beispiel aufgrund eines Out-of-Memory-(OOM)-Fehlers oder wenn die neue Größe größer als [die Maximalgröße der Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#max_size) ist.

Um die neue Tabellengröße nach der Anwendung der `grow`-Anweisung abzurufen, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size)-Anweisung.

### Opcodes

| Anweisung    | Binärer Opcode                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| `table.grow` | `𝟶𝚡𝙵𝙲 15:𝚞𝟹𝟸` ([Variable Breite LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine bestimmte Anzahl von Elementen zu erhöhen.

Eine Wasm-Tabelle kann aus JavaScript heraus mithilfe der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)-Methode vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie eine Tabelle erstellt wird, ihre Größe vergrößert wird, die in ihr gespeicherten Funktionen dynamisch geändert werden und dann die Funktion an jedem Punkt in der Tabelle aufgerufen wird.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erfassen, das wir für die Ergebnisausgabe verwenden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen bestimmten Wert dem `textContent` eines angegebenen Elements hinzufügt.

Anschließend kompilieren und instanziieren wir unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im WebAssembly-`Instance`-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion und stellen sicher, dass wir zwei Parameter deklarieren: einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als Nächstes definieren wir einen Funktions-`type` namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen auf Basis dieses Typs namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben, und deklarieren sie vorab mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Danach definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher ist `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` mit einem initialen `ref.null`-Wert zu vergrößern und prüfen, ob das Operationsergebnis `-1` ist, was einen Fehler anzeigen würde.
- Setzen wir unser Tabellenelement so, dass es die `$f1`-Funktion enthält, und verwenden dann `table.set`, um die importierte `$output`-Funktion aufzurufen, die als Parameter den an die `output()`-Funktion übergebenen `$elem` `externref` und den von der `$f1`-Funktion zurückgegebenen Wert erhält, der von der Tabelle über `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen wir unser Tabellenelement so, dass es die `$f2`-Funktion enthält, und rufen dann die `output()`-Funktion erneut auf.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion vom Wasm-Modul aus ausgeführt wird, der in sie als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist der von den `$f1`- und `$f2`-Funktionen zurückgegebene Wert — `42` bzw. `100`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
