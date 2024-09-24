---
title: Konvertierung von WebAssembly-Textformat zu Wasm
slug: WebAssembly/Text_format_to_Wasm
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

WebAssembly verfügt über eine textuelle Darstellung basierend auf S-Ausdrücken, eine Zwischenform, die in Texteditoren, Entwicklerwerkzeugen von Browsern usw. angezeigt werden soll. Dieser Artikel erklärt ein wenig darüber, wie es funktioniert, und wie Sie verfügbare Tools verwenden können, um Textformatdateien in das Wasm-Format zu konvertieren.

> [!NOTE]
> Textformatdateien werden normalerweise mit der Erweiterung `.wat` gespeichert. Historisch wurde auch eine `.wast` Erweiterung verwendet, diese wird jedoch jetzt für die Skriptsprache verwendet, die von der WebAssembly-Test-Suite verwendet wird.

## Ein erster Blick auf das Textformat

Werfen wir einen Blick auf ein einfaches Beispiel — das folgende Programm importiert eine Funktion namens `imported_func` aus einem Modul namens `my_namespace` und exportiert eine Funktion namens `exported_func`:

```wasm
(module
  (func $i (import "my_namespace" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Die WebAssembly-Funktion `exported_func` wird für die Verwendung in unserer Umgebung (z. B. der Webanwendung, in der wir unser WebAssembly-Modul verwenden) exportiert. Wenn sie aufgerufen wird, ruft sie eine importierte JavaScript-Funktion namens `imported_func` auf, die mit dem als Parameter bereitgestellten Wert (42) ausgeführt wird.

## Konvertierung der Textdatei .wat in eine Binärdatei .wasm

Versuchen wir, das obige `.wat`-Textrepräsentationsbeispiel in das `.wasm`-Assembly-Format zu konvertieren.

1. Machen Sie zunächst eine Kopie der obigen Liste in einer Textdatei; nennen Sie diese `simple.wat`.
2. Wir müssen diese textuelle Darstellung in die Assemblersprache umwandeln, die der Browser tatsächlich liest, bevor wir sie verwenden können. Dazu können wir das Tool wabt verwenden, das Compiler enthält, um zwischen der textuellen Darstellung von WebAssembly und Wasm zu konvertieren und umgekehrt, plus mehr. Gehen Sie zu <https://github.com/webassembly/wabt> — folgen Sie den Anweisungen auf dieser Seite, um das Tool einzurichten.
3. Sobald Sie das Tool erstellt haben, fügen Sie das Verzeichnis `/wabt/out/clang/Debug` Ihrem System `PATH` hinzu.
4. Führen Sie als nächstes das Programm wat2wasm aus, indem Sie den Pfad zur Eingabedatei angeben, gefolgt von einem `-o` Parameter, gefolgt vom Pfad zur Ausgabedatei:

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

Dies wird das Wasm in eine Datei namens `simple.wasm` umwandeln, die den `.wasm`-Assembly-Code enthält.

> [!NOTE]
> Sie können die Assembly auch mit dem Tool wasm2wat zurück in die Textdarstellung konvertieren; beispielsweise `wasm2wat simple.wasm -o text.wat`.

## Anzeige des Assembly-Ausgangs

Da die Ausgabedatei auf Assembly basiert, kann sie nicht in einem normalen Texteditor angezeigt werden. Sie können sie jedoch mit der Option `-v` des Tools wat2wasm anzeigen. Versuchen Sie dies:

```bash
wat2wasm simple.wat -v
```

Dies wird Ihnen eine Ausgabe in Ihrem Terminal auf folgende Weise geben:

![mehrere Zeichenfolgen von Binärwerten mit textuellen Beschreibungen daneben. Zum Beispiel: 0000008: 01 ; section code ](assembly-output.png)

## Siehe auch

- [Verständnis des WebAssembly-Textformats](/de/docs/WebAssembly/Understanding_the_text_format) — eine detaillierte Erklärung der Textformatsyntax.
- [Kompilierung von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm) — Tools wie Binaryen/Emscripten sowohl kompilieren Ihren Quellcode zu Wasm, als auch erstellen den API-Code, der benötigt wird, um das Modul in einem JavaScript-Kontext auszuführen. Erfahren Sie mehr darüber, wie Sie sie verwenden.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API) — lesen Sie dies, wenn Sie mehr darüber erfahren möchten, wie der WebAssembly-API-Code funktioniert.
- [Textformat](https://webassembly.github.io/spec/core/text/index.html) — weitere Erklärungen zum Textformat, im WebAssembly GitHub-Repo.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — ein Loader für webpack, der sich um all dies für Sie kümmert.
