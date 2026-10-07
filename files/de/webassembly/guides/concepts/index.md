---
title: WebAssembly-Konzepte
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: d94a069475826922024db9703cc18f2adca77a3e
---

Dieser Artikel erläutert die Konzepte hinter der Funktionsweise von WebAssembly: seine Ziele, die Probleme, die es löst, und wie es innerhalb der JavaScript-Engine eines Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly (abgekürzt _Wasm_) ist ein Bytecode-Format auf niedriger Ebene, das ursprünglich für das Web entwickelt wurde. Es ist nicht in erster Linie dafür gedacht, von Hand geschrieben zu werden, sondern als effizientes Kompilierungsziel für Quellsprachen wie C, C++ und Rust.

Das hat weitreichende Auswirkungen auf die Webplattform: Code, der in verschiedenen Sprachen geschrieben wurde, kann im Web mit nahezu nativer Geschwindigkeit ausgeführt werden. Dadurch können Client-Anwendungen im Web laufen, für die das zuvor nicht möglich war.

Um davon zu profitieren, müssen Sie nicht einmal wissen, wie WebAssembly-Code erstellt wird. WebAssembly-Module können in eine Web- oder Node.js-Anwendung importiert werden und stellen dabei WebAssembly-Funktionen zur Verwendung über JavaScript bereit. JavaScript-Frameworks könnten WebAssembly nutzen, um erhebliche Leistungsvorteile und neue Funktionen zu bieten, während die Funktionalität für Webentwickler weiterhin einfach zugänglich bleibt.

## Ziele von WebAssembly

WebAssembly ist ein offener Standard, der innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit folgenden Zielen entwickelt wird:

- **Schnell, effizient und portabel sein:** WebAssembly-Code kann unter Ausnutzung [gängiger Hardwarefähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) auf verschiedenen Plattformen mit nahezu nativer Geschwindigkeit ausgeführt werden.
- **Lesbar und debugbar sein:** WebAssembly ist eine Assemblersprache auf niedriger Ebene, verfügt aber über ein menschenlesbares Textformat, mit dem sich Code von Hand schreiben, ansehen und debuggen lässt.
- **Sicher bleiben:** WebAssembly ist für die Ausführung in einer sicheren, isolierten Sandbox-Umgebung spezifiziert. Wie bei anderem Webcode gelten dabei die Same-Origin- und Berechtigungsrichtlinien des Browsers.
- **Das Web nicht beeinträchtigen:** WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenarbeitet und abwärtskompatibel bleibt.

> [!NOTE]
> Obwohl WebAssembly ursprünglich für das Web entwickelt wurde, gibt es viele Einsatzmöglichkeiten außerhalb von Browsern und JavaScript-Umgebungen (siehe [Einbettungen außerhalb des Webs](https://webassembly.org/docs/non-web/)).

## Wie fügt sich WebAssembly in die Webplattform ein?

Die Webplattform lässt sich als Zusammenspiel zweier Teile betrachten:

- Eine virtuelle Maschine (VM), die den Code einer Webanwendung ausführt, zum Beispiel den JavaScript-Code, auf dem Ihre Anwendungen basieren.
- Eine Reihe von [Web-APIs](/de/docs/Web/API), die die Webanwendung aufrufen kann, um Funktionen des Webbrowsers oder Geräts zu steuern und Aktionen auszuführen ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Das hat gut funktioniert, denn JavaScript ist leistungsfähig genug, um die meisten Probleme zu lösen, die heute im Web auftreten. Bei anspruchsvolleren Anwendungsfällen wie 3D-Spielen, Virtual und Augmented Reality, maschinellem Sehen sowie Bild- und Videobearbeitung stoßen wir mit JavaScript jedoch auf Leistungsprobleme. Das gilt auch für andere Bereiche, die native Leistung erfordern (weitere Anregungen finden Sie unter [Anwendungsfälle für WebAssembly](https://webassembly.org/docs/use-cases/)).

Außerdem kann der Aufwand für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen untragbar werden. Auf Mobilgeräten und anderen Plattformen mit begrenzten Ressourcen können sich diese Leistungsengpässe noch verstärken.

WebAssembly ist eine andere Sprache als JavaScript, soll JavaScript aber nicht ersetzen. Stattdessen wurde es entwickelt, um JavaScript zu ergänzen und mit ihm zusammenzuarbeiten. So können Webentwickler die Stärken beider Sprachen nutzen:

- JavaScript ist eine Hochsprache, die flexibel und ausdrucksstark genug ist, um Webanwendungen zu schreiben. Sie bietet viele Vorteile: Sie ist dynamisch typisiert, erfordert keinen Kompilierungsschritt und verfügt über ein großes Ökosystem mit leistungsfähigen Frameworks, Bibliotheken und anderen Werkzeugen.
- WebAssembly ist eine assemblerähnliche Sprache auf niedriger Ebene mit einem kompakten Binärformat, die mit nahezu nativer Leistung ausgeführt wird. Sie bietet Sprachen mit hardwarenahen Speichermodellen wie C++ und Rust ein Kompilierungsziel, sodass diese im Web ausgeführt werden können. Auch Sprachen mit Speichermodellen, die Garbage Collection verwenden, werden unterstützt.

Die zuvor erwähnte virtuelle Maschine lädt und führt nun zwei Arten von Code aus: JavaScript **und** WebAssembly.

Die beiden Codearten können sich bei Bedarf gegenseitig aufrufen. Die [WebAssembly-JavaScript-API](/de/docs/WebAssembly/Reference/JavaScript_interface) stellt exportierten WebAssembly-Code als JavaScript-Funktionen bereit, die sich wie gewohnt aufrufen lassen. WebAssembly-Code kann wiederum gewöhnliche JavaScript-Funktionen importieren und synchron aufrufen. Die grundlegende Einheit von WebAssembly-Code heißt Modul; WebAssembly-Module entsprechen in vielerlei Hinsicht ES-Modulen.

### Grundlegende WebAssembly-Konzepte

Um zu verstehen, wie WebAssembly im Browser ausgeführt wird, sind einige grundlegende Konzepte wichtig. Alle spiegeln sich direkt in der [WebAssembly-JavaScript-API](/de/docs/WebAssembly/Reference/JavaScript_interface) wider.

- **Module:** Repräsentiert ein WebAssembly-Binärprogramm, das vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Module ist zustandslos und kann daher, ähnlich wie ein [`Blob`](/de/docs/Web/API/Blob), ausdrücklich zwischen Fenstern und Workern geteilt werden (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)). Ein Module deklariert Importe und Exporte wie ein ES-Modul.
- **Memory:** Ein vergrößerbarer Puffer, der das lineare Byte-Array enthält, das von den hardwarenahen Speicherzugriffsanweisungen von WebAssembly gelesen und beschrieben wird.
- **Table:** Ein vergrößerbares Array von Referenzen (etwa auf Funktionen), die aus Sicherheits- und Portabilitätsgründen nicht als rohe Bytes in Memory gespeichert werden können.
- **Instance:** Ein Module zusammen mit dem gesamten Zustand, den es zur Laufzeit verwendet, einschließlich Memories, Tables und importierter Werte. Eine Instance ähnelt einem ES-Modul, das mit einer bestimmten Menge an Importen in einen bestimmten globalen Kontext geladen wurde.

Die JavaScript-API ermöglicht es Entwicklern, Module, Memories, Tables und Instances zu erstellen. Bei einer WebAssembly-Instance kann JavaScript-Code deren Exporte synchron aufrufen; diese werden als normale JavaScript-Funktionen bereitgestellt. WebAssembly-Code kann auch beliebige JavaScript-Funktionen synchron aufrufen, wenn diese der WebAssembly-Instance als Importe übergeben werden.

Da JavaScript vollständig steuert, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, können JavaScript-Entwickler WebAssembly sogar einfach als JavaScript-Funktion zur effizienten Erzeugung leistungsfähiger Funktionen betrachten.

Künftig werden WebAssembly-Module [genau wie ES-Module ladbar sein](https://github.com/WebAssembly/esm-integration) (mit `<script type="module">` und gewöhnlichen `import`-Deklarationen). JavaScript wird ein WebAssembly-Modul dann ebenso einfach abrufen, kompilieren und importieren können wie ein ES-Modul.

## Wie verwende ich WebAssembly in meiner Anwendung?

Wie eingangs erwähnt, ist WebAssembly nicht in erster Linie dafür gedacht, von Hand geschrieben zu werden. Üblicherweise schreiben Sie Code in einer statisch typisierten Hochsprache und erzeugen Wasm mit einem Compiler. Bei einer C/C++-Anwendung können Sie mit [Emscripten](https://emscripten.org/) auch die gesamte Ausführungsumgebung portieren. In seltenen Fällen können Sie das Textformat (WAT) direkt schreiben.

Sehen wir uns diese Möglichkeiten an.

### Einen Compiler mit WebAssembly als Kompilierungsziel verwenden

Viele bestehende Compiler unterstützen Wasm inzwischen als Kompilierungsziel. Beispielsweise unterstützt [Clang/LLVM](https://clang.llvm.org/) die Wasm-Ausgabe mit `--target=wasm32`. Sie können dies im [Compiler Explorer](https://godbolt.org/) online ausprobieren, indem Sie den Compiler „WebAssembly Clang“ auswählen. Beachten Sie, dass der Explorer die Wasm-Assemblersyntax von LLVM ausgibt, die sich vom eigentlichen WAT unterscheidet.

Dank der unermüdlichen Arbeit der Rust WebAssembly Working Group können Sie auch Rust-Code schreiben und zu WebAssembly kompilieren. Wie Sie die nötige Toolchain installieren, ein Rust-Beispielprogramm zu einem WebAssembly-npm-Paket kompilieren und dieses in einer Beispiel-Webanwendung verwenden, erfahren Sie in unserem Artikel [Von Rust zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/Rust_to_Wasm).

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne sich mit den Einzelheiten von C oder Rust befassen zu müssen, ist [AssemblyScript](https://www.assemblyscript.org/) eine gute Wahl: Sie können bei einer vertrauten Sprache wie TypeScript bleiben. AssemblyScript kompiliert eine strenge Variante von TypeScript und ermöglicht es Ihnen, die gewohnten TypeScript-kompatiblen Werkzeuge weiterzuverwenden, etwa Prettier, ESLint und VS Code IntelliSense.

### Von C/C++ portieren

Emscripten ist mehr als ein Compiler: Es handelt sich um eine vollständige Toolchain, die verschiedene Plattform-APIs emuliert, die C/C++-Code möglicherweise aufruft. So bleibt das Verhalten der Anwendung auch bei der Ausführung im Browser erhalten. Neben einem Wasm-Modul kann Emscripten auch den nötigen JavaScript-Verbindungscode zum Laden und Ausführen des Moduls sowie ein HTML-Dokument zur Anzeige der Ergebnisse erzeugen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode zu einem Wasm-Modul, einem HTML-Dokument und JavaScript-Verbindungscode.](emscripten-diagram.png)

Kurz zusammengefasst läuft der Prozess so ab:

1. Emscripten übergibt den C/C++-Code zunächst an clang+LLVM – eine ausgereifte Open-Source-Toolchain für C/C++-Compiler, die beispielsweise unter macOS als Teil von Xcode ausgeliefert wird.
2. Emscripten wandelt das von clang+LLVM kompilierte Ergebnis in eine Wasm-Binärdatei um.
3. WebAssembly kann derzeit nicht selbst direkt auf das DOM zugreifen. Es kann nur JavaScript aufrufen, das anschließend die Web-API aufruft. Daher erstellt Emscripten den dafür benötigten HTML- und JavaScript-Verbindungscode.

Der JavaScript-Verbindungscode ist nicht so einfach, wie Sie vielleicht erwarten. Zunächst implementiert Emscripten verbreitete C/C++-Bibliotheken wie [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://en.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden mithilfe von Web-APIs implementiert. Daher benötigt jede von ihnen JavaScript-Verbindungscode, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Ein Teil des Verbindungscodes implementiert also die Funktionalität der jeweiligen Bibliotheken, die der C/C++-Code verwendet. Außerdem enthält er die Logik, um die zuvor genannten WebAssembly-JavaScript-APIs aufzurufen und die Wasm-Datei abzurufen, zu laden und auszuführen.

Das erzeugte HTML-Dokument lädt die JavaScript-Datei mit dem Verbindungscode und schreibt stdout in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML außerdem ein {{htmlelement("canvas")}}-Element, das als Renderziel dient. Die Emscripten-Ausgabe lässt sich leicht anpassen und in die gewünschte Webanwendung umwandeln.

Die vollständige Dokumentation zu Emscripten finden Sie auf [emscripten.org](https://emscripten.org/). Eine Anleitung zur Einrichtung der Toolchain und zum Kompilieren Ihrer eigenen C/C++-Anwendung zu Wasm finden Sie unter [Von C/C++ zu WebAssembly kompilieren](/de/docs/WebAssembly/Guides/C_to_Wasm).

### WebAssembly direkt schreiben

Möchten Sie einen eigenen Compiler oder eigene Werkzeuge entwickeln oder eine JavaScript-Bibliothek erstellen, die zur Laufzeit WebAssembly erzeugt?

Ähnlich wie bei herkömmlichen Assemblersprachen gibt es für das WebAssembly-Binärformat eine Textdarstellung. Beide entsprechen einander genau. Sie können dieses Format von Hand schreiben oder erzeugen und es anschließend mit einem der verschiedenen [Werkzeuge zur Umwandlung von WebAssembly-Text in Binärcode](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Eine einfache Anleitung dazu finden Sie in unserem Artikel [Das WebAssembly-Textformat in Wasm umwandeln](/de/docs/WebAssembly/Guides/Text_format_to_Wasm).

## Zusammenfassung

Dieser Artikel hat erläutert, was WebAssembly ist, warum es nützlich ist, wie es sich in das Web einfügt und wie Sie es verwenden können.

## Siehe auch

- [WebAssembly-Artikel im Mozilla-Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [WebAssembly-Code laden und ausführen](/de/docs/WebAssembly/Guides/Loading_and_running) – erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden.
- [Die WebAssembly-JavaScript-API verwenden](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) – erfahren Sie, wie Sie die anderen wichtigen Funktionen der WebAssembly-JavaScript-API verwenden.
