---
title: "set: Wasm-Tabelle Befehl"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Der **`table.set`** [Tabellenbefehl](/de/docs/WebAssembly/Reference/Table) ändert den Wert, der in einem bestimmten Tabellenelement gespeichert ist.

{{InteractiveExample("Wat Demo: table.set", "tabbed-taller")}}

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
table.set identifier
```

- `table.set`
  - : Der `table.set` Befehlstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in der Sie eine Referenz speichern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein Bezeichnername, der der Tabelle zugewiesen wurde, als sie zuerst erstellt wurde, als [Name für die Tabelle gesetzt](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, in dem der Wert gespeichert wird. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dies muss mit dem Elementtyp übereinstimmen, mit dem die Tabelle definiert wurde.

### Traps

`table.set` führt zu einem Fehler (`trap`), wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Befehl      | Binärer Opcode                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `table.set` | `𝟶𝚡𝟸𝟼` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

Der `table.set` Befehl wird verwendet, um eine bestimmte Funktion in einem bestimmten Element einer bestehenden Tabelle zu speichern. Insbesondere ermöglicht er es Wasm-Modulen, Referenzen, die in Tabellen enthalten sind, zur Laufzeit zu ändern.

Dies ist nützlich, wenn später im Programmablauf andere Referenzen benötigt werden als diejenigen, mit denen die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einer Referenz auf eine dieser Funktionen unter Verwendung der `elem` Moduldefinition initialisieren:

```wat
(module
  ;; Create table with 1 function slot
  (table $return_funcs 1 funcref)

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  ;; initialize table slot
  (elem (i32.const 0) $f1)

  ...
```

Beim Einsatz von Befehlen wie `table.set` müssen Sie auch die Funktionen mit `(elem declare ...)` vorab deklarieren, damit sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann die Funktionsreferenz, die im Tabellenelement gespeichert wurde, dynamisch mit `table.set` ändern:

```wat
  ...

  (func $populate
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f2)
    )
  )

  ...
```

Eine Wasm-Tabelle kann aus JavaScript mit der [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode erweitert werden.

## Beispiele

### Erstellen, Erweitern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe erweitert, die darin gespeicherten Funktionen dynamisch ändert und dann die Funktion aufruft, die zu jedem Zeitpunkt in der Tabelle gespeichert ist.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}} Element zu erhalten, an das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert dem `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()`-Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat, eine [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als nächstes definieren wir einen Funktions`typ` namens `$ret_i32`, der einen `i32` Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben, und deklarieren sie vorab mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Als nächstes definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher die Angabe von `funcref`) und anfänglich leer ist.

Schließlich exportieren wir die `run()` Funktion, die eine `externref` namens `$elem` als Parameter akzeptiert. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erweitern, mit einem anfänglichen `ref.null` Wert, wobei überprüft wird, ob das Operationsergebnis `-1` ist, was auf einen Fehler hinweisen würde.
- Setzen wir unser Tabellenelement, um die `$f1` Funktion mit `table.set` zu enthalten, dann rufen wir die importierte `$output` Funktion auf und übergeben ihr als Parameter die `$elem` `externref`, die an die `output()` Funktion übergeben wurde, und den Wert, der von der `$f1` Funktion zurückgegeben wird, welche aus der Tabelle mittels `(call_indirect (type $ret_i32) (i32.const 0))` referenziert wird.
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

Dies ist sinnvoll, da jedes Mal, wenn die `output()` Funktion aus dem Wasm-Modul heraus aufgerufen wird, der als zweiter Parameter übergebene Wert in unserem Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist der von den `$f1` und `$f2` Funktionen zurückgegebene Wert — `42` und `100` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
