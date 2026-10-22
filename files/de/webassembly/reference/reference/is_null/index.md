---
title: "is_null: Wasm-Referenzinstruktion"
short-title: is_null
slug: WebAssembly/Reference/Reference/is_null
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die [Referenzinstruktion](/de/docs/WebAssembly/Reference/Reference) **`ref.is_null`** prüft, ob eine Referenz null ist.

{{InteractiveExample("Wat Demo: ref.is_null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $f)
  (elem declare func $f)
  (func $main
    ref.null func
    ref.is_null
    call $log ;; log 1: the reference is null

    ref.func $f
    ref.is_null
    call $log ;; log 0: the reference isn't null
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## WAT-Syntax

```plain
ref.is_null
```

- `ref.is_null`
  - : Die Instruktion `ref.is_null`.

### Unmittelbare Operanden

Keine.

### Operandenstapel

```plain
[input:(ref null heap_type)] -> [output:i32]
```

- `input`
  - : Die zu prüfende Referenz. Sie kann einen beliebigen nullable reference type haben, zum Beispiel [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref) oder [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref).
- `output`
  - : Ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) mit dem Wert `1`, wenn `input` null ist, andernfalls mit dem Wert `0`.

### Binäre Kodierung

| Instruktion   | Binärformat | Beispieltext => Binärformat |
| ------------- | ----------- | --------------------------- |
| `ref.is_null` | `0xd1`      | `ref.is_null` => `0xd1`     |

## Beschreibung

Die Instruktion `ref.is_null` nimmt eine Referenz vom Stapel und legt `1` auf den Stapel, wenn sie null ist, andernfalls `0`. Sie wird typischerweise verwendet, um zu prüfen, ob einem lokalen oder globalen Wert oder einem Tabellenelement, das null sein darf, bereits ein Wert zugewiesen wurde. So lässt sich vermeiden, dass eine nachfolgende Instruktion wegen einer Nullreferenz einen Trap auslöst.

Um eine Nullreferenz zu erzeugen, verwenden Sie [`ref.null`](/de/docs/WebAssembly/Reference/Reference/null). Um eine Referenz, die null sein darf, in eine nicht nullable Referenz umzuwandeln und bei null einen Trap auszulösen, verwenden Sie [`ref.as_non_null`](/de/docs/WebAssembly/Reference/Reference/as_non_null).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.null`](/de/docs/WebAssembly/Reference/Reference/null)
- [`ref.as_non_null`](/de/docs/WebAssembly/Reference/Reference/as_non_null)
- [`ref.eq`](/de/docs/WebAssembly/Reference/Reference/eq)
