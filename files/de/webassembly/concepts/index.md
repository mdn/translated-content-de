---
title: WebAssembly-Konzepte
slug: WebAssembly/Concepts
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{WebAssemblySidebar}}

Dieser Artikel erklärt die Konzepte, wie WebAssembly funktioniert, einschließlich seiner Ziele, der Probleme, die es löst, und wie es im JavaScript-Engine des Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly ist ein neuer Code-Typ, der in modernen Webbrowsern ausgeführt werden kann und neue Funktionen sowie erhebliche Leistungssteigerungen bietet. Es ist nicht primär dafür gedacht, von Hand geschrieben zu werden, sondern es ist als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. konzipiert.

Dies hat enorme Auswirkungen auf die Web-Plattform – es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, im Web mit nahezu nativer Geschwindigkeit auszuführen, wobei Client-Apps im Web laufen, die dies zuvor nicht hätten tun können.

Darüber hinaus müssen Sie nicht einmal wissen, wie man WebAssembly-Code erstellt, um davon zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js-) App importiert werden, wodurch WebAssembly-Funktionen zur Nutzung über JavaScript bereitgestellt werden. JavaScript-Frameworks könnten WebAssembly nutzen, um massive Leistungsverbesserungen und neue Funktionen zu bieten, während die Funktionalität dennoch für Webentwickler leicht zugänglich bleibt.

## Ziele von WebAssembly

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit den folgenden Zielen entwickelt:

- Schnell, effizient und portabel sein — WebAssembly-Code kann mit nahezu nativer Geschwindigkeit auf verschiedenen Plattformen ausgeführt werden, indem [gemeinsame Hardware-Funktionen](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) genutzt werden.
- Lesbar und debugfähig sein — WebAssembly ist eine Low-Level-Assemblersprache, aber es hat ein menschenlesbares Textformat (dessen Spezifikation noch finalisiert wird), das es ermöglicht, Code von Hand zu schreiben, anzusehen und zu debuggen.
- Sicher bleiben — WebAssembly ist so spezifiziert, dass es in einer sicheren, sandboxed Ausführungsumgebung läuft. Wie anderer Web-Code wird es die Same-Origin- und Berechtigungsrichtlinien des Browsers durchsetzen.
- Das Web nicht kaputtmachen — WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien funktioniert und die Abwärtskompatibilität beibehält.

> [!NOTE]
> WebAssembly wird auch außerhalb von Web- und JavaScript-Umgebungen nützlich sein (siehe [Nicht-Web-Einbettungen](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Web-Plattform?

Die Webplattform kann als aus zwei Teilen bestehend betrachtet werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps betreibt.
- Eine Menge von [Web-APIs](/de/docs/Web/API), die die Web-App aufrufen kann, um die Funktionalität des Webbrowsers/Geräts zu steuern und Dinge geschehen zu lassen ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Dies hat für uns gut funktioniert, da JavaScript mächtig genug ist, um die meisten Probleme zu lösen, die Menschen heute im Web haben. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn wir versucht haben, JavaScript für intensivere Anwendungsfälle wie 3D-Spiele, Virtuelle und Erweiterte Realität, Computer Vision, Bild-/Videobearbeitung und eine Reihe anderer Bereiche, die native Leistung erfordern, zu nutzen (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für weitere Ideen).

Zusätzlich können die Kosten für das Herunterladen, Parsen und Kompilieren von sehr großen JavaScript-Anwendungen prohibitiv sein. Mobile Geräte und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es ist nicht als Ersatz gedacht. Stattdessen ist es so konzipiert, dass es JavaScript ergänzt und mit ihm zusammenarbeitet, um Webentwicklern die Möglichkeit zu geben, die Stärken beider Sprachen zu nutzen:

- JavaScript ist eine Hochsprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile – es ist dynamisch typisiert, erfordert keinen Kompilierschritt und hat ein riesiges Ökosystem, das mächtige Frameworks, Bibliotheken und andere Werkzeuge bietet.
- WebAssembly ist eine Low-Level-Assemblersprache mit einem kompakten binären Format, das mit nahezu nativer Leistung läuft und Sprachen mit Low-Level-Speichermodellen wie C++ und Rust ein Kompilierungsziel bietet, sodass sie im Web laufen können. (Beachten Sie, dass WebAssembly das [hohe Ziel](https://webassembly.org/docs/high-level-goals/) hat, in der Zukunft auch Sprachen mit Speicherverwaltung zu unterstützen.)

Mit dem Auftauchen von WebAssembly in Browsern wird die virtuelle Maschine, die wir zuvor diskutiert haben, jetzt zwei Arten von Code laden und ausführen – JavaScript UND WebAssembly.

Die verschiedenen Code-Typen können sich gegenseitig nach Bedarf aufrufen – die [WebAssembly-JavaScript-API](/de/docs/WebAssembly/JavaScript_interface) umschließt den exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich wird die grundlegende Einheit des WebAssembly-Codes ein Modul genannt, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Wichtige Konzepte in WebAssembly

Es gibt mehrere wichtige Konzepte, die zum Verständnis erforderlich sind, wie WebAssembly im Browser ausgeführt wird. Alle diese Konzepte spiegeln sich 1:1 in der [WebAssembly-JavaScript-API](/de/docs/WebAssembly/JavaScript_interface) wider.

- **Modul**: Repräsentiert eine WebAssembly-Binärdatei, die vom Browser in ausführbaren Maschinen-Code kompiliert wurde. Ein Modul ist zustandslos und kann daher, ähnlich wie ein [`Blob`](/de/docs/Web/API/Blob), explizit zwischen Fenstern und Arbeitern gemeinsam genutzt werden (via [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)). Ein Modul deklariert Importe und Exporte genau wie ein ES-Modul.
- **Speicher**: Ein anpassbares ArrayBuffer, das das lineare Byte-Array enthält, das von WebAssemblys Low-Level-Speicherzugriffsinstruktionen gelesen und geschrieben wird.
- **Tabelle**: Ein anpassbares typisiertes Array von Referenzen (z.B. auf Funktionen), die nicht anderweitig als rohe Bytes im Speicher gespeichert werden könnten (aus Sicherheits- und Portabilitätsgründen).
- **Instanz**: Ein Modul gepaart mit all dem Status, den es zur Laufzeit verwendet, einschließlich eines Speichers, einer Tabelle und einer Menge von importierten Werten. Eine Instanz ist wie ein ES-Modul, das in eine bestimmte globale Umgebung mit einer bestimmten Menge von Importen geladen wurde.

Die JavaScript-API bietet Entwicklern die Möglichkeit, Module, Speicher, Tabellen und Instanzen zu erstellen. Angesichts einer WebAssembly-Instanz kann JavaScript-Code synchron seine Exporte aufrufen, die als normale JavaScript-Funktionen bereitgestellt werden. Beliebige JavaScript-Funktionen können auch von WebAssembly-Code synchron aufgerufen werden, indem diese JavaScript-Funktionen als Importe an eine WebAssembly-Instanz übergeben werden.

Da JavaScript die vollständige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten JavaScript-Entwickler WebAssembly sogar einfach als JavaScript-Funktion für effizient erzeugte Hochleistungsfunktionen betrachten.

In der Zukunft werden WebAssembly-Module [genauso wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (using `<script type='module'>`), was bedeutet, dass JavaScript in der Lage sein wird, ein WebAssembly-Modul genauso einfach zu fetchen, zu kompilieren und zu importieren wie ein ES-Modul.

## Wie verwende ich WebAssembly in meiner App?

Oben haben wir über die rohen Primitive gesprochen, die WebAssembly zur Webplattform hinzufügt: ein binäres Format für Code und APIs zum Laden und Ausführen dieses Binärcodes. Nun sprechen wir darüber, wie wir diese Primitive in der Praxis nutzen können.

Das WebAssembly-Ökosystem befindet sich in einem frühen Stadium; es werden zweifellos mehr Tools in Zukunft erscheinen. Derzeit gibt es vier Hauptansatzpunkte:

- Portieren einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder Generieren von WebAssembly direkt auf Assembler-Ebene.
- Schreiben einer Rust-Anwendung und Verwenden von WebAssembly als ihr Ziel.
- Nutzen von [AssemblyScript](https://www.assemblyscript.org/), das ähnlich wie TypeScript aussieht und in eine WebAssembly-Binärdatei kompiliert.

Lassen Sie uns diese Optionen besprechen:

### Portieren von C/C++

Zwei der vielen Optionen zur Erstellung von Wasm-Code sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Reihe von Online-Wasm-Assembler-Auswahlmöglichkeiten, wie z.B.:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Dies sind großartige Ressourcen für Leute, die herausfinden wollen, wo sie anfangen sollen, aber sie fehlen einige der Werkzeuge und Optimierungen von Emscripten.

Das Emscripten-Werkzeug ist in der Lage, fast jeden C/C++-Quellcode zu nehmen und ihn in ein Wasm-Modul zu kompilieren, plus den notwendigen JavaScript-"Klebstoff"-Code zum Laden und Ausführen des Moduls sowie ein HTML-Dokument zur Darstellung der Ergebnisse des Codes.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Klebstoffcode.](emscripten-diagram.png)

Kurz gesagt, der Prozess funktioniert folgendermaßen:

1. Emscripten prüft zunächst den C/C++-Code mit clang+LLVM — einer ausgereiften Open-Source-C/C++-Compiler-Toolchain, die beispielsweise als Teil von XCode auf OSX geliefert wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in eine Wasm-Binärdatei.
3. WebAssembly kann derzeit nicht direkt auf das DOM zugreifen; es kann nur JavaScript aufrufen und dabei primitive Ganzzahl- und Gleitkommadatentypen übergeben. Daher muss WebAssembly, um auf eine Web-API zuzugreifen, an JavaScript aufrufen, das dann den Web-API-Aufruf macht. Emscripten erstellt daher den HTML- und JavaScript-Klebstoffcode, der erforderlich ist, um dies zu erreichen.

> [!NOTE]
> In Zukunft gibt es Pläne zur [direkten Verwendung der Web-APIs durch WebAssembly](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Klebstoffcode ist nicht so einfach, wie man sich vorstellen könnte. Zum Start implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://de.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://de.wikipedia.org/wiki/OpenGL), [OpenAL](https://de.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://de.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert, und somit erfordert jede von ihnen einen gewissen JavaScript-"Klebstoff"-Code, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Der Klebstoffcode implementiert also die Funktionalität jeder jeweiligen Bibliothek, die vom C/C++-Code verwendet wird. Der Klebstoffcode enthält auch die Logik zum Aufrufen der oben genannten WebAssembly-JavaScript-APIs, um die Wasm-Datei zu holen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-Klebedatei und schreibt stdout in einen {{htmlelement("textarea")}}. Falls die Anwendung OpenGL verwendet, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Rendering-Ziel verwendet wird. Es ist sehr einfach, die Emscripten-Ausgabe zu modifizieren und sie in beliebige Web-Anwendungen zu verwandeln, die Sie benötigen.

Sie können die vollständige Dokumentation zu Emscripten auf [emscripten.org](https://emscripten.org/) finden und eine Anleitung zur Implementierung der Toolchain und zur Kompilierung Ihrer eigenen C/C++-App zu Wasm auf [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm).

### WebAssembly direkt schreiben

Möchten Sie Ihren eigenen Compiler oder Ihre eigenen Tools erstellen oder eine JavaScript-Bibliothek erstellen, die zur Laufzeit WebAssembly generiert?

In ähnlicher Weise wie physische Assemblersprachen hat das WebAssembly-Binärformat eine Textdarstellung – die beiden haben eine 1:1-Entsprechung. Sie können dieses Format von Hand schreiben oder generieren und dann mit einem der mehrere [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Für eine einfache Anleitung, wie man dies tut, siehe unseren Artikel [Konvertieren von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm).

### Rust schreiben und auf WebAssembly zielen

Es ist auch möglich, Rust-Code zu schreiben und nach WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Arbeitsgruppe. Sie können über unseren Artikel [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Rust_to_Wasm) damit beginnen, das notwendige Toolchain zu installieren, ein Beispiel-Rust-Programm zu einem WebAssembly-NPM-Paket zu kompilieren und dieses in einer Beispiel-Web-App zu verwenden.

### Verwendung von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust zu lernen, und in der vertrauten Umgebung einer Sprache wie TypeScript bleiben möchten, wird AssemblyScript die beste Option sein. AssemblyScript kompiliert eine strikte Variante von TypeScript zu WebAssembly und ermöglicht es Webentwicklern, weiterhin TypeScript-kompatible Werkzeuge zu verwenden – wie Prettier, ESLint, VS Code IntelliSense usw. Weitere Informationen finden Sie in der Dokumentation auf <https://www.assemblyscript.org/>.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es in das Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running) — Erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden können.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API) — Erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen können.
