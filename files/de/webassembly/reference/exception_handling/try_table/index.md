---
title: "try_table: Wasm-Ausnahmebehandlungsanweisung"
short-title: try_table
slug: WebAssembly/Reference/Exception_handling/try_table
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`try_table`** [Ausnahmebehandlungsanweisung](/de/docs/WebAssembly/Reference/Exception_handling) ermöglicht es Ihnen, einen Codeblock zu testen, um festzustellen, ob eine Ausnahme geworfen wird, und diese Ausnahme in einer `catch`-Klausel zu behandeln.

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
  - : Die `try_table`-Anweisung.
- `blocktype` {{optional_inline}}
  - : Gibt einen oder mehrere Parameter an, die in den `try_table`-Block übergeben werden und nach Ausführung des Blocks als Ergebniswert bereitgestellt werden.
- `catch*`
  - : Eine oder mehrere `catch`-Klauseln, die jeweils Kriterien für das Abfangen von Ausnahmen darstellen und angeben, zu welchem [`block`](/de/docs/WebAssembly/Reference/Control_flow/block) als Ergebnis verzweigt wird. Jede Klausel kann eine der folgenden sein:
    - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
    - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
    - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
    - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
- `instruction*`
  - : Null oder mehr Anweisungen, die innerhalb des try-Blocks ausgeführt werden sollen.

### Typ

```plain
[param*] -> [result*]
```

- `param*`
  - : Null oder mehr Parameterwerte, die vom `try_table`-Block verbraucht werden, wie im `blocktype` deklariert.
- `result*`
  - : Null oder mehr Ergebniswerte, die vom `try_table`-Block produziert werden, wie im `blocktype` deklariert.

### Binärcodierung

| Anweisung   | Binärformat                                              |
| ----------- | -------------------------------------------------------- |
| `try_table` | `0x1f bt:blocktype n:u32 (ct:catch)^n instruction* 0x0b` |

Ein grundlegendes `try_table` mit einer einzelnen `catch`-Klausel:

```wat
(try_table (catch $my_error $handler)
  ;; instructions ...
)
```

Würde wie folgt codiert:

```plain
0x1f 0x40 0x01 0x00 0x00 0x00 ...instructions binary... 0x0b
```

## Beschreibung

Eine `try_table`-Anweisung, kombiniert mit `catch`-Klauseln, bildet das Wasm-Äquivalent einer JavaScript-[`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung. Die Anweisungen innerhalb des `try_table`-Blocks werden ausgeführt, und wenn eine Ausnahme geworfen wird, die von den verfügbaren `catch`-Klauseln abgefangen wird, verzweigt der Code zum angegebenen äußeren [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), und die von der `catch`-Klausel produzierten Werte werden auf den Stapel gelegt.

Die unterschiedlichen `catch`-Klauseln verhalten sich wie folgt:

- [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - : Wenn eine Ausnahme mit einem passenden Tag geworfen wird, verzweigen Sie zum angegebenen `block` und legen die Nutzlastwerte auf den Stapel.
- [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - : Wenn irgendeine Ausnahme geworfen wird, verzweigen Sie zum angegebenen `block`, ohne etwas auf den Stapel zu legen.
- [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - : Wenn eine Ausnahme mit einem passenden Tag geworfen wird, verzweigen Sie zum angegebenen `block` und legen die Nutzlastwerte sowie einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stapel.
- [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
  - : Wenn irgendeine Ausnahme geworfen wird, verzweigen Sie zum angegebenen `block` und legen einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stapel.

Jede `catch`-Klausel, die zu einem äußeren `block` verzweigt, muss Werte produzieren, die dem Ergebnistyp dieses `blocks` entsprechen, wenn eine geworfene Ausnahme abgefangen wird.

### Blocktype-Parameter

Die optionalen blocktypen Parameter werden in den `try_table`-Block übergeben und als Ergebniswert bereitgestellt, nachdem der Block ausgeführt wurde. Der Wert kann vor dem `try_table`-Block oder innerhalb davon angegeben werden. Zum Beispiel:

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

Oder Sie können jede Kombination dieser Strukturen verwenden.

## Beispiele

### Umgang mit mehreren Ausnahmen

Dieses Beispiel zeigt, wie mehrere Ausnahmen in einer einzigen `try_table`-Struktur behandelt werden können.

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zu einem {{htmlelement("p")}}-Element zu erhalten, auf dem wir Ergebnisse ausgeben werden. Wir definieren dann zwei verschiedene Fehler-Tags, um einen Typfehler und einen Bereichsfehler zu repräsentieren, indem wir den [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)-Konstruktor verwenden.

```html hidden live-sample___multiple-exceptions
<p></p>
```

```js live-sample___multiple-exceptions
const output = document.querySelector("p");

const typeErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
const rangeErrorTag = new WebAssembly.Tag({ parameters: ["i32", "i32"] });
```

Als nächstes kompilieren und instanziieren wir unser Wasm-Modul mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), indem wir die beiden Fehler-Tags importieren und eine Funktion, um Ergebnisse in das `<p>`-Element zu protokollieren.

Wir rufen die exportierte Wasm-`try_multiple()`-Funktion auf, die im `WebAssembly`-[`Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-[`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar ist, mehrfach auf, indem wir ihr zwei verschiedene Parameter übergeben, um unterschiedliche Ausnahmen zu werfen, und schließlich einen Wert, der keine Ausnahme wirft.

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

In unserem Wasm-Modul importieren wir zuerst unsere zwei Fehler-Tags und die Protokollfunktion. Dann erstellen wir eine Funktion namens `$try_multiple`, die zwei verschachtelte `block`s hat, um `$type_error`s und `$range_error`s zu behandeln. In der Mitte der `block`s befindet sich eine `try_table`-Struktur, die zwei `catch`-Klauseln enthält, um jeden Fehler abzufangen. Wir rufen dann die Funktion `$might_throw` auf, um zu sehen, ob sie Ausnahmen wirft:

- Wenn ein `$type_error` geworfen wird, verzweigen wir zum `$on_type_error`-`block` und protokollieren den Nutzlastwert.
- Wenn ein `$range_error` geworfen wird, verzweigen wir zum `$on_range_error`-`block`, lassen den ersten der beiden Nutzlastwerte fallen und protokollieren den zweiten, dann verlassen wir den `block`.
- Wenn keine Ausnahme geworfen wird, verlassen wir einfach den `block`.

Die Funktion `$might_throw` selbst nimmt einen einzigen Parameter und überprüft dessen Wert. Wenn der Wert kleiner als `0` ist, wirft sie einen `$type_error` mit dem Fehlercode `10`. Wenn der Wert größer als `100` ist, wirft sie einen `$range_error` mit dem Code `99`.

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

Wir rufen die `try_multiple()`-Funktion dreimal auf. Das erste Mal wird ein `$type_error` geworfen, daher wird der Fehlercode `10` protokolliert. Das zweite Mal wird ein `$range_error` geworfen, daher wird der Fehlercode `99` protokolliert. Das dritte Mal wird keine Ausnahme geworfen.

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
