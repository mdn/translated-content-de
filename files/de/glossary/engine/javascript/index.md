---
title: JavaScript-Engine
slug: Glossary/Engine/JavaScript
l10n:
  sourceCommit: 6bb832e13403743fac23da7a29e9c7c6011bdaa0
---

{{GlossarySidebar}}

**JavaScript-Engines** sind Interpreter, die {{Glossary("JavaScript", "JavaScript")}}-Code parsen und ausführen. Moderne JavaScript-Engines nutzen Just-in-Time (JIT) Kompilierung, um JavaScript-Code in Maschinencode zu konvertieren, der von einem Prozessor eines Computers ausgeführt werden kann. Eine JavaScript-Engine wird typischerweise in Web-{{Glossary("browser", "Browsern")}} entwickelt und eingesetzt, um clientseitigen Code auszuführen, kann aber auch in serverseitigen Umgebungen wie {{Glossary("Node.js", "Node.js")}} verwendet werden.

In einem Browser arbeitet die JavaScript-Engine zusammen mit der Rendering-Engine über das {{Glossary("DOM", "Document Object Model")}} und {{Glossary("WebIDL", "Web IDL")}}-Bindings. Einige JavaScript-Engines führen auch {{Glossary("WebAssembly", "WebAssembly")}}-Code in der gleichen Sandbox wie regulärer JavaScript-Code aus.

Verwechseln Sie JavaScript-Engines nicht mit {{Glossary("engine/rendering", "Rendering-Engines")}}, die ebenfalls entscheidende Teile von Browsern sind.

Gängige JavaScript-Engines sind:

- [V8](https://v8.dev/)
- [SpiderMonkey](https://spidermonkey.dev/)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## Siehe auch

- [JavaScript-Engine](https://en.wikipedia.org/wiki/JavaScript_engine) auf Wikipedia
- [JavaScript-Implementierungen](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_implementations)
- Verwandte Glossarbegriffe:
  - {{Glossary("Engine", "Engine")}}
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("WebAssembly", "WebAssembly")}}
  - {{Glossary("Browser", "Browser")}}
  - {{Glossary("Node.js", "Node.js")}}
