---
title: Konvertierung vom WebAssembly-Textformat zu Wasm
slug: WebAssembly/Text_format_to_Wasm
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

WebAssembly verfügt über eine auf S-Expressions basierende textuelle Darstellung, eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen des Browsers usw. angezeigt werden soll. Dieser Artikel erklärt ein wenig, wie sie funktioniert, und wie Sie die verfügbaren Werkzeuge nutzen können, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden normalerweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch die Erweiterung `.wast` verwendet, diese wird jedoch nun für die Skriptsprache verwendet, die von der WebAssembly-Testsuite genutzt wird.

## Ein erster Blick auf das Textformat

Schauen wir uns ein einfaches Beispiel dafür an – das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Verwendung in unserer Umgebung (z.B. der Web-App, in der wir unser WebAssembly-Modul nutzen) exportiert. Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem Wert (42) als Parameter ausgeführt wird.

## Umwandlung der Textdatei .wat in eine binäre .wasm-Datei

Versuchen wir, das obige `.wat`-Textrepräsentationsbeispiel in das `.wasm`-Assembly-Format zu konvertieren.

1. Zunächst machen Sie eine Kopie der obigen Auflistung in einer Textdatei; nennen Sie sie `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assemblersprache umwandeln, die der Browser tatsächlich liest, bevor wir sie nutzen können. Dazu können wir das wabt-Tool verwenden, das Compiler zur Umwandlung zwischen WebAssemblys Textdarstellung und Wasm, und umgekehrt, sowie weitere Funktionen enthält. Gehen Sie zu <https://github.com/webassembly/wabt> und folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Nachdem Sie das Tool erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` Ihrem System `PATH` hinzu.
4. Führen Sie als nächstes das Programm wat2wasm aus, indem Sie ihm den Pfad zur Eingabedatei übergeben, gefolgt von einem `-o`-Parameter, gefolgt vom Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` konvertieren, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können das Assembly auch mit dem Tool wasm2wat wieder in die Textdarstellung umwandeln; zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Anzeige der Assembly-Ausgabe

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor angezeigt werden. Sie können sie jedoch mit der `-v`-Option des wat2wasm-Tools anzeigen lassen. Versuchen Sie dies:

```bash
wat2wasm simple.wat -v
```

Dies wird Ihnen eine Ausgabe in Ihrem Terminal auf folgende Weise geben:

![mehrere Strings von Binärcodes mit texuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; Abschnittscode ](assembly-output.png)

## Siehe auch

- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format) — eine detaillierte Erklärung der Textformatsyntax.
- [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm) — Werkzeuge wie Binaryen/Emscripten kompilieren Ihren Quellcode zu Wasm und erstellen den API-Code, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie Sie sie nutzen können.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — mehr Erklärung zum Textformat im WebAssembly GitHub Repo.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der alles für Sie erledigt.
