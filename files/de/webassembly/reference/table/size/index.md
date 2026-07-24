---
title: "size: Wasm table instruction"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`table.size`** [tabellenanweisung](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

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
  - : Der `table.size` Anweisungstyp. Muss immer zuerst inkludiert werden.
- `identifier` {{optional_inline}}
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[] -> [length]
```

- Länge
  - : Ein `i32`, der der aktuellen Anzahl der in der Tabelle enthaltenen Elemente entspricht.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => binär              |
| ------------ | ------------------------- | ---------------------------------- |
| `table.size` | `0xFC 16:u32 𝑥:table_idx` | `table.size 0` => `0xfc 0x10 0x00` |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Eine wasm-Tabelle kann über JavaScript mittels der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) Eigenschaft abgerufen werden.

## Beispiele

### Beobachten von Zunahmen der Tabellengröße

Dieses Beispiel zeigt, wie Sie eine Tabelle erstellen und ihre Größe beobachten können, während die Tabelle mit `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu holen, dem wir die Ergebnisse ausgeben. Dann definieren wir ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines angegebenen Elements hinzufügt.

Wir kompilieren und instanziieren unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `obj`-Objekt im Prozess importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf dem WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt auf, indem wir das `outputElem`-Element als Parameter übergeben.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat, einen [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) und ein `i32`.

Als nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher ist `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter nimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` zu erhöhen, mit einem anfänglichen `ref.null` Wert.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr als Parameter den `$elem` `externref`, der in die `output()`-Funktion übergeben wurde, und den Rückgabewert der `table.size` Anweisung. Dies führt dazu, dass die Tabellengröße im DOM ausgegeben wird.
- Wiederholen wir die letzten beiden Schritte erneut, wodurch die Tabelle um ein weiteres Element vergrößert wird und die Größe erneut im DOM ausgegeben wird.

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

Das Ergebnis ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul ausgeführt wird, der in sie als zweiter Parameter übergebene Wert in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist die Tabellengröße zu jedem Zeitpunkt — `1` und `2` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
