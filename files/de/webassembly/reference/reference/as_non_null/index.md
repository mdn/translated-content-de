---
title: "as_non_null: Wasm-Referenzanweisung"
short-title: as_non_null
slug: WebAssembly/Reference/Reference/as_non_null
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Die **`ref.as_non_null`**-[Referenzanweisung](/de/docs/WebAssembly/Reference/Reference) wandelt eine nullable Referenz in eine nicht-nullable Referenz um. Ist die Referenz null, löst die Anweisung einen Trap aus.

{{InteractiveExample("Wat Demo: ref.as_non_null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param externref)))
  (global $greeting (import "js" "greeting") externref)

  ;; Only accepts non-null references
  (func $log_non_null (param $value (ref extern))
    (call $log (local.get $value))
  )

  (func $main
    ;; $greeting is nullable, so convert it before passing it on
    (call $log_non_null
      (ref.as_non_null (global.get $greeting))
    )
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), {
  console,
  js: { greeting: "Hello!" },
});
```

## WAT-Syntax

```plain
ref.as_non_null
```

- `ref.as_non_null`
  - : Die Anweisung `ref.as_non_null`.

### Unmittelbare Operanden

Keine.

### Operandenstapel

```plain
[input:(ref null heap_type)] -> [output:(ref heap_type)]
```

- `input`
  - : Eine nullable Referenz, zum Beispiel eine [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref) oder eine [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref).
- `output`
  - : Dieselbe Referenz, typisiert als nicht-nullable.

### Traps

Ist der Operand eine null-Referenz, löst die Anweisung einen Trap aus.

### Binärkodierung

| Anweisung         | Binärformat | Beispieltext => Binärwert   |
| ----------------- | ----------- | --------------------------- |
| `ref.as_non_null` | `0xd4`      | `ref.as_non_null` => `0xd4` |

## Beschreibung

Die Anweisung `ref.as_non_null` prüft, ob eine Referenz nicht null ist, und gibt ihr einen nicht-nullable Typ, beispielsweise `(ref extern)` statt `(ref null extern)`. Verwenden Sie sie, wenn Sie eine nullable Referenz an eine Funktion übergeben, in einer lokalen Variablen speichern oder aus einer Funktion zurückgeben müssen, deren Typ nur nicht-nullable Referenzen akzeptiert. Beispiele für solche nullable Referenzen sind Referenzen auf nullable globale Variablen, lokale Variablen oder Tabellenelemente.

Ist die Referenz null, löst `ref.as_non_null` einen Trap aus. Wenn Wasm-Code aus JavaScript aufgerufen wird, wird ein Trap als [`WebAssembly.RuntimeError`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)-Ausnahme gemeldet. Im obigen Beispiel würde die Übergabe von `null` als Wert für `greeting` dazu führen, dass die Instanziierung mit einem `RuntimeError` fehlschlägt, da der Trap in der Startfunktion auftritt.

Um zu prüfen, ob eine Referenz null ist, ohne einen Trap auszulösen, verwenden Sie [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.null`](/de/docs/WebAssembly/Reference/Reference/null)
- [`ref.cast`](/de/docs/WebAssembly/Reference/Reference/cast)
