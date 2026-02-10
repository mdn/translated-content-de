---
title: Konzepte von WebAssembly
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: 6bd3e7771f8923879bec44469547265e38f4ef75
---

Dieser Artikel erklärt die Konzepte hinter WebAssembly, einschließlich seiner Ziele, der Probleme, die es löst, und wie es innerhalb der JavaScript-Engine des Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly (abgekürzt als _Wasm_) ist ein Low-Level-Bytecode-Format, das ursprünglich für das Web entwickelt wurde. Es soll nicht primär von Hand geschrieben werden, sondern es ist als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. konzipiert.

Dies hat große Auswirkungen auf die Webplattform — es bietet eine Möglichkeit, Code in verschiedenen Sprachen im Web mit nahezu nativer Geschwindigkeit auszuführen, wobei Client-Apps im Web laufen, die dies zuvor nicht konnten.

Darüber hinaus müssen Sie nicht einmal wissen, wie man WebAssembly-Code erstellt, um dessen Vorteile zu nutzen. WebAssembly-Module können in eine Web- (oder Node.js-) App importiert werden und WebAssembly-Funktionen zur Nutzung über JavaScript bereitstellen. JavaScript-Frameworks können WebAssembly nutzen, um massive Leistungsverbesserungen und neue Funktionen zu bieten, während die Funktionalität für Webentwickler einfach verfügbar bleibt.

## Ziele von WebAssembly

WebAssembly ist ein offener Standard, der innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit den folgenden Zielen entwickelt wurde:

- Schnell, effizient und portabel sein — WebAssembly-Code kann mit nahezu nativer Geschwindigkeit auf verschiedenen Plattformen ausgeführt werden, indem er die [gemeinsamen Hardwarefähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) nutzt.
- Lesbar und debuggbar sein — WebAssembly ist eine Low-Level-Assemblersprache, hat jedoch ein menschenlesbares Textformat (die Spezifikation dafür wird noch abgeschlossen), das es ermöglicht, Code von Hand zu schreiben, anzusehen und zu debuggen.
- Sicherheit gewährleisten — WebAssembly ist so spezifiziert, dass es in einer sicheren, abgeschotteten Ausführungsumgebung läuft. Wie anderer Web-Code werden die Same-Origin- und Berechtigungsrichtlinien des Browsers durchgesetzt.
- Web nicht brechen — WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenarbeitet und die Abwärtskompatibilität erhält.

> [!NOTE]
> Obwohl WebAssembly ursprünglich für das Web entwickelt wurde, hat es viele Anwendungen außerhalb von Browsern und JavaScript-Umgebungen (siehe [Non-web embeddings](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Webplattform?

Die Webplattform kann als bestehend aus zwei Teilen betrachtet werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps antreibt.
- Ein Satz von [Web-APIs](/de/docs/Web/API), die von der Web-App aufgerufen werden können, um die Funktionalität des Webbrowsers bzw. Geräts zu steuern und Dinge zu bewirken ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Das hat gut funktioniert, da JavaScript mächtig genug ist, um die meisten Probleme zu lösen, die Menschen im Web heute haben. Bei leistungsintensiveren Anwendungsfällen wie 3D-Spielen, Virtueller und Erweiterter Realität, Computer Vision, Bild-/Videobearbeitung und anderen Bereichen, die native Leistung erfordern, stößt JavaScript jedoch an seine Grenzen (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für weitere Ideen).

Zudem können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber sie ist nicht als Ersatz gedacht. Vielmehr ist sie darauf ausgelegt, JavaScript zu ergänzen und zusammenzuarbeiten, sodass Webentwickler von den Stärken beider Sprachen profitieren können:

- JavaScript ist eine Hochsprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile — es ist dynamisch typisiert, erfordert keinen Kompilierschritt und hat ein riesiges Ökosystem, das leistungsstarke Frameworks, Bibliotheken und andere Tools bietet.
- WebAssembly ist eine Low-Level-Assembler-ähnliche Sprache mit einem kompakten binären Format, das mit nahezu nativer Performance ausgeführt wird. Es bietet Sprachen mit Low-Level-Speichermodellen wie C++ und Rust ein Kompilierungsziel, damit sie im Web laufen können. (Beachten Sie, dass WebAssembly das [hochgesteckte Ziel](https://webassembly.org/docs/high-level-goals/) hat, in Zukunft Sprachen mit speicherverwaltenden Modellen zu unterstützen.)

Mit der Einführung von WebAssembly in Browsern wird die zuvor erwähnte virtuelle Maschine jetzt zwei Arten von Code laden und ausführen — JavaScript UND WebAssembly.

Die verschiedenen Codetypen können sich gegenseitig wie erforderlich aufrufen — die [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) umgibt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich wird die Grundeinheit von WebAssembly-Code als Modul bezeichnet, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Schlüsselkonzepte von WebAssembly

Es gibt mehrere Schlüsselkonzepte, die nötig sind, um zu verstehen, wie WebAssembly im Browser läuft. Alle diese Konzepte sind 1:1 in der [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) abgebildet.

- **Module**: Repräsentiert einen WebAssembly-Binärcode, der vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann daher, ähnlich wie ein [`Blob`](/de/docs/Web/API/Blob), explizit zwischen Fenstern und Arbeitern (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)) geteilt werden. Ein Modul deklariert Importe und Exporte, genau wie ein ES-Modul.
- **Memory**: Ein skalierbarer ArrayBuffer, der das lineare Byte-Array enthält, das von WebAssemblys Low-Level-Speicherzugriffsinstruktionen gelesen und beschrieben wird.
- **Table**: Ein skalierbares typisiertes Array von Referenzen (z.B. auf Funktionen), die aus Sicherheits- und Portabilitätsgründen nicht als rohe Bytes im Speicher gespeichert werden könnten.
- **Instance**: Ein Modul gepaart mit allem Zustand, den es zur Laufzeit verwendet, einschließlich eines Speichers, einer Tabelle und eines Satzes von importierten Werten. Eine Instanz ist wie ein ES-Modul, das in einem bestimmten Globalen mit einem bestimmten Satz von Importen geladen wurde.

Die JavaScript-API bietet Entwicklern die Möglichkeit, Module, Speicher, Tabellen und Instanzen zu erstellen. Gegeben eine WebAssembly-Instanz, kann JavaScript-Code ihre Exporte synchron aufrufen, die als normale JavaScript-Funktionen bereitgestellt werden. Beliebige JavaScript-Funktionen können auch synchron von WebAssembly-Code aufgerufen werden, indem diese JavaScript-Funktionen als Importe zu einer WebAssembly-Instanz übergeben werden.

Da JavaScript die vollständige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, können JavaScript-Entwickler WebAssembly sogar einfach als JavaScript-Feature für effizientes Erzeugen von Hochleistungsfunktionen betrachten.

In Zukunft werden WebAssembly-Module [genauso wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (mittels `<script type='module'>`), was bedeutet, dass JavaScript ein WebAssembly-Modul ebenso einfach wie ein ES-Modul abrufen, kompilieren und importieren können wird.

## Wie verwende ich WebAssembly in meiner App?

Oben haben wir über die grundlegenden Primitiven gesprochen, die WebAssembly zur Webplattform hinzufügt: ein binäres Format für Code und APIs zum Laden und Ausführen dieses binären Codes. Nun wollen wir darüber sprechen, wie wir diese Primitiven praktisch nutzen können.

Das WebAssembly-Ökosystem ist noch im Anfangsstadium; mehr Tools werden in Zukunft unweigerlich entstehen. Derzeit gibt es vier Hauptansatzpunkte:

- Portieren einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder direktes Generieren von WebAssembly auf der Assemblierebene.
- Schreiben einer Rust-Anwendung und Zielrichtung auf WebAssembly als Ausgabemedium.
- Verwendung von [AssemblyScript](https://www.assemblyscript.org/), das TypeScript ähnlich sieht und zu WebAssembly-Binär kompilieren kann.

Lassen Sie uns diese Optionen besprechen:

### Portieren von C/C++

Zwei der vielen Optionen zur Erstellung von Wasm-Code sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt mehrere Online-Wasm-Assembler-Optionen, wie:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Dies sind großartige Ressourcen für Menschen, die herausfinden wollen, wo sie anfangen sollen, aber sie fehlen an einigen der Werkzeugen und Optimierungen von Emscripten.

Das Emscripten-Tool kann so ziemlich jeden C/C++-Quellcode nehmen und ihn in ein Wasm-Modul kompilieren, plus den notwendigen JavaScript-"Klebe"-Code zum Laden und Ausführen des Moduls, und ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Klebe-Code.](emscripten-diagram.png)

Kurz gesagt funktioniert der Prozess wie folgt:

1. Emscripten gibt zuerst das C/C++ in clang+LLVM ein — eine ausgereifte Open-Source-C/C++-Compiler-Toolchain, die zum Beispiel als Teil von Xcode auf macOS ausgeliefert wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in ein Wasm-Binärformat.
3. WebAssembly kann derzeit von sich aus nicht direkt auf das DOM zugreifen; es kann nur JavaScript aufrufen und dabei ganzzahlige und Gleitkomma-Primitivdatentypen übergeben. Daher muss WebAssembly, um auf eine Web-API zuzugreifen, JavaScript aufrufen, das dann den Web-API-Aufruf macht. Emscripten erstellt daher den HTML- und JavaScript-"Klebe"-Code, der dazu erforderlich ist.

> [!NOTE]
> Es gibt zukünftige Pläne [um WebAssembly direkten Zugang zu Web-APIs zu ermöglichen](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Klebe-Code ist nicht so einfach, wie Sie sich vielleicht vorstellen. Zum Beispiel implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://en.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert und daher erfordert jede von ihnen etwas JavaScript-Klebe-Code, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Ein Teil des Klebe-Codes besteht darin, die Funktionalität jeder jeweiligen von dem C/C++-Code genutzten Bibliothek zu implementieren. Der Klebe-Code enthält auch die Logik zum Aufrufen der oben genannten WebAssembly-JavaScript-APIs, um die Wasm-Datei abzurufen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-"Klebe"-Datei und schreibt stdout in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL nutzt, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Rendering-Ziel dient. Es ist sehr einfach, die Emscripten-Ausgabe zu modifizieren und in jede gewünschte Webanwendung zu verwandeln.

Sie finden die vollständige Dokumentation zu Emscripten auf [emscripten.org](https://emscripten.org/), und einen Leitfaden zur Implementierung der Toolchain und zur Kompilierung Ihrer eigenen C/C++-App auf Wasm bei [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm).

### Schreiben von WebAssembly direkt

Möchten Sie Ihren eigenen Compiler oder Ihre eigenen Werkzeuge erstellen oder eine JavaScript-Bibliothek, die WebAssembly zur Laufzeit generiert?

In der gleichen Art und Weise wie physikalische Assemblysprachen hat das WebAssembly-Binärformat eine Textdarstellung — die beiden haben eine 1:1-Korrespondenz. Sie können dieses Format von Hand schreiben oder generieren und es dann mit einem der mehreren [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat konvertieren.

Für eine einfache Anleitung dazu lesen Sie unseren Artikel [Konvertieren von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm).

### Schreiben von Rust, das auf WebAssembly abzielt

Es ist auch möglich, Rust-Code zu schreiben und nach WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Working Group. Sie können mit der Installation der notwendigen Toolchain beginnen, ein Beispiel-Rust-Programm in ein WebAssembly-npm-Paket kompilieren und dieses in einer Beispiel-Web-App verwenden, indem Sie unseren Artikel [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm) lesen.

### Verwendung von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen, und in der vertrauten Umgebung einer ähnlichen Sprache wie TypeScript bleiben möchten, wird AssemblyScript die beste Option sein. AssemblyScript kompiliert eine strenge Variante von TypeScript zu WebAssembly, sodass Webentwickler die ihnen bekannten TypeScript-kompatiblen Werkzeuge weiterhin verwenden können — wie Prettier, ESLint, VS Code IntelliSense usw. Sie können die Dokumentation unter <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es in das Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel auf dem Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running) — erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden können.
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen können.
