---
title: WebAssembly-Konzepte
slug: WebAssembly/Concepts
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{WebAssemblySidebar}}

Dieser Artikel erklärt die Konzepte hinter der Funktionsweise von WebAssembly, einschließlich seiner Ziele, der Probleme, die es löst, und wie es im JavaScript-Engine des Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly ist eine neue Art von Code, der in modernen Webbrowsern ausgeführt werden kann und neue Funktionen sowie erhebliche Leistungsgewinne bietet. Es ist nicht primär dazu gedacht, manuell geschrieben zu werden, sondern als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. konzipiert.

Dies hat enorme Auswirkungen auf die Webplattform — es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, auf dem Web bei nahezu nativer Geschwindigkeit auszuführen, wobei Webanwendungen auf dem Web laufen, die dies zuvor nicht konnten.

Darüber hinaus müssen Sie nicht einmal wissen, wie man WebAssembly-Code erstellt, um davon zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js-) Anwendung importiert werden, wobei WebAssembly-Funktionen über JavaScript genutzt werden können. JavaScript-Frameworks könnten WebAssembly nutzen, um massive Leistungsverbesserungen und neue Funktionen zu bieten, während die Funktionalität für Webentwickler weiterhin leicht zugänglich bleibt.

## Ziele von WebAssembly

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit den folgenden Zielen erstellt:

- Schnell, effizient und portabel sein – WebAssembly-Code kann mit nahezu nativer Geschwindigkeit auf verschiedenen Plattformen ausgeführt werden, indem [allgemeine Hardware-Fähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) genutzt werden.
- Lesbar und debug-bar sein – WebAssembly ist eine Low-Level-Assemblersprache, hat jedoch ein menschenlesbares Textformat (die Spezifikation dafür wird noch abgeschlossen), das es erlaubt, Code per Hand zu schreiben, anzuzeigen und zu debuggen.
- Sicher bleiben – WebAssembly ist so spezifiziert, dass es in einer sicheren, sandkistengeschützten Ausführungsumgebung läuft. Wie anderer Webcode wird es die gleichen Ursprungs- und Berechtigungspolitiken des Browsers durchsetzen.
- Das Web nicht kaputt machen – WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenarbeitet und die Rückwärtskompatibilität aufrechterhält.

> [!NOTE]
> WebAssembly wird auch außerhalb von Web- und JavaScript-Umgebungen Verwendung finden (siehe [Nicht-Web Embeddings](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Webplattform?

Die Webplattform kann in zwei Teile gegliedert werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps mit Strom versorgt.
- Ein Satz von [Web-APIs](/de/docs/Web/API), die die Web-App aufrufen kann, um Webbrowser-/Gerätefunktionen zu steuern und Ereignisse auszulösen (wie [DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Dies hat uns gut gedient, da JavaScript leistungsfähig genug ist, um die meisten Probleme zu lösen, die Menschen heute im Web haben. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn versucht wird, JavaScript für intensivere Anwendungsfälle wie 3D-Spiele, virtuelle und erweiterte Realität, maschinelles Sehen, Bild-/Videobearbeitung und eine Reihe anderer Domänen zu nutzen, die native Leistung erfordern (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für weitere Ideen).

Zusätzlich können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es ist nicht als Ersatz gedacht. Stattdessen ist es dazu gedacht, JavaScript zu ergänzen und mit ihm zusammenzuarbeiten, sodass Webentwickler die starken Punkte beider Sprachen nutzen können:

- JavaScript ist eine Hochsprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile – es ist dynamisch typisiert, erfordert keinen Kompilierungsschritt und hat ein riesiges Ökosystem, das leistungsstarke Frameworks, Bibliotheken und andere Werkzeuge bietet.
- WebAssembly ist eine Low-Level-Assembler-ähnliche Sprache mit einem kompakten binären Format, das mit nahezu nativer Leistung läuft und Sprachen mit Low-Level-Speichermodellen wie C++ und Rust ein Kompilierungsziel bietet, damit sie im Web laufen können. (Beachten Sie, dass WebAssembly das [Hochlevel-Ziel](https://webassembly.org/docs/high-level-goals/) hat, in Zukunft Sprachen mit garbage-gesammelten Speichermodellen zu unterstützen.)

Mit dem Aufkommen von WebAssembly in Browsern wird die virtuelle Maschine, über die wir zuvor gesprochen haben, nun zwei Arten von Code laden und ausführen – JavaScript UND WebAssembly.

Die verschiedenen Code-Typen können sich bei Bedarf gegenseitig aufrufen – die [WebAssembly JavaScript API](/de/docs/WebAssembly/JavaScript_interface) umgibt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich wird die Grundeinheit des WebAssembly-Codes ein Modul genannt, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Wichtige Konzepte von WebAssembly

Es gibt mehrere Schlüsselkonzepte, die notwendig sind, um zu verstehen, wie WebAssembly im Browser läuft. Alle diese Konzepte sind 1:1 in der [WebAssembly JavaScript API](/de/docs/WebAssembly/JavaScript_interface) widergespiegelt.

- **Modul**: Stellt ein WebAssembly-Binärformat dar, das vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann somit, wie ein [`Blob`](/de/docs/Web/API/Blob), explizit zwischen Fenstern und Arbeitern (via [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)) geteilt werden. Ein Modul erklärt Importe und Exporte genau wie ein ES-Modul.
- **Speicher**: Ein skalierbares ArrayBuffer, das das lineare Array von Bytes enthält, das von den Low-Level-Speicherzugriffsinstruktionen von WebAssembly gelesen und geschrieben wird.
- **Tabelle**: Ein skalierbares typisiertes Array von Referenzen (z.B. auf Funktionen), die nicht anderweitig als rohe Bytes im Speicher gespeichert werden könnten (aus Sicherheits- und Portabilitätsgründen).
- **Instanz**: Ein Modul, gepaart mit dem gesamten Zustand, den es zur Laufzeit verwendet, einschließlich einem Speicher, einer Tabelle und einer Menge von importierten Werten. Eine Instanz ist wie ein ES-Modul, das in eine bestimmte globale Umgebung mit einer bestimmten Menge von Importen geladen wurde.

Die JavaScript-API bietet Entwicklern die Möglichkeit, Module, Speicher, Tabellen und Instanzen zu erstellen. Angesichts einer WebAssembly-Instanz kann JavaScript-Code ihre Exporte synchron aufrufen, die wie normale JavaScript-Funktionen freigegeben sind. Auch willkürliche JavaScript-Funktionen können synchron von WebAssembly-Code aufgerufen werden, indem diese JavaScript-Funktionen als Importe an eine WebAssembly-Instanz übergeben werden.

Da JavaScript die volle Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten sich JavaScript-Entwickler sogar vorstellen, dass WebAssembly einfach ein JavaScript-Feature ist, um effiziente High-Performance-Funktionen zu erzeugen.

In Zukunft werden WebAssembly-Module [wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (unter Verwendung von `<script type='module'>`), was bedeutet, dass JavaScript in der Lage sein wird, ein WebAssembly-Modul ebenso einfach zu laden, zu kompilieren und zu importieren wie ein ES-Modul.

## Wie verwende ich WebAssembly in meiner App?

Oben haben wir über die rohen Primitiven gesprochen, die WebAssembly der Webplattform hinzufügt: ein binäres Format für den Code und APIs für das Laden und Ausführen dieses binären Codes. Jetzt lassen Sie uns darüber sprechen, wie wir diese Primitiven in der Praxis verwenden können.

Das WebAssembly-Ökosystem befindet sich in einem anfänglichen Stadium; zweifellos werden in Zukunft mehr Tools erscheinen. Momentan gibt es vier Haupt-Einstiegspunkte:

- Portieren einer C/C++ Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder Generieren von WebAssembly direkt auf Assembler-Ebene.
- Schreiben einer Rust-Anwendung und Targeting von WebAssembly als Ausgabe.
- Verwendung von [AssemblyScript](https://www.assemblyscript.org/), das TypeScript ähnlich sieht und zu einem WebAssembly-Binärformat kompiliert.

Lassen Sie uns über diese Optionen sprechen:

### Portieren von C/C++

Zwei der vielen Möglichkeiten, Wasm-Code zu erstellen, sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Anzahl von Online-Wasm-Assembler-Auswahlen, wie zum Beispiel:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Dies sind großartige Ressourcen für Leute, die versuchen herauszufinden, wo sie anfangen sollen, aber ihnen fehlen einige der Tools und Optimierungen von Emscripten.

Das Emscripten-Tool ist in der Lage, fast jeden C/C++-Quellcode zu nehmen und ihn in ein Wasm-Modul zu kompilieren, plus den notwendigen JavaScript-"Glue"-Code zum Laden und Ausführen des Moduls sowie ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Glecode.](emscripten-diagram.png)

Kurz gesagt, der Prozess funktioniert wie folgt:

1. Emscripten führt zuerst das C/C++ in clang+LLVM ein — eine reife Open-Source-C/C++ Compiler-Toolchain, die z.B. als Teil von XCode auf OSX ausgeliefert wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in ein Wasm-Binärformat.
3. Für sich alleine kann WebAssembly derzeit nicht direkt auf das DOM zugreifen; es kann nur JavaScript aufrufen und Ganzzahl- und Gleitkomma-Primitivdatentypen übergeben. Um auf eine Web-API zuzugreifen, muss WebAssembly daher JavaScript aufrufen, das dann den Web-API-Aufruf durchführt. Emscripten erstellt daher den HTML- und JavaScript-Glecode, der benötigt wird, um dies zu erreichen.

> [!NOTE]
> Es gibt Zukunftspläne, um [WebAssembly direkt Web-APIs aufrufen zu lassen](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Glecode ist nicht so einfach, wie man vielleicht denkt. Zu Beginn implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://en.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert, und daher erfordert jede von ihnen ein gewisses Maß an JavaScript-Glecode, um WebAssembly mit der darunter liegenden Web-API zu verbinden.

Ein Teil des Glecodes besteht also darin, die Funktionalität jeder jeweiligen von C/C++-Code verwendeten Bibliothek zu implementieren. Der Glecode enthält auch die Logik zum Aufrufen der oben genannten WebAssembly-JavaScript-APIs, um die Wasm-Datei abzurufen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-Glecode-Datei und schreibt stdout in eine {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Rendering-Ziel verwendet wird. Es ist sehr einfach, die Emscripten-Ausgabe zu ändern und in jede Web-App zu verwandeln, die Sie benötigen.

Sie finden vollständige Dokumentation zu Emscripten unter [emscripten.org](https://emscripten.org/) und eine Anleitung zur Implementierung der Toolchain und zur Kompilierung Ihrer eigenen C/C++-App nach Wasm unter [Kompilieren von C/C++ nach WebAssembly](/de/docs/WebAssembly/C_to_Wasm).

### Schreiben von WebAssembly direkt

Möchten Sie Ihren eigenen Compiler oder Ihre eigenen Tools erstellen oder eine JavaScript-Bibliothek, die WebAssembly zur Laufzeit generiert?

In ähnlicher Weise wie physische Assembler-Sprachen hat das WebAssembly-Binärformat eine Textdarstellung – die beiden haben eine 1:1-Korrespondenz. Sie können dieses Format per Hand schreiben oder generieren und es dann mit einem der mehreren [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Für eine einfache Anleitung, wie dies zu tun ist, sehen Sie sich unseren Artikel [Konvertieren von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm) an.

### Schreiben von Rust mit WebAssembly als Ziel

Es ist auch möglich, Rust-Code zu schreiben und nach WebAssembly zu kompilieren dank der unermüdlichen Arbeit der Rust WebAssembly Working Group. Sie können mit der Installation der notwendigen Toolchain beginnen, ein Beispielprogramm in Rust in ein WebAssembly-npm-Paket kompilieren und dieses in einer Beispiel-Webanwendung verwenden, indem Sie unseren Artikel [Kompilieren von Rust nach WebAssembly](/de/docs/WebAssembly/Rust_to_Wasm) aufrufen.

### Verwendung von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen und in der Komfortzone einer vertrauten Sprache wie TypeScript bleiben wollen, ist AssemblyScript die beste Option. AssemblyScript kompiliert eine strikte Variante von TypeScript zu WebAssembly, sodass Webentwickler weiterhin TypeScript-kompatible Tools verwenden können, die sie kennen — wie Prettier, ESLint, VS Code IntelliSense usw. Sie können die Dokumentation auf <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es ins Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running) — erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden.
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen können.
