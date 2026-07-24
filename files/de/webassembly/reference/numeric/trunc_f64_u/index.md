---
title: "trunc_f64_u: Wasm numerische Anweisung"
short-title: trunc_f64_u
slug: WebAssembly/Reference/Numeric/trunc_f64_u
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`trunc_f64_u`**-[numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) entfernt den Dezimalteil eines `f64`-Werts und gibt ihn als unsignierte ganze Zahl aus.

Dies ist eine separate Anweisung, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den Dezimalteil eines Gleitkommazahl entfernt und eine Gleitkommazahl ausgibt.

Es gibt auch andere Anweisungen zur Ganzzahltrunkierung:

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)

{{InteractiveExample("Wat Demo: trunc_f64_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f64.const 2300044.4 ;; load a number onto the stack
    i32.trunc_f64_u ;; discard decimal part and return unsigned integer
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.trunc_f64_u
```

- `value_type`
  - : Der Typ des Werts, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `trunc_f64_u`:
    - `i32`
    - `i64`
- `trunc_f64_u`
  - : Die `trunc_f64_u`-Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) eingeschlossen sein.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Gleitkommazahl.
- `output`
  - : Die Ausgabe-Ganzzahl.

### Binäre Codierung

| Anweisung         | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f64_u` | `0xab`      | `i32.trunc_f64_u` => `0xab` |
| `i64.trunc_f64_u` | `0xb1`      | `i64.trunc_f64_u` => `0xb1` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
