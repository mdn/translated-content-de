---
title: "drop: Wasm Datensatzanweisung"
short-title: drop
slug: WebAssembly/Reference/Data/drop
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Die **`data.drop`** [Datensatzanweisung](/de/docs/WebAssembly/Reference/Data) verwirft die Daten, die von einer [passiven](/de/docs/WebAssembly/Reference/Definitions/data#passive_form) `data`-Definition enthalten sind, und gibt deren Speicher frei, nachdem sie in einer [`memory.init`](/de/docs/WebAssembly/Reference/Memory/init) verwendet wurden.

> [!NOTE]
> [Aktive](/de/docs/WebAssembly/Reference/Definitions/data#active_form) Datensegmente werden automatisch während der Modulinstanziierung verworfen und können daher nicht über `data.drop` verworfen werden.

{{InteractiveExample("Wat Demo: data.drop", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting "Hello")

  (func (export "init")
    i32.const 0       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 5       ;; number of bytes to copy
    memory.init $greeting
    data.drop $greeting
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 5);
  console.log(new TextDecoder().decode(memArray));
});
```

Im obigen Beispiel definieren wir einen `memory` und ein `data` namens `$greeting`, das die Zeichenfolge `Hello` enthält. Wir rufen dann `memory.init` auf, um die Zeichenfolge in den `memory` zu kopieren. Nachdem dies erledigt ist, werden die `data` nicht mehr benötigt, sodass wir `data.drop` aufrufen, um den genutzten Speicher freizugeben.

## Syntax

```plain
data.drop identifier
```

- `data.drop`
  - : Der `data.drop`-Anweisungstyp. Muss immer zuerst angegeben werden.
- `identifier`
  - : Der Bezeichner für die `data`, die Sie löschen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Ein identifizierender Name [für die `data` festgelegt](/de/docs/WebAssembly/Reference/Definitions/data#name), als es zuerst definiert wurde. Dies muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_data`.
    - `index`
      - : Die Indexnummer der `data`, zum Beispiel `0` für die erste `data` im Wasm-Modul, `1` für die zweite usw.

### Typ

```plain
[] -> []
```

### Binärcodierung

| Anweisung   | Binärformat            | Beispielttext => binär            |
| ----------- | ---------------------- | --------------------------------- |
| `data.drop` | `0xfc 9:u32 x:dataidx` | `data.drop 0` => `0xfc 0x09 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory) Definition
- [`data`](/de/docs/WebAssembly/Reference/Definitions/data) Definition
- [WebAssembly Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory)
