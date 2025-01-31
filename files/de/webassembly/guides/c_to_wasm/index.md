---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Sehen wir uns an, wie das funktioniert.

## Einrichtung der Emscripten-Umgebung

Zunächst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, indem Sie diese Anweisungen befolgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Mit der eingerichteten Umgebung schauen wir uns an, wie man ein einfaches C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die beiden Hauptszenarien, die wir abdecken werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, sowie den gesamten JavaScript-"Kleber"-Code, der erforderlich ist, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur das JavaScript erstellen.

Wir werden uns beide Szenarien im Folgenden ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten, bei dem Sie Emscripten alles generieren lassen, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst brauchen wir ein Beispiel zum Kompilieren. Kopieren Sie das folgende einfache C-Beispiel und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Verwenden Sie nun das Terminalfenster, mit dem Sie die Emscripten-Compiler-Umgebung betreten haben, navigieren Sie zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code (und einen Dateinamen zur Verwendung) auszuführen, sowie das Wasm-Modul und den JavaScript-"Kleber"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

Zu diesem Zeitpunkt sollten Sie in Ihrem Quellverzeichnis haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei mit Klebecode, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt müssen Sie nur noch das resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Sehen wir uns an, wie wir das tun können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repository. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` innerhalb Ihres vorherigen neuen Verzeichnisses.
3. Navigieren Sie nun (wieder in Ihrem Emscripten-Compiler-Umgebungsterminalfenster) in Ihr neues Verzeichnis und führen Sie folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler immer noch den JavaScript-Klebecode und `.html` ausgibt.
   - Wir haben `-O3` angegeben, das zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies liefert den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, das Sie durchlaufen werden.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das viel vom gleichen Inhalt wie die Vorlage mit etwas Klebecode hat, um das generierte Wasm zu laden, auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie sehen die gleiche Ausgabe wie beim letzten Beispiel.

> [!NOTE]
> Sie könnten angeben, nur die JavaScript-"Klebecodedatei\* anstatt des vollständigen HTMLs auszugeben, indem Sie in der `-o`-Flag eine .js-Datei angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML vollständig von Grund auf neu erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten erfordert eine große Vielfalt an JavaScript-"Klebecode", um Speicherzuweisung, Speicherlecks und eine Vielzahl anderer Probleme zu handhaben.

### Aufruf einer benutzerdefinierten in C definierten Funktion

Wenn Sie eine in Ihrem C-Code definierte Funktion von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie nach JavaScript kompiliere, und/oder erhalte ich die Meldung „Keine Funktionen zu verarbeiten“?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Sehen wir uns an, wie das funktioniert.

1. Speichern Sie zunächst den folgenden Code als `hello3.c` in einem neuen Verzeichnis:

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

   Standardmäßig ruft der durch Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Wenn Sie `EMSCRIPTEN_KEEPALIVE` vor einen Funktionsnamen setzen, wird verhindert, dass dies geschieht. Um `EMSCRIPTEN_KEEPALIVE` zu verwenden, müssen Sie auch die Bibliothek `emscripten.h` importieren.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit dieses Beispiel auch dann funktioniert, wenn Sie versuchen, es in C++-Code zu integrieren. Aufgrund der Namensverbiegungsregeln von C gegenüber C++ würde dies sonst brechen, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt ebenfalls in dieses neue Verzeichnis ein, nur zur Bequemlichkeit (man würde dies in einer zentralen Stelle in der eigentlichen Entwicklungsumgebung ablegen).
3. Führen Sie nun den Kompilierungsschritt erneut aus. Kompilieren Sie Ihren C-Code aus Ihrem neuesten Verzeichnis (und während Sie sich in Ihrem Emscripten-Compiler-Umgebungsterminalfenster befinden) mit folgendem Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: Andernfalls würde, wenn `main()` beendet wird, die Laufzeit heruntergefahren werden und es wäre nicht gültig, kompilierten Code aufzurufen. Dies ist notwendig, um ein korrektes C-Emulation zu gewährleisten: beispielsweise, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion von JavaScript ausführen. Öffnen Sie zunächst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt ein, direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag.

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

Das zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine große Vielfalt an Optionen.
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie nach JavaScript kompiliere, und/oder erhalte ich die Meldung „Keine Funktionen zu verarbeiten“?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
