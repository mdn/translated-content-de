---
title: "set: Wasm-Tabelle-Anweisung"
short-title: set
slug: WebAssembly/Reference/Table/set
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.set`** [Tabelle-Anweisung](/de/docs/WebAssembly/Reference/Table) ändert den in einem bestimmten Tabellenelement gespeicherten Wert.

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
  - : Der Anweisungstyp `table.set`. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, in der Sie eine Referenz speichern möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein bei der Erstellung der Tabelle [gesetzter Name](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Modul, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index, value] -> []
```

- `index`
  - : Der Elementindex, in dem der Wert gespeichert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der in der Tabelle gespeichert werden soll. Dieser muss dem Elementtyp entsprechen, mit dem die Tabelle definiert wurde.

### Fallen

`table.set` löst eine Falle aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binärformat        | Beispiel-Text => Binär       |
| ----------- | ------------------ | ---------------------------- |
| `table.set` | `0x26 𝑥:table_idx` | `table.set 0` => `0x26 0x01` |

## Beschreibung

Die `table.set`-Anweisung wird verwendet, um eine bestimmte Funktion in einem bestimmten Element einer vorhandenen Tabelle zu speichern. Insbesondere ermöglicht es wasm-Modulen, Referenzen, die in Tabellen enthalten sind, zur Laufzeit zu ändern.

Dies ist praktisch, wenn im späteren Verlauf eines Programms andere Referenzen erforderlich sind als die, mit denen die Tabelle initialisiert wurde. Zum Beispiel könnten Sie eine Tabelle mit einem Element erstellen, zwei Funktionen definieren und dann das Tabellenelement mit einer Referenz auf eine dieser Funktionen mit der `elem`-Moduldefinition initialisieren:

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

Bei der Verwendung von Anweisungen wie `table.set` müssen Sie auch die Funktionen mit `(elem declare ...)` vorab deklarieren, damit sie später referenziert werden können:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Später können Sie dann die in dem Tabellenelement gespeicherte Referenz dynamisch mit `table.set` ändern:

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

Eine wasm-Tabelle kann über JavaScript mit der Methode [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) vergrößert werden.

## Beispiele

### Erstellen, Vergrößern und Setzen einer Tabelle

Dieses Beispiel zeigt, wie man eine Tabelle erstellt, ihre Größe vergrößert, die darin gespeicherten Funktionen dynamisch ändert und dann die in der Tabelle gespeicherte Funktion zu jedem Zeitpunkt aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu holen, zu dem wir Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilierten und instanziierten dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei das `obj`-Objekt in den Prozess importiert wird.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

Als nächstes definieren wir einen Funktions`typ` namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei auf diesem Typ basierende Funktionen namens `$f1` und `$f2`, die die darin definierten Werte zurückgeben, und deklarieren sie mit `(elem declare func $f1 $f2)` vor, damit sie später referenziert werden können. Danach definieren wir eine `table` namens `$func_table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und anfänglich leer ist.

Schließlich exportieren wir die Funktion `run()`, die einen `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Nutzen wir `table.grow`, um die Tabellengröße um `1` zu vergrößern, mit einem anfänglichen `ref.null`-Wert, und prüfen, ob das Operationsergebnis `-1` ist, was auf einen Fehler hinweisen würde.
- Setzen unser Tabellenelement, um die `$f1`-Funktion mit `table.set` zu enthalten, rufen die importierte `$output`-Funktion auf, indem wir ihr als Parameter das `$elem`-`externref` übergeben, das an die `output()`-Funktion übergeben wird, und den Wert, der von der in der Tabelle referenzierten `$f1`-Funktion zurückgegeben wird, mit `(call_indirect (type $ret_i32) (i32.const 0))`.
- Setzen unser Tabellenelement, um die `$f2`-Funktion mit `table.set` zu enthalten und rufen die `output()`-Funktion erneut auf.

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

Das ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion innerhalb des wasm-Moduls ausgeführt wird, der darin als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist der Wert, der von den Funktionen `$f1` und `$f2` zurückgegeben wird — jeweils `42` und `100`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
