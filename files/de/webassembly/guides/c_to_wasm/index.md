---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Schauen wir uns an, wie es funktioniert.

## Emscripten-Umgebung einrichten

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, unter Verwendung dieser Anweisungen: <https://emscripten.org/docs/getting_started/downloads.html>

## Ein Beispiel kompilieren

Sobald die Umgebung eingerichtet ist, schauen wir, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die zwei Hauptszenarien, die wir abdecken, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, sowie aller erforderlichen JavaScript-"Glue"-Codes, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur Erstellen des JavaScripts.

Wir werden beide unten betrachten.

### HTML und JavaScript erstellen

Dies ist der einfachste Fall, den wir betrachten, wobei Sie Emscripten alles generieren lassen, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Nun, verwenden Sie das Terminalfenster, das Sie verwendet haben, um die Emscripten-Compilerumgebung zu betreten, navigieren Sie zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"Glue"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

An dieser Stelle sollten Sie in Ihrem Quellverzeichnis haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei mit Glue-Code, die zwischen den nativen C-Funktionen und JavaScript/Wasm übersetzt (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren, und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ihr Beispiel ausführen

Jetzt müssen Sie nur noch die resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig aktiviert ab Firefox 52, Chrome 57, Edge 57, Opera 44.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z. B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Eine benutzerdefinierte HTML-Vorlage verwenden

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Sehen wir uns an, wie wir dies tun können.

1. Speichern Sie zuerst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder in Ihrem Emscripten-Compilerumgebung-Terminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler immer noch den JavaScript-Glue-Code und `.html` ausgeben wird.
   - Wir haben `-O3` angegeben, was zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies gibt den Pfad zur HTML-Vorlage an, die Sie verwenden möchten, um das HTML zu erstellen, das Sie durch Ihr Beispiel ausführen werden.

4. Lassen Sie uns dieses Beispiel nun ausführen. Der obige Befehl hat `hello2.html` generiert, das viel denselben Inhalt wie die Vorlage mit etwas hinzugefügtem Glue-Code, um das generierte Wasm zu laden, es auszuführen usw. Öffnen Sie es in Ihrem Browser, und Sie werden viel das gleiche Ergebnis wie beim letzten Beispiel sehen.

> [!NOTE]
> Sie könnten nur die Ausgabe der JavaScript-"Glue"-Datei\* angeben, anstatt das vollständige HTML, indem Sie eine .js-Datei statt einer HTML-Datei im `-o`-Flag angeben, z. B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML völlig von Grund auf neu erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten benötigt eine Vielzahl von JavaScript-"Glue"-Codes, um die Speicherzuweisung, Speicherlecks und eine Reihe anderer Probleme zu handhaben.

### Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion, die in Ihrem C-Code definiert ist, von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die Deklaration `EMSCRIPTEN_KEEPALIVE` verwenden, welche Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder ich erhalte keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Schauen wir uns an, wie dies funktioniert.

1. Speichern Sie zuerst den folgenden Code als `hello3.c` in einem neuen Verzeichnis:

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Wenn man `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen setzt, verhindert dies, dass dies passiert. Sie müssen auch die Bibliothek `emscripten.h` importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir schließen die `#ifdef`-Blöcke ein, damit, falls Sie versuchen, dies in C++-Code einzuschließen, das Beispiel weiterhin funktioniert. Aufgrund der C versus C++-Namensverzeichnungsregeln würde dies ansonsten brechen, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt auch in dieses neue Verzeichnis ein, nur zur Bequemlichkeit (natürlich würden Sie dies in einer zentralen Stelle in Ihrer realen Entwicklungsumgebung ablegen).
3. Lassen Sie uns nun den Kompilierungsschritt erneut durchführen. Kompilieren Sie aus Ihrem neuesten Verzeichnis (und während Sie sich in Ihrem Emscripten-Compilerumgebung-Terminalfenster befinden) Ihren C-Code mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls, wenn `main()` endet, würde die Laufzeit heruntergefahren, und es wäre nicht gültig, kompilierten Code aufzurufen. Dies ist für eine korrekte C-Emulation notwendig: zum Beispiel, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Nun müssen wir unsere neue Funktion `myFunction()` von JavaScript ausführen. Öffnen Sie zuerst Ihre Datei `hello3.html` in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt hinzu, direkt über dem ersten öffnenden `<script type="text/javascript">`-Tag.

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

- [emscripten.org](https://emscripten.org/) — erfahren Sie mehr über Emscripten und seine große Vielfalt an Optionen.
- [Aufrufen von kompilierten C-Funktionen von JavaScript aus mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder ich erhalte keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
