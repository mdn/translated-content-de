---
title: WebAssembly-Konzepte
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel erklärt die Konzepte, wie WebAssembly funktioniert, einschließlich seiner Ziele, der Probleme, die es löst, und wie es im JavaScript-Engine des Webbrowsers ausgeführt wird.

## Was ist WebAssembly?

WebAssembly ist ein neuer Code-Typ, der in modernen Webbrowsern ausgeführt werden kann und neue Funktionen sowie erhebliche Leistungssteigerungen bietet. Es ist nicht primär dafür gedacht, von Hand geschrieben zu werden, sondern als effektives Kompilierungsziel für Quellsprachen wie C, C++, Rust etc. konzipiert.

Dies hat immense Auswirkungen auf die Webplattform – es bietet eine Möglichkeit, Code, der in mehreren Sprachen geschrieben wurde, im Web mit nahezu nativer Geschwindigkeit auszuführen, mit Clients, die im Web laufen, die dies zuvor nicht konnten.

Darüber hinaus müssen Sie nicht einmal wissen, wie Sie WebAssembly-Code erstellen, um davon zu profitieren. WebAssembly-Module können in eine Web- (oder Node.js-) App importiert werden und die WebAssembly-Funktionen können über JavaScript genutzt werden. JavaScript-Frameworks könnten WebAssembly verwenden, um massive Leistungsverbesserungen und neue Funktionen zu bieten, während die Funktionalität dennoch leicht für Webentwickler zugänglich bleibt.

## Ziele von WebAssembly

WebAssembly wird als offener Standard innerhalb der [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) mit folgenden Zielen erstellt:

- Schnell, effizient und portabel sein — WebAssembly-Code kann mit nahezu nativer Geschwindigkeit auf verschiedenen Plattformen ausgeführt werden, indem er [allgemeine Hardware-Fähigkeiten](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution) nutzt.
- Lesbar und debugfähig sein — WebAssembly ist eine low-level Assemblersprache, hat aber ein menschenlesbares Textformat (dessen Spezifikation noch finalisiert wird), das es ermöglicht, den Code von Hand zu schreiben, zu betrachten und zu debuggen.
- Sicher bleiben — WebAssembly ist spezifiziert, um in einer sicheren, sandkastenartigen Ausführungsumgebung betrieben zu werden. Wie anderer Webcode wird es die gleiche Herkunft und die Berechtigungspolitik des Browsers durchsetzen.
- Das Web nicht zerstören — WebAssembly ist so konzipiert, dass es gut mit anderen Webtechnologien zusammenspielt und die Rückwärtskompatibilität beibehält.

> [!NOTE]
> WebAssembly wird auch außerhalb von Web- und JavaScript-Umgebungen Einsatz finden (siehe [Nicht-Web-Einbindungen](https://webassembly.org/docs/non-web/)).

## Wie passt WebAssembly in die Webplattform?

Die Webplattform kann in zwei Teile unterteilt werden:

- Eine virtuelle Maschine (VM), die den Code der Web-App ausführt, z.B. den JavaScript-Code, der Ihre Apps antreibt.
- Ein Satz von [Web-APIs](/de/docs/Web/API), die die Web-App aufrufen kann, um die Webbrowser-/Gerätefunktionalität zu steuern und Dinge geschehen zu lassen ([DOM](/de/docs/Web/API/Document_Object_Model), [CSSOM](/de/docs/Web/API/CSS_Object_Model), [WebGL](/de/docs/Web/API/WebGL_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Audio API](/de/docs/Web/API/Web_Audio_API), etc.).

Historisch gesehen konnte die VM nur JavaScript laden. Das hat für uns gut funktioniert, da JavaScript mächtig genug ist, um die meisten Probleme zu lösen, die Menschen heute im Web haben. Wir sind jedoch auf Leistungsprobleme gestoßen, wenn wir JavaScript für intensivere Anwendungen wie 3D-Spiele, virtuelle und erweiterte Realität, Computer Vision, Bild-/Video-Bearbeitung und verschiedene andere Bereiche verwenden wollten, die native Leistung erfordern (siehe [WebAssembly-Anwendungsfälle](https://webassembly.org/docs/use-cases/) für mehr Ideen).

Zudem können die Kosten für das Herunterladen, Parsen und Kompilieren sehr großer JavaScript-Anwendungen prohibitiv sein. Mobile und andere ressourcenbeschränkte Plattformen können diese Leistungsengpässe weiter verstärken.

WebAssembly ist eine andere Sprache als JavaScript, aber es soll kein Ersatz sein. Stattdessen ist es so konzipiert, dass es JavaScript ergänzt und mit ihm zusammenarbeitet, wodurch Webentwickler die starken Punkte beider Sprachen nutzen können:

- JavaScript ist eine hochsprachige Sprache, flexibel und ausdrucksstark genug, um Webanwendungen zu schreiben. Es hat viele Vorteile — es ist dynamisch typisiert, erfordert keinen Kompilierungsschritt und hat ein riesiges Ökosystem, das mächtige Frameworks, Bibliotheken und andere Werkzeuge bietet.
- WebAssembly ist eine low-level assemblersprachähnliche Sprache mit einem kompakten Binärformat, das mit nahezu nativer Leistung läuft und Sprachen mit low-level Speicher-Modellen wie C++ und Rust ein Kompilierungsziel bietet, damit sie im Web ausgeführt werden können. (Beachten Sie, dass WebAssembly das [höhere Ziel](https://webassembly.org/docs/high-level-goals/) hat, künftig auch Sprachen mit Speicherbereinigungsmodellen zu unterstützen.)

Mit dem Aufkommen von WebAssembly in Browsern wird die virtuelle Maschine, die wir zuvor besprochen haben, nun zwei Code-Typen laden und ausführen — JavaScript UND WebAssembly.

Die verschiedenen Code-Typen können sich bei Bedarf gegenseitig aufrufen — die [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) ummantelt exportierten WebAssembly-Code mit JavaScript-Funktionen, die normal aufgerufen werden können, und WebAssembly-Code kann normale JavaScript-Funktionen importieren und synchron aufrufen. Tatsächlich wird die Basiseinheit von WebAssembly-Code als Modul bezeichnet, und WebAssembly-Module sind in vielerlei Hinsicht symmetrisch zu ES-Modulen.

### Schlüsselkonzepte von WebAssembly

Es gibt mehrere Schlüsselkonzepte, die nötig sind, um zu verstehen, wie WebAssembly im Browser läuft. All diese Konzepte sind 1:1 in der [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface) wiedergegeben.

- **Module**: Stellt ein WebAssembly-Binärformat dar, das vom Browser in ausführbaren Maschinencode kompiliert wurde. Ein Modul ist zustandslos und kann daher wie ein [`Blob`](/de/docs/Web/API/Blob) explizit zwischen Fenstern und Workern geteilt werden (über [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage)). Ein Modul deklariert Importe und Exporte wie ein ES-Modul.
- **Memory**: Ein dynamisch erweiterbarer ArrayBuffer, der das lineare Array von Bytes enthält, die von WebAssemblys low-level Speicherzugriffsanweisungen gelesen und geschrieben werden.
- **Table**: Ein dynamisch erweiterbares typisiertes Array von Referenzen (z.B. zu Funktionen), die andernfalls nicht als rohe Bytes im Memory gespeichert werden könnten (aus Sicherheits- und Portabilitätsgründen).
- **Instance**: Ein Modul gepaart mit all dem Zustand, den es zur Laufzeit verwendet, einschließlich eines Memory, einer Table und einer Menge importierter Werte. Eine Instanz ist wie ein ES-Modul, das in einer bestimmten globalen Umgebung mit einer bestimmten Menge von Importen geladen wurde.

Die JavaScript API bietet Entwicklern die Möglichkeit, Module, Memories, Tables und Instanzen zu erstellen. Mit einer WebAssembly-Instanz kann JavaScript-Code synchron die Exporte aufrufen, die als normale JavaScript-Funktionen offengelegt sind. Beliebige JavaScript-Funktionen können auch von WebAssembly-Code synchron aufgerufen werden, indem diese JavaScript-Funktionen als Importe in eine WebAssembly-Instanz übergeben werden.

Da JavaScript die vollständige Kontrolle darüber hat, wie WebAssembly-Code heruntergeladen, kompiliert und ausgeführt wird, könnten JavaScript-Entwickler WebAssembly sogar einfach als JavaScript-Feature für die effiziente Generierung hochleistungsfähiger Funktionen betrachten.

In Zukunft werden WebAssembly-Module [genauso wie ES-Module geladen werden können](https://github.com/WebAssembly/proposals/issues/12) (mithilfe von `<script type='module'>`), was bedeutet, dass JavaScript ebenso einfach wie ein ES-Modul ein WebAssembly-Modul abrufen, kompilieren und importieren könnte.

## Wie nutze ich WebAssembly in meiner App?

Oben haben wir über die grundlegenden Primitiven gesprochen, die WebAssembly zur Webplattform hinzufügt: ein Binärformat für Code und APIs zum Laden und Ausführen dieses Binärcodes. Sprechen wir nun darüber, wie wir diese Primitiven in der Praxis nutzen können.

Das WebAssembly-Ökosystem befindet sich in einem Frühstadium; es werden zweifellos noch mehr Werkzeuge entstehen. Gegenwärtig gibt es vier Hauptansatzpunkte:

- Portierung einer C/C++-Anwendung mit [Emscripten](https://emscripten.org/).
- Schreiben oder Generieren von WebAssembly direkt auf Assemblerebene.
- Schreiben einer Rust-Anwendung und Ausrichten auf WebAssembly als Ausgabe.
- Verwendung von [AssemblyScript](https://www.assemblyscript.org/), das ähnlich wie TypeScript aussieht und in WebAssembly-Binär kompiliert.

Sprechen wir über diese Optionen:

### Portierung von C/C++

Zwei der vielen Möglichkeiten zur Erstellung von Wasm-Code sind ein Online-Wasm-Assembler oder [Emscripten](https://emscripten.org/). Es gibt eine Reihe von Online-Wasm-Assembler-Optionen, wie zum Beispiel:

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Diese sind großartige Ressourcen für Personen, die versuchen herauszufinden, wo sie anfangen sollen, bieten aber nicht die Tooling- und Optimierungen von Emscripten.

Das Emscripten-Tool ist in der Lage, fast jeden C/C++-Quellcode zu nehmen und ihn in ein Wasm-Modul zu kompilieren, plus den notwendigen JavaScript-"Kleber"-Code zum Laden und Ausführen des Moduls und ein HTML-Dokument, um die Ergebnisse des Codes anzuzeigen.

![Diagramm: Emscripten kompiliert C/C++-Quellcode in ein Wasm-Modul, ein HTML-Dokument zusammen mit dem JavaScript-Klebercode.](emscripten-diagram.png)

Zusammengefasst funktioniert der Prozess wie folgt:

1. Emscripten füttert zuerst das C/C++ in clang+LLVM ein — eine ausgereifte Open-Source-C/C++-Compiler-Toolchain, die zum Beispiel als Teil von XCode auf OSX ausgeliefert wird.
2. Emscripten transformiert das kompilierte Ergebnis von clang+LLVM in ein Wasm-Binärformat.
3. WebAssembly kann aktuell selbst nicht direkt auf das DOM zugreifen; es kann nur JavaScript aufrufen, wobei ganzzahlige und Gleitkomma-Primitivdatentypen übergeben werden. Um auf eine Web-API zuzugreifen, muss WebAssembly also JavaScript aufrufen, das dann den Web-API-Aufruf macht. Emscripten erstellt daher den HTML- und JavaScript-Klebercode, der dafür nötig ist.

> [!NOTE]
> Es gibt zukünftige Pläne, [WebAssembly direkten Zugriff auf Web-APIs zu erlauben](https://github.com/WebAssembly/gc/blob/master/README.md).

Der JavaScript-Klebercode ist nicht so einfach, wie Sie sich vielleicht vorstellen. Zum einen implementiert Emscripten beliebte C/C++-Bibliotheken wie [SDL](https://de.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://de.wikipedia.org/wiki/OpenGL), [OpenAL](https://de.wikipedia.org/wiki/OpenAL) und Teile von [POSIX](https://de.wikipedia.org/wiki/POSIX). Diese Bibliotheken werden in Bezug auf Web-APIs implementiert, sodass jede einen gewissen JavaScript-Klebercode benötigt, um WebAssembly mit der zugrunde liegenden Web-API zu verbinden.

Ein Teil des Klebercodes implementiert also die Funktionalitäten jeder respektiven Bibliothek, die vom C/C++-Code genutzt wird. Der Klebercode enthält auch die Logik zum Aufrufen der oben erwähnten WebAssembly-JavaScript-APIs, um die Wasm-Datei abzurufen, zu laden und auszuführen.

Das generierte HTML-Dokument lädt die JavaScript-Klebedatei und schreibt die Ausgaben in ein {{htmlelement("textarea")}}. Wenn die Anwendung OpenGL verwendet, enthält das HTML zudem ein {{htmlelement("canvas")}}-Element, das als Rendering-Ziel verwendet wird. Es ist sehr einfach, die Emscripten-Ausgabe zu modifizieren und sie in jede beliebige Web-App zu verwandeln, die Sie benötigen.

Sie können die vollständige Dokumentation zu Emscripten unter [emscripten.org](https://emscripten.org/) finden und eine Anleitung zur Implementierung der Toolchain und zum Kompilieren Ihrer eigenen C/C++-App in Wasm im [Leitfaden zu Kompilieren von C/C++ zu WebAssembly](/de/docs/WebAssembly/Guides/C_to_Wasm).

### WebAssembly direkt schreiben

Wollen Sie Ihren eigenen Compiler, Ihre eigenen Tools erstellen oder eine JavaScript-Bibliothek machen, die WebAssembly zur Laufzeit erzeugt?

In gleicher Weise wie physische Assemblersprachen hat das WebAssembly-Binärformat eine Textdarstellung — die beiden haben eine 1:1-Entsprechung. Sie können dieses Format von Hand schreiben oder generieren und es dann mit einem der zahlreichen [WebAssembly-Text-zu-Binär-Tools](https://webassembly.org/getting-started/advanced-tools/) in das Binärformat konvertieren.

Für eine einfache Anleitung, wie das geht, siehe unseren [Leitfaden zur Umwandlung von WebAssembly-Textformat zu Wasm](/de/docs/WebAssembly/Guides/Text_format_to_Wasm).

### Schreiben von Rust und Zielen auf WebAssembly

Es ist auch möglich, Rust-Code zu schreiben und in WebAssembly zu kompilieren, dank der unermüdlichen Arbeit der Rust WebAssembly Working Group. Sie können mit der Installation der notwendigen Toolchain beginnen, ein Rust-Beispielprogramm in ein WebAssembly-npm-Paket kompilieren und dieses in einer Beispiel-Web-App verwenden. Dies finden Sie in unserem [Leitfaden zum Kompilieren von Rust zu WebAssembly](/de/docs/WebAssembly/Guides/Rust_to_Wasm).

### Verwendung von AssemblyScript

Für Webentwickler, die WebAssembly ausprobieren möchten, ohne die Details von C oder Rust lernen zu müssen und in dem Komfort einer vertrauten Sprache wie TypeScript bleiben möchten, ist AssemblyScript die beste Option. AssemblyScript kompiliert eine strikte Variante von TypeScript zu WebAssembly und ermöglicht Webentwicklern, weiterhin die TypeScript-kompatiblen Werkzeuge zu nutzen, mit denen sie vertraut sind — wie Prettier, ESLint, VS Code IntelliSense etc. Sie können seine Dokumentation unter <https://www.assemblyscript.org/> einsehen.

## Zusammenfassung

Dieser Artikel hat Ihnen eine Erklärung gegeben, was WebAssembly ist, warum es so nützlich ist, wie es in das Web passt und wie Sie es nutzen können.

## Siehe auch

- [WebAssembly-Artikel im Mozilla Hacks Blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly bei Mozilla Research](https://research.mozilla.org/)
- [Laden und Ausführen von WebAssembly-Code](/de/docs/WebAssembly/Guides/Loading_and_running) — erfahren Sie, wie Sie ein eigenes WebAssembly-Modul in eine Webseite laden.
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API) — erfahren Sie, wie Sie die anderen Hauptfunktionen der WebAssembly-JavaScript-API nutzen.
