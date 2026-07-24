---
title: "try_table: Wasm Ausnahmebehandlungsanweisung"
short-title: try_table
slug: WebAssembly/Reference/Exception_handling/try_table
l10n:
  sourceCommit: b8f9d7c0ac5bb5fb6f658da557e510ef9f4f3394
---

Die **`try_table`** [Ausnahmebehandlungs](/de/docs/WebAssembly/Reference/Exception_handling)-Anweisung ermöglicht es Ihnen, einen Codeblock zu testen, um festzustellen, ob eine Ausnahme ausgelöst wird, und diese mit einer `catch`-Klausel zu behandeln, falls dies der Fall ist.

{{InteractiveExample("Wat Demo: try_table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag and console.log
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log (param i32)))

  (func $try_and_catch (param $value i32)
    (block $handler (result i32)
      ;; In try_table block, catch thrown exception
      (try_table (catch $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Log value returned by handler block
    call $log
  )

  ;; Function that throws an error of type $my_error
  ;; when its parameter is less than 0
  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Throw exception with payload of 42
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import error tag and console.log into the module
const env = {
  my_error: myErrorTag, // import the tag into the module
  log: console.log,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  // Negative value causes function to throw
  (result) => result.instance.exports.try_and_catch(-1),
);
```

## Syntax

```plain
try_table blocktype catch* instruction*
```

- `try_table`
  - : Die `try_table` Anweisung.
- `blocktype` {{optional_inline}}
  - : Gibt einen oder mehrere Parameter an, die in den `try_table`-Block übergeben werden und nach der Ausführung des Blocks als Ergebniswert bereitgestellt werden.
- `catch*`
  - : Eine oder mehrere `catch`-Klauseln, die jeweils Kriterien zum Auffangen von Ausnahmen darstellen und einen [`block`](/de/docs/WebAssembly/Reference/Control_flow/block) angeben, zu dem bei Auftreten einer Ausnahme verzweigt wird. Jede Klausel kann eines der Folgenden sein:
    - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
    - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
    - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
    - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
- `instruction*`
  - : Null oder mehr Anweisungen, die innerhalb des `try`-Blocks ausgeführt werden.

### Typ

```plain
[param*] -> [result*]
```

- `param*`
  - : Null oder mehr Parameterwerte, die vom `try_table`-Block konsumiert werden, wie im `blocktype` deklariert.
- `result*`
  - : Null oder mehr Ergebniswerte, die vom `try_table`-Block produziert werden, wie im `blocktype` deklariert.

### Binärkodierung

| Anweisung   | Binärformat                                              |
| ----------- | -------------------------------------------------------- |
| `try_table` | `0x1f bt:blocktype n:u32 (ct:catch)^n instruction* 0x0b` |

Ein grundlegendes `try_table` mit einer einzigen `catch`-Klausel:

```wat
(try_table (catch $my_error $handler)
  ;; instructions ...
)
```

Würde wie folgt codiert werden:

```plain
0x1f 0x40 0x01 0x00 0x00 0x00 ...instructions binary... 0x0b
```

## Beschreibung

Eine `try_table`-Anweisung, kombiniert mit `catch`-Klauseln, bildet das Wasm-Äquivalent einer JavaScript [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung. Die Anweisungen innerhalb des `try_table`-Blocks werden ausgeführt, und wenn eine Ausnahme ausgelöst wird, die von den verfügbaren `catch`-Klauseln aufgefangen wird, verzweigt der Code zum angegebenen äußeren [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), und die von der `catch`-Klausel erzeugten Werte werden auf den Stapel geschoben.

Die verschiedenen `catch`-Klauseln verhalten sich wie folgt:

- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - : Wenn eine Ausnahme mit einem passenden Tag ausgelöst wird, verzweigen Sie zum angegebenen `block` und schieben die Nutzlastwerte auf den Stapel.
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - : Wenn eine beliebige Ausnahme ausgelöst wird, verzweigen Sie zum angegebenen `block`, ohne etwas auf den Stapel zu schieben.
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - : Wenn eine Ausnahme mit einem passenden Tag ausgelöst wird, verzweigen Sie zum angegebenen `block`, schieben die Nutzlastwerte und einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stapel.
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
  - : Wenn eine beliebige Ausnahme ausgelöst wird, verzweigen Sie zum angegebenen `block`, schieben Sie einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stapel.

Jede `catch`-Klausel, die zu einem äußeren `block` verzweigt, muss Werte erzeugen, die dem Ergebnistyp dieses `block`s entsprechen, wenn eine ausgelöste Ausnahme aufgefangen wird.

### Blocktype-Parameter

Die optionalen Blocktype-Parameter werden in den `try_table`-Block übergeben und als Ergebniswert nach der Ausführung des Blocks bereitgestellt. Der Wert kann vor dem `try_table`-Block oder innerhalb angegeben werden. Zum Beispiel:

```wat
;; Push an i32
i32.const 42

;; pops an i32 as the param
try_table (param i32)
  ;; The single i32 const 42 is still on the stack
end
```

Oder:

```wat
try_table (result i32)
  ;; Push an i32
  i32.const 42

  ;; The end of the block pops the results
end

;; The result i32 is now available to be used here
```

Oder Sie können eine beliebige Kombination dieser Strukturen verwenden.

## Beispiele

### Umgang mit mehreren Ausnahmen

Dieses Beispiel zeigt, wie mit mehreren Ausnahmen in einer einzigen `try_table`-Struktur umgegangen wird.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, auf das wir Ergebnisse ausgeben werden. Dann definieren wir zwei verschiedene Fehler-Tags, um einen Typfehler und einen Reichweitenfehler mit dem [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor darzustellen.

```html hidden live-sample___multiple-exceptions
<p></p>
```

```js live-sample___multiple-exceptions
const output = document.querySelector("p");

const typeErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
const rangeErrorTag = new WebAssembly.Tag({ parameters: ["i32", "i32"] });
```

Als Nächstes kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), importieren die zwei Fehler-Tags und eine Funktion, um Ergebnisse zum `<p>`-Element zu protokollieren.

Wir rufen die exportierte Wasm-`try_multiple()`-Funktion auf, die im WebAssembly [`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, mehrmals auf, übergeben ihr zwei verschiedene Parameter, um verschiedene Ausnahmen auszulösen, und dann schließlich einen Wert, der keine Ausnahme auslöst.

```js live-sample___multiple-exceptions
async function init() {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("{%wasm-url%}"),
    {
      env: {
        type_error: typeErrorTag,
        range_error: rangeErrorTag,
        log: (code) => {
          output.textContent += `Error code: ${code} | `;
        },
      },
    },
  );

  instance.exports.try_multiple(-1); // Throws type_error, logs 10
  instance.exports.try_multiple(101); // Throws range_error, logs 99
  instance.exports.try_multiple(50); // Doesn't throw
}

init();
```

#### Wasm

In unserem Wasm-Modul importieren wir zunächst unsere beiden Fehler-Tags und die Protokollierungsfunktion. Dann erstellen wir eine Funktion namens `$try_multiple`, die zwei verschachtelte `block`s hat, um `$type_error`s beziehungsweise `$range_error`s zu behandeln. In der Mitte der `block`s befindet sich eine `try_table`-Struktur mit zwei `catch`-Klauseln, eine für jeden Fehlertyp. Wir rufen dann die `$might_throw`-Funktion auf, die später definiert ist, um zu sehen, ob sie Ausnahmen auslöst:

- Wenn ein `$type_error` ausgelöst wird, verzweigen wir zum `$on_type_error`-`block` und protokollieren den Nutzlastwert.
- Wenn ein `$range_error` ausgelöst wird, verzweigen wir zum `$on_range_error`-`block`, verwerfen den ersten der beiden Nutzlastwerte und protokollieren den zweiten, dann kehren wir aus dem `block` zurück.
- Wenn keine Ausnahme ausgelöst wird, kehren wir einfach aus dem `block` zurück.

Die `$might_throw`-Funktion selbst nimmt einen einzelnen Parameter und überprüft dessen Wert. Wenn der Wert kleiner als `0` ist, löst er einen `$type_error` mit Fehlercode `10` aus. Wenn der Wert größer als `100` ist, löst er einen `$range_error` mit Code `99` aus.

```wat live-sample___multiple-exceptions
(module
  (tag $type_error (import "env" "type_error") (param i32))
  (tag $range_error (import "env" "range_error") (param i32 i32))  ;; carries two values
  (import "env" "log" (func $log (param i32)))

  (func $try_multiple (param $value i32)
    (block $on_type_error (result i32)
      (block $on_range_error (result i32 i32)
        (try_table
          (catch $type_error $on_type_error)
          (catch $range_error $on_range_error)
          (call $might_throw (local.get $value))
        )
        (return)  ;; no exception thrown
      )
      ;; $range_error was caught — stack has i32 i32
      (drop)                   ;; drop second payload value
      (call $log)              ;; log first payload value
      (return)
    )
    ;; $type_error was caught — stack has i32
    (call $log)                ;; log the payload
  )

  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        (i32.const 10)
        (throw $type_error)
      )
    )
    (local.get $value)
    (i32.const 100)
    (i32.gt_s)
    (if
      (then
        (i32.const 99)
        (i32.const 100)
        (throw $range_error)
      )
    )
  )

  (export "try_multiple" (func $try_multiple))
)
```

#### Ergebnis

{{embedlivesample("multiple-exceptions", "100%", 100)}}

Wir rufen die `try_multiple()`-Funktion dreimal auf. Beim ersten Mal wird ein `$type_error` ausgelöst, also wird der Fehlercode `10` protokolliert. Beim zweiten Mal wird ein `$range_error` ausgelöst, also wird der Fehlercode `99` protokolliert. Beim dritten Mal wird keine Ausnahme ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
