---
title: WebAssembly-Konzepte
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

Dieser Artikel erklärt die Konzepte, wie WebAssembly funktioniert, einschließlich seiner Ziele, die Probleme, die es löst, und wie es innerhalb der JavaScript-Engine des Webbrowsers läuft.

## Was ist WebAssembly?

WebAssembly ist eine neue Art von Code, der in modernen Webbrowsern ausgeführt werden kann und neue Funktionen sowie bedeutende Leistungssteigerungen bietet. Es ist nicht primär dafür gedacht, von Hand geschrieben zu werden, sondern es ist als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust usw. entwickelt worden.

Dies hat enorme Auswirkungen auf die Web-Plattform – es ermöglicht die Ausführung von Code, der in mehreren Sprachen geschrieben ist, im Web in fast nativer Geschwindigkeit, mit clientseitigen Apps, die im Web laufen und zuvor nicht hätten ausgeführt werden können.

Und was noch wichtiger ist, Sie müssen nicht einmal wissen, wie man WebAssembly-Code erstellt, um davon zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js) App importiert werden und WebAssembly-Funktionen über JavaScript zur Nutzung bereitstellen. JavaScript-Frameworks könnten WebAssembly nutzen, um massive Leistungsverbesserungen und neue Funktionen zu bieten, während sie die Funktionalität weiterhin Webentwicklern leicht zugänglich machen.

## Ziele von WebAssembly

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit folgenden Zielen entwickelt:

- Schnell, effizient und portabel sein — WebAssembly-Code kann mit nahezu nativer Geschwindigkeit über verschiedene Plattformen hinweg ausgeführt werden, indem [gemeinsame Hardwarefähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) genutzt werden.
- Lesbar und debugbar sein — WebAssembly ist eine low-level Assemblersprache, besitzt jedoch ein menschenlesbares Textformat (dessen Spezifikation noch finalisiert wird), das es ermöglicht, Code von Hand zu schreiben, anzuzeigen und zu debuggen.
- Sicher bleiben — WebAssembly ist so spezifiziert, dass es in einer sicheren, isolierten Ausführungsumgebung läuft. Wie anderer Webcode wird es die Same-Origin- und Berechtigungspolitiken des Browsers durchsetzen.
- Das Web nicht zerstören — WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenspielt und die Rückwärtskompatibilität beibehält.

> [!NOTE]
> WebAssembly wird auch außerhalb von Web- und JavaScript-Umgebungen Anwendung finden (siehe [Nicht-Web-Einbettungen](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Web-Plattform?

Die Web-Plattform kann als aus zwei Teilen bestehend betrachtet werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. der JavaScript-Code, der Ihre Apps antreibt.
- Ein Satz von [Web-APIs](/de-DE/docs/Web/API), die die Web-App aufrufen kann, um die Funktionalität des Webbrowsers/Geräts zu steuern und Dinge geschehen zu lassen ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API) usw.).

Historisch gesehen konnte die VM nur JavaScript laden. Das hat gut funktioniert, da JavaScript mächtig genug ist, um die meisten Probleme zu lösen, die Menschen heute im Web haben. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn wir versuchen, JavaScript für intensivere Anwendungsfälle zu verwenden, wie z.B. 3D-Spiele, Virtual und Augmented Reality, Computer Vision, Bild-/Video-Bearbeitung und eine Reihe anderer Domänen, die native Leistung erfordern (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für mehr Ideen).

Zusätzlich können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es ist nicht als Ersatz gedacht. Stattdessen ist es dazu gedacht, JavaScript zu ergänzen und mit ihm zusammenzuarbeiten, so dass Webentwickler die starken Punkte beider Sprachen nutzen können:

- JavaScript ist eine hochstufige Sprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile — es ist dynamisch typisiert, erfordert keine Kompilierung und hat ein riesiges Ökosystem, das mächtige Frameworks, Bibliotheken und andere Tools bietet.
- WebAssembly ist eine low-level, assemblerartige Sprache mit einem kompakten Binärformat, das mit nahezu nativer Leistung läuft und Sprachen mit low-level Speichermodellen wie C++ und Rust ein Kompilierungsziel bietet, so dass sie im Web laufen können. (Beachten Sie, dass WebAssembly das [hochstufige Ziel](https://webassembly.org/docs/high-level-goals/) hat, in Zukunft Sprachen mit speicherbereinigten Speichermodellen zu unterstützen.)

Mit dem Aufkommen von WebAssembly in Browsern wird die virtuelle Maschine, von der wir vorhin gesprochen haben, nun zwei Arten von Code laden und ausführen — JavaScript UND WebAssembly.

Die verschiedenen Code-Typen können sich bei Bedarf gegenseitig aufrufen — die [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) verpackt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich ist die Grundeinheit des WebAssembly-Codes ein Modul, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Schlüsselkonzepte von WebAssembly

Es gibt mehrere Schlüsselkonzepte, die notwendig sind, um zu verstehen, wie WebAssembly im Browser läuft. All diese Konzepte werden 1:1 in der [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) widergespiegelt.

- **Modul**: Stellt eine WebAssembly-Binärdatei dar, die vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann somit, wie ein [`Blob`](/de/docs/Web/API/Blob), explizit zwischen Fenstern und Workern (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)) geteilt werden. Ein Modul deklariert Importe und Exporte genau wie ein ES-Modul.
- **Speicher**: Ein anpassbares ArrayBuffer, das das lineare Array von Bytes enthält, das von WebAssemblys low-level Speicherzugriffsanweisungen gelesen und geschrieben wird.
- **Tabelle**: Ein anpassbares typisiertes Array von Referenzen (z.B. auf Funktionen), die aus Sicherheits- und Portabilitätsgründen nicht als rohe Bytes im Speicher gespeichert werden können.
- **Instanz**: Ein Modul kombiniert mit dem gesamten Zustand, den es zur Laufzeit verwendet, einschließlich Speicher, Tabelle und Satz importierter Werte. Eine Instanz ist wie ein ES-Modul, das in eine bestimmte Umgebung mit einem bestimmten Satz von Importen geladen wurde.

Die JavaScript-API bietet Entwicklern die Möglichkeit, Module, Speicher, Tabellen und Instanzen zu erstellen. Angesichts einer WebAssembly-Instanz kann JavaScript-Code deren Exporte synchron aufrufen, die als normale JavaScript-Funktionen verfügbar sind. Beliebige JavaScript-Funktionen können auch synchron von WebAssembly-Code aufgerufen werden, indem diese JavaScript-Funktionen als Import für eine WebAssembly-Instanz übergeben werden.

Da JavaScript die vollständige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten JavaScript-Entwickler WebAssembly sogar einfach als JavaScript-Funktion betrachten, um effizient hochleistungsfähige Funktionen zu generieren.

In Zukunft werden WebAssembly-Module [genauso wie ES-Module ladbar sein](https://github.com/WebAssembly/proposals/issues/12) (unter Verwendung von `<script type='module'>`), was bedeutet, dass JavaScript in der Lage sein wird, ein WebAssembly-Modul genauso einfach abzurufen, zu kompilieren und zu importieren wie ein ES-Modul.

## Wie verwende ich WebAssembly in meiner App?

Oben haben wir über die rohen Primitiven gesprochen, die WebAssembly zur Web-Plattform hinzufügt: ein Binärformat für Code und APIs zum Laden und Ausführen dieses Binärcodes. Nun sprechen wir darüber, wie wir diese Primitiven in der Praxis nutzen können.

Das WebAssembly-Ökosystem befindet sich noch in einem frühen Stadium; zweifellos werden in Zukunft mehr Tools entstehen. Derzeit gibt es vier Hauptansatzpunkte:

- Portierung einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder Generieren von WebAssembly direkt auf Assembler-Ebene.
- Schreiben einer Rust-Anwendung und Ausrichten des Outputs auf WebAssembly.
- Verwenden von [AssemblyScript](https://www.assemblyscript.org/), das ähnlich aussieht wie TypeScript und in WebAssembly-Binärdateien kompiliert.

Lassen Sie uns diese Optionen besprechen:

### Portierung von C/C++

Zwei der vielen Optionen, um Wasm-Code zu erstellen, sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Reihe von Online-Wasm-Assembler-Optionen, wie zum Beispiel:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Dies sind großartige Ressourcen für Menschen, die herausfinden möchten, wo sie anfangen sollen, aber sie fehlen einige der Tools und Optimierungen von Emscripten.

Das Emscripten-Tool kann nahezu jeden C/C++-Quellcode nehmen und ihn in ein Wasm-Modul kompilieren, plus den notwendigen JavaScript-"Leim"-Code zum Laden und Ausführen des Moduls und ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Leim-Code.](emscripten-diagram.png)

Kurz gesagt funktioniert der Prozess wie folgt:

1. Emscripten speist zuerst das C/C++ in clang+LLVM ein — eine ausgereifte Open-Source-C/C++-Compiler-Toolchain, die beispielsweise als Teil von Xcode auf macOS bereitgestellt wird.
2. Emscripten transformiert das compilierte Ergebnis von clang+LLVM in eine Wasm-Binärdatei.
3. An sich kann WebAssembly derzeit nicht direkt auf das DOM zugreifen; es kann nur JavaScript aufrufen, wobei primitive Ganzzahlen- und Fließkomma-Datentypen übergeben werden. Um also auf eine Web-API zuzugreifen, muss WebAssembly JavaScript aufrufen, das dann den Web-API-Aufruf ausführt. Emscripten erstellt daher den notwendigen HTML- und JavaScript-Leim-Code, um dies zu erreichen.

> [!NOTE]
> Es gibt zukünftige Pläne, [WebAssembly zu erlauben, Web-APIs direkt aufzurufen](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Leim-Code ist nicht so einfach, wie man es sich vielleicht vorstellen könnte. Zunächst einmal implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://de.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://de.wikipedia.org/wiki/OpenGL), [OpenAL](https://de.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://de.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert, daher benötigt jede einen gewissen JavaScript-Leim-Code, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Ein Teil des Leim-Codes besteht also darin, die Funktionalität der jeweiligen vom C/C++-Code verwendeten Bibliothek zu implementieren. Der Leim-Code enthält auch die Logik, um die oben genannten WebAssembly-JavaScript-APIs aufzurufen, um die Wasm-Datei abzurufen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-Leimdatei und schreibt stdout in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML auch ein {{htmlelement("canvas")}}-Element, das als Rendering-Ziel verwendet wird. Es ist sehr einfach, die Emscripten-Ausgabe zu modifizieren und sie in jede gewünschte Web-App zu verwandeln.

Sie finden eine vollständige Dokumentation zu Emscripten auf [emscripten.org](https://emscripten.org/), und einen Leitfaden zum Implementieren der Toolchain und Kompilieren Ihrer eigenen C/C++-App in Wasm auf [Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm).

### WebAssembly direkt schreiben

Möchten Sie Ihren eigenen Compiler bauen, Ihre eigenen Tools erstellen oder eine JavaScript-Bibliothek entwickeln, die zur Laufzeit WebAssembly generiert?

Ähnlich wie physische Assemblersprachen hat das WebAssembly-Binärformat eine Textdarstellung — die beiden haben eine 1:1-Entsprechung. Sie können dieses Format von Hand schreiben oder generieren und es dann mit einem der mehreren [WebAssembly Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat umwandeln.

Für eine einfache Anleitung, wie Sie dies tun können, sehen Sie sich unseren Artikel [Konvertieren des WebAssembly-Textformats zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm) an.

### Schreiben von Rust mit Ziel WebAssembly

Es ist auch möglich, Rust-Code zu schreiben und nach WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Working Group. Sie können damit beginnen, die notwendige Toolchain zu installieren, ein Beispiel-Rust-Programm in ein WebAssembly-npm-Paket zu kompilieren und es in einer Beispiel-Web-App zu verwenden. Schauen Sie sich dazu unseren Artikel [Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm) an.

### Verwendung von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen, und die in der Komfortzone einer vertrauten Sprache wie TypeScript bleiben möchten, ist AssemblyScript die beste Option. AssemblyScript kompiliert eine strikte Variante von TypeScript zu WebAssembly, sodass Webentwickler weiterhin TypeScript-kompatible Tools verwenden können, die ihnen vertraut sind — wie Prettier, ESLint, VS Code IntelliSense usw. Sie können die Dokumentation auf <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es sich in das Web einfügt und wie Sie es verwenden können.

## Siehe auch

- [WebAssembly-Artikel auf dem Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running) — erfahren Sie, wie Sie Ihr eigenes WebAssembly-Modul in eine Webseite laden.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen können.
