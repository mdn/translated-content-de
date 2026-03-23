---
title: "grow: Wasm table instruction"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
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
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein Name, der der [Tabelle zugewiesen wurde](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` angenommen.

### Typ

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der anfängliche Wert, der für die neuen Tabellenelemente festgelegt wird. Sein Typ muss derselbe sein wie der ursprünglich festgelegte [`typ`](/de/docs/WebAssembly/Reference/Definitions/table#type) beim Erstellen der Tabelle.
- `grow_amount`
  - : Die Anzahl der Elemente, um die die Tabelle vergrößert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, der der Größe der Tabelle vor der Anwendung der `grow`-Anweisung entspricht, oder `-1`, wenn die Tabelle nicht vergrößert werden konnte, zum Beispiel aufgrund eines Speichermangels (OOM) oder wenn die neue Größe größer ist als die [maximale Größe der Tabelle](/de/docs/WebAssembly/Reference/Definitions/table#max_size).

Um die neue Tabellengröße nach Anwendung der `grow`-Anweisung abzurufen, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Anweisung.

### Opcodes

| Anweisung    | Binärformat              | Beispieltext => binär                                                                |
| ------------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `table.grow` | `0xfc 15:u32 𝑥:tableidx` | `(table.grow (i32.const 1) (ref.null func))` => `0xfc 0x0f 0x00 0x41 0x01 0xd0 0x70` |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine bestimmte Anzahl von Elementen zu erhöhen.

Eine Wasm-Tabelle kann aus JavaScript mit der Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie eine Tabelle erstellt wird, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch geändert und dann die Funktion, die an jedem Punkt in der Tabelle gespeichert ist, aufgerufen wird.

#### JavaScript

In unserem Skript beginnen wir mit dem Abrufen einer Referenz auf ein {{htmlelement("p")}} Element, in das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj` Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Als nächstes kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj` Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und einen `i32`.

Anschließend definieren wir einen Funktions-`type` namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Wir definieren dann zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die definierten Werte zurückgeben, und deklarieren sie im Voraus mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Danach definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem anfänglichen `ref.null` Wert, und überprüfen, ob das Ergebnis der Operation `-1` ist, was auf ein Scheitern hinweisen würde.
- Setzen wir unser Tabellenelement, um die `$f1` Funktion mithilfe von [`table.set`](/de/docs/WebAssembly/Reference/Table/set) zu enthalten, und rufen dann die importierte `$output` Funktion auf, indem wir ihr als Parameter den an das `output()` übergebenen `$elem` `externref` und den von der `$f1` Funktion zurückgegebenen Wert übergeben, der über `(call_indirect (type $ret_i32) (i32.const 0))` aus der Tabelle referenziert wird.
- Setzen wir unser Tabellenelement, um die `$f2` Funktion mit `table.set` zu enthalten, und rufen dann die `output()` Funktion erneut auf.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul heraus ausgeführt wird, der als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist der von den `$f1`- und `$f2`-Funktionen zurückgegebene Wert — `42` bzw. `100`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
