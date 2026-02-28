---
title: "table: Wasm-Definition"
short-title: table
slug: WebAssembly/Reference/Definitions/table
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die **`table`** [Definition](/de/docs/WebAssembly/Reference/Definitions) erstellt eine neue Tabelle.

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
  - : Der `table` Definitionstyp. Muss immer zuerst angegeben werden.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für die Tabelle. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_table`. Wenn dieser weggelassen wird, kann die Tabelle über ihren Index identifiziert werden, zum Beispiel `0` für die erste Tabelle im Wasm-Skript, `1` für die zweite usw.
- `initial_size`
  - : Ein ganzzahliger Wert, der die Anfangsgröße der Tabelle darstellt.
- `max_size` {{optional_inline}}
  - : Ein ganzzahliger Wert, der die maximale Größe darstellt, bis zu der die Tabelle wachsen darf. Wenn dies nicht angegeben wird, hat die Tabelle keine maximale Größe und ihr Wachstum ist nur durch systembedingte Einschränkungen wie verfügbarem Speicher begrenzt.
- `type`
  - : Der Name des zu speichernden Funktionstyps. Mögliche Werte sind:
    - [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)
      - : Speichert Verweise auf Funktionen, die innerhalb von Wasm definiert sind.
    - [`externref`](/de/docs/WebAssembly/Reference/Types/externref)
      - : Speichert Verweise auf externe Werte, die innerhalb von JavaScript definiert sind.

## Beschreibung

WebAssembly-Tabellen ermöglichen die Speicherung von Referenzwerten, getrennt von byte-orientierten WebAssembly-Speichern. Der primäre Anwendungsfall besteht darin, Funktionsreferenzen zu speichern, die mit `call_indirect` verwendet werden können, um indirekte Funktionsaufrufe für Sprachen zu unterstützen, die solche Aufrufe haben. Die `table`-Definition erstellt eine neue Tabelle.

Eine Tabelle muss mit einer Anfangsgröße und einem Speichertyp versehen werden. Dieses Beispiel erstellt eine Tabelle mit zwei Speicherplätzen, die nur Referenzen auf Funktionen speichert, die innerhalb von Wasm erstellt wurden (gekennzeichnet durch [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)):

```wat
(table 2 funcref)
```

Optional können Sie auch einen Bezeichner angeben, der zur Identifizierung der Tabelle anderswo verwendet werden kann, sowie eine maximale Wachstumsgröße. Zum Beispiel:

```wat
(table $my_table 2 10 funcref)
```

Das folgende Beispiel definiert einen Funktionstyp, definiert eine grundlegende Funktion mit diesem Typ, die ein `i32` zurückgibt, und erklärt diese vorwärts mit `(elem declare func $f1)`, damit sie später referenziert werden kann.

```wat
(type $ret_i32 (func (result i32)))

(func $f1 (type $ret_i32)
  (i32.const 42)
)

(elem declare func $f1)
```

Um eine in einer Tabelle referenzierte Funktion aufzurufen, müssen Sie auf die Tabelle und den Indexwert verweisen, bei dem die Funktionsreferenz gespeichert ist. Das folgende Beispiel verwendet `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

Es ist möglich, Tabellen zur Laufzeit mit Anweisungen wie [`table.set`](/de/docs/WebAssembly/Reference/Table/set) und [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill) zu mutieren und Werte mit [`table.get`](/de/docs/WebAssembly/Reference/Table/get) abzurufen.

### Externe Referenzen

Sie können auch externe Referenzen, die in JavaScript definiert sind, in einer Wasm-Tabelle speichern, indem Sie das Schlüsselwort [`externref`](/de/docs/WebAssembly/Reference/Types/externref) angeben. Zum Beispiel:

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

Sie könnten dann die `$populate`-Funktion aufrufen und `call_indirect` verwenden, um die in jeder Tabelle referenzierten Funktionen aufzurufen. Der folgende Ausschnitt referenziert die Tabellen über ihren [identifizierenden Namen](#name):

```wat
(func (export "accessTable")
  (call $populate)
  (call_indirect $table_1 (type $ret_i32) (i32.const 0))
  (call_indirect $table_2 (type $ret_i32) (i32.const 0))

  ...
)
```

Aber Sie könnten stattdessen die Tabellen über ihre Indexwerte referenzieren (`0` gibt die erste Tabelle im Modul an, `1` die zweite Tabelle usw.):

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

### Erstellen einer einfachen Tabelle

Dieses Beispiel zeigt, wie man eine einfache Tabelle erstellt, einige Funktionen in diese speichert und dann eine Funktion aus der Tabelle aufruft.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, das wir zur Ausgabe von Ergebnissen verwenden werden. Wir kompilieren und instanziieren dann unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Wenn das Ergebnis zurückgegeben wird, rufen wir die exportierte Wasm-Funktion `accessTable()` auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist und übergeben ihr die Zahl `0` als Parameter. Schließlich setzen wir den Rückgabewert der Funktion `accessTable()` auf den `textContent`-Wert des `<p>`-Elements, damit wir ihn überprüfen können.

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

In unserem Wasm-Modul definieren wir zunächst einen Funktionstyp namens `$ret_i32`, der einen `i32`-Wert zurückgibt. Dann definieren wir zwei Funktionen basierend auf diesem Typ, genannt `$f1` und `$f2`, die die innerhalb definierten Werte zurückgeben. Anschließend definieren wir eine `table` namens `$return_values` mit zwei Slots, die Funktionsreferenzen speichert (daher wird `funcref` angegeben), und initialisieren sie, indem wir die beiden Slots mit Verweisen auf die Funktionen `$f1` und `$f2` füllen.

Schließlich exportieren wir die Funktion `accessTable()`, die einen `i32` namens `$index` als Parameter aufnimmt und einen `i32` zurückgibt. Im Funktionskörper verwenden wir `call_indirect`, um die Funktion aufzurufen, die in der Tabelle beim Indexwert `$index` referenziert ist.

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

Dies ist sinnvoll, da der exportierte `accessTable()`-Funktion ein Indexwert übergeben wird. Innerhalb des Wasm-Moduls rufen wir die Funktion auf, die bei diesem Index in der definierten Tabelle verfügbar ist, was den Wert zurückgibt, den wir sehen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
