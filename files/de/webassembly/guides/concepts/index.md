---
title: WebAssembly Konzepte
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Dieser Artikel erklärt die Konzepte, die hinter der Funktionsweise von WebAssembly stehen, einschließlich seiner Ziele, der Probleme, die es löst, und wie es innerhalb der JavaScript-Engine des Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly ist eine neue Art von Code, die in modernen Webbrowsern ausgeführt werden kann und neue Funktionen sowie erhebliche Leistungssteigerungen bietet. Es ist nicht primär dazu gedacht, von Hand geschrieben zu werden, sondern es ist als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. konzipiert.

Dies hat enorme Auswirkungen auf die Webplattform – es bietet eine Möglichkeit, Code in mehreren Sprachen im Web auszuführen, und zwar nahezu mit nativer Geschwindigkeit, mit Client-Apps, die im Web laufen, die dies vorher nicht konnten.

Darüber hinaus müssen Sie nicht einmal wissen, wie man WebAssembly-Code erstellt, um davon zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js-) App importiert werden und WebAssembly-Funktionen zur Nutzung über JavaScript bereitstellen. JavaScript-Frameworks könnten WebAssembly nutzen, um massive Leistungsverbesserungen und neue Funktionen bereitzustellen, während die Funktionalität für Webentwickler weiterhin leicht verfügbar bleibt.

## WebAssembly Ziele

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit den folgenden Zielen erstellt:

- Schnell, effizient und portabel zu sein – WebAssembly-Code kann auf verschiedenen Plattformen mit nahezu nativer Geschwindigkeit ausgeführt werden, indem bestimmte [gemeinsame Hardwarekapazitäten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) ausgenutzt werden.
- Lesbar und debuggbar zu sein – WebAssembly ist zwar eine low-level Assemblersprache, aber es gibt ein menschenlesbares Textformat (dessen Spezifikation noch abgeschlossen wird), das es erlaubt, Code von Hand zu schreiben, zu betrachten und zu debuggen.
- Sicher zu bleiben – WebAssembly soll in einer sicheren, gesandboxten Ausführungsumgebung laufen. Wie anderer Webcode wird es die Same-Origin- und Berechtigungspolitiken des Browsers durchsetzen.
- Das Web nicht zu zerstören – WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenarbeitet und die Abwärtskompatibilität bewahrt.

> [!NOTE]
> WebAssembly wird auch außerhalb von Web- und JavaScript-Umgebungen Einsatzmöglichkeiten haben (siehe [Non-web embeddings](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Webplattform?

Die Webplattform kann man sich als zwei Teile vorstellen:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps antreibt.
- Eine Reihe von [Web-APIs](/de/docs/Web/API), die die Web-App aufrufen kann, um die Funktionalität des Webbrowsers/Geräts zu steuern und Dinge zu bewirken ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), etc.).

Historisch gesehen konnte die VM nur JavaScript laden. Das hat gut für uns funktioniert, da JavaScript mächtig genug ist, um die meisten Probleme, die Menschen heute im Web haben, zu lösen. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn versucht wurde, JavaScript für intensivere Anwendungsfälle wie 3D-Spiele, Virtuelle und Erweiterte Realität, Computer Vision, Bild-/Video-Bearbeitung und eine Reihe anderer Bereiche zu verwenden, die native Leistung erfordern (siehe [WebAssembly use cases](https://webassembly.org/docs/use-cases/) für weitere Ideen).

Zusätzlich können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es ist nicht als Ersatz gedacht. Stattdessen wurde es entwickelt, um JavaScript zu ergänzen und daneben zu arbeiten, wodurch Webentwickler die Stärken beider Sprachen nutzen können:

- JavaScript ist eine Hochsprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile — es ist dynamisch typisiert, erfordert keinen Kompilierungsschritt und hat ein riesiges Ökosystem, das mächtige Frameworks, Bibliotheken und andere Tools bietet.
- WebAssembly ist eine low-level, assemblerähnliche Sprache mit einem kompakten Binärformat, das mit nahezu nativer Leistung läuft und Sprachen mit low-level Speichermodellen wie C++ und Rust ein Kompilierungsziel bietet, damit sie im Web laufen können. (Beachten Sie, dass WebAssembly das [hochrangige Ziel](https://webassembly.org/docs/high-level-goals/) hat, in Zukunft Sprachen mit speicherverwalteten Speichermodellen zu unterstützen.)

Mit dem Aufkommen von WebAssembly in Browsern wird die virtuelle Maschine, die wir zuvor besprochen haben, jetzt zwei Arten von Code laden und ausführen — JavaScript UND WebAssembly.

Die verschiedenen Codetypen können sich bei Bedarf gegenseitig aufrufen — die [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) umhüllt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normalerweise aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich wird die Grundeinheit von WebAssembly-Code als Modul bezeichnet und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### WebAssembly Schlüsselkonzepte

Es gibt mehrere Schlüsselkonzepte, die erforderlich sind, um zu verstehen, wie WebAssembly im Browser ausgeführt wird. Alle diese Konzepte sind 1:1 in der [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) abgebildet.

- **Module**: Repräsentiert ein WebAssembly-Binärprogramm, das vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann daher wie ein [`Blob`](/de/docs/Web/API/Blob) explizit zwischen Fenstern und Workern geteilt werden (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)). Ein Modul deklariert Importe und Exporte genau wie ein ES-Modul.
- **Memory**: Ein anpassbarer ArrayBuffer, der das lineare Byte-Array enthält, das von WebAssemblys low-level Speicherzugriffsanweisungen gelesen und geschrieben wird.
- **Table**: Ein anpassbares typisiertes Array von Referenzen (z. B. auf Funktionen), die aus Sicherheits- und Portabilitätsgründen nicht als Rohbytes in Memory gespeichert werden könnten.
- **Instance**: Ein Modul kombiniert mit allen Zuständen, die es zur Laufzeit verwendet, einschließlich eines Memory, einer Table, und einer Reihe importierter Werte. Eine Instance ist wie ein in eine bestimmte globale Umgebung mit einem bestimmten Satz von Importen geladenes ES-Modul.

Die JavaScript API bietet Entwicklern die Möglichkeit, Module, Memories, Tables und Instances zu erstellen. Mit einer WebAssembly-Instanz kann JavaScript-Code deren Exporte synchron aufrufen, die als normale JavaScript-Funktionen bereitgestellt werden. Beliebige JavaScript-Funktionen können auch von WebAssembly-Code synchron aufgerufen werden, indem diese JavaScript-Funktionen als Importe an eine WebAssembly-Instanz übergeben werden.

Da JavaScript völlige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten JavaScript-Entwickler sogar an WebAssembly als nur eine JavaScript-Funktion denken, um effizient Hochleistungsfunktionen zu generieren.

In Zukunft werden WebAssembly-Module [genauso wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (mit `<script type='module'>`), was bedeutet, dass JavaScript genauso einfach wie ein ES-Modul ein WebAssembly-Modul abrufen, kompilieren und importieren kann.

## Wie benutze ich WebAssembly in meiner App?

Oben haben wir über die rohen Primitiven gesprochen, die WebAssembly zur Webplattform hinzufügt: ein Binärformat für Code und APIs zum Laden und Ausführen dieses Binärcodes. Jetzt sprechen wir darüber, wie wir diese Primitiven in der Praxis nutzen können.

Das WebAssembly-Ökosystem befindet sich in einem frühen Stadium; es werden zweifellos mehr Tools in der Zukunft entstehen. Derzeit gibt es vier Haupt-Einstiegspunkte:

- Portierung einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- WebAssembly direkt auf Montageebene schreiben oder generieren.
- Eine Rust-Anwendung schreiben und WebAssembly als Ausgabeziel verwenden.
- [AssemblyScript](https://www.assemblyscript.org/) verwenden, das ähnlich wie TypeScript aussieht und in WebAssembly-Binär kompiliert.

Lassen Sie uns über diese Optionen sprechen:

### Portierung von C/C++

Zwei der vielen Optionen für die Erstellung von Wasm-Code sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Reihe von Online-Wasm-Assembler-Optionen, wie:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Dies sind großartige Ressourcen für Menschen, die herausfinden möchten, wo sie anfangen sollen, aber sie fehlen einige der Werkzeuge und Optimierungen von Emscripten.

Das Emscripten-Tool kann so ziemlich jeden C/C++-Quellcode nehmen und es in ein Wasm-Modul kompilieren, plus den notwendigen JavaScript-"Kleber"-Code zum Laden und Ausführen des Moduls und ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Klebercode.](emscripten-diagram.png)

Im Wesentlichen funktioniert der Prozess wie folgt:

1. Emscripten füttert den C/C++-Code zuerst in clang+LLVM — ein ausgereiftes Open-Source C/C++-Compiler-Toolchain, das als Teil von XCode auf OSX ausgeliefert wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in ein Wasm-Binärprogramm.
3. An sich kann WebAssembly aktuell nicht direkt auf den DOM zugreifen; es kann nur JavaScript aufrufen und primitive Daten wie Ganzzahlen und Gleitkommazahlen übergeben. Um also auf irgendwelche Web-APIs zuzugreifen, muss WebAssembly JavaScript aufrufen, das dann den Web-API-Aufruf ausführt. Emscripten erstellt daher den HTML- und JavaScript-Klebercode, um dies zu erreichen.

> [!NOTE]
> Es gibt Zukunftspläne, um [WebAssembly zu erlauben, Web-APIs direkt aufzurufen](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Klebercode ist nicht so einfach, wie Sie vielleicht denken. Emscripten implementiert zum Beispiel beliebte C/C++-Bibliotheken wie [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://en.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert und erfordern daher jeweils etwas JavaScript-Klebercode, um WebAssembly an die zugrundeliegende Web-API anzubinden.

Ein Teil des Klebercodes implementiert also die Funktionalität jeder verwendeten Bibliothek des C/C++-Codes. Der Klebercode enthält auch die Logik zum Aufruf der oben genannten WebAssembly-JavaScript-APIs, um die Wasm-Datei abzurufen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-Klebedatei und schreibt stdout in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Ziel zum Rendern verwendet wird. Es ist sehr einfach, die Emscripten-Ausgabe zu ändern und sie in jede gewünschte Web-App zu verwandeln.

Sie finden vollständige Dokumentationen zu Emscripten auf [emscripten.org](https://emscripten.org/) und eine Anleitung zur Implementierung der Toolchain und zur Kompilierung Ihrer eigenen C/C++-App zu Wasm unter [Compiling from C/C++ to WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm).

### WebAssembly direkt schreiben

Möchten Sie Ihren eigenen Compiler erstellen, Ihre eigenen Tools entwickeln oder eine JavaScript-Bibliothek erstellen, die zur Laufzeit WebAssembly generiert?

In ähnlicher Weise wie physische Assemblersprachen hat das WebAssembly-Binärformat eine Textdarstellung — die beiden haben eine 1:1-Entsprechung. Sie können dieses Format von Hand schreiben oder generieren und dann mit einem der [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Für eine einfache Anleitung, wie man dies tut, siehe unseren Artikel [Converting WebAssembly text format to Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm).

### Rust schreiben mit Ziel WebAssembly

Es ist auch möglich, Rust-Code zu schreiben und in WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Working Group. Sie können starten, indem Sie die notwendige Toolchain installieren, ein Beispiel-Rust-Programm in ein WebAssembly-npm-Paket kompilieren und dieses in einer Beispiel-Web-App verwenden, unter unserem Artikel [Compiling from Rust to WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm).

### Using AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen, und in der Komfortzone einer vertrauten Sprache wie TypeScript bleiben möchten, wird AssemblyScript die beste Option sein. AssemblyScript kompiliert eine strikte Variante von TypeScript zu WebAssembly und ermöglicht Webentwicklern die Weiterverwendung von TypeScript-kompatiblen Werkzeugen, die ihnen vertraut sind — wie Prettier, ESLint, VS Code IntelliSense usw. Sie können die Dokumentation unter <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung darüber gegeben, was WebAssembly ist, warum es so nützlich ist, wie es in das Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel auf dem Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running) — erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly JavaScript API nutzen können.
