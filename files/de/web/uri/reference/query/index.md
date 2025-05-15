---
title: URI-Abfrage
short-title: Query
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Die **Abfrage** eines URI ist der Abschnitt, der nach dem [Pfad](/de/docs/Web/URI/Reference/Path) kommt. Sie enthält nicht-hierarchische Daten, um eine Ressource im Rahmen des URI-[Schemas](/de/docs/Web/URI/Reference/Schemes) und der Namensautorität zu identifizieren, zusammen mit Daten im Pfad-Komponenten.

## Syntax

Die Abfrage wird durch das erste Fragezeichen (`?`) Zeichen angezeigt und durch ein Nummernzeichen (`#`) oder das Ende des URI beendet:

```plain
https://example.com/collection?<query>
```

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` ist die Abfragekomponente, die Parameter für den Webserver zur Verarbeitung enthält. Die spezifischen Parameter im Beispiel sind eine Liste von Schlüssel/Wert-Paaren, die durch das `&` Zeichen getrennt sind. Webserver können die Parameter verwenden, um Antworten zu modifizieren, wie zum Beispiel das Anwenden von Filterung, Suche oder Sortierung der Ergebnisse, obwohl dies implementierungsspezifisch ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
