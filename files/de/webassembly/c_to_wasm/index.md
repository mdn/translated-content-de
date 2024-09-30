---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: 6a2ec6cacea9c8932d6c5a32d766327effe3fe95
---

{{WebAssemblySidebar}}

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Lassen Sie uns ansehen, wie das funktioniert.

## Einrichtung der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, indem Sie diese Anweisungen befolgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Nachdem die Umgebung eingerichtet ist, schauen wir uns an, wie wir ein C-Beispiel zu Wasm kompilieren. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die beiden Hauptszenarien, die wir behandeln werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, plus aller JavaScript-„Glue“-Code, der erforderlich ist, um das Wasm in der Web-Umgebung auszuführen.
- Kompilieren zu Wasm und nur das Erstellen des JavaScripts.

Wir werden uns beide Szenarien unten ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten werden, bei dem Sie Emscripten dazu bringen, alles zu generieren, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst brauchen wir ein Beispiel zum Kompilieren. Kopieren Sie das folgende einfache C-Beispiel und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrer lokalen Festplatte:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Verwenden Sie nun das Terminalfenster, das Sie zum Eingeben der Emscripten-Kompilierumgebung verwendet haben, navigieren Sie zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code auszuführen (und einen Dateinamen verwendet), sowie das Wasm-Modul und den JavaScript-„Glue“-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Web-Umgebung verwendet werden kann.

In Ihrem Quellverzeichnis sollten Sie nun Folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Glue-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt bleibt nur noch, dass Sie das erstellte `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z. B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung ähnlich _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richte ich einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe „Hello world“ in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Lassen Sie uns sehen, wie wir das tun können.

1. Zuerst speichern Sie den folgenden C-Code in einer Datei mit dem Namen `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repository. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (erneut im Terminalfenster Ihrer Emscripten-Kompilierumgebung) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übermittelt haben, sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Glue-Code und `.html` ausgeben wird.
   - Wir haben `-O3` angegeben, das zur Optimierung des Codes verwendet wird. Emcc hat wie jeder andere C-Compiler Optimierungsstufen, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies bietet den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um die HTML zu erstellen, durch die Sie Ihr Beispiel ausführen möchten.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das denselben Inhalt wie die Vorlage mit etwas Glue-Code zur Laden des generierten Wasm, dessen Ausführung usw. haben wird. Öffnen Sie es in Ihrem Browser und Sie sehen im Wesentlichen dasselbe Output wie beim letzten Beispiel.

> [!NOTE]
> Sie könnten angeben, nur die JavaScript-„Glue“-Datei auszugeben anstatt das komplette HTML, indem Sie im `-o`-Flag eine .js-Datei anstelle einer HTML-Datei angeben, z. B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML vollständig von Grund auf neu erstellen, obwohl dies ein fortschrittlicher Ansatz ist; normalerweise ist es einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten benötigt eine Vielzahl von JavaScript-„Glue“-Code, um Speicherzuweisungen, Speicherlecks und eine Vielzahl anderer Probleme zu behandeln.

### Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion aufrufen möchten, die in Ihrem C-Code definiert ist, können Sie die Emscripten-`ccall()`-Funktion und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich ihn nach WebAssembly kompiliere und/oder erhalte ich Keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Lassen Sie uns sehen, wie das funktioniert.

1. Speichern Sie zu Beginn den folgenden Code als `hello3.c` in einem neuen Verzeichnis:

   ```cpp
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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als nicht genutzter Code eliminiert. Wenn man `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen schreibt, verhindert dies das. Sie müssen auch die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit das Beispiel weiterhin funktioniert, wenn Sie versuchen, es in C++-Code einzuschließen. Aufgrund der Unterschiede bei der Namensherstellung in C und C++ würde dies ansonsten fehlschlagen, aber hier stellen wir ein, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun auch `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt in dieses neue Verzeichnis ein, nur aus praktischen Gründen (natürlich würden Sie dies an einem zentralen Ort in Ihrer realen Entwicklungsumgebung platzieren).
3. Lassen Sie uns den Kompilierungsschritt erneut ausführen. Kompilieren Sie Ihren C-Code von Ihrem neuesten Verzeichnis aus (und während Sie sich im Terminalfenster Ihrer Emscripten-Kompilierumgebung befinden) mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen; andernfalls würde die Laufzeit heruntergefahren, wenn `main()` beendet wird, und es wäre ungültig, kompilierte Codes aufzurufen. Dies ist für eine ordnungsgemäße C-Emulation erforderlich: zum Beispiel, um sicherzustellen, dass Funktionen [`atexit()`](https://en.cppreference.com/w/c/program/atexit) aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue Funktion `myFunction()` von JavaScript ausführen. Öffnen Sie zunächst Ihre Datei hello3.html in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt hinzu, direkt oberhalb des ersten öffnenden `<script type='text/javascript'>`-Tags.

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. Fügen Sie nun den folgenden Code am Ende des ersten {{HTMLElement("script")}}-Elements hinzu:

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
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

- [emscripten.org](https://emscripten.org/) — erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Aufrufen von kompilierten C-Funktionen aus JavaScript mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich ihn nach WebAssembly kompiliere und/oder erhalte ich Keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/existing_C_to_Wasm)
