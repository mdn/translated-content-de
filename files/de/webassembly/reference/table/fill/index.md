---
title: "fill: Wasm Tabellenanweisung"
short-title: fill
slug: WebAssembly/Reference/Table/fill
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die **`table.fill`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) setzt einen Bereich von Tabellenelementen auf den gleichen Wert.

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
  - : Der `table.fill` Anweisungstyp. Muss immer zuerst eingebunden werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, die Sie füllen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle vergeben](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, z. B. `$my_table`.
    - `index` {{optional_inline}}
      - : Die Indexnummer der Tabelle, z. B. `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` verwendet.

### Typ

```plain
[index, value, length] -> []
```

- `index`
  - : Der Index des ersten Elements, in dem die Referenz gespeichert werden soll. Dies muss ein `i32`-Wert sein, z. B. `(i32.const 0)`.
- `value`
  - : Die Referenz, die in der Tabelle gespeichert werden soll. Diese muss vom gleichen [Typ](/de/docs/WebAssembly/Reference/Definitions/table#type) sein, mit dem die Tabelle definiert wurde.
- `length`
  - : Die Anzahl der Elemente, für die der Wert ab `index` gespeichert werden soll. Dies muss ein `i32`-Wert sein.

### Traps

`table.fill` löst einen Fehler aus, wenn:

- `index` + `length` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung    | Binärer Opcode                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `𝟶𝚡𝙵𝙲 17:𝚞𝟹𝟸` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beispiele

### Demonstration des `table.fill`-Verhaltens

Dieses Beispiel zeigt, dass, wenn alle Elemente einer Tabelle in einer `table.fill`-Anweisung referenziert werden, alle diese Elemente denselben Wert referenzieren.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz zu einem {{htmlelement("p")}}-Element holen, das wir mit den Ergebnissen ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir das `obj`-Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt verfügbar ist, und geben ihr das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript `output()` Funktion und stellen sicher, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und ein `i32`.

Als Nächstes definieren wir einen Funktionstyp namens `$ret_i32`, der ein `i32` zurückgibt, und eine `table`, die Funktionsreferenzen speichert (daher `funcref` angegeben) und drei Elemente hat.

Wir definieren nun eine Grundfunktion, die ein `i32` zurückgibt, und deklarieren sie vorab mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

Schließlich exportieren wir die `run()` Funktion, die ein `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers:

- Verwenden wir `table.fill`, um eine Referenz zur `$f1` Funktion in jedem Tabellenplatz zu speichern. Beachten Sie, wie wir den `starting_index` auf `0` gesetzt haben und den `element_span` auf das Ergebnis der [`table.size`](/de/docs/WebAssembly/Reference/Table/size) Anweisung, um sicherzustellen, dass wir _alle_ Tabellenelemente ausfüllen.
- Rufen wir die importierte `$output` Funktion auf und übergeben ihr als Parameter das `$elem` `externref`, das in die `output()` Funktion übergeben wurde, und den Rückgabewert der Funktion, die im ersten Tabellenplatz referenziert wird. Dies führt zur Ausgabe des Wertes in das DOM.
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

Dies beweist, dass alle Tabellenelemente jetzt die `$f1` Funktion referenzieren, die `42` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
