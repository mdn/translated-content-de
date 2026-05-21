---
title: "table.get: Wasm-Tabellenanweisung"
short-title: get
slug: WebAssembly/Reference/Table/get
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
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
  - : Der Instructionstyp `table.get`. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichner für die Tabelle, aus der Sie eine Referenz abrufen möchten. Dies kann eine der folgenden sein:
    - `name`
      - : Ein identifizierender Name, der [für die Tabelle festgelegt wurde](/de/docs/WebAssembly/Reference/Definitions/table#name), als sie erstmals erstellt wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`.
    - `index`
      - : Die Indexnummer der Tabelle, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.

    Wenn der `identifier` weggelassen wird, ist der Standardwert `0`.

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

| Anweisung   | Binärformat        | Beispieltext => Binär        |
| ----------- | ------------------ | ---------------------------- |
| `table.get` | `0x25 𝑥:table_idx` | `table.get 0` => `0x25 0x01` |

## Beschreibung

Die `table.get`-Anweisung ruft einen Wert ab, der an einem gegebenen Index einer bestehenden Tabelle gespeichert ist.

Wenn die Tabelle zur Speicherung von [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)s initialisiert wurde, sind die abgerufenen Werte Referenzen auf innerhalb von Wasm definierte Funktionen. Wenn die Tabelle zur Speicherung von [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)s initialisiert wurde, können die abgerufenen Werte nahezu jeden in JavaScript definierten Wertetyp darstellen.

Wasm-Tabellenwerte können mithilfe der [`table.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Methode aus JavaScript abgerufen werden.

## Beispiele

### Abrufen von Zeichenketten aus einer Tabelle

Dieses Beispiel zeigt, wie man eine Wasm-Tabelle in JavaScript erstellt und Zeichenketten darin speichert, um diese dann von innerhalb von Wasm mithilfe von `table.get` abzurufen und mit einer importierten Funktion auszugeben.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, an das wir Ergebnisse ausgeben werden. Danach erstellen wir eine Wasm-Tabelle aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)-Konstruktor, geben eine Anfangsgröße von `0` an und legen fest, dass sie `externref`-Werte enthalten soll.

Als nächstes vergrößern wir die Tabelle auf zwei Elemente mithilfe der [`table.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)-Methode und verwenden die [`table.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set)-Methode, um unterschiedliche Zeichenketten in jedem Tabellenelement zu speichern.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

An diesem Punkt definieren wir ein `imports`-Objekt, das zwei zu importierende Elemente in Wasm enthält:

- Eine Funktion namens `output()`, die einen gegebenen Wert zum `textContent` eines gegebenen Elements hinzufügt.
- Die Tabelle, die wir zuvor erstellt haben.

Wir kompilieren und instanziieren dann unser Wasm-Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode und importieren dabei das `imports`-Objekt.

Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`run()`-Funktion auf, die im WebAssembly [[Instance]](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [[exports]](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben das `outputElem`-Element als Parameter.

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

- Die JavaScript-Funktion `output()`, die wir mit zwei [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)-Parametern deklarieren.
- Die Tabelle mit Zeichenketten, die wir `$string_table` nennen.

Wir exportieren dann die `run()`-Funktion, die einen `externref` mit dem Namen `$elem` als Parameter nimmt. Im Funktionskörper führen wir unsere importierte `output()`-Funktion zweimal aus. Wir verwenden in beiden Fällen denselben `$elem`-Referenz für den ersten Parameter und verwenden `table.get`, um eine andere Zeichenkette aus der importierten Tabelle für den zweiten Parameter abzurufen.

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

Dies ist sinnvoll, da jedes Mal, wenn die `output()`-Funktion von innerhalb des Wasm-Moduls ausgeführt wird, der Wert, der als zweiter Parameter übergeben wird, in unser Ergebnis-`<p>` im DOM gedruckt wird. Jeder Wert ist eine der Zeichenketten, die in der Tabelle gespeichert sind — `hello` und `world` jeweils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
