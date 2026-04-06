---
title: "size: Wasm table instruction"
short-title: size
slug: WebAssembly/Reference/Table/size
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Die **`table.size`** [Tabelle-Anweisung](/de/docs/WebAssembly/Reference/Table) gibt die aktuelle Größe der Tabelle zurück.

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
  - : Der Bezeichner für die Tabelle, deren Größe Sie abrufen möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Ein beim Erstellen der Tabelle gesetzter [Name](/de/docs/WebAssembly/Reference/Definitions/table#name). Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird standardmäßig `0` angenommen.

### Typ

```plain
[] -> [length]
```

- Länge
  - : Ein `i32`, der der aktuellen Anzahl von Elementen in der Tabelle entspricht.

### Opcodes

| Anweisung    | Binärformat               | Beispieltext => binär              |
| ------------ | ------------------------- | ---------------------------------- |
| `table.size` | `0xFC 16:u32 𝑥:table_idx` | `table.size 0` => `0xfc 0x10 0x00` |

## Beschreibung

`table.size` wird verwendet, um die Größe einer Tabelle zurückzugeben.

Die Größe einer Wasm-Tabelle kann über JavaScript mit der [`table.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) Eigenschaft abgerufen werden.

## Beispiele

### Beobachtung von Zunahmen der Tabellengröße

Dieses Beispiel zeigt, wie man eine Tabelle erstellt und ihre Größe beobachtet, während die Tabelle mittels `table.size` wächst.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erhalten, an das wir die Ergebnisse ausgeben werden. Wir definieren dann ein `obj`-Objekt, das eine Funktion namens `output()` enthält, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `obj`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf dem WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt auf und übergeben das `outputElem`-Element als Parameter.

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

In unserem Wasm-Modul importieren wir zuerst die JavaScript-Funktion `output()`, wobei wir sicherstellen, dass sie zwei Parameter hat: einen [`externref`](/de/docs/WebAssembly/Reference/Types/externref) und einen `i32`.

Als nächstes definieren wir eine `table`, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und leer ist.

Schließlich exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter übernimmt. Im Funktionskörper:

- Verwenden wir `table.grow`, um die Tabellengröße um `1` mit einem anfänglichen `ref.null`-Wert zu vergrößern.
- Rufen wir die importierte `$output`-Funktion auf und übergeben ihr als Parameter den übergebenen `$elem` `externref` in die `output()`-Funktion und den Rückgabewert der `table.size`-Anweisung. Dies führt dazu, dass die Tabellengröße im DOM ausgegeben wird.
- Wiederholen wir die letzten zwei Schritte, was dazu führt, dass die Tabelle um ein weiteres Element vergrößert wird und die Größe erneut im DOM ausgegeben wird.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul aufgerufen wird, der in sie als zweiter Parameter eingehende Wert in unserem Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist die Tabellengröße zu jedem Zeitpunkt — `1` bzw. `2`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
