---
title: Umwandlung des WebAssembly-Textformats in Wasm
slug: WebAssembly/Text_format_to_Wasm
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{WebAssemblySidebar}}

WebAssembly besitzt eine S-Expressions-basierte Textdarstellung, eine Zwischenform, die dafür entwickelt wurde, in Texteditoren, Browser-Entwicklertools usw. angezeigt zu werden. Dieser Artikel erklärt, wie sie funktioniert und wie Sie verfügbare Werkzeuge nutzen können, um Textformat-Dateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textdateien im Format werden üblicherweise mit der Erweiterung `.wat` gespeichert. Historisch gesehen wurde auch die Erweiterung `.wast` verwendet, aber diese wird jetzt für die Skriptsprache des WebAssembly-Testpakets verwendet.

## Ein erster Blick auf das Textformat

Betrachten wir ein Beispiel: Das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Verwendung in unserer Umgebung exportiert (z. B. in der Web-App, in der wir unser WebAssembly-Modul verwenden). Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem Wert (42) als Parameter ausgeführt wird.

## Umwandlung der Textdatei .wat in eine Binärdatei .wasm

Lassen Sie uns versuchen, das obige `.wat`-Textdarstellungsbeispiel in das `.wasm`-Assembly-Format umzuwandeln.

1. Erstellen Sie zunächst eine Kopie der obigen Liste in einer Textdatei; nennen Sie sie `simple.wat`.
2. Wir müssen diese Textdarstellung in die Assemblersprache umwandeln, die der Browser tatsächlich liest, bevor wir sie verwenden können. Dafür können wir das wabt-Tool verwenden, das Compiler zum Konvertieren zwischen der Textdarstellung von WebAssembly und Wasm sowie weiteren Funktionen enthält. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Sobald das Tool erstellt ist, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` zu Ihrem System-`PATH` hinzu.
4. Führen Sie als Nächstes das Programm wat2wasm aus, indem Sie ihm den Pfad zur Eingabedatei übergeben, gefolgt von einem `-o` Parameter, gefolgt vom Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` umwandeln, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können die Assembler-Ausgabe auch mit dem Tool wasm2wat zurück in die Textdarstellung umwandeln, z. B. `wasm2wat simple.wasm -o text.wat`.

## Anzeige der Assembly-Ausgabe

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor angesehen werden. Sie können sie jedoch mit der `-v` Option des wat2wasm Tools ansehen. Versuchen Sie dies:

```bash
wat2wasm simple.wat -v
```

Dies ergibt eine Ausgabe in Ihrem Terminal auf die folgende Weise:

![mehrere Binärstrings mit textuellen Beschreibungen neben ihnen. Zum Beispiel: 0000008: 01 ; Sektion Code](assembly-output.png)

## Siehe auch

- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format) — eine ausführliche Erklärung der Syntax des Textformats.
- [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm) — Werkzeuge wie Binaryen/Emscripten kompilieren sowohl Ihren Quellcode zu Wasm als auch erstellen den API-Code, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie Sie diese nutzen.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — eine genauere Erklärung des Textformats im WebAssembly-GitHub-Repository.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der sich um alles kümmert.
