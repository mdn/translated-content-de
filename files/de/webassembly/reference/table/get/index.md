---
title: "get: Wasm table instruction"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
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
  - : Der `table.get` Anweisungstyp. Muss immer zuerst eingeschlossen sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die Tabelle festgelegt](/de/docs/WebAssembly/Reference/Definitions/table#name) als sie zuerst erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, wird er standardmäßig auf `0` gesetzt.

### Typ

```plain
[index] -> [value]
```

- `index`
  - : Der Index in der Tabelle, um den Wert abzurufen. Dies muss ein `i32`-Wert sein, zum Beispiel `(i32.const 1)`.
- `value`
  - : Der in der Tabelle am Index gespeicherte Wert. Dies wird der Elementtyp der Tabelle sein.

### Traps

`table.get` löst einen Fehler aus, wenn:

- `index` größer ist als [`table.size`](/de/docs/WebAssembly/Reference/Table/size).

### Opcodes

| Anweisung   | Binärer Opcode                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `table.get` | `𝟶𝚡𝟸𝟶` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Beschreibung

Die `table.get` Anweisung ruft einen Wert ab, der an einem gegebenen Index einer vorhandenen Tabelle gespeichert ist.

Wenn die Tabelle zum Speichern von [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)s initialisiert wurde, sind die abgerufenen Werte Referenzen auf Funktionen, die innerhalb von Wasm definiert sind. Wenn die Tabelle zum Speichern von [`externref`](/de/docs/WebAssembly/Reference/Types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jede in JavaScript definierte Wertart sein.

Wasm-Tabellenwerte können mit der [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) Methode aus JavaScript abgerufen werden.

## Beispiele

### Abrufen von Zeichenketten aus einer Tabelle

Dieses Beispiel zeigt, wie eine Wasm-Tabelle in JavaScript erstellt wird, Zeichenketten darin gespeichert werden und diese dann in Wasm mit `table.get` abgerufen und mit einer importierten Funktion ausgegeben werden.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erhalten, dem wir Ergebnisse ausgeben werden. Dann erstellen wir eine Wasm-Tabelle aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)-Konstruktor, geben ihr eine Anfangsgröße von `0` und setzen sie auf das Enthalten von `externref`-Werten.

Als Nächstes erhöhen wir die Größe der Tabelle auf zwei Elemente mit der Methode [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) und verwenden die Methode [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set), um in jedem Tabellenelement eine andere Zeichenkette zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports`-Objekt, das zwei zu importierende Elemente in Wasm enthält:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.
- Die zuvor erstellte Tabelle.

Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) und importieren dabei das `imports`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `run()` auf, die im [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) Objekt der WebAssembly verfügbar ist, und übergeben ihr das `outputElem`-Element als Parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
let imports = {
  funcs: {
    output: function (elem, val) {
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

- Die JavaScript-Funktion `output()`, die wir sicherstellen, mit zwei [`externref`](/de/docs/WebAssembly/Reference/Types/externref)-Parametern zu deklarieren.
- Die Tabelle von Zeichenketten, die wir `$string_table` nennen.

Dann exportieren wir die Funktion `run()`, die einen `externref` namens `$elem` als Parameter nimmt. Innerhalb des Funktionskörpers führen wir unsere importierte `output()`-Funktion zweimal aus. Wir geben dieselbe `$elem`-Referenz als ersten Parameter in beiden Fällen an und verwenden dann `table.get`, um eine andere Zeichenkette aus der importierten Tabelle als zweiten Parameter in jedem Fall zu verwenden.

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

Das macht Sinn, da jedes Mal, wenn die `output()`-Funktion aus dem Wasm-Modul ausgeführt wird, der Wert, der als ihr zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist eine der in der Tabelle gespeicherten Zeichenketten — `hello` und `world` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
