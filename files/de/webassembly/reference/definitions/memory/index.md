---
title: "Speicher: Wasm-Definition"
short-title: memory
slug: WebAssembly/Reference/Definitions/memory
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`memory`** [Definition](/de/docs/WebAssembly/Reference/Definitions) deklariert einen Block aus linearem Speicher in Einheiten von 64KiB-Seiten.

{{InteractiveExample("Wat Demo: memory", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $my_mem 1 2) ;; start with one memory page, and max of 2 pages
  (func $main

    ;; grow memory by 1 page
    ;; grow returns 1 for success and -1 for failure
    ;; will fail if you grow to more than 2 pages
    (memory.grow $my_mem (i32.const 1))
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
memory name address_type min max
```

- `memory`
  - : Der Typ der `memory`-Definition. Muss immer zuerst angegeben werden.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für den Speicher. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$meine_speicher`. Wird dies weggelassen, kann der Speicher durch seinen Index identifiziert werden, zum Beispiel `0` für den ersten Speicher im Wasm-Modul, `1` für den zweiten usw.

- `address_type` {{optional_inline}}
  - : Ein Ganzzahl-Datentyp, der angibt, welchen Adresstyp der Speicher haben wird. Mögliche Werte sind:
    - [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)
      - : Daten werden an 32-Bit-Adressen gespeichert. Zeiger, die zur Identifizierung von Speicheradressen verwendet werden (zum Beispiel beim [Speichern](/de/docs/WebAssembly/Reference/Memory/store) oder [Laden](/de/docs/WebAssembly/Reference/Memory/load)), werden `i32`-Werte sein.
    - [`i64`](/de/docs/WebAssembly/Reference/Value_types/i64)
      - : Daten werden an 64-Bit-Adressen gespeichert. Zeiger, die zur Identifizierung von Speicheradressen verwendet werden (zum Beispiel beim Speichern oder Laden), werden `i64`-Werte sein.

    Wird dies weggelassen, ist der Standardwert für `address_type` `i32`.

- `min`
  - : Die minimale Anzahl von 64KiB-Seiten im Speicher, was auch die anfängliche Anzahl von Seiten ist.
- `max` {{optional_inline}}
  - : Die maximale Anzahl von 64KiB-Seiten im Speicher.

## Beschreibung

WebAssembly-Speicher bietet Roharbeitsspeicher für Wasm-Module. Die `memory`-Definition selbst deklariert den Datenspeicher, während [`data`](/de/docs/WebAssembly/Reference/Definitions/data)-Definitionen verwendet werden können, um einen Speicher mit Daten zu initialisieren. Zum Beispiel:

```wat
(module
  (memory $my_mem 1 2)
  (data $greeting (memory $my_mem) (i32.const 0) "Hello world")
  ;; ...
)
```

Jeder Speicher wird als Anzahl von "Seiten" definiert, wobei jede Seite 64KiB (65.536 Bytes) groß ist. Nach dem optionalen identifizierenden Speichernamen definieren die beiden Zahlenwerte die minimale (und anfängliche) Anzahl von Seiten und die maximale Anzahl von Seiten, die der Speicher enthalten kann. Die `data`-Definition ist ebenfalls benannt und spezifiziert einen Bezeichner, in dem die Daten gespeichert werden sollen. Ein Wasm-Modul kann mehrere Speicher enthalten, die jeweils durch Namen oder Index identifizierbar sind.

Wenn Sie nur einen Speicher in Ihrem Modul haben oder die Daten im ersten Speicher im Modul speichern möchten, können Sie den Speichernamen und Bezeichner weglassen, wie folgt:

```wat
(module
  (memory 1 2)
  (data $greeting (i32.const 0) "Hello world")
  ;; ...
)
```

Standardmäßig werden die Daten in Speicher 0 geschrieben.

Sobald ein `memory` erstellt wurde, stehen mehrere [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) zur Manipulation zur Verfügung. Weitere Einzelheiten zur Verwendung von Wasm-Speichern finden Sie in [WebAssembly-Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory).

### Manipulation von Wasm-Speichern aus JavaScript

WebAssembly-Speicher können aus einem Wasm-Modul exportiert werden:

```wat
(module
  (memory (export "memory") 1)
  (data $greeting (i32.const 0) "Hello world")
  ;; ...
)
```

Im JavaScript-Host sind sie dann im entsprechenden [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)-Objekt verfügbar, zum Beispiel:

```js
WebAssembly.instantiateStreaming(fetch("module.wasm")).then((result) => {
  const mem = result.instance.exports.memory;
  // ...
});
```

Der Speicher wird durch eine JavaScript-Instanz des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekts repräsentiert, die mit [typisierten Array-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) oder [`DataView`-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView) betrachtet und modifiziert werden kann. Siehe [`memory.init`](/de/docs/WebAssembly/Reference/Memory/init) für ein Beispiel.

Sie können auch einen neuen `memory` mithilfe des JavaScript-Konstruktors [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) erstellen und in ein Wasm-Modul importieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory)
- [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript-API
