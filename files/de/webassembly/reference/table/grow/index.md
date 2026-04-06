---
title: "grow: Wasm-Tabellenanweisung"
short-title: grow
slug: WebAssembly/Reference/Table/grow
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
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
  - : Der `table.grow` Anweisungstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, die Sie vergrößern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein bei der erstmaligen Erstellung für die Tabelle [eingestellter Name](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, z. B. `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, z. B. `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wird der `identifier` weggelassen, wird er auf `0` standardmäßig gesetzt.

### Typ

```plain
[initial_value, grow_amount] -> [previous_length]
```

- `initial_value`
  - : Der anfängliche Wert, der für die neuen Tabellenelemente festgelegt wird. Sein Typ muss derselbe sein wie der [bei der Erstellung der Tabelle ursprünglich festgelegte `type`](/de/docs/WebAssembly/Reference/Definitions/table#type).
- `grow_amount`
  - : Die Anzahl von Elementen, um die die Tabelle vergrößert wird. Dies muss ein `i32`-Wert sein, z. B. `(i32.const 1)`.
- `previous_length`
  - : Ein `i32`, das der Größe der Tabelle vor der Anwendung der `grow`-Anweisung entspricht, oder `-1`, wenn die Tabelle nicht vergrößert werden konnte, z. B. aufgrund eines Speichermangels (OOM-Fehler) oder wenn die neue Größe größer als die [maximale Tabellengröße](/de/docs/WebAssembly/Reference/Definitions/table#max_size) ist.

Um die neue Tabellengröße abzurufen, nachdem die `grow`-Anweisung angewendet wurde, verwenden Sie die [`table.size`](/de/docs/WebAssembly/Reference/Table/size)-Anweisung.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => Binär                                                                |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------ |
| `table.grow` | `0xfc 15:u32 𝑥:table_idx` | `(table.grow (i32.const 1) (ref.null func))` => `0xfc 0x0f 0x00 0x41 0x01 0xd0 0x70` |

## Beschreibung

`table.grow` wird verwendet, um die Größe einer Tabelle um eine angegebene Anzahl von Elementen zu erhöhen.

Eine Wasm-Tabelle kann auch aus JavaScript heraus über die Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch ändert und dann die in der Tabelle gespeicherte Funktion zu jedem Zeitpunkt aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, einen Verweis auf ein {{htmlelement("p")}}-Element zu holen, in das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `obj`-Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben dabei das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie zwei Parameter hat, eine [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Darauf definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben, und deklarieren diese vorab mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Anschließend definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher ist `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die `run()`-Funktion, die eine `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu vergrößern, mit einem anfänglichen `ref.null`-Wert, und überprüfen, ob das Betriebsergebnis `-1` ist, was ein Fehler wäre.
- Setzen wir unser Tabellenelement, um die `$f1`-Funktion zu enthalten, und rufen dann die importierte `$output`-Funktion auf, die ihr als Parameter den in die `output()`-Funktion übergebenen `$elem`-`externref` und den Wert übergibt, der von der `$f1`-Funktion zurückgegeben wird, die aus der Tabelle mit `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
- Setzen unser Tabellenelement, um die `$f2`-Funktion zu enthalten, und rufen die `output()`-Funktion erneut auf.

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

Das macht Sinn, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul heraus ausgeführt wird, der Wert, der ihr als zweiter Parameter übergeben wird, in unserem Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist der von den Funktionen `$f1` und `$f2` zurückgegebene Wert — `42` bzw. `100`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
