---
title: URI-Abfrage
short-title: Query
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

Die **Abfrage** einer URI ist der Abschnitt, der nach dem [Pfad](/de/docs/Web/URI/Reference/Path) kommt. Sie enthält nicht-hierarchische Daten, um eine Ressource im Rahmen des [Schemas](/de/docs/Web/URI/Reference/Schemes) der URI und der Namensautorität zusammen mit Daten im Pfadkomponenten zu identifizieren.

## Syntax

```url
?query
```

- `fragment`
  - : Eine Folge von beliebigen Zeichen, außer dem `#` Zeichen, das den [Fragment](/de/docs/Web/URI/Reference/Fragment) beginnt. Das genaue Format der Abfrage wird durch die Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` ist der Abfragekomponenten, der Parameter für den Webserver enthält, die verarbeitet werden sollen. Die spezifischen Parameter im Beispiel sind eine Liste von Schlüssel/Wert-Paaren, die durch das Zeichen `&` getrennt sind. Webserver können die Parameter verwenden, um Antworten zu ändern, wie z. B. Filterungen, Suchen oder Sortieren von Ergebnissen anzuwenden, obwohl dies implementierungsspezifisch ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
