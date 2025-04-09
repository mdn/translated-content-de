---
title: Konvertieren des WebAssembly-Textformats in Wasm
slug: WebAssembly/Guides/Text_format_to_Wasm
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

WebAssembly hat eine auf S-Expressionen basierende textuelle Darstellung, eine Zwischenform, die entwickelt wurde, um in Texteditoren, Browser-Entwicklertools usw. angezeigt zu werden. Dieser Artikel erklärt ein wenig, wie es funktioniert, und wie verfügbare Werkzeuge genutzt werden können, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden normalerweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch eine `.wast`-Erweiterung verwendet, die jetzt jedoch für die Skriptsprache verwendet wird, die von der WebAssembly-Testsuite genutzt wird.

## Ein erster Blick auf das Textformat

Betrachten wir ein Beispiel dafür — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wat
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Nutzung in unserer Umgebung exportiert (z. B. in der Web-App, in der wir unser WebAssembly-Modul verwenden). Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem übergebenen Wert (42) als Parameter ausgeführt wird.

## Konvertieren des .wat-Textformats in eine binäre .wasm-Datei

Versuchen wir, das obige Beispiel der `.wat`-Textdarstellung in das `.wasm`-Assembly-Format zu konvertieren.

1. Kopieren Sie zunächst das obige Listing in eine Textdatei; nennen Sie sie `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assembly-Sprache umwandeln, die der Browser tatsächlich liest, bevor wir sie verwenden können. Dazu können wir das wabt-Tool verwenden, das Compiler enthält, um zwischen WebAssemblys Textdarstellung und Wasm zu konvertieren, und noch mehr. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Sobald Sie das Tool erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` zu Ihrem System-`PATH` hinzu.
4. Führen Sie als Nächstes das Programm wat2wasm aus, indem Sie den Pfad zur Eingabedatei, gefolgt von einem `-o`-Parameter und dem Pfad zur Ausgabedatei übergeben:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` konvertieren, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können die Assembly auch wieder in die Textdarstellung konvertieren, indem Sie das Tool wasm2wat verwenden; zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Anzeigen der Assembly-Ausgabe

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor betrachtet werden. Sie können sie jedoch mit der `-v`-Option des wat2wasm-Tools betrachten. Versuchen Sie dies:

```bash
wat2wasm simple.wat -v
```

Dies wird Ihnen eine Ausgabe in Ihrem Terminal auf die folgende Weise geben:

![mehrere Zeichenfolgen von Binärdaten mit textuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; section code ](assembly-output.png)

## Siehe auch

- [Verstehen des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format) — eine detaillierte Erklärung der Syntax des Textformats.
- [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm) — Tools wie Binaryen/Emscripten kompilieren sowohl Ihren Quellcode zu Wasm als auch erstellen den API-Code, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie man sie benutzt.
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — mehr Erklärung zum Textformat im WebAssembly GitHub-Repository.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der all das für Sie erledigt.
