---
title: "table: Wasm-Definition"
short-title: table
slug: WebAssembly/Reference/Definitions/table
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`table`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) erstellt eine neue Tabelle.

{{InteractiveExample("Wat Demo: table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 2 function slots
  (table $return_values 2 funcref)

  ;; Define functions of that type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  ;; initialize table slots
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (local.get $index)
    (call_indirect (type $ret_i32))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

## Syntax

```plain
table name initial_size max_size type
```

- `table`
  - : Der `table`-Definitionstyp. Muss immer zuerst angegeben werden.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für die Tabelle. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`. Wenn dies weggelassen wird, kann die Tabelle durch ihren Index identifiziert werden, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite, usw.
- `initial_size`
  - : Eine ganze Zahl, die die anfängliche Größe der Tabelle darstellt.
- `max_size` {{optional_inline}}
  - : Eine ganze Zahl, die die maximale Größe angibt, bis zu der die Tabelle wachsen darf. Wenn dies nicht enthalten ist, hat die Tabelle keine maximale Größe und ihr Wachstum ist nur durch Systembeschränkungen wie den verfügbaren Speicher begrenzt.
- `type`
  - : Der Name des Funktionstyps, der gespeichert werden soll. Mögliche Werte sind:
    - [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
      - : Speichert Referenzen auf innerhalb von Wasm definierte Funktionen.
    - [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
      - : Speichert Referenzen auf externe in JavaScript definierte Werte.

## Beschreibung

WebAssembly-Tabellen ermöglichen die Speicherung von Referenzwerten, getrennt von byteorientierten WebAssembly-Speichern. Der Hauptanwendungsfall ist die Speicherung von Funktionsreferenzen, die mit `call_indirect` verwendet werden können, um indirekte Funktionsaufrufe für Sprachen zu unterstützen, die solche verwenden. Die `table`-Definition erstellt eine neue Tabelle.

Einer Tabelle muss eine anfängliche Größe und ein Speichertyp zugewiesen werden. Dieses Beispiel erstellt eine Tabelle mit zwei Speicherslots, die nur Referenzen auf Funktionen speichern, die innerhalb von Wasm erstellt wurden (angezeigt durch [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)):

```wat
(table 2 funcref)
```

Optional können Sie auch eine Kennung angeben, die zur Identifizierung der Tabelle an anderer Stelle verwendet werden kann, sowie eine maximale Wachstumsgröße. Zum Beispiel:

```wat
(table $my_table 2 10 funcref)
```

Das Folgende definiert einen Funktionstyp, definiert eine grundlegende Funktion mit diesem Typ, die eine `i32` zurückgibt, und deklariert sie vorab mit `(elem declare func $f1)`, sodass sie später referenziert werden kann.

```wat
(type $ret_i32 (func (result i32)))

(func $f1 (type $ret_i32)
  (i32.const 42)
)

(elem declare func $f1)
```

Um eine Funktion, die in einer Tabelle referenziert ist, aufzurufen, müssen Sie die Tabelle und den Indexwert referenzieren, an dem die Funktionsreferenz gespeichert ist. Das folgende Beispiel verwendet `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

Es ist möglich, Tabellen zur Laufzeit mit Anweisungen wie [`table.set`](/de/docs/WebAssembly/Reference/Table/set) und [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill) zu ändern und Werte mit [`table.get`](/de/docs/WebAssembly/Reference/Table/get) abzurufen.

### Externe Referenzen

Sie können auch externe Referenzen, die in JavaScript definiert sind, in einer Wasm-Tabelle speichern, indem Sie das Schlüsselwort [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) angeben. Zum Beispiel:

```wat
(table $my_table 2 10 externref)
```

### Mehrere Tabellen

Sie können mehrere Tabellen im selben Wasm-Modul erstellen, zum Beispiel:

```wat
(table $table_1 1 2 funcref)

(table $table_2 1 2 funcref)
```

Sie könnten eine Funktion wie diese verwenden, um jede Tabelle mit einer anderen Funktion zu füllen:

```wat
(func $populate
  (table.set $table_1
    (i32.const 0)
    (ref.func $f1)
  )
  (table.set $table_2
    (i32.const 0)
    (ref.func $f2)
  )
)
```

Dann könnten Sie die `$populate`-Funktion aufrufen und `call_indirect` verwenden, um die Funktionen in jeder Tabelle zu referenzieren. Das folgende Snippet referenziert die Tabellen anhand ihres [identifizierenden Namens](#name):

```wat
(func (export "accessTable")
  (call $populate)
  (call_indirect $table_1 (type $ret_i32) (i32.const 0))
  (call_indirect $table_2 (type $ret_i32) (i32.const 0))

  ...
)
```

Aber Sie könnten stattdessen die Tabellen anhand ihrer Indexwerte referenzieren (`0` bezeichnet die erste Tabelle im Modul, `1` die zweite Tabelle, usw.):

```wat
(call_indirect 0 (type $ret_i32) (i32.const 0))
(call_indirect 1 (type $ret_i32) (i32.const 0))
```

Wenn Sie keinen identifizierenden Namen _oder_ einen Index angeben, wird der Index `0` angenommen:

```wat
;; Accesses the table with index 0
(call_indirect (type $ret_i32) (i32.const 0))
```

## Beispiele

### Erstellen einer grundlegenden Tabelle

Dieses Beispiel zeigt, wie man eine grundlegende Tabelle erstellt, ein paar Funktionen darin speichert und dann eine Funktion aus der Tabelle aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf ein {{htmlelement("p")}}-Element zu erhalten, an das wir Ergebnisse ausgeben werden. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-`accessTable()`-Funktion auf, die im WebAssembly-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, und übergeben ihr die Zahl `0` als Parameter. Schließlich setzen wir den Rückgabewert der `accessTable()`-Funktion auf den `textContent`-Wert des `<p>`-Elements, damit wir ihn überprüfen können.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(0);
  output.textContent = value;
});
```

#### Wasm

In unserem Wasm-Modul definieren wir zuerst einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ namens `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben. Anschließend definieren wir eine `table` namens `$return_values` mit zwei Slots, die Funktionsreferenzen speichert (daher wird `funcref` angegeben) und initialisieren sie, indem wir die beiden Slots mit Referenzen auf die Funktionen `$f1` und `$f2` füllen.

Schließlich exportieren wir die `accessTable()`-Funktion, die einen `i32` namens `$index` als Parameter übernimmt und einen `i32` zurückgibt. Innerhalb des Funktionskörpers verwenden wir `call_indirect`, um die Funktion aufzurufen, die in der Tabelle am Indexwert `$index` referenziert wird.

```wat live-sample___basic-usage
(module
  (type $ret_i32 (func (result i32)))
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  (table $return_values 2 funcref)
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (call_indirect (type $ret_i32) (local.get $index))
  )
)
```

#### Ergebnis

Der ausgegebene Wert ist wie folgt:

{{embedlivesample("basic-usage", "100%", 100)}}

Das ergibt Sinn, da die exportierte `accessTable()`-Funktion einen Indexwert übergeben erhält. Innerhalb des Wasm-Moduls rufen wir die Funktion auf, die an diesem Index in der definierten Tabelle verfügbar ist, welche den Wert zurückgibt, den wir ausgegeben sehen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
