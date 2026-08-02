---
title: "get: Wasm table Anweisung"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`table.get`** [Tabellenanweisung](/de/docs/WebAssembly/Reference/Table) ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.

{{InteractiveExample("Wat Demo: table.get", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import console.log() function and table containing strings
  (func $console_log (import "console" "log") (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  ;; Export run() function
  (func (export "run")
    ;; Call console.log() to log value stored in
    ;; table element
    (call $console_log
      (table.get $string_table (i32.const 0))
    )
  )
)
```

```js interactive-example
// Create a wasm table that stores external references
let table = new WebAssembly.Table({ element: "externref", initial: 0 });

// Initialize the string_table
table.grow(1);
table.set(0, "hello world!");

let imports = {
  console,
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run();
  },
);
```

## Syntax

```plain
table.get identifier
```

- `table.get`
  - : Der Anweisungstyp `table.get`. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein Identifikator für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein bei der Erstellung [festgelegter Name](/de/docs/WebAssembly/Reference/Definitions/table#name) für die Tabelle. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Modul, `1` für die zweite, usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, von dem der Wert abgerufen werden soll. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der Wert, der im Tabellenindex gespeichert ist. Dies wird der Elementtyp der Tabelle sein.

### Traps

`table.get` führt zum Trapping, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binärformat        | Beispieltext => Binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.get` | `0x25 𝑥:table_idx` | `table.get 0` => `0x25 0x01` |

## Beschreibung

Die `table.get`-Anweisung ruft einen Wert ab, der an einem bestimmten Index einer vorhandenen Tabelle gespeichert ist.

Wenn die Tabelle zum Speichern von [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)s initialisiert wurde, werden die abgerufenen Werte Referenzen auf in Wasm definierte Funktionen sein. Wenn die Tabelle zum Speichern von [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)s initialisiert wurde, können die abgerufenen Werte fast beliebige in JavaScript definierte Wertetypen sein.

Wasm-Tabellenwerte können von JavaScript aus mit der Methode [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) abgerufen werden.

## Beispiele

### Abrufen von Zeichenfolgen aus einer Tabelle

Dieses Beispiel zeigt, wie man eine Wasm-Tabelle in JavaScript erstellt und Zeichenfolgen darin speichert. Anschließend werden diese Zeichenfolgen aus dem Inneren von Wasm mit `table.get` abgerufen und mit einer importierten Funktion ausgegeben.

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz auf ein {{htmlelement("p")}}-Element erhalten, in das wir Ergebnisse ausgeben werden. Dann erstellen wir eine Wasm-Tabelle in JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)-Konstruktor, geben ihr eine anfängliche Größe von `0` und setzen sie auf `externref`-Werte.

Als Nächstes erhöhen wir die Größe der Tabelle auf zwei Elemente mit der Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) und verwenden die Methode [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set), um in jedem Tabellenelement eine andere Zeichenfolge zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports`-Objekt, das zwei Items enthält, die in Wasm importiert werden sollen:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.
- Die Tabelle, die wir zuvor erstellt haben.

Dann kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir das `imports`-Objekt während des Prozesses importieren.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, indem wir das `outputElem`-Element als Parameter übergeben.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
let imports = {
  funcs: {
    output(elem, val) {
      elem.textContent += `${val} `;
    },
  },
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run(outputElem);
  },
);
```

#### Wasm

In unserem Wasm-Modul importieren wir zuerst unsere zwei importierten Elemente:

- Die JavaScript-Funktion `output()`, die wir sicherstellen, dass sie mit zwei [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)-Parametern deklariert wird.
- Die Tabelle von Zeichenfolgen, die wir `$string_table` nennen.

Dann exportieren wir die `run()`-Funktion, die einen `externref` namens `$elem` als Parameter annimmt. Im Funktionskörper führen wir unsere importierte `output()`-Funktion zweimal aus. Wir geben in beiden Fällen dieselbe `$elem`-Referenz als ersten Parameter an und verwenden dann `table.get`, um aus der importierten Tabelle eine andere Zeichenfolge abzurufen, die als zweiter Parameter in jedem Fall verwendet wird.

```wat live-sample___basic-usage
(module
  (func $output (import "funcs" "output") (param externref) (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  (func (export "run") (param $elem externref)
    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 1))
    )
  )
)
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Dies ergibt Sinn, da jedes Mal, wenn die `output()`-Funktion aus dem Inneren des Wasm-Moduls ausgeführt wird, der Wert, der als zweiter Parameter an sie übergeben wird, in unserem Ergebnis-`<p>` im DOM ausgegeben wird. Jeder Wert ist eine der in der Tabelle gespeicherten Zeichenfolgen — `hello` und `world` beziehungsweise.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
