---
title: "set: Wasm table Instruction"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`table.set`** [Tabelleninstruktion](/de/docs/WebAssembly/Reference/Table) ändert den Wert, der in einem bestimmten Tabellenelement gespeichert ist.

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
  - : Der `table.set` Instruktionstyp. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in die Sie eine Referenz speichern möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name, [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstmals erstellt wurde. Muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird `0` als Standard verwendet.

### Typ

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, in dem der Wert gespeichert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dieser muss mit dem Elementtyp übereinstimmen, mit dem die Tabelle definiert wurde.

### Traps

`table.set` löst eine Ausnahme aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binärformat        | Beispieltext => binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.set` | `0x26 𝑥:table_idx` | `table.set 0` => `0x26 0x01` |

## Beschreibung

Die `table.set` Instruktion wird verwendet, um eine spezifizierte Funktion in einem bestimmten Element einer bestehenden Tabelle zu speichern. Insbesondere ermöglicht sie es Wasm-Modulen, Referenzen, die in Tabellen enthalten sind, zur Laufzeit zu ändern.

Dies ist praktisch, wenn später im Lebenszyklus eines Programms andere Referenzen erforderlich sind als diejenige, mit der die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einer Referenz auf eine dieser Funktionen mit der `elem` Moduldefinition initialisieren:

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

Beim Verwenden von Instruktionen wie `table.set` müssen Sie auch die Funktionen im Voraus mit `(elem declare ...)` deklarieren, damit sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann die in dem Tabellenelement gespeicherte Funktionsreferenz dynamisch mit `table.set` ändern:

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

Eine Wasm-Tabelle kann aus JavaScript heraus mit der [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch ändert und dann die in der Tabelle zu jedem Zeitpunkt gespeicherte Funktion aufruft.

#### JavaScript

In unserem Skript holen wir zunächst eine Referenz auf ein {{htmlelement("p")}} Element, in das wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj` Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und importieren das `obj` Objekt dabei.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die im [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt der WebAssembly verfügbar ist, und übergeben ihr das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript `output()` Funktion, wobei wir sicherstellen, dass sie zwei Parameter hat: einen [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und einen `i32`.

Nächstdem definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32` Wert zurückgibt. Dann definieren wir zwei Funktionen auf Basis dieses Typs namens `$f1` und `$f2`, die die definierten Werte zurückgeben, und deklarieren diese im Voraus mit `(elem declare func $f1 $f2)`, damit sie später referenziert werden können. Dann definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfangs leer ist.

Schließlich exportieren wir die `run()` Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu vergrößern, beginnend mit einem initialen `ref.null` Wert, und prüfen, ob das Operationsergebnis `-1` ist, was auf einen Fehler hinweisen würde.
- Setzen wir unser Tabellenelement, um die `$f1` Funktion mit `table.set` zu enthalten, und rufen anschließend die importierte `$output` Funktion auf, übergeben ihr als Parameter den `$elem` `externref` und den von der `$f1` Funktion zurückgegebenen Wert, der über `(call_indirect (type $ret_i32) (i32.const 0))` aus der Tabelle referenziert wird.
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

Die Ausgabe lautet wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ist sinnvoll, da jedes Mal, wenn die `output()` Funktion von innerhalb des Wasm-Moduls ausgeführt wird, der als zweiter Parameter übergebene Wert in unser Ergebnis `<p>` im DOM gedruckt wird. Jeder Wert ist der von den `$f1` und `$f2` Funktionen zurückgegebene Wert — `42` und `100` respektive.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
