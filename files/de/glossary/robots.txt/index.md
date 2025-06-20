---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

{{GlossarySidebar}}

Eine **robots.txt** ist eine Datei, die normalerweise im Stammverzeichnis einer Website abgelegt wird (zum Beispiel, `https://www.example.com/robots.txt`).
Sie gibt an, ob {{Glossary("crawler", "Crawler")}} Zugriff auf eine gesamte Website oder auf bestimmte Ressourcen haben dürfen.
Eine restriktive `robots.txt`-Datei kann den Bandbreitenverbrauch durch Crawler verhindern.

Ein Seiteninhaber kann Crawler daran hindern, einen bestimmten Pfad (und alle Dateien in diesem Pfad) oder eine bestimmte Datei zu erkennen.
Dies wird häufig getan, um zu verhindern, dass diese Ressourcen von Suchmaschinen indexiert oder bereitgestellt werden.

Wenn einem Crawler der Zugriff auf Ressourcen gestattet ist, können Sie [Indexierungsregeln](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives) für diese Ressourcen über [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Elemente (häufig als "Robots-Tag" bezeichnet) und {{HTTPHeader("X-Robots-Tag")}} HTTP-Header definieren.
Suchbezogene Crawler nutzen diese Regeln, um zu bestimmen, wie Ressourcen in Suchergebnissen indexiert und bereitgestellt werden sollen, oder um die Crawl-Rate für bestimmte Ressourcen im Laufe der Zeit anzupassen.

## Siehe auch

- [Sicherheitsleitfaden zur robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt)
- {{Glossary("Search_engine", "Glossarbegriff Suchmaschine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Wie Google die robots.txt-Spezifikation interpretiert](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) auf developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) auf Wikipedia
