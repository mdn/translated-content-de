---
title: "trunc_f64_s: Wasm numerische Anweisung"
short-title: trunc_f64_s
slug: WebAssembly/Reference/Numeric/trunc_f64_s
l10n:
  sourceCommit: 4d8fcaa723acfff9b9d1fc5cceb9685e06b5fb0f
---

Die **`trunc_f64_s`** [numerische Anweisung](/de/docs/WebAssembly/Reference/Numeric) entfernt den gebrochenen Teil eines `f64`-Wertes und gibt ihn als vorzeichenbehafteten Integer aus.

Dies ist eine separate Anweisung, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), die den gebrochenen Teil eines Fließkommazahl entfernt und ein Fließkommazahl ausgibt.

Es gibt auch andere Trunkierungsanweisungen zur Ganzzahlkonvertierung:

- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f64_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f64.const 2300044.4 ;; load a number onto the stack
    i32.trunc_f64_s ;; discard decimal part and return signed integer
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
value_type.trunc_f64_s
```

- `value_type`
  - : Der Typ des Wertes, auf den die Anweisung angewendet wird. Die folgenden Typen unterstützen `trunc_f64_s`:
    - `i32`
    - `i64`
- `trunc_f64_s`
  - : Die `trunc_f64_s` Anweisung. Muss immer nach dem `value_type` und einem Punkt (`.`) stehen.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Fließkommazahl.
- `output`
  - : Die Ausgabe-Ganzzahl.

### Binäre Kodierung

| Anweisung         | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f64_s` | `0xaa`      | `i32.trunc_f64_s` => `0xaa` |
| `i64.trunc_f64_s` | `0xb0`      | `i64.trunc_f64_s` => `0xb0` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
