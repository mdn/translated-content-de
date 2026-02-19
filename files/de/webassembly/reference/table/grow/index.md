---
title: "grow: Wasm table instruction"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
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
  - : Der Anweisungstyp `table.grow`. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name, [der für die Tabelle festgelegt wurde](/de/docs/WebAssembly/Reference/Definitions/table#name), als diese zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der Anfangswert für die neuen Tabellenelemente. Sein Typ muss derselbe sein wie der [`type`](/de/docs/WebAssembly/Reference/Definitions/table#type), der ursprünglich beim Erstellen der Tabelle festgelegt wurde.
- `grow_amount`
  - : Die Anzahl der Elemente, um die die Tabelle vergrößert werden soll. Dies muss ein `i32` Wert sein, zum Beispiel `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, das der Größe der Tabelle vor der Anwendung der `grow`-Anweisung entspricht, oder `-1`, wenn die Tabelle aufgrund eines Speicherplatzfehlers (OOM) oder wenn die neue Größe größer als die [maximale Größe der Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#max_size) ist, nicht vergrößert werden konnte.

Um die neue Tabellengröße nach der Anwendung der `grow`-Anweisung zu erhalten, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Anweisung.

### Opcodes

| Anweisung    | Binärer Opcode                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| `table.grow` | `𝟶𝚡𝙵𝙲 15:𝚞𝟹𝟸` ([variable-length LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine angegebene Anzahl von Elementen zu vergrößern.

Eine Wasm-Tabelle kann aus JavaScript heraus mit der Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch ändert und dann die Funktion aufruft, die in der Tabelle an jedem Punkt gespeichert ist.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, in das wir die Ergebnisse ausgeben werden. Wir definieren dann ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

const obj = {
  output: function (elem, val) {
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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir darauf achten, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Anschließend definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Wir definieren dann zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben, und deklarieren sie vorab mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Danach definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die Funktion `run()`, die einen `externref` namens `$elem` als Parameter annimmt. Im Funktionskörper führen wir folgendes aus:

- Verwenden Sie `table.grow`, um die Tabellengröße um `1` mit einem anfänglichen `ref.null`-Wert zu vergrößern, und prüfen Sie, ob das Operationsergebnis `-1` ist, was auf einen Fehler hinweisen würde.
- Setzen Sie unser Tabellenelement auf die Funktion `$f1` mit [`table.set`](/de/docs/WebAssembly/Reference/Table/set), rufen Sie dann die importierte `$output`-Funktion auf, indem Sie als Parameter den an die `output()`-Funktion übergebenen `$elem`-`externref` und den von der `$f1`-Funktion zurückgegebenen Wert, der von der Tabelle unter Verwendung von `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird, übergeben.
- Setzen Sie unser Tabellenelement auf die Funktion `$f2` mit `table.set` und rufen Sie dann erneut die `output()`-Funktion auf.

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

Das ergibt Sinn, da jedes Mal, wenn die Funktion `output()` aus dem Wasm-Modul ausgeführt wird, der als zweiter Parameter übergebene Wert in unserem Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist der von den Funktionen `$f1` und `$f2` zurückgegebene Wert — `42` und `100` respektive.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
