---
title: "null: Wasm-Referenzanweisung"
short-title: "null"
slug: WebAssembly/Reference/Reference/null
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die **`ref.null`**-[Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) erzeugt eine Nullreferenz eines angegebenen Heap-Typs.

{{InteractiveExample("Wat Demo: ref.null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param externref)))
  (func $main
    ref.null extern
    call $log ;; log a null externref
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
ref.null heap_type
```

- `ref.null`
  - : Die `ref.null`-Anweisung.

### Unmittelbare Operanden

- `heap_type`
  - : Der Heap-Typ der zu erzeugenden Nullreferenz. Dies kann ein abstrakter Heap-Typ wie `func`, `extern` oder `any` sein oder der Name beziehungsweise Index eines im Modul definierten Typs, beispielsweise `$my_struct_type`.

### Operandenstapel

```plain
[] -> [output:(ref null heap_type)]
```

- `output`
  - : Eine Nullreferenz vom Typ `(ref null heap_type)`. Beispielsweise erzeugt `ref.null func` eine Nullreferenz vom Typ [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref) und `ref.null extern` eine Nullreferenz vom Typ [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref).

### Binärkodierung

| Anweisung  | Binärformat         | Beispiel: Text => Binärformat    |
| ---------- | ------------------- | -------------------------------- |
| `ref.null` | `0xd0 ht:heap_type` | `ref.null extern` => `0xd0 0x6f` |

## Beschreibung

Die `ref.null`-Anweisung erzeugt eine Referenz, die auf nichts verweist. Nullreferenzen werden häufig verwendet, um lokale Variablen, globale Variablen und Tabellenelemente mit nullable Referenztypen zu initialisieren, bevor eine tatsächliche Referenz verfügbar ist, oder um beim Aufruf von Funktionen, die eine nullable Referenz erwarten, „kein Wert“ darzustellen.

Da `ref.null` eine konstante Anweisung ist, kann sie in konstanten Ausdrücken verwendet werden, beispielsweise als Initialisierungswert einer [`global`](/de/docs/WebAssembly/Reference/Definitions/global) oder als Eintrag in einem [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Segment.

Wenn eine Nullreferenz an JavaScript übergeben wird, wird sie in [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) umgewandelt.

Um zu prüfen, ob eine Referenz null ist, verwenden Sie [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.as_non_null`](/de/docs/WebAssembly/Reference/Reference/as_non_null)
- [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
- [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
