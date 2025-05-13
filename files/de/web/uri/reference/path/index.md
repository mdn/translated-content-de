---
title: URI-Pfad
short-title: Path
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Der **Pfad** eines URI ist der Abschnitt, der nach der [Authority](/de/docs/Web/URI/Reference/Authority) kommt. Er enthält Daten, die normalerweise in hierarchischer Form organisiert sind, um eine Ressource im Rahmen des [Schemas](/de/docs/Web/URI/Reference/Schemes) und der benannten Authority des URI zu identifizieren.

## Syntax

Ein Pfad besteht aus einer Sequenz von Pfadsegmenten, die durch den Schrägstrich (`/`) getrennt sind:

```plain
http://example.com:80<path>
urn:<path>
```

## Beschreibung

Der Pfad folgt auf die Authority und wird durch das erste Fragezeichen (`?`), das Nummernzeichen (`#`) oder das Ende des URI abgeschlossen. In den folgenden zwei URIs:

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` ist der Pfad der [URN](/de/docs/Web/URI/Reference/Schemes/urn). `/images/animated/ayse.gif` ist der Pfad des `https` URI.

Jeder URI hat eine Pfadkomponente, was bedeutet, dass die Pfade in den folgenden Beispielen ein Schrägstrich (`/`) im ersten URL und eine leere Pfadkomponente im zweiten Beispiel sind:

```url
https://example.com/
https://example.com
```

Browser, einschließlich der [`URL`](/de/docs/Web/API/URL) Web-API, normalisieren leere Pfade zu `/`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
