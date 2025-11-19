---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**XHTML** ist ein Begriff, der historisch verwendet wurde, um [HTML](/de/docs/Web/HTML)-Dokumente zu beschreiben, die so geschrieben sind, dass sie den Syntaxregeln von {{Glossary("XML", "XML")}} entsprechen.

Das folgende Beispiel zeigt ein HTML-Dokument und das entsprechende "XHTML"-Dokument sowie die zugehörigen {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Content-Type")}}-Header, mit denen sie ausgeliefert werden sollten.

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>I am a HTML document</p>
  </body>
</html>
```

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>I am a XHTML document</p>
  </body>
</html>
```

In der Praxis werden sehr wenige "XHTML"-Dokumente im Web mit einem `Content-Type: application/xhtml+xml`-Header ausgeliefert. Stattdessen werden sie, obwohl sie so geschrieben sind, dass sie den XML-Syntaxregeln entsprechen, mit einem `Content-Type: text/html`-Header ausgeliefert – sodass Browser diese Dokumente mit HTML-Parsern anstelle von XML-Parsern analysieren.

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("HTML5", "HTML5")}}
  - {{Glossary("SVG", "SVG")}}
  - {{Glossary("MathML", "MathML")}}
  - {{Glossary("XML", "XML")}}
