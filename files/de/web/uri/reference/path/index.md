---
title: URI-Pfad
short-title: Path
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der **Pfad** eines URI ist der Abschnitt, der nach der [Authority](/de/docs/Web/URI/Reference/Authority) kommt. Er enthält Daten, die normalerweise in hierarchischer Form organisiert sind, um innerhalb des Rahmens des URI-[Schemas](/de/docs/Web/URI/Reference/Schemes) und der benennenden Authority eine Ressource zu identifizieren.

## Syntax

```url
http://example.com:80<path>
urn:<path>
```

Der Pfad kann fast alle Zeichen enthalten, außer `?` und `#` (die jeweils die [Abfrage](/de/docs/Web/URI/Reference/Query) und das [Fragment](/de/docs/Web/URI/Reference/Fragment) einleiten) sowie andere Zeichen, die vom URI-Schema reserviert sind. Einige Schemata (bekannt als _hierarchische Schemata_) interpretieren den Pfad weiter als eine Abfolge von Segmenten, die durch Schrägstrich (`/`) Zeichen getrennt werden; andere behandeln ihn als eine einzelne undurchsichtige Zeichenfolge.

## Beschreibung

Der Pfad folgt der Authority und wird durch das erste Fragezeichen (`?`), das Nummernzeichen (`#`) oder das Ende des URI abgeschlossen. In den folgenden zwei URIs:

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` ist der Pfad des [URN](/de/docs/Web/URI/Reference/Schemes/urn). `/images/animated/ayse.gif` ist der Pfad des `https`-URI.

Jeder URI hat eine Pfadkomponente, was bedeutet, dass die Pfade in den folgenden Beispielen ein Schrägstrich (`/`) in der ersten URL und eine leere Pfadkomponente in der zweiten sind:

```url
https://example.com/
https://example.com
```

Browser, einschließlich der [`URL`](/de/docs/Web/API/URL) Web-API, normalisieren leere Pfade zu `/`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
