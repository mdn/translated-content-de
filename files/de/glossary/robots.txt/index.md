---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **robots.txt** ist eine Datei, die normalerweise im Stammverzeichnis einer Website platziert wird (zum Beispiel `https://www.example.com/robots.txt`).
Sie gibt an, ob {{Glossary("crawler", "Crawlers")}} Zugriff auf eine gesamte Website oder auf bestimmte Ressourcen haben dürfen oder nicht.
Eine restriktive `robots.txt`-Datei kann den Bandbreitenverbrauch durch Crawlers verhindern.

Ein Website-Besitzer kann Crawlers verbieten, einen bestimmten Pfad (und alle Dateien in diesem Pfad) oder eine bestimmte Datei zu erfassen.
Dies wird oft getan, um zu verhindern, dass diese Ressourcen von Suchmaschinen indexiert oder bereitgestellt werden.

Wenn ein Crawler das Zugreifen auf Ressourcen erlaubt ist, können Sie [Indexierungsregeln](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives) für diese Ressourcen über [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elemente (allgemein als "robots-Tag" bezeichnet) und {{HTTPHeader("X-Robots-Tag")}} HTTP-Header definieren.
Suchbezogene Crawler verwenden diese Regeln, um zu bestimmen, wie Ressourcen in Suchergebnissen indexiert und bereitgestellt werden sollen, oder um die Crawling-Rate für bestimmte Ressourcen im Laufe der Zeit anzupassen.

## Siehe auch

- [robots.txt configuration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{Glossary("Search_engine", "Suchmaschine")}} Glossarbegriff
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Wie Google die robots.txt-Spezifikation interpretiert](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) auf developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) auf Wikipedia
