---
title: URI-Abfrage
short-title: Query
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: 6f149dd37e04fa257d6472e7ee1c5ee5545a405b
---

Die **Abfrage** eines URI ist der Abschnitt, der nach dem [Pfad](/de/docs/Web/URI/Reference/Path) kommt. Sie enthält nicht-hierarchische Daten, um eine Ressource im Rahmen des Schemas und der Namensautorität des URI zu identifizieren, zusammen mit Daten im Pfadbestandteil.

## Syntax

```url
?query
```

- `query`
  - : Eine Folge beliebiger Zeichen, mit Ausnahme des `#`-Zeichens, das den [Fragment](/de/docs/Web/URI/Reference/Fragment) einleitet. Das genaue Format der Abfrage wird durch die Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` ist der Abfragebestandteil, der Parameter für den Webserver zur Verarbeitung enthält. Die spezifischen Parameter im Beispiel sind eine Liste von Schlüssel/Wert-Paaren, die durch das `&`-Symbol getrennt sind. Webserver können die Parameter verwenden, um Antworten zu modifizieren, wie beispielsweise Filterung, Suche oder Sortierung der Ergebnisse, obwohl dies implementierungsabhängig ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
