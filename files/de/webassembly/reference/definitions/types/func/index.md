---
title: "func: Wasm-Typdefinition"
short-title: func
slug: WebAssembly/Reference/Definitions/types/func
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`func`**-Typdefinition deklariert eine Funktionssignatur: eine Liste von Parametertypen und eine Liste von Ergebnistypen.

## Syntax

```wat
;; Declare a named function type
(type $bin_op (func (param i32) (param i32) (result i32)))

;; A function inheriting that signature
(func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.add)

;; A call_indirect site using the same type
(call_indirect (type $bin_op))
```

## Beschreibung

Ein Funktionstyp ordnet eine Sequenz von Parameter-[Wertetypen](/de/docs/WebAssembly/Reference/Value_types) einer Sequenz von Ergebniswertetypen zu. Beide Listen können leer sein.

Funktionstypen erscheinen an drei Stellen:

- **Funktionsdeklarationen**: Jede [`func`](/de/docs/WebAssembly/Guides/Understanding_the_text_format) hat einen Typ. Sie können entweder `param`- und `result`-Klauseln einbinden oder einen benannten Typ mit `(type $name)` referenzieren. Wenn beides vorhanden ist, müssen sie übereinstimmen. Das Einbinden eines Funktionstyps in einer Deklaration ist gleichbedeutend mit dem Schreiben eines separaten Funktionstyps und dessen Referenzierung.
- **Indirekte Aufrufe**: [`call_indirect`](/de/docs/WebAssembly/Reference/Control_flow) nimmt einen Funktionstyp und leitet durch eine [`table`](/de/docs/WebAssembly/Reference/Definitions/table) aus [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)-Werten weiter. Die Engine überprüft zur Laufzeit, ob der Typ der indizierten Funktion mit dem deklarierten Typ übereinstimmt, andernfalls wird abgefangen.
- **Importe**: Funktionsimporte deklarieren einen Typ, der für eine Funktion bereitgestellt werden muss.

Funktionstypen verwenden [strukturelle Gleichheit](https://de.wikipedia.org/wiki/Strukturierter_Typ): Zwei Funktionstypen sind identisch, wenn und nur wenn ihre Parameter- und Ergebnistypsequenzen elementweise übereinstimmen. Die Identität des Typindex oder des Moduls, aus dem es stammt, spielt keine Rolle. Ein `call_indirect` wird daher erfolgreich sein bei einem Callee, dessen Typ unabhängig in einem anderen Modul deklariert wurde, solange die Parameter- und Ergebnissequenzen dieselben sind.

## Beispiele

### Teilen eines Funktionstyps zwischen zwei Funktionen und einem Dispatcher

Das folgende Modul deklariert einen einzigen `$bin_op` Typ und verwendet ihn für zwei Funktionen und eine `call_indirect`-Stelle:

```wat
(module
  (type $bin_op (func (param i32) (param i32) (result i32)))

  (func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add)

  (func $mul (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.mul)

  (table 2 funcref)
  (elem (i32.const 0) $add $mul)

  (func (export "dispatch") (param $op i32) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    local.get $op
    call_indirect (type $bin_op)))
```

Das Aufrufen von `dispatch(0, 3, 4)` ruft `$add` auf und gibt `7` zurück; das Aufrufen von `dispatch(1, 3, 4)` ruft `$mul` auf und gibt `12` zurück. Das Übergeben eines Indexes, der auf eine Funktion mit einer anderen Signatur verweist, wird abgefangen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)-Wertetyp
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)-Definition
