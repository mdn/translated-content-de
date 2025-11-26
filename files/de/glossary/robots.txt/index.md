---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

Eine **robots.txt** ist eine Datei, die normalerweise im Stammverzeichnis einer Website platziert wird (zum Beispiel `https://www.example.com/robots.txt`).
Sie legt fest, ob {{Glossary("crawler", "Crawler")}} Zugriff auf eine gesamte Website oder auf bestimmte Ressourcen haben dürfen.
Eine restriktive `robots.txt`-Datei kann verhindern, dass Crawler Bandbreite verbrauchen.

Ein Website-Besitzer kann Crawlern verbieten, einen bestimmten Pfad (und alle Dateien in diesem Pfad) oder eine bestimmte Datei zu erkennen.
Dies wird oft getan, um zu verhindern, dass diese Ressourcen von Suchmaschinen indexiert oder bereitgestellt werden.

Wenn einem Crawler der Zugriff auf Ressourcen gestattet ist, können Sie [Indexierungsregeln](/de/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#directives) für diese Ressourcen mittels [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen (häufig als "robots-Tag" bezeichnet) und {{HTTPHeader("X-Robots-Tag")}} HTTP-Headern festlegen.
Suchbezogene Crawler verwenden diese Regeln, um zu bestimmen, wie Ressourcen in Suchergebnissen indiziert und bereitgestellt werden oder um die Crawling-Rate für bestimmte Ressourcen im Laufe der Zeit anzupassen.

## Siehe auch

- [robots.txt-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/Robots_txt) Sicherheitsleitfaden
- {{Glossary("Search_engine", "Suchmaschine")}} Glossarbegriff
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Wie Google die robots.txt-Spezifikation interpretiert](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) auf developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) auf Wikipedia
