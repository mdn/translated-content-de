---
title: Ein neues C/C++ Modul zu WebAssembly kompilieren
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{WebAssemblySidebar}}

Wenn Sie ein neues Code-Modul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) zu WebAssembly kompilieren. Schauen wir uns an, wie es funktioniert.

## Einrichtung der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Laden Sie das Emscripten SDK herunter, indem Sie diesen Anweisungen folgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Mit der eingerichteten Umgebung schauen wir uns an, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen, wenn Sie mit Emscripten kompilieren, aber die beiden Hauptszenarien, die wir behandeln werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code darin auszuführen, sowie aller erforderlichen JavaScript-"Glue"-Codes, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur Erstellen des JavaScripts.

Wir werden uns beide Szenarien unten ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir betrachten, bei dem Sie Emscripten anweisen, alles zu generieren, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Erstellen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Jetzt navigieren Sie mit dem Terminalfenster, das Sie verwendet haben, um die Emscripten-Compiler-Umgebung zu öffnen, zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code darin auszuführen (und einen Dateinamen dafür), sowie das Wasm-Modul und den JavaScript-"Glue"-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

Zu diesem Zeitpunkt sollten Sie in Ihrem Quellverzeichnis Folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Glue-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren, und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt bleibt nur noch, das resultierende `hello.html` in einem Browser zu laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z. B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![Bild](helloworld.png)

### Verwendung einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Schauen wir uns an, wie wir das machen können.

1. Speichern Sie zuerst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repository. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` innerhalb Ihres zuvor erstellten neuen Verzeichnisses.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder in Ihrem Terminalfenster der Emscripten-Compiler-Umgebung) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die übergebenen Optionen sind diesmal etwas anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Glue-Code und `.html` ausgibt.
   - Wir haben `-O3` spezifiziert, das zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies liefert den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen werden.

4. Lassen Sie uns dieses Beispiel jetzt ausführen. Der obige Befehl hat `hello2.html` generiert, das viel von dem gleichen Inhalt wie die Vorlage haben wird, mit ein bisschen zusätzlichem Glue-Code, um das generierte Wasm zu laden und auszuführen, etc. Öffnen Sie es in Ihrem Browser und Sie werden dieselbe Ausgabe wie beim letzten Beispiel sehen.

> [!NOTE]
> Sie könnten das Ausgeben nur der JavaScript-"Glue"-Datei\* anstelle der gesamten HTML spezifizieren, indem Sie in dem `-o` Flag eine .js-Datei statt einer HTML-Datei angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML komplett von Grund auf neu erstellen, obwohl dies ein fortschrittlicher Ansatz ist; es ist in der Regel einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten benötigt eine große Vielfalt an JavaScript-"Glue"-Codes, um Speicherzuordnung, Speicherlecks und eine Vielzahl anderer Probleme zu handhaben.

### Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine in Ihrem C-Code definierte Funktion aus JavaScript aufrufen möchten, können Sie die Emscripten `ccall()` Funktion und die `EMSCRIPTEN_KEEPALIVE` Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie/wenn ich sie zu JavaScript kompiliere, und/oder warum erhalten Sie Keine Funktionen zu verarbeiten Fehler?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Schauen wir uns an, wie das funktioniert.

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

   Standardmäßig wird im Emscripten erzeugter Code immer nur die `main()`-Funktion aufgerufen, und andere Funktionen werden als toter Code eliminiert. Das Platzieren von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert dies. Sie müssen auch die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir schließen die `#ifdef` Blöcke ein, damit das Beispiel, auch wenn Sie versuchen, es in C++-Code einzuschließen, weiterhin funktioniert. Aufgrund von C versus C++ Namensmangling-Regeln würde dies sonst fehlschlagen, aber hier setzen wir es so, dass es es als externe C-Funktion behandelt, wenn Sie C++ verwenden.

2. Fügen Sie jetzt `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt ebenfalls in dieses neue Verzeichnis ein, nur für die Bequemlichkeit (offensichtlich würden Sie dies an einem zentralen Ort in Ihrer realen Entwicklungsumgebung platzieren).
3. Lassen Sie uns erneut den Kompilierschritt durchführen. Kompilieren Sie Ihren C-Code mit dem folgenden Befehl von innerhalb Ihres neuesten Verzeichnisses (und während Sie sich in Ihrem Emscripten-Compiler-Umgebungsterminalfenster befinden). Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls, wenn `main()` beendet ist, würde die Laufzeit heruntergefahren werden und es wäre nicht gültig, kompilierten Code aufzurufen. Dies ist notwendig für eine ordnungsgemäße C-Emulation: zum Beispiel, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit) Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion aus JavaScript ausführen. Öffnen Sie zuerst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element, wie unten gezeigt, direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag hinzu.

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

Das veranschaulicht, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Komplizierte C-Funktionen aus JavaScript mit ccall/cwrap aufrufen](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie zu JavaScript kompiliere, und/oder warum erhalte ich Keine Funktionen zu verarbeiten Fehler?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/existing_C_to_Wasm)
