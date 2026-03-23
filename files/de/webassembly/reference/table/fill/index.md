---
title: "fill: Wasm table-Befehl"
short-title: fill
slug: WebAssembly/Reference/Table/fill
l10n:
  sourceCommit: 54f08abfc534ac02e9f56a65080cd839fd126b2d
---

Der **`table.fill`** [Table-Befehl](/de/docs/WebAssembly/Reference/Table) setzt eine Reihe von Tabellenelementen auf denselben Wert.

{{InteractiveExample("Wat Demo: table.fill", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define table with 3 function slots
  (table $my_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (result i32)
    ;; Set the function referenced in every table element to $f1
    (table.fill $my_table
      (i32.const 0)
      (ref.func $f1)
      (i32.const 3)
    )

    ;; Call the function referenced in slot 2
    (call_indirect (type $ret_i32) (i32.const 2))
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
table.fill identifier
```

- `table.fill`
  - : Der `table.fill` Befehls-Typ. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, die Sie füllen möchten. Dieser kann einer der folgenden sein:
    - `name`
      - : Ein Kennname [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index` {{optional_inline}}
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Modul, `1` für die zweite, etc.

    Wenn der `identifier` weggelassen wird, ist die Standardeinstellung `0`.

### Typ

```plain
[index, value, length] -> []
```

- `index`
  - : Der Index des ersten Elements, um die Referenz zu speichern. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 0)`.
- `value`
  - : Die Referenz, die in der Tabelle gespeichert wird. Dies muss vom selben [Typ](/de/docs/WebAssembly/Reference/Definitions/table#type) sein, mit dem die Tabelle definiert ist.
- `length`
  - : Die Anzahl der Elemente, denen der Wert zugewiesen wird, beginnend bei `index`. Dies muss ein `i32`-Wert sein.

### Traps

`table.fill` erzeugt einen Trap, wenn:

- `index` + `length` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Binäre Kodierung

| Befehl       | Binärformat   | Beispieltext => Binär                                                                                         |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `0xfc 17:u32` | `(table.fill 0 (i32.const 0) (ref.func $f1) (i32.const 3))` => `0xfc 0x11 0x00 0x41 0x00 0xd2 0x00 0x41 0x03` |

## Beispiele

### Demonstration des Verhaltens von `table.fill`

Dieses Beispiel zeigt, dass, wenn alle Elemente einer Tabelle in einem `table.fill`-Befehl referenziert werden, alle diese Elemente denselben Wert referenzieren.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erhalten, an die wir die Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `obj`-Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-`output()`-Funktion und stellen sicher, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als nächstes definieren wir einen Funktions-Typ namens `$ret_i32`, der ein `i32` zurückgibt, sowie eine `table`, die Funktionsreferenzen speichert (weshalb `funcref` angegeben wird) und drei Elemente enthält.

Wir definieren nun eine grundlegende Funktion, die ein `i32` zurückgibt, und erklären sie vorab mit `(elem declare func $f1)`, sodass sie später referenziert werden kann.

Schließlich exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter annimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.fill`, um in jedem Tabellenslot eine Referenz auf die `$f1`-Funktion zu speichern. Beachten Sie, dass wir den `starting_index` auf `0` und die `element_span` auf das Ergebnis der [`table.size`](/de/docs/WebAssembly/Reference/Table/size)-Anweisung gesetzt haben, um sicherzustellen, dass wir _alle_ Tabellenelemente füllen.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr die Parameter `$elem` `externref`, die an die `output()`-Funktion übergeben wurde, und den Rückgabewert der im ersten Tabellenslot referenzierten Funktion. Dies führt dazu, dass der Wert in das DOM ausgegeben wird.
- Wiederholen wir den letzten Schritt ein weiteres Mal, um die Rückgabewerte der in den anderen Tabellenelementen gespeicherten Funktionen in das DOM auszugeben.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define an initially empty table of funcrefs with three slots
  (table $func_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (param $elem externref)
    ;; Set the function referenced in every table element to $f1
    (table.fill $func_table
      (i32.const 0) ;; starting index
      (ref.func $f1)
      (table.size $func_table) ;; Number of slots, not end index
    )

    ;; Call the output function, to output the return values of
    ;; the functions referenced in each table element to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 1))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 2))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies beweist, dass alle Tabellenelemente nun auf die `$f1`-Funktion verweisen, die `42` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
