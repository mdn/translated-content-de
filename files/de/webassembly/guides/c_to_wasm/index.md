---
title: Kompilieren eines neuen C/C++-Moduls zu WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
l10n:
  sourceCommit: 082b23fdc2c40237755709c521e54839457a93a8
---

Wenn Sie ein neues Codemodul in einer Sprache wie C/C++ geschrieben haben, können Sie es mit einem Tool wie [Emscripten](https://emscripten.org/) in WebAssembly kompilieren. Schauen wir uns an, wie das funktioniert.

## Emscripten-Umgebung einrichten

Zuerst richten wir die erforderliche Entwicklungsumgebung ein.

### Voraussetzungen

Besorgen Sie sich das Emscripten SDK, indem Sie diesen Anweisungen folgen: <https://emscripten.org/docs/getting_started/downloads.html>

## Ein Beispiel kompilieren

Mit der eingerichteten Umgebung sehen wir uns an, wie man ein C-Beispiel zu Wasm kompilieren kann. Beim Kompilieren mit Emscripten stehen eine Reihe von Optionen zur Verfügung, aber die beiden Hauptszenarien, die wir behandeln werden, sind:

- Kompilieren zu Wasm und Erstellen von HTML, um unseren Code auszuführen, sowie des gesamten JavaScript-"Glue"-Codes, der benötigt wird, um das Wasm in der Webumgebung auszuführen.
- Kompilieren zu Wasm und nur Erstellen des JavaScripts.

Wir werden beide unten betrachten.

### HTML und JavaScript erstellen

Dies ist der einfachste Fall, den wir betrachten, bei dem Sie emscripten dazu bringen, alles zu generieren, was Sie benötigen, um Ihren Code im Browser als WebAssembly auszuführen.

1. Zuerst benötigen wir ein Beispiel zum Kompilieren. Nehmen Sie eine Kopie des folgenden einfachen C-Beispiels und speichern Sie es in einer Datei namens `hello.c` in einem neuen Verzeichnis auf Ihrem lokalen Laufwerk:

   ```c
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Navigieren Sie nun mit dem Terminalfenster, das Sie zur Eingabe der Emscripten-Compiler-Umgebung verwendet haben, in dasselbe Verzeichnis wie Ihre Datei `hello.c` und führen Sie den folgenden Befehl aus:

   ```bash
   emcc hello.c -o hello.html
   ```

Die Optionen, die wir mit dem Befehl übergeben haben, sind wie folgt:

- `-o hello.html` — Gibt an, dass wir Emscripten anweisen möchten, eine HTML-Seite zu generieren, um unseren Code darin auszuführen (und einen Dateinamen zu verwenden), sowie das Wasm-Modul und den JavaScript-"Glue"-Code, um das Wasm zu kompilieren und zu instanziieren, sodass es in der Webumgebung verwendet werden kann.

Zu diesem Zeitpunkt sollten Sie in Ihrem Quellverzeichnis Folgendes haben:

- Den binären Wasm-Modulcode (`hello.wasm`)
- Eine JavaScript-Datei, die Glue-Code enthält, um zwischen den nativen C-Funktionen und JavaScript/Wasm zu übersetzen (`hello.js`)
- Eine HTML-Datei, um Ihren Wasm-Code zu laden, zu kompilieren und zu instanziieren und seine Ausgabe im Browser anzuzeigen (`hello.html`)

### Ihr Beispiel ausführen

Nun bleibt nur noch, das resultierende `hello.html` in einem Browser zu laden, der WebAssembly unterstützt. Es ist standardmäßig ab Firefox 52, Chrome 57, Edge 57, Opera 44 aktiviert.

> [!NOTE]
> Wenn Sie versuchen, die generierte HTML-Datei (`hello.html`) direkt von Ihrer lokalen Festplatte zu öffnen (z.B. `file://Ihr_Pfad/hello.html`), erhalten Sie eine Fehlermeldung in der Art von _`both async and sync fetching of the wasm failed`._ Sie müssen Ihre HTML-Datei über einen HTTP-Server (`http://`) ausführen — siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für weitere Informationen.

Wenn alles wie geplant funktioniert hat, sollten Sie die Ausgabe "Hello world" in der Emscripten-Konsole sehen, die auf der Webseite erscheint, sowie in der JavaScript-Konsole Ihres Browsers. Herzlichen Glückwunsch, Sie haben gerade C in WebAssembly kompiliert und es in Ihrem Browser ausgeführt!
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

2. Suchen Sie die Datei `shell_minimal.html` in Ihrem emsdk-Repo. Kopieren Sie sie in ein Unterverzeichnis namens `html_template` in Ihrem vorherigen neuen Verzeichnis.
3. Navigieren Sie nun in Ihr neues Verzeichnis (wieder in Ihrem Emscripten-Compiler-Umgebungsterminalfenster) und führen Sie den folgenden Befehl aus:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Die Optionen, die wir übergeben haben, sind diesmal etwas anders:
   - Wir haben `-o hello2.html` angegeben, was bedeutet, dass der Compiler weiterhin den JavaScript-Glue-Code und `.html` ausgibt.
   - Wir haben `-O3` angegeben, das zur Optimierung des Codes verwendet wird. Emcc hat Optimierungsstufen wie jeder andere C-Compiler, einschließlich: `-O0` (keine Optimierung), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` und `-O3`. `-O3` ist eine gute Einstellung für Release-Builds.
   - Wir haben auch `--shell-file html_template/shell_minimal.html` angegeben – dies gibt den Pfad zur HTML-Vorlage an, die Sie verwenden möchten, um das HTML zu erstellen, durch das Sie Ihr Beispiel ausführen werden.

4. Lassen Sie uns nun dieses Beispiel ausführen. Der obige Befehl wird `hello2.html` generiert haben, das im Wesentlichen denselben Inhalt wie die Vorlage mit etwas hinzugefügtem Glue-Code hat, um das generierte Wasm zu laden und auszuführen usw. Öffnen Sie es in Ihrem Browser und Sie sehen viel dieselbe Ausgabe wie im letzten Beispiel.

### Kompilieren eines JavaScript-Moduls

Sie könnten angeben, dass Sie nur die JavaScript-"Glue"-Datei ausgeben möchten (Emscripten benötigt eine große Vielzahl an JavaScript-"Glue"-Code, um Speicherzuweisungen, Speicherlecks und eine Vielzahl anderer Probleme zu behandeln), anstelle des vollständigen HTML, indem Sie eine .js-Datei anstelle einer HTML-Datei im `-o`-Parameter angeben, so:

```bash
emcc -o hello.js hello.c -O3
```

Sie könnten diese JavaScript-Datei dann in Ihr Programm integrieren, was besonders nützlich ist, wenn Sie einen Bundler verwenden und nicht direkt mit dem HTML arbeiten. Zum Beispiel können Sie die generierte JavaScript-Glue-Datei importieren, sodass sie als Nebeneffekt ausgeführt wird. In Ihrem Einstiegspunktmodul der App fügen Sie hinzu:

```js
import "./hello.js";
```

Alternativ können Sie ein Factory-Modul erstellen, mit dem Sie mehrere Instanzen des Moduls produzieren können (standardmäßig lädt der Glue-Code das Modul global, was dazu führt, dass mehrere Instanzen kollidieren).

```bash
emcc -o hello.mjs hello.c -O3 -sMODULARIZE
```

> [!NOTE]
> Wenn Ihre Ausgabedateierweiterung .js und nicht .mjs ist, müssen Sie die Einstellung `-sEXPORT_ES6` hinzufügen, um ein JavaScript-Modul auszugeben.

Importieren Sie dann das Factory-Modul und rufen Sie es auf:

```js
import createModule from "./hello.mjs";

createModule().then((Module) => {
  console.log("Wasm ready", Module);
});
```

## Aufrufen einer benutzerdefinierten in C definierten Funktion

Wenn Sie eine Funktion aufrufen möchten, die in Ihrem C-Code von JavaScript aus definiert wurde, können Sie die Emscripten-Funktion `ccall()` und die Deklaration `EMSCRIPTEN_KEEPALIVE` verwenden, die Ihre Funktionen zur Liste der exportierten Funktionen hinzufügt (siehe [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich ihn zu JavaScript kompiliere, und/oder bekomme ich keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)). Schauen wir uns an, wie das funktioniert.

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

   Standardmäßig ruft der von Emscripten generierte Code immer nur die `main()`-Funktion auf, und andere Funktionen werden als toter Code eliminiert. Wenn `EMSCRIPTEN_KEEPALIVE` vor einem Funktionsnamen platziert wird, wird dies verhindert. Sie müssen auch die Bibliothek `emscripten.h` importieren, um `EMSCRIPTEN_KEEPALIVE` verwenden zu können.

   > [!NOTE]
   > Wir fügen die `#ifdef`-Blöcke ein, damit das Beispiel weiterhin funktioniert, wenn Sie versuchen, es in C++-Code einzubinden. Aufgrund von Namenskonventionen in C im Vergleich zu C++ würde dies ansonsten scheitern, aber hier setzen wir es so, dass es als externe C-Funktion behandelt wird, wenn Sie C++ verwenden.

2. Fügen Sie nun `html_template/shell_minimal.html` mit `\{\{{ SCRIPT }}}` als Inhalt ebenfalls in dieses neue Verzeichnis ein, einfach zur Bequemlichkeit (Sie würden dies in einem zentralen Ort in Ihrer echten Entwicklerumgebung ablegen).
3. Lassen Sie uns nun erneut den Kompilierungsschritt ausführen. Kompilieren Sie Ihren C-Code aus Ihrem neuesten Verzeichnis (und während Sie sich in Ihrem Emscripten-Compiler-Umgebungs-Terminalfenster befinden) mit dem folgenden Befehl. Beachten Sie, dass wir mit `NO_EXIT_RUNTIME` kompilieren müssen: andernfalls würde die Laufzeit beim Beenden von `main()` heruntergefahren und es wäre nicht mehr gültig, kompilierten Code aufzurufen. Dies ist für die ordnungsgemäße C-Emulation erforderlich, z. B. um sicherzustellen, dass [`atexit()`](https://en.cppreference.com/w/c/program/atexit)-Funktionen aufgerufen werden.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Wenn Sie das Beispiel erneut in Ihrem Browser laden, sehen Sie dasselbe wie zuvor!
5. Jetzt müssen wir unsere neue Funktion `myFunction()` von JavaScript ausführen. Öffnen Sie zunächst Ihre hello3.html-Datei in einem Texteditor.
6. Fügen Sie ein {{HTMLElement("button")}}-Element wie unten gezeigt direkt über dem ersten öffnenden `<script type="text/javascript">`-Tag hinzu.

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

- [emscripten.org](https://emscripten.org/) — erfahren Sie mehr über Emscripten und seine große Vielfalt an Optionen.
- [Aufrufen von kompilierten C-Funktionen aus JavaScript mit ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Warum verschwinden Funktionen in meinem C/C++-Quellcode, wenn ich ihn zu JavaScript kompiliere, und/oder bekomme ich keine Funktionen zum Verarbeiten?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Kompilieren eines vorhandenen C-Moduls zu WebAssembly](/de/docs/WebAssembly/Guides/Existing_C_to_Wasm)
