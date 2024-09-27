---
title: Kompilierung eines neuen C/C++ Moduls zu WebAssembly
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: 6a2ec6cacea9c8932d6c5a32d766327effe3fe95
---

{{WebAssemblySidebar}}

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) zu WebAssembly kompilieren. Schauen wir uns an, wie das funktioniert.

## Emscripten-Umgebung einrichten

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, indem Sie diese Anweisungen befolgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Ein Beispiel kompilieren

Nun, da die Umgebung eingerichtet ist, schauen wir uns an, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die Hauptszenarien, die wir behandeln werden, sind:

- Kompilierung zu Wasm und Erstellung von HTML, um unseren Code auszuführen, sowie aller JavaScript-"Klebe"-Codes, die benötigt werden, um Wasm in der Webumgebung auszuführen.
- Kompilierung zu Wasm und nur Erstellung des JavaScripts.

Wir werden uns beide Szenarien anschauen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten werden, bei dem Sie Emscripten alles generieren lassen, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst brauchen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrer lokalen Festplatte:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Jetzt navigieren Sie mit dem Terminalfenster, das Sie zum Betreten der Emscripten-Compiler-Umgebung verwendet haben, zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code auszuführen (und einen Dateinamen verwendet), sowie das Wasm-Modul und den JavaScript-"Klebe"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

An diesem Punkt sollte sich in Ihrem Quellverzeichnis befinden:

- Der binäre Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Klebe-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und dessen Ausgabe im Browser anzuzeigen (`hello.html`)

### Ihr Beispiel ausführen

Jetzt bleibt nur noch, dass Sie die resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Standardmäßig ist es ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://your_path/hello.html`), wird eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`_ angezeigt. Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und im Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie möglicherweise eine benutzerdefinierte HTML-Vorlage verwenden. Schauen wir uns an, wie wir das tun können.

1. Speichern Sie zuerst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie nach der Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wie zuvor im Emscripten-Compiler-Umgebungs-Terminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Klebe-Code und `.html` ausgibt.
   - Wir haben `-O3` festgelegt, um den Code zu optimieren. Emcc hat wie jeder andere C-Compiler Optimierungsstufen, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben außerdem `--shell-file html_template/shell_minimal.html` angegeben — dies gibt den Pfad zu der HTML-Vorlage an, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen.

4. Lassen Sie uns dieses Beispiel jetzt ausführen. Der obige Befehl hat `hello2.html` generiert, das mit Ausnahme einiger hinzugefügter Klebe-Codes, um das generierte Wasm zu laden und auszuführen, denselben Inhalt wie die Vorlage hat. Öffnen Sie es in Ihrem Browser und Sie sehen dasselbe Ausgabeergebnis wie beim letzten Beispiel.

> [!NOTE]
> Sie könnten angeben, nur die JavaScript-"Klebe"-Datei\* anstelle des gesamten HTML auszugeben, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML komplett von Grund auf neu erstellen, obwohl dies ein fortschrittlicher Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten benötigt eine Vielzahl von JavaScript-"Klebe"-Codes, um Speicherzuweisung, Speicherlecks und eine Reihe anderer Probleme zu handhaben.

### Einen benutzerdefinierten, in C definierten, Aufruf tätigen

Wenn Sie eine Funktion aufrufen möchten, die in Ihrem C-Code von JavaScript aus definiert ist, können Sie die Emscripten-`ccall()`-Funktion und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie zu JavaScript kompiliere, und/oder erhalte ich die Meldung "Keine Funktionen zu verarbeiten"?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Schauen wir uns an, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Wenn vor einem Funktionsnamen `EMSCRIPTEN_KEEPALIVE` steht, wird dies verhindert. Sie müssen auch die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir schließen die `#ifdef`-Blöcke ein, damit das Beispiel funktioniert, wenn Sie versuchen, es in C++-Code einzubinden. Aufgrund der Unterschiede in der Namensverdrängung zwischen C und C++ würde dies sonst scheitern, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie für die Bequemlichkeit auch `html_template/shell_minimal.html` mit dem Inhalt `\{\{{ SCRIPT }}}` in diesem neuen Verzeichnis hinzu (in Ihrer realen Entwicklungsumgebung würden Sie dies offensichtlich an einem zentralen Ort ablegen).
3. Lassen Sie uns den Kompilierungsschritt wieder ausführen. Kompilieren Sie Ihren C-Code mit dem folgenden Befehl, während Sie sich im neuesten Verzeichnis befinden (und im Emscripten-Compiler-Umgebungs-Terminalfenster). Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: Andernfalls würde beim Beenden von `main()` die Laufzeitumgebung heruntergefahren, und es wäre nicht mehr gültig, kompilierte Codes aufzurufen. Dies ist für eine korrekte C-Emulation notwendig: beispielsweise, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe Ergebnis wie zuvor!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion von JavaScript aus ausführen. Öffnen Sie zuerst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt ein, direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag.

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

Dies illustriert, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl an Optionen.
- [Aufruf von kompilierten C-Funktionen von JavaScript aus mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich zu JavaScript kompiliere, und/oder erhalte ich die Meldung "Keine Funktionen zu verarbeiten"?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilierung eines vorhandenen C-Moduls zu WebAssembly](/de/docs/WebAssembly/existing_C_to_Wasm)
