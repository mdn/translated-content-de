---
title: Kompilieren eines neuen C/C++ Moduls zu WebAssembly
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: 6a2ec6cacea9c8932d6c5a32d766327effe3fe95
---

{{WebAssemblySidebar}}

Wenn Sie ein neues Code-Modul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Sehen wir uns an, wie das funktioniert.

## Einrichten der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Erhalten Sie das Emscripten SDK mit diesen Anweisungen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Mit der eingerichteten Umgebung sehen wir uns an, wie man ein C-Beispiel zu Wasm kompiliert. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die beiden Hauptszenarien, die wir behandeln werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, plus aller JavaScript-"Kleber"-Code, der benötigt wird, um das Wasm in der Web-Umgebung auszuführen.
- Kompilieren zu Wasm und nur das Erstellen von JavaScript.

Wir werden uns beide unten ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir uns ansehen werden, bei dem emscripten alles generiert, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst brauchen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Verwenden Sie nun das Terminalfenster, das Sie zum Eingeben der Emscripten-Kompiler-Umgebung verwendet haben, navigieren Sie zu demselben Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir möchten, dass Emscripten eine HTML-Seite generiert, um unseren Code auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"Kleber"-Code, um das Wasm zu kompilieren und zu instanziieren, sodass es in der Web-Umgebung verwendet werden kann.

Zu diesem Zeitpunkt sollten in Ihrem Quellverzeichnis vorhanden sein:

- Der binäre Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Klebercode enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihr Wasm zu laden, zu kompilieren und zu instanziieren sowie dessen Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt müssen Sie nur noch das resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung wie _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole auf der Webseite und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Schauen wir uns an, wie wir das tun können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wiederum in Ihrem Emscripten-Kompiler-Umgebungsterminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die übergebenen Optionen sind dieses Mal ein wenig anders:

   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Kompiler weiterhin den JavaScript-Klebercode und `.html` ausgeben wird.
   - Wir haben `-O3` angegeben, das zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Kompiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben außerdem `--shell-file html_template/shell_minimal.html` angegeben — dies bietet den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen werden.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das denselben Inhalt wie die Vorlage mit etwas hinzugefügtem Kleber-Code haben wird, um das generierte Wasm zu laden, auszuführen usw. Öffnen Sie es in Ihrem Browser, und Sie werden dieselbe Ausgabe wie im letzten Beispiel sehen.

> [!NOTE]
> Sie könnten festlegen, dass nur die JavaScript-"Kleber"-Datei\* statt des vollständigen HTML ausgegeben werden soll, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag angeben, z.B. `emcc -o hello2.js hello2.c -O3`. Sie könnten dann Ihr benutzerdefiniertes HTML komplett von Grund auf selbst erstellen, obwohl dies ein fortgeschrittener Ansatz ist; Es ist normalerweise einfacher, die bereitgestellte HTML-Vorlage zu verwenden.
>
> - Emscripten erfordert eine große Vielfalt an JavaScript-"Kleber"-Code, um Speicherzuweisung, Speicherlecks und eine Vielzahl anderer Probleme zu bewältigen.

### Aufrufen einer benutzerdefinierten in C definierten Funktion

Wenn Sie eine in Ihrem C-Code definierte Funktion von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder ich bekomme keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Sehen wir uns an, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als nicht genutzter Code eliminiert. Das Platzieren von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert, dass dies geschieht. Sie müssen auch die `emscripten.h`-Bibliothek importieren, um `EMSCRIPTEN_KEEPALIVE` zu verwenden.

   > [!NOTE]
   > Wir schließen die `#ifdef`-Blöcke ein, damit das Beispiel auch dann funktioniert, wenn Sie versuchen, es in C++-Code einzubinden. Aufgrund von C vs. C++ Namensverarbeitungsregeln würde dies ansonsten fehlschlagen, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt in dieses neue Verzeichnis ein, nur der Bequemlichkeit halber (offensichtlich würden Sie dies in Ihrer Entwicklungsumgebung an einem zentralen Ort ablegen).
3. Lassen Sie uns jetzt den Kompilierungsschritt erneut ausführen. Kompilieren Sie von innerhalb Ihres neuesten Verzeichnisses (und während Sie sich innerhalb Ihres Emscripten-Kompiler-Umgebungsterminalfensters befinden) Ihren C-Code mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: Andernfalls, wenn `main()` beendet wird, würde die Laufzeit heruntergefahren und es wäre nicht gültig, kompilierte Code aufzurufen. Dies ist notwendig für die richtige C-Emulation: Zum Beispiel um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, werden Sie das gleiche wie zuvor sehen!
5. Jetzt müssen wir unsere neue `myFunction()`-Funktion von JavaScript ausführen. Öffnen Sie zunächst Ihre `hello3.html`-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt direkt über dem ersten öffnenden `<script type='text/javascript'>`-Tag hinzu.

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

Dies zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine Vielzahl von Optionen.
- [Aufrufen von kompilierten C-Funktionen aus JavaScript unter Verwendung von ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich in JavaScript kompiliere, und/oder ich bekomme keine zu verarbeitenden Funktionen?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines bestehenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/existing_C_to_Wasm)
