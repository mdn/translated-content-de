---
title: URI-Pfad
short-title: Path
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

Der **Pfad** eines URI ist der Abschnitt, der nach der [Autorität](/de/docs/Web/URI/Reference/Authority) kommt.
Er enthält Daten, die normalerweise in hierarchischer Form organisiert sind, um eine Ressource im Rahmen des [Schemas](/de/docs/Web/URI/Reference/Schemes) des URI und der namensgebenden Autorität zu identifizieren.

## Syntax

```url
http://example.com:80<path>
urn:<path>
```

Der Pfad kann fast alle Zeichen enthalten, außer `?` und `#` (die jeweils den [Abfrage](/de/docs/Web/URI/Reference/Query)- und den [Fragment](/de/docs/Web/URI/Reference/Fragment)-Abschnitt einleiten), sowie andere vom URI-Schema reservierte Zeichen. Einige Schemata (bekannt als _hierarchische Schemata_) zerlegen den Pfad weiter in eine Sequenz von Segmenten, die durch Schrägstrich-Zeichen (`/`) getrennt sind; andere behandeln ihn als einzelnen undurchsichtigen String.

## Beschreibung

Der Pfad folgt der Autorität und wird durch das erste Fragezeichen (`?`), das Nummernzeichen (`#`) oder das Ende des URI beendet.
In den folgenden zwei URIs:

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

ist `nbn:de:bvb:19-epub-5359-3` der Pfad der [URN](/de/docs/Web/URI/Reference/Schemes/urn). `/images/animated/ayse.gif` ist der Pfad des `https` URI.

Jeder URI hat eine Pfadkomponente, was bedeutet, dass die Pfade in den folgenden Beispielen ein Schrägstrich (`/`) im ersten URL und eine leere Pfadkomponente im zweiten darstellen:

```url
https://example.com/
https://example.com
```

Browser, einschließlich der [`URL`](/de/docs/Web/API/URL) Web-API, normalisieren leere Pfade zu `/`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
