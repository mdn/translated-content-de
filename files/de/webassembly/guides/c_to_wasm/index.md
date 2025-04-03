---
title: Kompilieren eines neuen C/C++ Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Sehen wir uns an, wie es funktioniert.

## Einrichten der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, indem Sie diese Anleitung befolgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Ein Beispiel kompilieren

Mit der eingerichteten Umgebung sehen wir uns an, wie wir ein C-Beispiel zu Wasm kompilieren können. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die zwei Hauptszenarien, die wir abdecken werden, sind:

- In Wasm kompilieren und HTML erstellen, um unseren Code darin auszuführen, sowie den gesamten notwendigen JavaScript-"Kleber"-Code, um das Wasm in der Webumgebung auszuführen.
- In Wasm kompilieren und nur den JavaScript-Code erstellen.

Wir werden beide unten betrachten.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir uns ansehen werden, bei dem Emscripten alles generiert, was Sie benötigen, um Ihren Code im Browser als WebAssembly auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Kopieren Sie das folgende einfache C-Beispiel und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Jetzt navigieren Sie in dem Terminalfenster, das Sie für den Eintritt in die Emscripten-Compiler-Umgebung verwendet haben, in dasselbe Verzeichnis wie Ihre `hello.c`-Datei und führen Sie folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code darin auszuführen (und legt einen Dateinamen fest), sowie das Wasm-Modul und den JavaScript-"Kleber"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

Zu diesem Zeitpunkt sollten Sie in Ihrem Quellverzeichnis Folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die den Kleincode enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ihr Beispiel ausführen

Jetzt bleibt nur noch, die resultierende `hello.html` in einem Browser zu laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die erzeugte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Glückwunsch, Sie haben gerade C in WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Sehen wir uns an, wie wir das tun können.

1. Speichern Sie zuerst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder im Emscripten-Compiler-Umgebungsterminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die übergebenen Optionen sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Klebercode und `.html` ausgibt.
   - Wir haben `-O3` angegeben, was zur Optimierung des Codes dient. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Produktionsbuilds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies gibt den Pfad zur HTML-Vorlage an, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen.

4. Lassen Sie uns dieses Beispiel nun ausführen. Der obige Befehl hat `hello2.html` generiert, das im Wesentlichen den gleichen Inhalt wie die Vorlage mit etwas hinzugefügtem Kleincode enthalten wird, um das generierte Wasm zu laden, auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie sehen denselben Output wie im letzten Beispiel.

> [!NOTE]
> Sie könnten festlegen, dass nur die JavaScript-"Kleber"-Datei\* anstelle des vollständigen HTML ausgegeben wird, indem Sie in der `-o`-Marke anstelle einer HTML-Datei eine `.js`-Datei angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML komplett von Grund auf neu erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten benötigt eine Vielzahl von JavaScript-"Kleber"-Codes, um Speicherzuweisung, Speicherlecks und eine Vielzahl anderer Probleme zu handhaben.

### Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion, die in Ihrem C-Code definiert ist, von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die Deklaration `EMSCRIPTEN_KEEPALIVE` verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++ Quellcode, wenn ich nach JavaScript kompiliere, und/oder ich bekomme die Meldung Keine Funktionen zu verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Sehen wir uns an, wie das funktioniert.

1. Speichern Sie zuerst den folgenden Code als `hello3.c` in einem neuen Verzeichnis:

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

   Standardmäßig ruft Emscripten-generierter Code nur die `main()`-Funktion auf, und andere Funktionen werden als nicht benötigter Code eliminiert. Das Setzen von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert, dass dies passiert. Sie müssen auch die `emscripten.h` Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` zu verwenden.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit, falls Sie versuchen, dies in C++-Code einzufügen, das Beispiel weiterhin funktioniert. Aufgrund von C gegenüber C++ Namensmangeln-Regeln würde dies sonst fehlschlagen, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie jetzt auch `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt in dieses neue Verzeichnis ein, nur aus Bequemlichkeit (offensichtlich würden Sie dies an einem zentralen Ort in Ihrer realen Entwicklungsumgebung platzieren).
3. Lassen Sie uns den Kompilierungsschritt erneut ausführen. Kompilieren Sie in Ihrem neuesten Verzeichnis (und während Sie sich im Emscripten-Compiler-Umgebungsterminalfenster befinden) Ihren C-Code mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls, wenn `main()` beendet ist, würde die Laufzeitumgebung heruntergefahren werden und es wäre nicht mehr gültig, kompilierte Code auszuführen. Dies ist notwendig für die korrekte C-Emulation, z.B. um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie das Gleiche wie zuvor!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion von JavaScript ausführen. Öffnen Sie zuerst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt hinzu, direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag.

   ```html
   <button id="my-button">Run myFunction</button>
   ```

7. Fügen Sie nun folgenden Code am Ende des ersten {{HTMLElement("script")}}-Elements hinzu:

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

Dies zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — erfahren Sie mehr über Emscripten und seine große Vielfalt an Optionen.
- [Aufrufen kompilierter C-Funktionen von JavaScript aus mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++ Quellcode, wenn ich nach JavaScript kompiliere, und/oder ich bekomme die Meldung Keine Funktionen zu verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
