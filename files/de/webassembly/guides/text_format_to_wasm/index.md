---
title: Konvertieren des WebAssembly-Textformats in Wasm
slug: WebAssembly/Guides/Text_format_to_Wasm
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

WebAssembly verfügt über eine S-Expressions-basierte textuelle Darstellung, eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen in Browsern usw. angezeigt wird. Dieser Artikel erklärt ein wenig, wie es funktioniert, und wie man verfügbare Werkzeuge benutzt, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden normalerweise mit der Endung `.wat` gespeichert. Historisch wurde auch eine `.wast`-Erweiterung verwendet, jedoch wird diese jetzt für die Skriptsprache verwendet, die von der WebAssembly-Test-Suite verwendet wird.

## Ein erster Blick auf das Textformat

Lassen Sie uns ein Beispiel hierfür betrachten — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird für die Nutzung in unserer Umgebung exportiert (z. B. in der Web-App, in der wir unser WebAssembly-Modul verwenden). Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem Wert (42), der als Parameter übergeben wird, ausgeführt wird.

## Konvertieren der Textdatei .wat in eine binäre .wasm-Datei

Versuchen wir, das obige Beispiel einer `.wat`-Textdarstellung in das `.wasm`-Assembly-Format zu konvertieren.

1. Beginnen Sie damit, eine Kopie des obigen Eintrags in einer Textdatei zu erstellen; nennen Sie sie `simple.wat`.
2. Wir müssen diese Textdarstellung in die Assemblersprache umwandeln, die der Browser tatsächlich liest, bevor wir sie verwenden können. Dazu können wir das Werkzeug wabt verwenden, das Compiler enthält, um zwischen der WebAssembly-Textdarstellung und Wasm und umgekehrt zu konvertieren sowie vieles mehr. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Werkzeug einzurichten.
3. Sobald Sie das Werkzeug erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` Ihrem System-`PATH` hinzu.
4. Führen Sie als Nächstes das Programm wat2wasm aus, indem Sie ihm den Pfad zur Eingabedatei übergeben, gefolgt von einem `-o`-Parameter, gefolgt vom Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` konvertieren, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können die Assembly auch mit dem Tool wasm2wat wieder in die Textdarstellung konvertieren; zum Beispiel `wasm2wat simple.wasm -o text.wat`.

## Anzeigen der Assembly-Ausgabe

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor angezeigt werden. Sie können sie jedoch mit der `-v`-Option des Tools wat2wasm anzeigen. Versuchen Sie dies:

```bash
wat2wasm simple.wat -v
```

Dies wird eine Ausgabe in Ihrem Terminal auf folgende Weise erzeugen:

![mehrere Binärzeichenfolgen mit textuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; Abschnittscode ](assembly-output.png)

## Siehe auch

- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Guides/Understanding_the_text_format) — eine detaillierte Erklärung der Syntax des Textformats.
- [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm) — Werkzeuge wie Binaryen/Emscripten kompilieren sowohl Ihren Quellcode zu Wasm als auch erstellen den zum Ausführen des Moduls im JavaScript-Kontext benötigten API-Code. Erfahren Sie mehr darüber, wie man sie nutzt.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — weitere Erklärungen zum Textformat im WebAssembly-GitHub-Repo.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der sich um all dies für Sie kümmert.
