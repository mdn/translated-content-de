---
title: "fill: Wasm-Tabelleninstruktion"
short-title: fill
slug: WebAssembly/Reference/Table/fill
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Die **`table.fill`** [Tabelleninstruktion](/de/docs/WebAssembly/Reference/Table) setzt einen Bereich von Tabellenelementen auf denselben Wert.

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
  - : Der `table.fill` Instruktionstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, die Sie füllen möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name) als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index` {{optional_inline}}
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite, etc.

    Wenn der `identifier` weggelassen wird, wird automatisch `0` verwendet.

### Typ

```plain
[index, value, length] -> []
```

- `index`
  - : Der Index des ersten Elements, in dem die Referenz gespeichert werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 0)`.
- `value`
  - : Die Referenz, die in der Tabelle gespeichert werden soll. Diese muss von demselben [Typ](/de/docs/WebAssembly/Reference/Definitions/table#type) sein, mit dem die Tabelle definiert ist.
- `length`
  - : Die Anzahl der Elemente, in denen der Wert gespeichert werden soll, beginnend bei `index`. Dies muss ein `i32`-Wert sein.

### Ausnahmen

`table.fill` löst eine Ausnahme aus, wenn:

- `index` + `length` größer als [`table.size`](/de/docs/WebAssembly/Reference/Table/size) ist.

### Opcodes

| Instruktion  | Binäroperationscode                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `𝟶𝚡𝙵𝙲 17:𝚞𝟹𝟸` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beispiele

### Demonstration des `table.fill` Verhaltens

Dieses Beispiel zeigt, dass, wenn alle Elemente einer Tabelle in einer `table.fill`-Instruktion referenziert werden, all diese Elemente denselben Wert referenzieren.

#### JavaScript

In unserem Skript holen wir zunächst eine Referenz zu einem {{htmlelement("p")}}-Element, zu dem wir Ergebnisse ausgeben werden. Danach definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und importieren dabei das `obj`-Objekt.

Sobald das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()`-Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-Funktion `output()`, wobei darauf zu achten ist, dass wir deklarieren, dass sie zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und einen `i32`.

Dann definieren wir einen Funktionstyp namens `$ret_i32`, der einen `i32` zurückgibt, und eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und drei Elemente enthält.

Wir definieren nun eine grundlegende Funktion, die einen `i32` zurückgibt, und deklarieren sie vorab mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.fill`, um eine Referenz zur `$f1`-Funktion in jedem Tabellen-Slot zu speichern. Beachten Sie, wie wir den `starting_index` auf `0` gesetzt haben und die `element_span` auf das Ergebnis der [`table.size`](/de/docs/WebAssembly/Reference/Table/size)-Instruktion gesetzt haben, um sicherzustellen, dass wir _alle_ Tabellenelemente füllen.
- Rufen wir die importierte `$output`-Funktion auf und geben ihr als Parameter die `$elem` `externref`, die in die `output()`-Funktion übergeben wurde, und den Rückgabewert der Funktion, die im ersten Tabellenslot referenziert wird. Dadurch wird der Wert in das DOM ausgegeben.
- Wiederholen wir den letzten Schritt noch ein paar Mal, um die Rückgabewerte der in den anderen Tabellenelementen gespeicherten Funktionen in das DOM auszugeben.

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

Dies beweist, dass alle Tabellenelemente nun die `$f1`-Funktion referenzieren, welche `42` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
