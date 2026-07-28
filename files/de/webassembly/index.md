---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 453a2a29e3e7a3ef64e65acc6121914f54334bc7
---

WebAssembly (Wasm) ist eine niedrigstufige, assemblierungsähnliche Sprache, die nahezu native Leistung für das Web bereitstellt. Sie dient als Kompilierungsziel für Sprachen wie C/C++, C# und Rust, sodass Hochleistungscode direkt im Browser ausgeführt werden kann.

WebAssembly ist so konzipiert, dass es JavaScript ergänzt und parallel dazu ausgeführt wird. Mithilfe der WebAssembly JavaScript-APIs können Sie WebAssembly-Module in eine JavaScript-App laden und Funktionalitäten zwischen beiden teilen. Dies ermöglicht es Ihnen, die Leistung und Stärke von WebAssembly und die Ausdruckskraft und Flexibilität von JavaScript in derselben App zu nutzen — ohne selbst niedere WebAssembly-Codes schreiben zu müssen.

## Leitfaden

Die [WebAssembly-Leitfäden](/de/docs/WebAssembly/Guides) behandeln Themen wie hochrangige Konzepte, das Kompilieren aus verschiedenen Sprachen, die textuelle Darstellung des Wasm-Binärformats und wie man WebAssembly ausführt.

## API-Referenz

Die [WebAssembly-Referenz](/de/docs/WebAssembly/Reference) ist in folgende Abschnitte unterteilt:

- [WebAssembly JavaScript API](/de/docs/WebAssembly/Reference/JavaScript_interface)
  - : Das WebAssembly JavaScript-Objekt fungiert als Namensraum für alle mit WebAssembly verbundenen Funktionalitäten.
- [WebAssembly-Wertetypen](/de/docs/WebAssembly/Reference/Value_types)
  - : Die verschiedenen WebAssembly-Wertetypen.
- [WebAssembly-Definitionen](/de/docs/WebAssembly/Reference/Definitions)
  - : Die obersten Definitionen, die in Wasm verfügbar sind, um Modulmerkmale wie Tabellen, Typen, Speicher, Funktionen usw. zu definieren.
- [WebAssembly-Anweisungen](/de/docs/WebAssembly/Reference#instructions)
  - : Die in Wasm verfügbaren Anweisungen zur Logikverarbeitung.

## Beispiele

Unsere Referenzdokumentation enthält mehrere Live-Beispiele, um zu demonstrieren, wie die verschiedenen Funktionen arbeiten. Sie finden zusätzliche Beispiele in unserem [webassembly-examples](https://github.com/mdn/webassembly-examples/) Repository.

## Siehe auch

- [webassembly.org](https://webassembly.org/)
- [Supportstatus der WebAssembly-Browserfunktionen](https://webassembly.org/features/?categories=browsers) auf webassembly.org (2026)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
