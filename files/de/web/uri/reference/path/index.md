---
title: URI-Pfad
short-title: Path
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

Der **Pfad** einer URI ist der Abschnitt, der nach der [Authority](/de/docs/Web/URI/Reference/Authority) kommt. Er enthält Daten, die in der Regel in hierarchischer Form organisiert sind, um eine Ressource innerhalb des Rahmens des URI-[Schemas](/de/docs/Web/URI/Reference/Schemes) und der benannten Authority zu identifizieren.

## Syntax

```url
http://example.com:80<path>
urn:<path>
```

Der Pfad kann fast alle Zeichen enthalten, außer `?` und `#` (die jeweils die [Query](/de/docs/Web/URI/Reference/Path) und das [Fragment](/de/docs/Web/URI/Reference/Fragment) einleiten), sowie andere vom URI-Schema reservierte Zeichen. Einige Schemata (bekannt als _hierarchische Schemata_) analysieren den Pfad weiter als eine Sequenz von durch Schrägstriche (`/`) getrennten Segmenten; andere behandeln ihn als eine einzelne undurchsichtige Zeichenkette.

## Beschreibung

Der Pfad folgt der Authority und wird durch das erste Fragezeichen (`?`), das Nummernzeichen (`#`) oder das Ende der URI abgeschlossen. In den folgenden zwei URIs:

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

ist `nbn:de:bvb:19-epub-5359-3` der Pfad der [URN](/de/docs/Web/URI/Reference/Schemes/urn). `/images/animated/ayse.gif` ist der Pfad der `https`-URI.

Jede URI hat einen Pfadbestandteil, was bedeutet, dass die Pfade in den folgenden Beispielen ein Schrägstrich (`/`) in der ersten URL und ein leerer Pfadbestandteil in der zweiten sind:

```url
https://example.com/
https://example.com
```

Browser, einschließlich der [`URL`](/de/docs/Web/API/URL) Web-API, normalisieren leere Pfade zu `/`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
