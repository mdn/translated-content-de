---
title: "trunc_f32_s: Wasm Textbefehl"
short-title: trunc_f32_s
slug: WebAssembly/Reference/Numeric/trunc_f32_s
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

Der **`trunc_f32_s`** Befehl entfernt den Bruchteil eines `f32`-Wertes und gibt ihn als vorzeichenbehaftete Ganzzahl aus.

Dies ist ein separater Befehl, [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc), der den Bruchteil eines Fließkommawerts entfernt und ein Fließkommawert ausgibt.

Es gibt auch andere Integer-Konvertierungsbefehle zum Abschneiden:

- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f32_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 40.9 ;; load a number onto the stack
    i32.trunc_f32_s ;; discard decimal part and return signed integer
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
value_type.trunc_f32_s
```

- `value_type`
  - : Der Werttyp, auf dem der Befehl ausgeführt wird. Die folgenden Typen unterstützen `trunc_f32_s`:
    - `i32`
    - `i64`
- `trunc_f32_s`
  - : Der `trunc_f32_s` Befehl. Muss immer nach dem `value_type` und einem Punkt (`.`) hinzugefügt werden.

### Typ

```plain
[input] -> [output]
```

- `input`
  - : Die Eingabe-Floating-Point-Nummer.
- `output`
  - : Die Ausgabe-Ganzzahl.

### Binärcodierung

| Befehl            | Binärformat | Beispieltext => binär       |
| ----------------- | ----------- | --------------------------- |
| `i32.trunc_f32_s` | `0xa8`      | `i32.trunc_f32_s` => `0xa8` |
| `i64.trunc_f32_s` | `0xae`      | `i64.trunc_f32_s` => `0xae` |

## Siehe auch

- [`trunc`](/de/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/de/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
