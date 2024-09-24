---
title: WebAssembly-Konzepte
slug: WebAssembly/Concepts
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{WebAssemblySidebar}}

Dieser Artikel erklärt die Konzepte hinter der Funktionsweise von WebAssembly, einschließlich seiner Ziele, der Probleme, die es löst, und wie es im JavaScript-Engine des Webbrowsers läuft.

## Was ist WebAssembly?

WebAssembly ist eine neue Art von Code, die in modernen Webbrowsern ausgeführt werden kann und bietet neue Funktionen sowie erhebliche Leistungssteigerungen. Es ist nicht primär dafür gedacht, von Hand geschrieben zu werden, sondern wurde als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. entwickelt.

Dies hat enorme Auswirkungen auf die Webplattform — es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben ist, im Web mit nahezu nativer Geschwindigkeit auszuführen, wobei Clientanwendungen im Web laufen, die dies vorher nicht konnten.

Darüber hinaus müssen Sie nicht einmal wissen, wie man WebAssembly-Code erstellt, um von ihm zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js-) App importiert werden, wobei WebAssembly-Funktionen über JavaScript zur Nutzung zur Verfügung stehen. JavaScript-Frameworks könnten WebAssembly nutzen, um massive Leistungsvorteile und neue Funktionen zu bieten, während die Funktionalität für Webentwickler weiterhin leicht verfügbar ist.

## WebAssembly-Ziele

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit folgenden Zielen erstellt:

- Schnell, effizient und portabel sein — WebAssembly-Code kann mit nahezu nativer Geschwindigkeit auf verschiedenen Plattformen ausgeführt werden, indem [gemeinsame Hardwarefähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) genutzt werden.
- Lesbar und debugbar sein — WebAssembly ist eine Low-Level-Assemblersprache, hat aber ein menschenlesbares Textformat (dessen Spezifikation noch abgeschlossen wird), das es ermöglicht, Code von Hand zu schreiben, anzusehen und zu debuggen.
- Sicherheit gewährleisten — WebAssembly ist so spezifiziert, dass es in einer sicheren, abgeschotteten Ausführungsumgebung läuft. Wie anderer Webcode wird es die Same-Origin- und Berechtigungspolitiken des Browsers durchsetzen.
- Web nicht zerstören — WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenarbeitet und die Rückwärtskompatibilität beibehält.

> [!NOTE]
> WebAssembly wird auch außerhalb der Web- und JavaScript-Umgebungen Verwendung finden (siehe [Nicht-Web-Einbettungen](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Webplattform?

Die Webplattform kann als bestehend aus zwei Teilen betrachtet werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps antreibt.
- Ein Satz von [Web-APIs](/de/docs/Web/API), die die Web-App aufrufen kann, um die Funktionen des Webbrowsers oder Geräts zu steuern und Aktionen auszuführen ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Dies hat gut für uns funktioniert, da JavaScript leistungsstark genug ist, um die meisten Probleme zu lösen, die Menschen heute im Web haben. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn wir versuchen, JavaScript für intensivere Anwendungsfälle wie 3D-Spiele, virtuelle und erweiterte Realität, Computer Vision, Bild-/Videobearbeitung und eine Reihe anderer Bereiche zu verwenden, die native Leistung erfordern (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für weitere Ideen).

Zusätzlich können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es ist nicht als Ersatz gedacht. Stattdessen ist es so konzipiert, dass es JavaScript ergänzt und ihm zur Seite steht, sodass Webentwickler die Vorteile beider Sprachen nutzen können:

- JavaScript ist eine Hochsprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile — es ist dynamisch typisiert, erfordert keinen Kompilierschritt und hat ein riesiges Ökosystem, das mächtige Frameworks, Bibliotheken und andere Tools bietet.
- WebAssembly ist eine Low-Level-Assembly-ähnliche Sprache mit einem kompakten Binärformat, das mit nahezu nativer Leistung läuft und Sprachen mit Low-Level-Speichermodellen wie C++ und Rust ein Kompilierungsziel bietet, damit sie im Web laufen können. (Beachten Sie, dass WebAssembly das [hochgestellte Ziel](https://webassembly.org/docs/high-level-goals/) hat, in Zukunft Sprachen mit speicherbereinigten Speichermodellen zu unterstützen.)

Mit dem Aufkommen von WebAssembly in Browsern lädt und führt die vorgestellte virtuelle Maschine nun zwei Arten von Code aus — JavaScript UND WebAssembly.

Die verschiedenen Codearten können sich je nach Bedarf gegenseitig aufrufen — die [WebAssembly-JavaScript-API](/de/docs/WebAssembly/JavaScript_interface) umhüllt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich heißt die Grundeinheit des WebAssembly-Codes ein Modul, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Schlüsselkonzepte von WebAssembly

Es gibt mehrere Schlüsselkonzepte, die nötig sind, um zu verstehen, wie WebAssembly im Browser läuft. Alle diese Konzepte spiegeln sich 1:1 in der [WebAssembly-JavaScript-API](/de/docs/WebAssembly/JavaScript_interface) wider.

- **Modul**: Repräsentiert ein WebAssembly-Binär, das vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann daher explizit zwischen Fenstern und Arbeitern (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)) geteilt werden, ähnlich wie ein [`Blob`](/de/docs/Web/API/Blob). Ein Modul deklariert Importe und Exporte genau wie ein ES-Modul.
- **Speicher**: Ein anpassbarer ArrayBuffer, der das lineare Bytearray enthält, das von WebAssemblys Low-Level-Speicherzugriffsoperationen gelesen und geschrieben wird.
- **Tabelle**: Ein anpassbares typisiertes Array von Referenzen (z.B. auf Funktionen), die andernfalls nicht als rohe Bytes im Speicher gespeichert werden könnten (aus Sicherheits- und Portabilitätsgründen).
- **Instanz**: Ein Modul gekoppelt mit all dem Zustand, den es zur Laufzeit verwendet, einschließlich eines Speichers, einer Tabelle und einem Satz importierter Werte. Eine Instanz ist wie ein ES-Modul, das in einen bestimmten globalen Kontext mit einem bestimmten Satz von Importen geladen wurde.

Die JavaScript-API bietet Entwicklern die Fähigkeit, Module, Speicher, Tabellen und Instanzen zu erstellen. Gegeben eine WebAssembly-Instanz, kann JavaScript-Code ihre Exporte synchron aufrufen, die als normale JavaScript-Funktionen freigegeben werden. Beliebige JavaScript-Funktionen können auch synchron von WebAssembly-Code aufgerufen werden, indem diese JavaScript-Funktionen als Importe einer WebAssembly-Instanz übergeben werden.

Da JavaScript die vollständige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten JavaScript-Entwickler WebAssembly sogar einfach als ein JavaScript-Feature für die effiziente Generierung leistungsfähiger Funktionen betrachten.

In Zukunft werden WebAssembly-Module [genauso wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (mit `<script type='module'>`), was bedeutet, dass JavaScript WebAssembly-Module genauso leicht wie ES-Module abrufen, kompilieren und importieren kann.

## Wie verwende ich WebAssembly in meiner App?

Oben haben wir über die rohen Primitiven gesprochen, die WebAssembly der Webplattform hinzufügt: ein Binärformat für den Code und APIs zum Laden und Ausführen dieses Binärcodes. Nun möchten wir darüber sprechen, wie wir diese Primitiven in der Praxis nutzen können.

Das WebAssembly-Ökosystem befindet sich in einem frühen Stadium; mehr Tools werden sicherlich in Zukunft entstehen. Derzeit gibt es vier Haupteinstiegspunkte:

- Portieren einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder Generieren von WebAssembly direkt auf der Assembly-Ebene.
- Schreiben einer Rust-Anwendung und Zielen auf WebAssembly als Ausgabesprache.
- Verwenden von [AssemblyScript](https://www.assemblyscript.org/), welches ähnlich wie TypeScript aussieht und in WebAssembly-Binär kompiliert.

Lassen Sie uns über diese Optionen sprechen:

### Portieren von C/C++

Zwei der vielen Optionen zur Erstellung von Wasm-Code sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Reihe von Online-Wasm-Assembler-Tools, wie z.B.:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Diese sind großartige Ressourcen für Personen, die herausfinden möchten, wo sie anfangen sollen, aber sie fehlen einige der Werkzeuge und Optimierungen von Emscripten.

Das Emscripten-Tool kann fast jeden C/C++-Quellcode nehmen und ihn in ein Wasm-Modul kompilieren, sowie den notwendigen JavaScript-"Kleber"-Code zum Laden und Ausführen des Moduls und ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Kleber-Code.](emscripten-diagram.png)

Kurz gesagt, der Prozess funktioniert folgendermaßen:

1. Emscripten speist das C/C++ zuerst in clang+LLVM — ein reifes Open-Source-C/C++-Compiler-Toolchain, das z.B. als Teil von XCode auf OSX bereitgestellt wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in ein Wasm-Binär.
3. WebAssembly kann derzeit das DOM nicht direkt ansprechen; es kann nur JavaScript aufrufen und primitive Integer- und Floating-Point-Datentypen übergeben. Um also auf eine beliebige Web-API zuzugreifen, muss WebAssembly JavaScript aufrufen, das dann den Web-API-Aufruf durchführt. Daher erstellt Emscripten den benötigten HTML- und JavaScript-Kleber-Code, um dies zu erreichen.

> [!NOTE]
> Es gibt Pläne, WebAssembly künftig [direkt Web-APIs aufrufen zu lassen](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Kleber-Code ist nicht so einfach, wie man vielleicht vermutet. Zunächst implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://en.wikipedia.org/wiki/POSIX). Diese Bibliotheken sind in Form von Web-APIs implementiert, weshalb jede von ihnen etwas JavaScript-Kleber-Code benötigt, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Ein Teil des Kleber-Codes besteht darin, die Funktionalität jeder jeweiligen Bibliothek zu implementieren, die vom C/C++-Code verwendet wird. Der Kleber-Code enthält auch die Logik, um die oben genannten WebAssembly-JavaScript-APIs zum Abrufen, Laden und Ausführen der Wasm-Datei aufzurufen.

Das generierte HTML-Dokument lädt die JavaScript-Kleber-Datei und schreibt stdout in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Renderziel verwendet wird. Es ist sehr einfach, den Emscripten-Ausgang zu modifizieren und ihn in jede beliebige Webanwendung umzuwandeln, die Sie benötigen.

Sie finden die vollständige Dokumentation zu Emscripten unter [emscripten.org](https://emscripten.org/), und eine Anleitung zur Implementierung der Toolchain sowie zur Kompilierung Ihrer eigenen C/C++-App in Wasm bei [Kompilierung von C/C++ zu WebAssembly](/de/docs/WebAssembly/C_to_Wasm).

### WebAssembly direkt schreiben

Möchten Sie Ihren eigenen Compiler oder Ihre eigenen Tools erstellen oder eine JavaScript-Bibliothek entwickeln, die WebAssembly zur Laufzeit erzeugt?

In ähnlicher Weise wie physische Assemblersprachen hat das WebAssembly-Binärformat eine Textdarstellung — die beiden haben eine 1:1-Entsprechung. Sie können dieses Format von Hand schreiben oder generieren und dann mit einem von mehreren [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Für eine einfache Anleitung, wie dies zu tun ist, siehe unseren Artikel [Konvertieren von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Text_format_to_Wasm).

### Rust schreiben und auf WebAssembly zielen

Es ist auch möglich, Rust-Code zu schreiben und in WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Arbeitsgruppe. Sie können beginnen, indem Sie die notwendigen Werkzeuge installieren, ein Beispiel-Rust-Programm zu einem WebAssembly-npm-Paket kompilieren und dies in einer Beispiel-Webanwendung nutzen, siehe unseren Artikel [Kompilierung von Rust zu WebAssembly](/de/docs/WebAssembly/Rust_to_Wasm).

### Verwenden von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen, und lieber in einer vertrauten Sprache wie TypeScript bleiben, ist AssemblyScript die beste Option. AssemblyScript kompiliert eine strenge Variante von TypeScript in WebAssembly, wodurch Webentwickler weiterhin TypeScript-kompatible Tools verwenden können, mit denen sie vertraut sind — wie Prettier, ESLint, VS Code IntelliSense usw. Sie können die Dokumentation auf <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es in das Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel im Mozilla Hacks-Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly auf Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Loading_and_running) — erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen können.
