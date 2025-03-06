---
title: JavaScript-Engine
slug: Glossary/Engine/JavaScript
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

**JavaScript-Engines** sind Interpreter, die {{Glossary("JavaScript", "JavaScript")}}-Code analysieren und ausführen. Moderne JavaScript-Engines verwenden Just-in-Time (JIT)-Kompilierung, um JavaScript-Code in Maschinencode umzuwandeln, der von der CPU eines Computers ausgeführt werden kann. Eine JavaScript-Engine wird typischerweise in Web-{{Glossary("browser", "Browsern")}} entwickelt und verwendet, um clientseitigen Code auszuführen, kann jedoch auch in serverseitigen Umgebungen wie {{Glossary("Node.js", "Node.js")}} eingesetzt werden.

In einem Browser arbeitet die JavaScript-Engine zusammen mit der Rendering-Engine über das {{Glossary("DOM", "Document Object Model")}} und {{Glossary("WebIDL", "Web IDL")}}-Bindungen. Einige JavaScript-Engines führen auch {{Glossary("WebAssembly", "WebAssembly")}}-Code in derselben Sandbox wie regulärer JavaScript-Code aus.

Verwechseln Sie JavaScript-Engines nicht mit {{Glossary("engine/rendering", "Rendering-Engines")}}, die ebenfalls entscheidende Teile von Browsern sind.

Gängige JavaScript-Engines umfassen:

- [V8](https://v8.dev/)
- [SpiderMonkey](https://spidermonkey.dev/)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## Siehe auch

- [JavaScript-Engine](https://en.wikipedia.org/wiki/JavaScript_engine) auf Wikipedia
- [JavaScript-Implementierungen](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_implementations)
- Verwandte Glossarbegriffe:
  - {{Glossary("Engine", "Engine")}}
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("WebAssembly", "WebAssembly")}}
  - {{Glossary("Browser", "Browser")}}
  - {{Glossary("Node.js", "Node.js")}}
