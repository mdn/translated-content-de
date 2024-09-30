---
title: Konvertierung des WebAssembly-Textformats in Wasm
slug: WebAssembly/Text_format_to_Wasm
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

WebAssembly hat eine auf S-Ausdrücken basierende textuelle Darstellung, eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen des Browsers usw. angezeigt werden soll. Dieser Artikel erklärt ein wenig, wie sie funktioniert und wie verfügbare Werkzeuge genutzt werden können, um Dateien im Textformat in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformat-Dateien werden normalerweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch eine `.wast` Erweiterung verwendet, diese wird jedoch mittlerweile für die Skriptsprache verwendet, die von der WebAssembly Testsuite genutzt wird.

## Ein erster Blick auf das Textformat

Sehen wir uns ein einfaches Beispiel dafür an — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Nutzung in unserer Umgebung (z. B. der Webanwendung, in der wir unser WebAssembly-Modul verwenden) exportiert. Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion `imported_func` auf, die mit dem Wert (42) ausgeführt wird, der als Parameter übergeben wird.

## Konvertierung der textuellen .wat in eine binäre .wasm Datei

Lassen Sie uns versuchen, das obige `.wat`-Textdarstellungsbeispiel in Wasm-Assembly-Format zu konvertieren.

1. Zunächst erstellen Sie eine Kopie der obigen Auflistung in einer Textdatei; nennen Sie sie `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assembler-Sprache, die der Browser tatsächlich liest, umwandeln, bevor wir sie verwenden können. Dafür können wir das WABT-Tool verwenden, das Compiler enthält, um zwischen der textuellen Darstellung von WebAssembly und Wasm zu konvertieren und umgekehrt, plus noch mehr. Besuchen Sie <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Nachdem Sie das Tool erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` Ihrem System `PATH` hinzu.
4. Führen Sie als Nächstes das Programm wat2wasm aus, indem Sie den Pfad zur Eingabedatei, gefolgt von einem `-o` Parameter, gefolgt vom Pfad zur Ausgabedatei angeben:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` umwandeln, die den `.wasm`-Assemblercode enthält.

> [!NOTE]
> Sie können den Assembler auch mit dem Tool wasm2wat wieder in die Textdarstellung konvertieren; zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Ansicht der Assemblerausgabe

Da die Ausgabedatei auf Assembler basiert, kann sie nicht in einem normalen Texteditor angesehen werden. Sie können sie jedoch mit der Option `-v` des Tools wat2wasm ansehen. Probieren Sie Folgendes aus:

```bash
wat2wasm simple.wat -v
```

Dies wird Ihnen eine Ausgabe in Ihrem Terminal auf folgende Weise geben:

![mehrere Zeichenfolgen von Binärdaten mit textuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; Abschnittscode ](assembly-output.png)

## Siehe auch

- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format) — eine detaillierte Erklärung der Textformatsyntax.
- [Kompilierung von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm) — Werkzeuge wie Binaryen/Emscripten kompilieren Ihren Quellcode sowohl zu Wasm als auch zur Erstellung des API-Codes, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie sie verwendet werden.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Text format](https://webassembly.github.io/spec/core/text/index.html) — mehr Erklärung zum Textformat auf dem WebAssembly-GitHub-Repository.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für Webpack, der all dies für Sie erledigt.
