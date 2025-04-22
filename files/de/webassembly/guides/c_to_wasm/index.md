---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

Wenn Sie ein neues Code-Modul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Sehen wir uns an, wie das funktioniert.

## Einrichtung der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, indem Sie diese Anweisungen befolgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Mit der eingerichteten Umgebung sehen wir uns an, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die zwei Hauptszenarien, die wir abdecken werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code darin auszuführen, plus den gesamten notwendigen JavaScript-"Glue"-Code, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur Erstellen des JavaScripts.

Wir werden uns beide Szenarien im Folgenden ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten werden, bei dem Sie emscripten alles generieren lassen, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Verwenden Sie nun das Terminalfenster, das Sie zum Betreten der Emscripten-Compiler-Umgebung verwendet haben, navigieren Sie zum gleichen Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code darin auszuführen (und einen Dateinamen, der verwendet werden soll), sowie das Wasm-Modul und den JavaScript-"Glue"-Code, um das Wasm zu kompilieren und zu instanziieren, sodass es in der Webumgebung verwendet werden kann.

An diesem Punkt sollten in Ihrem Quellverzeichnis folgende Dateien vorhanden sein:

- Der binäre Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Glue-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt bleibt nur noch, die resultierende `hello.html` in einem Browser zu laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrem lokalen Laufwerk zu öffnen (z. B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie "Hello world"-Ausgaben in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Sehen wir uns an, wie wir das tun können.

1. Speichern Sie zuerst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie in Ihrem emsdk-Repo die Datei `shell_minimal.html`. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wiederum in Ihrem Emscripten-Compiler-Umgebungsterminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir diesmal übergeben haben, sind etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler immer noch den JavaScript-Glue-Code und `.html` ausgeben wird.
   - Wir haben `-O3` angegeben, das verwendet wird, um den Code zu optimieren. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies gibt den Pfad zur HTML-Vorlage an, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen werden.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das fast den gleichen Inhalt wie die Vorlage mit hinzugefügtem Glue-Code zum Laden des generierten Wasm, zu dessen Ausführung usw. haben wird. Öffnen Sie es in Ihrem Browser und Sie werden fast die gleiche Ausgabe wie beim letzten Beispiel sehen.

> [!NOTE]
> Sie könnten alternativ nur die JavaScript-"Glue"-Datei\* anstelle des vollständigen HTML ausgeben, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag angeben, z. B. `emcc -o hello2.js hello2.c -O3`. Dann könnten Sie Ihr benutzerdefiniertes HTML komplett von Grund auf neu erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten erfordert eine Vielzahl von JavaScript-"Glue"-Code, um Speicherzuweisung, Speicherlecks und eine Vielzahl anderer Probleme zu handhaben

### Aufrufen einer benutzerdefinierten in C definierten Funktion

Wenn Sie eine Funktion aufrufen möchten, die in Ihrem C-Code definiert ist, können Sie die Emscripten-Funktion `ccall()` und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder erhalte ich Keine Funktionen zu verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Sehen wir uns an, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Das Voranstellen von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert, dass dies passiert. Sie müssen auch die Bibliothek `emscripten.h` importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit das Beispiel auch dann funktioniert, wenn Sie versuchen, dies in C++-Code einzubinden. Aufgrund von C-gegenüber-C++-Name-Mangling-Regeln würde dies sonst brechen, aber hier stellen wir sicher, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun auch `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt in dieses neue Verzeichnis ein, einfach aus Bequemlichkeit (in Ihrer realen Entwicklungsumgebung würden Sie dies natürlich an einem zentralen Ort speichern).
3. Führen Sie nun erneut den Kompilierungsschritt aus. Kompilieren Sie Ihren C-Code von Ihrem neuesten Verzeichnis aus (und direkt aus Ihrem Emscripten-Compiler-Umgebungsterminalfenster) mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: Ansonsten, wenn `main()` beendet wird, würde die Laufzeitumgebung heruntergefahren und es wäre nicht gültig, kompilierte Code zu rufen. Dies ist erforderlich für eine ordnungsgemäße C-Emulation: beispielsweise um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue Funktion `myFunction()` von JavaScript aus ausführen. Öffnen Sie zuerst Ihre `hello3.html`-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag hinzu.

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

Dies zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Aufrufen kompilierter C-Funktionen aus JavaScript mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode beim Kompilieren in JavaScript, und/oder erhalte ich Keine Funktionen zu verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines vorhandenen C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
