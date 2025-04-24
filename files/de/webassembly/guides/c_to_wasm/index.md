---
title: Kompilierung eines neuen C/C++ Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

Wenn Sie ein neues Code-Modul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Schauen wir uns an, wie das funktioniert.

## Emscripten-Umgebungseinrichtung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK mit diesen Anweisungen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilierung eines Beispiels

Nachdem die Umgebung eingerichtet ist, sehen wir uns an, wie sie verwendet wird, um ein C-Beispiel in Wasm zu kompilieren. Es gibt eine Reihe von Optionen, die beim Kompilieren mit Emscripten zur Verfügung stehen, aber die beiden Hauptszenarien, die wir abdecken werden, sind:

- Kompilierung zu Wasm und Erstellung von HTML zum Ausführen unseres Codes sowie aller erforderlichen JavaScript-"Verkabelungscodes", um das Wasm in der Webumgebung auszuführen.
- Kompilierung zu Wasm und nur Erstellung des JavaScripts.

Wir werden uns beide im Folgenden ansehen.

### Erstellung von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten werden, bei dem Emscripten alles generiert, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Erstellen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Navigieren Sie nun mit dem Terminalfenster, das Sie zum Eingeben der Emscripten-Compiler-Umgebung verwendet haben, in dasselbe Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code darin auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"Verkabelungscode", um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

In Ihrem Quellverzeichnis sollten Sie nun Folgendes haben:

- Der binäre Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei mit Verkabelungscode zur Übersetzung zwischen den nativen C-Funktionen und JavaScript/Wasm (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und dessen Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Nun bleibt nur noch, das resultierende `hello.html` in einem Browser zu laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z. B. `file://dein_Pfad/hello.html`), erhalten Sie eine Fehlermeldung in der Art von _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwendung einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Sehen wir uns an, wie wir das tun können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` innerhalb Ihres vorherigen neuen Verzeichnisses.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder in Ihrem Emscripten-Compiler-Umgebungsterminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler trotzdem den JavaScript-Verkabelungscode und `.html` ausgibt.
   - Wir haben `-O3` angegeben, um den Code zu optimieren. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Build-Veröffentlichungen.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies bietet den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, mit dem Sie Ihr Beispiel ausführen werden.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das denselben Inhalt wie die Vorlage mit etwas Verkabelungscode enthält, um das erzeugte Wasm zu laden, auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie sehen dieselbe Ausgabe wie beim letzten Beispiel.

> [!NOTE]
> Sie könnten angeben, nur die JavaScript-"Verkabelungsdatei" auszugeben, anstatt das vollständige HTML, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag angeben, z. B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML vollständig selbst erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten erfordert eine Vielzahl von JavaScript-"Verkabelungscode", um Speicherzuweisung, Speicherlecks und eine Vielzahl anderer Probleme zu bewältigen.

### Aufruf einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion, die in Ihrem C-Code definiert ist, von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder ich erhalte keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Lassen Sie uns ansehen, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die Funktion `main()` auf, und andere Funktionen werden als toter Code eliminiert. Das Platzieren von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert dies. Sie müssen auch die Bibliothek `emscripten.h` importieren, um `EMSCRIPTEN_KEEPALIVE` zu verwenden.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit das Beispiel funktioniert, wenn Sie versuchen, es in C++-Code einzuschließen. Aufgrund der Namensverwaltungsregeln von C und C++ würde dies sonst fehlschlagen, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun dem neuen Verzeichnis einfach der Bequemlichkeit halber `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt hinzu (in Ihrer realen Entwicklungsumgebung würden Sie dies offensichtlich an einem zentralen Ort ablegen).
3. Lassen Sie uns nun den Kompilierungsschritt erneut ausführen. Kompilieren Sie Ihren C-Code aus Ihrem neuesten Verzeichnis (und während Sie sich im Emscripten Compiler-Umgebungsterminalfenster befinden) mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: ansonsten, wenn `main()` beendet wird, wird die Laufzeit heruntergefahren und es wäre nicht gültig, kompilierte Code zu rufen. Dies ist necessary for proper C emulation: Zum Beispiel, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie vorher!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion von JavaScript ausführen. Öffnen Sie zuerst Ihre hello3.html-Datei in einem Texteditor.
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

Das zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl an Möglichkeiten.
- [Aufruf kompilierter C-Funktionen von JavaScript aus mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder erhalte ich keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilierung eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
