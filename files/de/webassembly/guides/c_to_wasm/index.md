---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Schauen wir uns an, wie das funktioniert.

## Einrichtung der Emscripten-Umgebung

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Holen Sie sich das Emscripten SDK, nach diesen Anweisungen: <https://emscripten.org/docs/getting_started/downloads.html>

## Kompilieren eines Beispiels

Nachdem die Umgebung eingerichtet ist, sehen wir uns an, wie man ein C-Beispiel zu Wasm kompilieren kann. Es gibt eine Reihe von Optionen beim Kompilieren mit Emscripten, aber die beiden Hauptszenarien, die wir abdecken werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, sowie aller JavaScript-"Verbindungs"-Codes, die erforderlich sind, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur Erstellen des JavaScripts.

Wir werden uns beide im Folgenden ansehen.

### Erstellen von HTML und JavaScript

Dies ist der einfachste Fall, den wir uns ansehen, bei dem Sie Emscripten dazu bringen, alles zu generieren, was Sie benötigen, um Ihren Code als WebAssembly im Browser auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Navigieren Sie nun mit dem Terminalfenster, das Sie zum Betreten der Emscripten-Compiler-Umgebung verwendet haben, in das gleiche Verzeichnis wie Ihre `hello.c`-Datei und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die mit dem Befehl übergebenen Optionen sind wie folgt:

- `-o hello.html` — Gibt an, dass wir Emscripten veranlassen möchten, eine HTML-Seite zu generieren, um unseren Code auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"Verbindungs"code, um das Wasm zu kompilieren und zu instanziieren, damit es in der Webumgebung verwendet werden kann.

An diesem Punkt sollten Sie in Ihrem Quellverzeichnis folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die den Verbindungs-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihr Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ausführen Ihres Beispiels

Jetzt müssen Sie nur noch das resultierende `hello.html` in einem Browser laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z. B. `file://your_path/hello.html`), erhalten Sie eine Fehlermeldung in der Art von _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole, die auf der Webseite erscheint, und in der JavaScript-Konsole Ihres Browsers sehen. Herzlichen Glückwunsch, Sie haben gerade C zu WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
![image](helloworld.png)

### Verwenden einer benutzerdefinierten HTML-Vorlage

Manchmal möchten Sie eine benutzerdefinierte HTML-Vorlage verwenden. Schauen wir uns an, wie wir das machen können.

1. Speichern Sie zunächst den folgenden C-Code in einer Datei namens `hello2.c` in einem neuen Verzeichnis:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Suchen Sie nach der Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` innerhalb Ihres vorherigen neuen Verzeichnisses.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder in Ihrem Emscripten-Compiler-Umgebung-Terminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:
   - Wir haben `-o hello2.html` spezifiziert, was bedeutet, dass der Compiler weiterhin den JavaScript-Verbindungs-Code und `.html` ausgibt.
   - Wir haben `-O3` angegeben, das zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler auch, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og`, und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben — dies bietet den Pfad zur HTML-Vorlage, die Sie verwenden möchten, um das HTML zu erstellen, durch das Ihr Beispiel ausgeführt wird.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl hat `hello2.html` generiert, das weitgehend den gleichen Inhalt wie die Vorlage hat, wobei etwas Verbindungs-Code hinzugefügt wurde, um das generierte Wasm zu laden und auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie werden weitgehend dieselbe Ausgabe wie im letzten Beispiel sehen.

### Kompilieren zu einem JavaScript-Modul

Sie könnten spezifizieren, nur die JavaScript-"Verbindungs"-Datei auszugeben (Emscripten benötigt eine Vielzahl von JavaScript-"Verbindungs"-Code, um Speicherallokationen, Speicherlecks und eine Vielzahl anderer Probleme zu bewältigen) statt des vollständigen HTMLs, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Flag auswählen, wie folgt:

```bash
emcc -o hello.js hello.c -O3
```

Sie könnten dann diese JavaScript-Datei in Ihr Programm einbauen, was besonders nützlich ist, wenn Sie einen Bundler verwenden und nicht direkt mit dem HTML arbeiten. Sie können zum Beispiel die generierte JavaScript-Verbindungsdatei importieren, sodass sie als Nebeneffekt ausgeführt wird. In Ihrem Einstiegspunktmodul der App fügen Sie hinzu:

```js
import "./hello.js";
```

Alternativ können Sie ein Fabrikmodul erstellen, mit dem Sie mehrere Instanzen des Moduls produzieren können (standardmäßig lädt der Verbindungs-Code das Modul global, wodurch mehrere Instanzen in Konflikt geraten).

```bash
emcc -o hello.mjs hello.c -O3 -sMODULARIZE
```

> [!NOTE]
> Wenn Ihre Ausgabedateiendung .js und nicht .mjs ist, müssen Sie die Einstellung `-sEXPORT_ES6` hinzufügen, um ein JavaScript-Modul auszugeben.

Dann importieren Sie in Ihrem Code die Fabrik und rufen sie auf:

```js
import createModule from "./hello.mjs";

createModule().then((Module) => {
  console.log("Wasm ready", Module);
});
```

## Aufrufen einer benutzerdefinierten Funktion, die in C definiert ist

Wenn Sie eine Funktion, die in Ihrem C-Code definiert ist, von JavaScript aus aufrufen möchten, können Sie die Emscripten-Funktion `ccall()` und die `EMSCRIPTEN_KEEPALIVE`-Deklaration verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie zu JavaScript kompiliere, und/oder erhalte ich keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Schauen wir uns an, wie das funktioniert.

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

   Standardmäßig ruft der mit Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Das Platzieren von `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen verhindert, dass dies geschieht. Sie müssen auch die Bibliothek `emscripten.h` importieren, um `EMSCRIPTEN_KEEPALIVE` zu verwenden.

   > [!NOTE]
   > Wir schließen die `#ifdef`-Blöcke ein, damit das Beispiel auch funktioniert, wenn Sie versuchen, es in C++-Code zu integrieren. Aufgrund von Namensmangling-Regeln von C im Vergleich zu C++ würde dies ansonsten brechen. Hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt zu diesem neuen Verzeichnis hinzu, nur der Bequemlichkeit halber (offensichtlich würden Sie dies in einem zentralen Ort in Ihrer echten Entwicklungsumgebung ablegen).
3. Lassen Sie uns nun den Kompilierungsschritt erneut ausführen. Kompilieren Sie aus Ihrem neuesten Verzeichnis (und während Sie sich in Ihrem Emscripten-Compiler-Umgebung-Terminalfenster befinden) Ihren C-Code mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: Andernfalls würde, wenn `main()` beendet wird, die Laufzeit heruntergefahren und es wäre nicht gültig, kompilierte Funktion aufzurufen. Dies ist notwendig für eine korrekte C-Emulation: zum Beispiel, um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Nun müssen wir unsere neue Funktion `myFunction()` von JavaScript ausführen. Öffnen Sie zunächst Ihre `hello3.html`-Datei in einem Texteditor.
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

Dies zeigt, wie `ccall()` verwendet wird, um die exportierte Funktion aufzurufen.

## Siehe auch

- [emscripten.org](https://emscripten.org/) — Erfahren Sie mehr über Emscripten und seine große Vielfalt an Optionen.
- [Compiled C-Funktionen von JavaScript aus mit ccall/cwrap aufrufen](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich sie zu JavaScript kompiliere, und/oder erhalte ich keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines existierenden C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
