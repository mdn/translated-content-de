---
title: Konvertieren des WebAssembly-Textformats in Wasm
slug: WebAssembly/Guides/Text_format_to_Wasm
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

WebAssembly hat eine auf S-Ausdrücken basierende textuelle Darstellung, eine Zwischenform, die in Texteditoren, Browser-Entwicklerwerkzeugen usw. angezeigt werden soll. Dieser Artikel erklärt ein wenig, wie es funktioniert, und wie man verfügbare Werkzeuge verwendet, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden normalerweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch die Erweiterung `.wast` verwendet, diese wird jedoch jetzt für die Skriptsprache der WebAssembly-Test-Suite verwendet.

## Ein erster Blick auf das Textformat

Werfen wir einen Blick auf ein Beispiel — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird zur Verwendung in unserer Umgebung (z. B. der Web-App, in der wir unser WebAssembly-Modul verwenden) exportiert. Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem Wert (42) als Parameter ausgeführt wird.

## Konvertieren des Textformats .wat in eine binäre .wasm-Datei

Versuchen wir, das obige `.wat`-Textrepräsentationsbeispiel in das `.wasm`-Assembly-Format zu konvertieren.

1. Erstellen Sie zunächst eine Kopie des obigen Listings in einer Textdatei; nennen Sie sie `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assemblersprache umwandeln, die der Browser tatsächlich liest, bevor wir sie verwenden können. Dazu können wir das `wabt`-Tool verwenden, das Compiler zur Konvertierung zwischen WebAssemblys Textdarstellung und Wasm sowie mehr enthält. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Sobald Sie das Tool erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` zu Ihrem System `PATH` hinzu.
4. Führen Sie als nächstes das Programm `wat2wasm` aus, indem Sie den Pfad zur Eingabedatei übergeben, gefolgt von einem `-o` Parameter und dem Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` konvertieren, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können die Assembly auch mit dem `wasm2wat`-Tool wieder in das Textformat umwandeln; zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Anzeigen der Assembly-Ausgabe

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor angesehen werden. Sie können sie jedoch mit der `-v` Option des `wat2wasm`-Tools anzeigen. Versuchen Sie Folgendes:

```bash
wat2wasm simple.wat -v
```

Dies wird Ihnen eine Ausgabe in Ihrem Terminal auf folgende Weise geben:

![mehrere Zeichenfolgen von Binärdaten mit textlichen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; section code](assembly-output.png)

## Siehe auch

- [Das WebAssembly-Textformat verstehen](/de/docs/WebAssembly/Guides/Understanding_the_text_format) — eine detaillierte Erklärung der Syntax des Textformats.
- [Compilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm) — Werkzeuge wie Binaryen/Emscripten kompilieren Ihren Quellcode sowohl in Wasm als auch in den API-Code, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie Sie sie verwenden können.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — weitere Erklärungen zum Textformat im WebAssembly GitHub-Repo.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der alles für Sie erledigt.
