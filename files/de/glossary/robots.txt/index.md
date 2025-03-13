---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Eine **robots.txt** ist eine Datei, die normalerweise im Root-Verzeichnis einer Website platziert wird (zum Beispiel `https://www.example.com/robots.txt`).
Sie gibt an, ob {{Glossary("crawler", "Crawler")}} den Zugriff auf die gesamte Website oder auf bestimmte Ressourcen der Website erlaubt oder untersagt sind.
Eine restriktive `robots.txt` Datei kann den Bandbreitenverbrauch durch Crawler verhindern.

Ein Websitebesitzer kann Crawlern verbieten, einen bestimmten Pfad (und alle Dateien in diesem Pfad) oder eine spezifische Datei zu erkennen.
Dies wird oft getan, um zu verhindern, dass diese Ressourcen von Suchmaschinen indiziert oder bereitgestellt werden.

Wenn einem Crawler der Zugriff auf Ressourcen erlaubt ist, können Sie [Indexierungsregeln](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives) für diese Ressourcen über `<meta name="robots">` Elemente und {{HTTPHeader("X-Robots-Tag")}} HTTP-Header festlegen.
Suchbezogene Crawler verwenden diese Regeln, um zu bestimmen, wie Ressourcen in den Suchergebnissen indiziert und bereitgestellt werden sollen oder um die Crawl-Rate für bestimmte Ressourcen im Laufe der Zeit anzupassen.

## Siehe auch

- {{HTTPHeader("X-Robots-Tag")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Wie Google die robots.txt Spezifikation interpretiert](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) auf developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) auf Wikipedia
