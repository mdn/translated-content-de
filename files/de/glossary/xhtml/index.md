---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**XHTML** ist ein Begriff, der historisch verwendet wurde, um [HTML](/de/docs/Web/HTML)-Dokumente zu beschreiben, die den {{Glossary("XML", "XML")}}-Syntaxregeln entsprechen.

Das folgende Beispiel zeigt ein HTML-Dokument und das entsprechende "XHTML"-Dokument sowie die dazugehörigen {{Glossary("HTTP", "HTTP")}} {{HTTPHeader("Content-Type")}}-Header, mit denen sie ausgeliefert werden sollten.

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

In der Praxis werden nur sehr wenige "XHTML"-Dokumente über das Web mit einem `Content-Type: application/xhtml+xml`-Header geliefert. Stattdessen werden sie, obwohl die Dokumente so geschrieben sind, dass sie den XML-Syntaxregeln entsprechen, mit einem `Content-Type: text/html`-Header ausgeliefert — sodass Browser diese Dokumente mit HTML-Parsern statt mit XML-Parsern analysieren.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("HTML5", "HTML5")}}
  - {{Glossary("SVG", "SVG")}}
  - {{Glossary("MathML", "MathML")}}
  - {{Glossary("XML", "XML")}}
