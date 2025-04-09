---
title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`call`** ruft eine Funktion auf, wobei `return_call` die Tail-Call-Version davon ist. `call_indirect` ruft eine Funktion in einer Tabelle auf mit der `return_call_indirect` Tail-Call-Version ebenfalls.

## Beispiele

Aufrufen der `greet` Funktion, die aus JavaScript mit `call` importiert wurde:

{{InteractiveExample("Wat Demo: call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; Import the `greet` function from the environment
  (import "env" "greet" (func $greet))

  (func
    ;; Call the imported `greet` function
    call $greet
  )

  ;; Automatically run the first function when the module starts
  (start 1)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), {
  env: {
    greet: function () {
      console.log("Hello");
      // Expected output: "Hello"
    },
  },
});
```

Berechnung der Fakultät einer Zahl mithilfe von `return_call` und Protokollierung des Ergebnisses mit der exportierten `fac` Funktion:

{{InteractiveExample("Wat Demo: return_call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; Calculate the factorial of a number
  (func $fac (export "fac") (param $x i64) (result i64)
    ;; Call the `fac-aux` function with $x and 1 parameters
    (return_call $fac-aux (local.get $x) (i64.const 1))
  )

  ;; Perform the factorial calculation
  (func $fac-aux (param $x i64) (param $r i64) (result i64)
    ;; If $x is zero, return the accumulated result $r
    (if (result i64) (i64.eqz (local.get $x))
      (then (return (local.get $r)))
      (else
        ;; Otherwise, recursively call `fac-aux` with $x-1 and $x*$r
        (return_call $fac-aux
          (i64.sub (local.get $x) (i64.const 1))
          (i64.mul (local.get $x) (local.get $r))
        )
      )
    )
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
const { instance } = await WebAssembly.instantiateStreaming(fetch(url));
const result = instance.exports.fac(5n);

console.log(result);
// Expected output: 120n
```

## Syntax

```wat
call $greet
```

| Anweisung              | Binäroperand |
| ---------------------- | ------------ |
| `call`                 | `0x10`       |
| `call_indirect`        | `0x11`       |
| `return_call`          | `0x12`       |
| `return_call_indirect` | `0x13`       |

## Siehe auch

- [Tail Call Extension proposal overview](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 on WebAssembly tail calls support](https://v8.dev/blog/wasm-tail-call)
