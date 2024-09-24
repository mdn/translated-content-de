---
title: "load: Wasm Textanweisung"
short-title: load
slug: WebAssembly/Reference/Memory/Load
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`load`** [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) werden verwendet, um eine Zahl aus einem Speicher auf den Stapel zu laden.

Es gibt `load`-Anweisungen zum Laden aus einem Speicher in ein `i32`, `i64`, `f32` und `f64`.
Für die Ganzzahlen gibt es separate Anweisungsvarianten zum Laden einer schmaleren vorzeichenbehafteten Zahl und einer vorzeichenlosen Zahl aus dem Speicher und deren Erweiterung in einen breiteren Typ.
Zum Beispiel kann man eine vorzeichenlose 8-Bit-Zahl laden und sie in ein i32 umwandeln, indem man `i32.load8_u` verwendet.
Alle Varianten sind [unten aufgelistet](#anweisungen_und_opcodes).

{{EmbedInteractiveExample("pages/wat/load.html", "tabbed-taller")}}

## Syntax

Laden aus dem Standard-Speicher

```wasm
;; Laden aus dem Standard-Speicher bei dem durch den Wert oben auf dem Stapel angegebenen Offset
i32.const 0 ;; Stapelvariable, die den Speicher-Offset (0) der zu ladenden Zahl enthält.
i32.load    ;; Laden vom angegebenen Offset im Standard-Speicher

;; Laden von der gleichen Position unter Verwendung einer S-Funktion
(i32.load (i32.const 0))
```

Laden aus einem angegebenen Speicher (falls Multi-Memory unterstützt wird)

```wasm
;; Laden aus dem durch Index angegebenen Speicher
i32.const 0 ;; Offset im Speicher, von dem geladen werden soll (0)
i32.load (memory 1) ;; Laden aus dem Speicher mit Index 1

;; Laden aus dem durch Name angegebenen Speicher
i32.const 1  ;; Offset im Speicher, von dem geladen werden soll (1)
i32.load (memory $memory1) ;; Laden aus dem benannten Speicher $memory1

;; Laden aus dem durch Name angegebenen Speicher unter Verwendung einer S-Funktion
(i32.load (memory $memory1) (i32.const 0))
```

### Anweisungen und Opcodes

| Anweisung       | Binärer Opcode |
| --------------- | -------------- |
| `i32.load`      | `0x28`         |
| `i64.load`      | `0x29`         |
| `f32.load`      | `0x2a`         |
| `f64.load`      | `0x2b`         |
| `i32.load8_s`   | `0x2c`         |
| `i32.load8_u`   | `0x2d`         |
| `i32.load16_s`  | `0x2e`         |
| `i32.load16_u`  | `0x2f`         |
| `i64.load8_s`   | `0x30`         |
| `i64.load8_u`   | `0x31`         |
| `i64.load16_s`  | `0x32`         |
| `i64.load16_u`  | `0x33`         |
| `i64.load32_s`  | `0x34`         |
| `i64.load32_u`  | `0x35`         |

## Beispiele

### Laden von Elementen aus dem Standard-Speicher

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standard-Speicher und hat den Index 0.
Wir können aus diesem Speicher laden, indem wir eine Variable hinzufügen, die den Offset im Standard-Speicher der zu ladenden Zahl auf den Stapel spezifiziert, und dann `load` aufrufen.

Der folgende Code zeigt eine WAT-Datei, die dies demonstriert:

```wasm
(module
  ;; Speicher namens $memory definieren und exportieren
  (memory $memory 1)  ;; Der zuerst deklarierte Speicher ist Standard, mit Index 0
  (export "memory" (memory $memory))

  ;; Exportierte Funktion zum Laden des ersten Elements im Standard-Speicher
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; Element im Speicher mit 0-Offset laden und das Ergebnis zurückgeben
    i32.const 0
    i32.load
  )
)
```

Oben mussten wir den Speicher in der Ladeanweisung nicht spezifizieren, aber wir hätten dies tun können, indem wir entweder den Namen oder den Index des Standard-Speichers verwenden.
Das wird im folgenden Beispiel gezeigt.

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `load_single.wasm` mit einem ähnlichen Code verwenden, wie er unten gezeigt wird:

```js
// await auf die angegebene .wasm-Datei, um sie abzurufen und zu laden
const result = await WebAssembly.instantiateStreaming(
  fetch("load_single.wasm"),
);

// Die exportierte Funktion abrufen, die wir unten aufrufen werden
const load_first_item_in_mem = result.instance.exports.load_first_item_in_mem;

// Den exportierten Speicher abrufen und 30 beim Offset 0 speichern
const memory = result.instance.exports.memory;
const dataView = new DataView(memory.buffer);
dataView.setUint32(0, 30, true);

// Das Ergebnis des Aufrufs der exportierten Wasm-Funktion protokollieren
console.log(load_first_item_in_mem(100)); // 30
```

### Laden von Elementen aus einem angegebenen Speicher

Da Speicher in einem Wasm-Modul definiert sind, werden sie nacheinander mit einer Indexnummer ab null zugewiesen.
Sie können aus einem bestimmten Speicher laden, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen nach der `load`-Anweisung angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standard-Speicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie einen Speicher direkt über den Index referenzieren können.

```wasm
(module
  ;; Speicher für das Modul definieren
  (memory $memory0 1)  ;; Erster (Standard-) Speicher mit Speicherindex 0 (und 1 Seite)
  (memory $memory1 1)  ;; Zweiter Speicher mit Index 1, benannt $memory1
  (export "memory" (memory $memory1))  ;; $memory1 exportieren

  ;; Exportierte Funktion zum Laden des ersten Elements im Standard-Speicher
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; Element im Speicher mit Index 1 laden und das Ergebnis zurückgeben
    i32.const 0
    i32.load (memory 1)
  )
)
```

Der Hauptteil der Funktion könnte auch mit einer der folgenden Optionen geschrieben werden:

```wasm
i32.const 0
i32.load (memory $memory1)  ;; Speicher durch Name referenzieren

;; Verwendung von S-Funktionen
(i32.load (memory 1) (i32.const 0))  ;; Speicher durch Index referenzieren
(i32.load (memory $memory1) (i32.const 0)) ;; Speicher durch Name referenzieren
```

Wir haben im Beispiel den Standard-Speicher nicht verwendet.
Aber Sie können auch wählen, diesen Index anzugeben, wenn Sie möchten:

```wasm
i32.const 0
i32.load (memory 0)  ;; Speicher durch Index referenzieren

;; Verwendung von S-Funktionen
(i32.load (i32.const 0))
(i32.load (memory 0) (i32.const 0))  ;; Speicher durch Index referenzieren
(i32.load (memory $memory0) (i32.const 0)) ;; Speicher durch Name referenzieren
```

Die WAT-Dateien könnten mit dem gleichen JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript-API.
> Der Schlüssel [multiMemory](#webassembly.multimemory) zeigt an, in welchen Versionen `load` mit einem spezifizierten Speicher verwendet werden kann.

{{Compat}}
