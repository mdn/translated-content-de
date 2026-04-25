---
title: "get: Wasm Tabellenanweisung"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
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
  - : Der `table.get` Anweisungstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie zuerst erstellt wurde. Dies muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, von dem der Wert abgerufen werden soll. Dies muss ein `i32` Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der in der Tabelle am Index gespeicherte Wert. Dies wird der Elementtyp der Tabelle sein.

### Ausnahmen

`table.get` löst eine Ausnahme aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binärformat        | Beispieltext => Binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.get` | `0x25 𝑥:table_idx` | `table.get 0` => `0x25 0x01` |

## Beschreibung

Die `table.get` Anweisung ruft einen Wert ab, der an einem bestimmten Index einer vorhandenen Tabelle gespeichert ist.

Wenn die Tabelle mit der Speicherung von [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)s initialisiert wurde, sind die abgerufenen Werte Referenzen auf Funktionen, die innerhalb von Wasm definiert sind. Wenn die Tabelle mit der Speicherung von [`externref`](/de/docs/WebAssembly/Reference/Types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jeden in JavaScript definierten Wertetyp darstellen.

Wasm-Tabellenwerte können aus JavaScript mit der [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) Methode abgerufen werden.

## Beispiele

### Abrufen von Zeichenfolgen aus einer Tabelle

Dieses Beispiel zeigt, wie Sie eine Wasm-Tabelle in JavaScript erstellen und Zeichenfolgen darin speichern und diese Zeichenfolgen dann aus Wasm mithilfe von `table.get` abrufen und mit einer importierten Funktion ausgeben.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}} Element zu holen, in das wir die Ergebnisse ausgeben werden. Wir erstellen dann eine Wasm-Tabelle von JavaScript aus mithilfe des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table) Konstruktors, geben ihr eine anfängliche Größe von `0` und legen fest, dass sie `externref` Werte enthält.

Anschließend erhöhen wir die Größe der Tabelle auf zwei Elemente mithilfe der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) Methode und verwenden die [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set) Methode, um in jedem Tabellenelement einen anderen String zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports` Objekt, das zwei zu importierende Elemente enthält:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.
- Die Tabelle, die wir zuvor erstellt haben.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode und importieren dabei das `imports` Objekt.

Nachdem das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm `run()` Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt zur Verfügung steht, und geben ihr das `outputElem` Element als Parameter.

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

In unserem Wasm-Modul importieren wir zunächst unsere beiden Elemente:

- Die JavaScript-Funktion `output()`, bei der wir sicherstellen, dass sie mit zwei [`externref`](/de/docs/WebAssembly/Reference/Types/externref) Parametern deklariert wird.
- Die Zeichenfolgen-Tabelle, die wir `$string_table` nennen.

Wir exportieren dann die `run()` Funktion, die einen `externref` namens `$elem` als Parameter erhält. Innerhalb des Funktionskörpers führen wir unsere importierte `output()` Funktion zweimal aus. Wir geben in beiden Fällen dieselbe `$elem` Referenz als ersten Parameter an und verwenden dann `table.get`, um einen anderen String aus der importierten Tabelle abzurufen, der als zweiter Parameter verwendet wird.

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

Dies ergibt Sinn, da jedes Mal, wenn die `output()` Funktion aus dem Wasm-Modul heraus aufgerufen wird, der Wert, der als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>`-Element im DOM gedruckt wird. Jeder Wert ist einer der in der Tabelle gespeicherten Strings — `hello` und `world` entsprechend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
