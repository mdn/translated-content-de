---
title: "size: Wasm-Text-Anweisung"
short-title: size
slug: WebAssembly/Reference/Memory/Size
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`size`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) wird verwendet, um die aktuelle Anzahl der Seiten in einem Speicher abzurufen.

Die Anweisung fügt die Größe (in Seiten) an die Spitze des Stapels hinzu.
Derzeit ist jede Seite 64KiB groß.

{{EmbedInteractiveExample("pages/wat/size.html", "tabbed-standard")}}

## Syntax

Größe des Standardspeichers abrufen

```wasm
;; Erhalten Sie die Anzahl der Seiten im Standardspeicher
memory.size
;; Die Anzahl der Seiten wird nun oben auf den Stapel hinzugefügt
```

Größe eines bestimmten Speichers abrufen (wenn Multi-Memory unterstützt wird)

```wasm
;; Größe des Speichers mit Index 1
memory.size (memory 1)

;; Größe des Speichers namens $memory2
memory.size (memory $memory2)
```

### Anweisungen und Opcodes

| Anweisung     | Binärcode     |
| ------------- | ------------- |
| `memory.size` | `0x3f`        |

## Beispiele

### Größe des Standardspeichers abrufen

Der erste Speicher, der einem Wasm-Modul hinzugefügt wird, ist der Standardspeicher und hat den Index 0.
Wir können die Anzahl der Seiten in diesem Speicher abrufen, indem wir `memory.size` aufrufen.

Der untenstehende Code zeigt eine WAT-Datei, die dies demonstriert:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; Standardspeicher mit einer Seite und maximal 2 Seiten

  (func $main
    ;; Größe erhalten
    memory.size
    call $log ;; das Ergebnis protokollieren (1)

    ;; Standardspeicher um 1 Seite erweitern
    i32.const 1
    memory.grow

    ;; Größe erneut abrufen
    memory.size
    call $log ;; das Ergebnis protokollieren (2)
  )
  (start $main) ;; sofort beim Laden aufrufen
)
```

Oben mussten wir den Speicherindex in der `memory.size`-Anweisung nicht angeben, aber wir hätten dies mit dem Speicherindex (0) des Standardspeichers tun können:

```wasm
memory.size (memory 0)
```

Der Vollständigkeit halber können wir die kompilierte Version der obigen Datei `size.wasm` mit folgendem Code verwenden (die Protokollfunktion wird in das Modul importiert und vom Modul aufgerufen):

```js
start();
async function start() {
  const importObject = {
    console: {
      log(arg) {
        console.log(arg);
      },
    },
  };
  const result = await WebAssembly.instantiateStreaming(
    fetch("size.wasm"),
    importObject,
  );
}
start();
```

### Größe eines bestimmten Speichers abrufen

Da Speicher in einem Wasm-Modul definiert werden, erhalten sie nacheinander eine Indexnummer ab null.
Sie können die Größe eines bestimmten Speichers abrufen, indem Sie die `memory`-Anweisung und den gewünschten Index oder Namen (falls vorhanden) nach der `memory.size`-Anweisung angeben.
Wenn Sie keinen bestimmten Speicher angeben, wird der Standardspeicher mit Index 0 verwendet.

Das folgende Modul zeigt, wie Sie direkt auf einen Speicher durch Index und durch Namen verweisen könnten.

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2)  ;; Standardspeicher mit einer Seite und maximal 2 Seiten
  (memory $memory1 2 4)  ;; Speicher mit Index 1, initial 2 Seiten, maximal 4 Seiten
  (func $main
    ;; Größe für Speicher durch Index abrufen
    memory.size (memory 1)
    call $log ;; das Ergebnis protokollieren (2)

    ;; Größe für Speicher durch Namen abrufen
    memory.size (memory $memory1)
    call $log ;; das Ergebnis protokollieren (2)
  )
  (start $main)
)
```

Die WAT-Dateien könnten mit dem gleichen JavaScript-Code wie im ersten Beispiel geladen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Unterstützung von Speicher in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript-API.
> Der [multiMemory](#webassembly.multimemory) Schlüssel gibt Versionen an, in denen `size` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
