---
title: "global: Wasm-Definition"
short-title: global
slug: WebAssembly/Reference/Definitions/global
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
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
  - : Der Typ der `global`-Definition. Muss immer zuerst angegeben werden.
- `identifier` {{optional_inline}}
  - : Ein eindeutiger Name für die globale Variable. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_global`.
- `type`
  - : Der Typ der zu erstellenden globalen Variable. Besteht aus einem `data_type`, optional vorangestellt durch das `mut`-Schlüsselwort:
    - `mut` {{optional_inline}}
      - : Das `mut`-Flag. Wenn enthalten, ist die globale Variable veränderlich — sie kann nach der Initialisierung über die [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set)-Anweisung auf einen anderen Wert gesetzt werden.
    - `data_type`
      - : Der Datentyp der globalen Variable. Dieser kann einer der folgenden sein:
        - `i32`
        - `i64`
        - `f32`
        - `f64`
        - [`v128`](/de/docs/WebAssembly/Reference/Types/v128)
        - [`funcref`](/de/docs/WebAssembly/Reference/Types/funcref)
        - [`externref`](/de/docs/WebAssembly/Reference/Types/externref)
        - Andere Referenztypen wie Strukturen (zum Beispiel `structref`), Ausnahmen (zum Beispiel `exnref`), `i31` (`i31ref`), usw.
- `initial_value`
  - : Der Initialisierer für die neue globale Variable. Sein Wert kann sein:
    - Ein wörtlicher Wert, zum Beispiel `i32.const 0`.
    - Ein [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get) einer anderen globalen Variable.
    - Jeder andere [Konstantausdruck](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant).

    Der `initial_value`-Typ muss mit dem deklarierten [`type`](#type) übereinstimmen.

## Beschreibung

Die WebAssembly-Definition `global` ermöglicht es, global-gültige Variablen innerhalb eines Wasm-Moduls zu definieren. Globale Variablen können:

- Über [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get) abgerufen und innerhalb des Moduls verwendet werden.
- Über [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set) verändert werden, vorausgesetzt, dass das [`mut`](#mut)-Flag bei der Deklaration der globalen Variable enthalten war. Der Versuch, eine nicht veränderliche Variable zu verändern, führt zu einem Validierungsfehler.
- Exportiert werden, um sie in JavaScript zu verwenden. Zum Beispiel:

  ```wat
  (global $my_global (mut i32) (i32.const 0))
  (export "my_global" (global $my_global))
  ```

> [!NOTE]
> Wenn eine globale Variable einen [`v128`](/de/docs/WebAssembly/Reference/Types/v128) (SIMD) oder Ausnahme (`exnref`) Typ enthält, können Sie sie exportieren, aber der Versuch, den Wert der globalen Variable über JavaScript zu lesen, führt zu einem `TypeError`.

### Erstellen von globalen Variablen aus JavaScript

Es ist auch möglich, eine Wasm-Globale Variablen innerhalb des JavaScript-Hosts mit dem {{jsxref("WebAssembly.Global.Global", "WebAssembly.Global()")}}-Konstruktor zu erstellen und dann in das Modul zu importieren.

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

Es ist möglich, globale Variablen, die innerhalb von Wasm-Modulen oder innerhalb des JavaScript-Hosts deklariert wurden, zwischen mehreren Modulen zu teilen.

Zum Beispiel wird der Zustand der unten erstellten globalen Variable zwischen zwei verschiedenen Modulen geteilt:

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
