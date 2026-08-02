---
title: "data: Wasm-Definition"
short-title: data
slug: WebAssembly/Reference/Definitions/data
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`data`**-[Definition](/de/docs/WebAssembly/Reference/Definitions) definiert ein Segment von Bytes, das in den linearen Speicher kopiert werden kann.

{{InteractiveExample("Wat Demo: data", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting1 (memory 0) (offset i32.const 0) "Hello ")
  (data $greeting2 "World")

  (func (export "init")
    i32.const 6       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 5       ;; number of bytes to copy
    memory.init $greeting2
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 11);
  console.log(new TextDecoder().decode(memArray));
});
```

Im obigen Beispiel definieren wir zwei `data`-Definitionen mit den Identifikatoren `$greeting1` und `$greeting2`, die die Zeichenfolgen "Hello " und "World" enthalten. Die erste `data`-Definition hat einen angegebenen Speicher-Offset (`(i32.const 0)`), sodass die Zeichenfolge sofort in den [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory) bei den Bytes 0–4 geschrieben wird. Die zweite `data`-Definition hat keinen festgelegten Speicher-Offset, sodass sie erst dann in den Speicher geschrieben wird, wenn die [`memory.init`](/de/docs/WebAssembly/Reference/Memory/init)-Anweisung später ausgeführt wird.

Im JavaScript rufen wir die exportierte `init()`-Funktion auf, um die zweite Datendefinition in den Speicher zu schreiben, dann dekodieren wir den exportierten Speicherpuffer und protokollieren das Ergebnis in der Konsole.

## Syntax

```plain
;; Active form, written to memory on instantiation
data name memory_identifier offset data_string

;; Passive form, written later via memory.init
data name data_string
```

- `data`
  - : Der `data`-Definitionstyp. Muss immer zuerst angegeben werden.
- `name` {{optional_inline}}
  - : Ein optionaler identifizierender Name für die Daten. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_data`. Wird dies weggelassen, können die `data` (zum Beispiel beim Aufruf von `memory.init`) durch ihren Index identifiziert werden, zum Beispiel `0` für die erste `data` im Wasm-Modul, `1` für die zweite usw.
- `memory_identifier` {{optional_inline}}
  - : Ein Identifikator, der die `memory`-Instanz repräsentiert, in die die Daten eingefügt werden sollen, der mit dem Schlüsselwort `memory` versehen sein muss, um als `memory_identifier` interpretiert zu werden. Der Identifikator kann einer der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für das `memory`](/de/docs/WebAssembly/Reference/Definitions/memory#name), der bei der ersten Definition festgelegt wurde. Dieser muss mit einem `$`-Symbol beginnen und von einem `memory`-Schlüsselwort eingeleitet werden, zum Beispiel `(memory $my_memory)`.
    - `index`
      - : Ein [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32)-Wert, der die Indexnummer des Speichers repräsentiert, zum Beispiel `(memory 0)` für den ersten Speicher im Modul, `(memory 1)` für den zweiten usw.

    > [!NOTE]
    > Wenn eine aktive `data`-Definition geschrieben wird, muss der `offset` enthalten sein, aber der `memory_identifier` kann weggelassen werden, wobei er in diesem Fall standardmäßig `(memory 0)` ist.

- `offset` {{optional_inline}}
  - : Ein Wert, der den Offset angibt, bei dem die Daten im `memory` geschrieben werden sollen. Dieser Wert kann jeden beliebigen [konstanten Ausdruck](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant) darstellen, was bedeutet, dass er Strukturen wie arithmetische Ausdrücke sowie numerische Werte enthalten kann.

    Die vollständige Syntax schließt das `offset`-Schlüsselwort vor dem Wert ein, zum Beispiel `(offset i32.const 0)`, obwohl das Schlüsselwort in der abgekürzten Form weggelassen werden kann, zum Beispiel `(i32.const 0)`.

- `data_string`
  - : Ein String aus literal Bytes, die die Daten definieren, die durch diese `data`-Instanz repräsentiert werden.

## Beschreibung

Eine `data`-Definition definiert ein Segment von Bytes, das in den linearen Speicher kopiert werden kann. Es gibt zwei Formen von `data`-Definitionen:

- [Aktive Form](#aktive_form)
- [Passive Form](#passive_form)

### Aktive Form

Eine aktive `data`-Definition wird verwendet, um ein Datensegment zu definieren, das sofort in den Speicher geschrieben und dann verworfen wird. Sie referenziert den Speicher-Offset, in den die Daten kopiert werden sollen, und wird in den angegebenen Speicher kopiert, sobald das Modul instanziiert wird. Dieser muss den Offset beinhalten, in den die Daten kopiert werden sollen, und kann auch einen Identifikator für die Daten und den Speicher beinhalten:

```wat
(memory $my_mem (export "memory") 1)
(data $greeting1 (memory $my_mem) (offset i32.const 0) "Hello ")
```

Beachten Sie, dass ein Modul mehrere Speicher enthalten kann, die durch ihre identifizierenden Namen oder Indexnummern identifiziert werden können. Im obigen Beispiel würde das Folgende ebenfalls funktionieren:

```wat
(data $greeting1 (memory 0) (offset i32.const 0) "Hello ")
```

In Fällen, in denen nur ein Speicher im Modul vorhanden ist oder wenn Sie Daten in den ersten Speicher kopieren möchten, können Sie den Speicher-Identifikator weglassen, und die Daten werden standardmäßig in den ersten Speicher kopiert. Die folgende Version würde ebenfalls funktionieren, solange der `offset`-Wert angegeben ist:

```wat
(memory (export "memory") 1)
(data (offset i32.const 0) "Hello ")
```

> [!NOTE]
> Aktive Datensegmente werden während der Modulinstitution automatisch verworfen und stehen daher nicht mehr zur Verfügung, um sie über [`data.drop`](/de/docs/WebAssembly/Reference/Data/drop) zu entfernen.

### Passive Form

Ein passives Datensegment wird verwendet, um eine Datendefinition zu definieren, die erst später im Code in den Speicher geschrieben wird. Es bezieht sich nicht auf den Speicher, in den die Daten kopiert werden sollen. Zum Beispiel:

```wat
(memory (export "memory") 1)
(data $greeting "Hello World")
```

Passive Datensegmente werden bei Bedarf mit einer [`memory.init`](/de/docs/WebAssembly/Reference/Memory/init)-Anweisung in einen Speicher kopiert:

```wat
i32.const 0       ;; destination offset in memory
i32.const 0       ;; offset into the data segment
i32.const 11      ;; number of bytes to copy
memory.init $greeting
```

Die `memory.init`-Anweisung selbst spezifiziert einen Identifikator für die Daten, die in den Speicher kopiert werden sollen. Dies könnte auch eine Indexnummer sein:

```wat
memory.init 0
```

Nachdem `memory.init` aufgerufen wurde, wird das `data`-Segment nicht mehr benötigt, sodass [`data.drop`](/de/docs/WebAssembly/Reference/Data/drop) aufgerufen werden kann, um den von ihm genutzten Speicher freizugeben:

```wat
data.drop $greeting
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`data.drop`](/de/docs/WebAssembly/Reference/Data/drop) Anweisung
- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory) Definition
- [WebAssembly Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory)
