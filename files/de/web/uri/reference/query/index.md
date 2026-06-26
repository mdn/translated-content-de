---
title: URI-Anfrage
short-title: Query
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Die **Anfrage** eines URI ist der Abschnitt, der sich nach dem [Pfad](/de/docs/Web/URI/Reference/Path) befindet. Sie enthält nicht-hierarchische Daten, um eine Ressource im Rahmen des Schemas des URI und der Namensautorität zusammen mit den Daten im Pfadkomponenten zu identifizieren.

## Syntax

```url
?query
```

- `query`
  - : Eine Folge von beliebigen Zeichen, mit Ausnahme des `#`-Zeichens, das den [Fragment](/de/docs/Web/URI/Reference/Fragment) startet. Das genaue Format der Anfrage wird durch die Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` ist die Anfragekomponente, die Parameter für den Webserver enthält, die verarbeitet werden sollen. Die spezifischen Parameter im Beispiel sind eine Liste von Schlüssel/Wert-Paaren, die durch das `&`-Symbol getrennt sind. Webserver können die Parameter verwenden, um Antworten zu modifizieren, wie zum Beispiel Filterung, Suche oder Sortierung von Ergebnissen, obwohl dies implementierungsspezifisch ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
