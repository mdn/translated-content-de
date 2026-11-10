---
title: "call: Wasm-Textinstruktion"
short-title: call
slug: WebAssembly/Reference/Control_flow/call
l10n:
  sourceCommit: ad9a2c6d7f94dd5fb7971b10677487a84c529e55
---

**`call`** ruft eine Funktion auf; `return_call` ist die Tail-Call-Variante davon. `call_indirect` ruft eine Funktion aus einer Tabelle auf; die entsprechende Tail-Call-Variante ist `return_call_indirect`.

{{InteractiveExample("Wat Demo: call", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the `greet` function from the environment
  (import "env" "greet" (func $greet))

  (func (export "greet")
    ;; Call the imported `greet` function
    call $greet
  )

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
const { instance } = await WebAssembly.instantiateStreaming(fetch(url), {
  env: {
    greet() {
      console.log("Hello");
    },
  },
});

instance.exports.greet();
// Expected output: "Hello"

console.log(instance.exports.fac(5n));
// Expected output: 120n
```

## Syntax

```wat
call $greet
```

| Instruktion            | Binärer Opcode |
| ---------------------- | -------------- |
| `call`                 | `0x10`         |
| `call_indirect`        | `0x11`         |
| `return_call`          | `0x12`         |
| `return_call_indirect` | `0x13`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über den Vorschlag zur Tail-Call-Erweiterung](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 zur Unterstützung von WebAssembly-Tail-Calls](https://v8.dev/blog/wasm-tail-call)
