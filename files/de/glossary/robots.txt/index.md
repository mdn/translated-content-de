---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 24d8a34da576f86b10923e426f66df48ab6201b9
---

{{GlossarySidebar}}

Eine **robots.txt** ist eine Datei, die normalerweise im Stammverzeichnis einer Website platziert wird (zum Beispiel `https://www.example.com/robots.txt`).
Sie legt fest, ob {{Glossary("crawler", "Crawler")}} den Zugriff auf die gesamte Website oder auf bestimmte Ressourcen einer Website haben oder nicht.
Eine restriktive `robots.txt`-Datei kann den Bandbreitenverbrauch durch Crawler verhindern.

Ein Website-Inhaber kann Crawlern verbieten, einen bestimmten Pfad (und alle Dateien in diesem Pfad) oder eine bestimmte Datei zu erkennen.
Dies wird oft gemacht, um zu verhindern, dass diese Ressourcen von Suchmaschinen indexiert oder ausgespielt werden.

Wenn einem Crawler der Zugriff auf Ressourcen gestattet ist, können Sie [Indexierungsregeln](/de/docs/Web/HTTP/Headers/X-Robots-Tag#directives) für diese Ressourcen über `<meta name="robots">`-Elemente und {{HTTPHeader("X-Robots-Tag")}} HTTP-Header definieren.
Suchbezogene Crawler verwenden diese Regeln, um zu bestimmen, wie Ressourcen in den Suchergebnissen indexiert und angezeigt werden sollen oder um die Crawling-Frequenz für bestimmte Ressourcen im Laufe der Zeit anzupassen.

## Siehe auch

- {{HTTPHeader("X-Robots-Tag")}}
- {{Glossary("Search_engine", "Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Wie Google die robots.txt-Spezifikation interpretiert](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) auf developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) auf Wikipedia
