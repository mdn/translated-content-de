---
title: Konvertieren des WebAssembly-Textformats in Binärformat
slug: WebAssembly/Guides/Text_format_to_Wasm
l10n:
  sourceCommit: 95a7913cbb3523812bbff003e4d4015e928e35c9
---

WebAssembly besitzt eine S-Expressions-basierte textuelle Darstellung, eine Zwischenform, die dafür entwickelt wurde, in Texteditoren, Browser-Entwicklertools usw. angezeigt zu werden. Dieser Artikel erklärt ein wenig, wie es funktioniert und wie Sie verfügbare Werkzeuge nutzen können, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden üblicherweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch die Erweiterung `.wast` verwendet, diese wird jedoch jetzt für die Skriptsprache verwendet, die von der WebAssembly-Testsuite genutzt wird.

## Ein erster Blick auf das Textformat

Schauen wir uns ein Beispiel an — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wat
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Nutzung in unserer Umgebung exportiert (z.B. in der Web-App, in der wir unser WebAssembly-Modul verwenden). Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem als Parameter übergebenen Wert (42) ausgeführt wird.

## Konvertieren der Textdatei .wat in eine Binärdatei .wasm

Machen wir uns daran, das obige `.wat` Textrepräsentationsbeispiel in das `.wasm` Assembly-Format zu konvertieren.

1. Erstellen Sie zunächst eine Kopie des obigen Listings in einer Textdatei und nennen Sie sie `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assembler-Sprache umwandeln, die der Browser tatsächlich liest, bevor wir sie nutzen können. Dazu können wir das wabt-Tool verwenden, das Compiler zum Konvertieren zwischen WebAssemblys Textdarstellung und Wasm sowie mehr bietet. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Sobald Sie das Tool gebaut haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` Ihrem System-`PATH` hinzu.
4. Führen Sie als nächstes das wat2wasm-Programm aus, indem Sie ihm den Pfad zur Eingabedatei übergeben, gefolgt von einem `-o` Parameter, gefolgt vom Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` konvertieren, welche den `.wasm`-Assemblercode enthält.

> [!NOTE]
> Sie können die Assemblerdatei auch mit dem wasm2wat-Tool zurück in die Textdarstellung umwandeln, zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Anzeigen der Assemblerausgabe

Da die Ausgabedatei auf Assembler basiert, kann sie nicht in einem normalen Texteditor angezeigt werden. Sie können sie jedoch mit der `-v` Option des wat2wasm-Tools ansehen. Probieren Sie dies aus:

```bash
wat2wasm simple.wat -v
```

Dies gibt Ihnen eine Ausgabe in Ihrem Terminal wie folgt:

![mehrere Zeichenfolgen aus Binärcode mit textuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; section code ](assembly-output.png)

## Siehe auch

- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format) — eine detaillierte Erklärung der Textformatsyntax.
- [Von C/C++ zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm) — Tools wie Binaryen/Emscripten kompilieren sowohl Ihren Quellcode zu Wasm, als auch erstellen den erforderlichen API-Code, um das Modul im JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie Sie sie verwenden.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — mehr Erklärungen zum Textformat im WebAssembly-GitHub-Repository.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der sich um all dies für Sie kümmert.
