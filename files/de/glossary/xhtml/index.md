---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**XHTML** ist ein Begriff, der historisch verwendet wurde, um [HTML](/de/docs/Web/HTML)-Dokumente zu beschreiben, die geschrieben wurden, um den Syntaxregeln von {{Glossary("XML", "XML")}} zu entsprechen.

Das folgende Beispiel zeigt ein HTML-Dokument und das entsprechende "XHTML"-Dokument sowie die dazugehörigen {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Content-Type")}}-Header, mit denen sie bereitgestellt werden sollten.

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>I am an HTML document</p>
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

In der Praxis werden sehr wenige "XHTML"-Dokumente über das Web mit einem `Content-Type: application/xhtml+xml`-Header bereitgestellt. Stattdessen werden sie, obwohl die Dokumente so geschrieben sind, dass sie den Syntaxregeln von XML entsprechen, mit einem `Content-Type: text/html`-Header bereitgestellt — sodass Browser diese Dokumente mit HTML-Parsern statt mit XML-Parsern parsen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("HTML5", "HTML5")}}
  - {{Glossary("SVG", "SVG")}}
  - {{Glossary("MathML", "MathML")}}
  - {{Glossary("XML", "XML")}}
