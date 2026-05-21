---
title: "global: Wasm-Definition"
short-title: global
slug: WebAssembly/Reference/Definitions/global
l10n:
  sourceCommit: ca1301872404bbc0305fa945cf3e3fb2351863bf
---

Die **`global`** [Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert eine neue globale Variable.

{{InteractiveExample("Wat Demo: global", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))

  ;; Import a global variable from js
  (import "env" "from_js" (global $from_js i32))

  ;; Create a global variable
  (global $from_wasm (mut i32) (i32.const 10))

  (func $main
    ;; Set $from_wasm to a different value
    i32.const 20
    global.set $from_wasm

    ;; Load both global variables onto the stack
    global.get $from_js
    global.get $from_wasm

    i32.add ;; Add up both globals
    call $log ;; Log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
const from_js = new WebAssembly.Global({ value: "i32", mutable: false }, 5);
await WebAssembly.instantiateStreaming(fetch(url), {
  console,
  env: { from_js },
});
```

## Syntax

```plain
global identifier type initial_value
```

- `global`
  - : Der `global` Definitionstyp. Muss immer zuerst enthalten sein.
- `identifier` {{optional_inline}}
  - : Ein Bezeichnungsname für die globale Variable. Dieser muss mit einem `$`-Symbol beginnen, beispielsweise `$my_global`.
- `type`
  - : Der Typ der zu erstellenden globalen Variable. Dieser besteht aus einem `data_type`, optional vorausgegangen von dem Schlüsselwort `mut`:
    - `mut` {{optional_inline}}
      - : Das `mut` Flag. Wenn es enthalten ist, ist die globale Variable veränderlich — sie kann nach der Initialisierung durch die [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set)-Instruktion auf einen anderen Wert gesetzt werden.
    - `data_type`
      - : Der Datentyp der globalen Variable. Dies kann einer der folgenden sein:
        - `i32`
        - `i64`
        - `f32`
        - `f64`
        - [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128)
        - [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref)
        - [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref)
        - Andere Referenztypen wie Strukturen (zum Beispiel `structref`), Ausnahmen (zum Beispiel `exnref`), `i31` (`i31ref`), usw.
- `initial_value`
  - : Der Initialisierer für die neue globale Variable. Sein Wert kann sein:
    - Ein literaler Wert, beispielsweise `i32.const 0`.
    - Ein [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get) einer anderen globalen Variable.
    - Jeder andere [Konstantausdruck](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant).

    Der Typ von `initial_value` muss derselbe sein wie der deklarierte [`type`](#type).

## Beschreibung

Die WebAssembly-`global` Definition ermöglicht die Definition von globalen Variablen innerhalb eines Wasm-Moduls. Globale Variablen können:

- Über [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get) abgerufen und von überall im Modul verwendet werden.
- Über [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set) verändert werden, sofern das [`mut`](#mut) Flag beim Deklarieren der globalen Variable enthalten war. Der Versuch, eine nicht veränderliche Variable zu mutieren, führt zu einem Validierungsfehler.
- Exportiert werden, um sie nach JavaScript zu übergeben. Zum Beispiel:

  ```wat
  (global $my_global (mut i32) (i32.const 0))
  (export "my_global" (global $my_global))
  ```

> [!NOTE]
> Wenn eine globale Variable einen [`v128`](/de/docs/WebAssembly/Reference/Value_types/v128) (SIMD) oder Ausnahme (`exnref`) Typ enthält, können Sie sie exportieren, aber der Versuch, den Wert der globalen Variable über JavaScript zu lesen, führt zu einem `TypeError`.

### Erstellen von globalen Variablen aus JavaScript

Es ist auch möglich, eine Wasm-Globale vom JavaScript-Host aus mit dem [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global/Global)-Konstruktor zu erstellen und anschließend in das Modul zu importieren.

Zum Beispiel:

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

const { instance } = await WebAssembly.instantiateStreaming(
  fetch("example.com/module"),
  {
    env: { myGlobal },
  },
);
```

### Teilen von globalen Variablen zwischen Modulen

Es ist möglich, im Wasm-Modul oder im JavaScript-Host deklarierte globale Variablen zwischen mehreren Modulen zu teilen.

Zum Beispiel wird der unten erstellte globale Zustand zwischen zwei verschiedenen Modulen geteilt:

```js
const shared = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

const modA = await instantiate(bytesA, { env: { shared } });
const modB = await instantiate(bytesB, { env: { shared } });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get)
- [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set)
- [`WebAssembly.Global`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) JavaScript-Schnittstelle
