---
title: Compilieren eines neuen C/C++ Moduls zu WebAssembly
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{WebAssemblySidebar}}

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Lassen Sie uns anschauen, wie das funktioniert.

## Emscripten-Umgebung einrichten

Zuerst richten wir die benötigte Entwicklungsumgebung ein.

### Voraussetzungen

Besorgen Sie sich das Emscripten SDK anhand dieser Anweisungen: <https://emscripten.org/docs/getting_started/downloads.html>

## Ein Beispiel kompilieren

Mit der eingerichteten Umgebung schauen wir uns an, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die zwei Hauptszenarien, die wir betrachten werden, sind:

- Kompilierung zu Wasm und Erstellung von HTML zur Ausführung unseres Codes sowie den gesamten benötigten JavaScript-„Kleber“-Code, um das Wasm in der Webumgebung laufen zu lassen.
- Kompilierung zu Wasm und Erstellung nur des JavaScripts.

Wir werden beide Szenarien im Folgenden betrachten.

### HTML und JavaScript erstellen

Dies ist der einfachste Fall, den wir uns ansehen, wobei Sie Emscripten verwenden, um alles zu generieren, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Erstellen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Nun navigieren Sie mit dem Terminalfenster, das Sie zur Eingabe der Emscripten-Kompilerumgebung verwendet haben, zum selben Verzeichnis wie Ihre `hello.c`-Datei und führen den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code auszuführen (und einen Dateinamen, der verwendet werden soll), sowie das Wasm-Modul und den JavaScript-„Kleber“-Code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

An diesem Punkt sollten Sie in Ihrem Quellverzeichnis haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Kleber enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ihr Beispiel ausführen

Jetzt bleibt nur noch, dass Sie das resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://your_path/hello.html`), werden Sie mit einer Fehlermeldung konfrontiert, ähnlich wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite sowie in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompilert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Schauen wir uns an, wie wir das machen können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie nach der Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` innerhalb Ihres vorherigen neuen Verzeichnisses.
3. Navigieren Sie jetzt in Ihr neues Verzeichnis (wieder in Ihrem Emscripten-Kompilierungsumgebungs-/Terminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die diesmal übergebenen Optionen sind leicht unterschiedlich:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Klebercode und `.html` ausgibt.
   - Wir haben `-O3` angegeben, was zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, darunter: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og`, und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies gibt den Pfad zur HTML-Vorlage an, die Sie für die Erstellung des HTMLs verwenden möchten, durch das Sie Ihr Beispiel ausführen werden.

4. Führen Sie nun dieses Beispiel aus. Der obige Befehl hätte `hello2.html` generiert, welches viel den gleichen Inhalt wie die Vorlage hat, mit etwas Klebercode, der hinzugefügt wurde, um das generierte Wasm zu laden, auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie werden fast das gleiche Ergebnis wie beim letzten Beispiel sehen.

> [!NOTE]
> Sie könnten angeben, dass nur die JavaScript-"Kleber"-Datei\* ausgegeben werden soll, anstelle des vollständigen HTML, indem Sie im Flag `-o` eine .js-Datei anstelle einer HTML-Datei angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML komplett von Grund auf neu erstellen, obwohl dies ein fortgeschrittener Ansatz ist; es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten erfordert eine große Vielzahl von JavaScript-"Kleber"-Code, um Speicherverwaltung, Speicherlecks und eine Reihe anderer Probleme zu handhaben

### Einen benutzerdefinierten C-Funktionsaufruf

Wenn Sie eine Funktion aufrufen möchten, die in Ihrem C-Code definiert ist, können Sie die Emscripten `ccall()` Funktion und die `EMSCRIPTEN_KEEPALIVE` Deklaration verwenden, die Ihre Funktionen zur exportierten Funktionsliste hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich nach JavaScript kompiliere, und/oder Ich bekomme keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Lassen Sie uns anschauen, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf und andere Funktionen werden als toter Code eliminiert. Das Hinzufügen von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert, dass dies passiert. Sie müssen auch die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir schließen die `#ifdef`-Blöcke ein, damit das Beispiel auch dann funktioniert, wenn Sie versuchen, es in C++-Code einzuschließen. Aufgrund der Namenskonventionen von C im Vergleich zu C++ würde dies sonst nicht funktionieren, aber hier setzen wir es so, dass es wie eine externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt zu diesem neuen Verzeichnis hinzu, nur der Bequemlichkeit halber (Sie würden dies offensichtlich an einem zentralen Ort in Ihrer realen Entwicklungsumgebung platzieren).
3. Lassen Sie uns nun den Kompilierungsschritt erneut ausführen. Kompilieren Sie Ihren C-Code aus Ihrem neuesten Verzeichnis (und während Sie sich in Ihrem Emscripten-Kompilierungsumgebungs-/Terminalfenster befinden) mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls würde der Runtime beim Verlassen von `main()` heruntergefahren werden und es wäre nicht mehr möglich, kompilierten Code aufzurufen. Dies ist erforderlich, um eine ordnungsgemäße C-Emulation sicherzustellen, z.B. um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel wieder in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Nun müssen wir die neue Funktion `myFunction()` aus JavaScript aufrufen. Öffnen Sie zunächst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt hinzu, direkt über dem ersten offenen `<script type='text/javascript'>`-Tag.

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

- [emscripten.org](https://emscripten.org/) — erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Aufrufen kompilierter C-Funktionen von JavaScript aus mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich nach JavaScript kompiliere, und/oder Ich bekomme keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Ein bestehendes C-Modul zu WebAssembly kompilieren](/de/docs/WebAssembly/existing_C_to_Wasm)
