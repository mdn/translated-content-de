---
title: "size: Wasm Tabellenanweisung"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.size`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

{{InteractiveExample("Wat Demo: table.size", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 0 function slots
  (table $my_table 0 funcref)

  (func (export "run") (result i32)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow $my_table
      ref.null func
      (i32.const 1)
    )
    (drop)

    (table.size $my_table)
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
table.size identifier
```

- `table.size`
  - : Der Anweisungstyp `table.size`. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle gesetzt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[] -> [length]
```

- Länge
  - : Ein `i32`, der der aktuellen Anzahl der in der Tabelle enthaltenen Elemente entspricht.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => Binär              |
| ------------ | ------------------------- | ---------------------------------- |
| `table.size` | `0xFC 16:u32 𝑥:table_idx` | `table.size 0` => `0xfc 0x10 0x00` |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Eine Wasm-Tabellengröße kann über JavaScript mithilfe der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) Eigenschaft abgerufen werden.

## Beispiele

### Beobachten von Zunahmen der Tabellengröße

Dieses Beispiel zeigt, wie man eine Tabelle erstellt und ihre Größe beobachtet, während die Tabelle mit `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erfassen, in das wir die Ergebnisse ausgeben werden. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Anschließend kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `obj`-Objekt importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst die JavaScript-`output()`-Funktion, wobei wir sicherstellen, dass wir deklarieren, dass sie zwei Parameter hat, ein [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und ein `i32`.

Als Nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die ein `externref` namens `$elem` als Parameter übernimmt. Im Funktionskörper:

- Wir verwenden `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem initialen `ref.null` Wert.
- Wir rufen die importierte `$output`-Funktion auf und übergeben ihr als Parameter das in die `output()`-Funktion übergebene `$elem`-`externref` und den Rückgabewert der `table.size`-Anweisung. Das führt dazu, dass die Tabellengröße in das DOM ausgegeben wird.
- Wiederholen die letzten beiden Schritte erneut, was dazu führt, dass die Tabelle um ein weiteres Element wächst und die Größe erneut in das DOM ausgegeben wird.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define an initially empty table of funcrefs
  (table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )

    ;; Grow the table by 1, setting the initial values to null.
    (table.grow
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ergibt Sinn, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul aufgerufen wird, der Wert, der ihr als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist die Tabellengröße zu jedem Zeitpunkt — `1` und `2` respektive.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
