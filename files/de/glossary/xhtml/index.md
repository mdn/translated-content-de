---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**XHTML** ist ein Begriff, der historisch verwendet wurde, um [HTML](/de/docs/Web/HTML)-Dokumente zu beschreiben, die gemäß den Syntaxregeln von {{Glossary("XML", "XML")}} geschrieben wurden.

Das folgende Beispiel zeigt ein HTML-Dokument und ein entsprechendes "XHTML"-Dokument sowie die zugehörigen {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Content-Type")}}-Header, mit denen sie ausgeliefert werden sollten.

### HTML-Dokument

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

### XHTML-Dokument

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

In der Praxis werden sehr wenige "XHTML"-Dokumente über das Web mit einem `Content-Type: application/xhtml+xml`-Header ausgeliefert. Stattdessen werden sie, obwohl die Dokumente so geschrieben sind, dass sie den XML-Syntaxregeln entsprechen, mit einem `Content-Type: text/html`-Header ausgeliefert – sodass Browser diese Dokumente mit HTML-Parsern anstelle von XML-Parsern verarbeiten.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("HTML5", "HTML5")}}
  - {{Glossary("SVG", "SVG")}}
  - {{Glossary("MathML", "MathML")}}
  - {{Glossary("XML", "XML")}}
