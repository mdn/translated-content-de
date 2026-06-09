---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: b3a170eaaa0451125e1f24a6425a302eadc6c94f
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Sehen wir uns an, wie das funktioniert.

> [!NOTE]
> Dieser Leitfaden verwendet Emscripten, welches das umfangreichste Toolset für die Kompilierung zu WebAssembly ist. Es emuliert eine C-Standardbibliothek, ein Dateisystem und andere Betriebssystemfunktionen, die C-Programme üblicherweise erwarten. Wenn Ihr Code diese Laufzeitunterstützung nicht benötigt, können Sie C auch direkt mit einem niedrigeren Toolset wie [Clang/LLVM](https://surma.dev/things/c-to-webassembly/) oder dem [WASI SDK](https://github.com/WebAssembly/wasi-sdk) zu WebAssembly kompilieren, die beide kleinere Module mit weniger Abhängigkeiten produzieren.

## Einrichten der Emscripten-Umgebung

Lassen Sie uns zunächst die erforderliche Entwicklungsumgebung einrichten.

### Voraussetzungen

Besorgen Sie sich das Emscripten SDK, indem Sie dieser Anleitung folgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Nachdem die Umgebung eingerichtet ist, lassen Sie uns sehen, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen, die beim Kompilieren mit Emscripten verfügbar sind, aber die zwei Hauptszenarien, die wir abdecken werden, sind:

- Kompilierung zu Wasm und Erstellung von HTML, um unseren Code auszuführen, plus den gesamten notwendigen "glue" JavaScript-Code, um das Wasm in der Web-Umgebung auszuführen.
- Kompilierung zu Wasm und Erstellung nur des JavaScripts.

Schauen wir uns beide an.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten werden, bei dem Sie Emscripten dazu bringen, alles zu generieren, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Navigieren Sie nun mit dem Terminalfenster, das Sie verwendet haben, um die Emscripten-Kompilerumgebung zu betreten, in dasselbe Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir Emscripten anweisen, eine HTML-Seite zu generieren, um unseren Code auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"glue"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Web-Umgebung verwendet werden kann.

An dieser Stelle sollten Sie in Ihrem Quelldatenverzeichnis Folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die den "glue"-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, die Ihr Wasm-Code lädt, kompiliert und instanziiert und dessen Ausgabe im Browser anzeigt (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt müssen Sie nur noch die resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig aktiviert ab Firefox 52, Chrome 57, Edge 57, Opera 44.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrem lokalen Laufwerk zu öffnen (z.B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Lassen Sie uns sehen, wie wir dies tun können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wiederum in Ihrem Emscripten-Kompilerumgebungsfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:
   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-"glue"-Code und `.html` ausgibt.
   - Wir haben `-O3` angegeben, was verwendet wird, um den Code zu optimieren. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies bietet den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das in etwa denselben Inhalt wie die Vorlage enthält, mit einigem zusätzlichen "glue"-Code, um das generierte Wasm zu laden und auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie sehen dieselbe Ausgabe wie im letzten Beispiel.

### Kompilieren zu einem JavaScript-Modul

Sie könnten angeben, nur die JavaScript-"glue"-Datei auszugeben (Emscripten erfordert eine große Vielfalt an JavaScript-"glue"-Code zur Behandlung von Speicherzuweisung, Speicherlecks und einer Vielzahl anderer Probleme), anstatt der vollständigen HTML-Datei, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag angeben, wie folgt:

```bash
emcc -o hello.js hello.c -O3
```

Sie könnten dann diese JavaScript-Datei in Ihr Programm integrieren, was besonders nützlich ist, wenn Sie einen Bundler verwenden und nicht direkt mit dem HTML arbeiten. Beispielsweise können Sie die generierte JavaScript-"glue"-Datei importieren, sodass sie als Nebeneffekt ausgeführt wird. Fügen Sie in das Einstiegmodul Ihrer App Folgendes ein:

```js
import "./hello.js";
```

Alternativ können Sie ein Fabrikmodul produzieren, das Ihnen ermöglicht, mehrere Instanzen des Moduls zu erzeugen (standardmäßig lädt der "glue"-Code das Modul global, wodurch mehrere Instanzen kollidieren).

```bash
emcc -o hello.mjs hello.c -O3 -sMODULARIZE
```

> [!NOTE]
> Wenn Ihr Ausgabedateiformat .js und nicht .mjs ist, müssen Sie die Einstellung `-sEXPORT_ES6` hinzufügen, um ein JavaScript-Modul auszugeben.

Importieren Sie dann in Ihrem Code die Fabrik und rufen Sie sie auf:

```js
import createModule from "./hello.mjs";

createModule().then((Module) => {
  console.log("Wasm ready", Module);
});
```

## Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion, die in Ihrem C-Code definiert ist, von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die Deklaration `EMSCRIPTEN_KEEPALIVE` verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich zu JavaScript kompiliere, und/oder bekomme ich No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Lassen Sie uns sehen, wie das funktioniert.

1. Speichern Sie zunächst den folgenden Code als `hello3.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Das Setzen von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert dies. Außerdem müssen Sie die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit das Beispiel auch funktioniert, wenn Sie versuchen, es in C++-Code einzubinden. Aufgrund der Namensmangling-Regeln von C und C++ würde dies sonst fehlschlagen, aber hier wird es so eingestellt, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt ebenfalls in dieses neue Verzeichnis hinzu, nur zur Bequemlichkeit (offensichtlich würden Sie dies in einem zentralen Ort in Ihrer echten Entwicklungsumgebung ablegen).
3. Führen Sie jetzt den Kompilierungsschritt erneut aus. Kompilieren Sie von Ihrem neuesten Verzeichnis aus (und während Sie sich in Ihrem Emscripten-Kompilerumgebungsfenster befinden) Ihren C-Code mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls würde beim Beenden von `main()` die Laufzeit geschlossen werden und es wäre nicht mehr gültig, kompilierte Codes aufzurufen. Dies ist notwendig für eine ordnungsgemäße C-Emulation: zum Beispiel, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue Funktion `myFunction()` von JavaScript ausführen. Öffnen Sie zuerst Ihre `hello3.html` Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt ein, direkt über dem ersten öffnenden `<script type="text/javascript">`-Tag.

   ```html
   <button id="my-button">Run myFunction</button>
   ```

7. Fügen Sie nun den folgenden Code am Ende des ersten {{HTMLElement("script")}}-Elements hinzu:

   ```js
   document.getElementById("my-button").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

Dies veranschaulicht, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Aufrufen kompilierter C-Funktionen aus JavaScript mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich zu JavaScript kompiliere, und/oder bekomme ich No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
