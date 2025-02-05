---
title: id
slug: Web/XML/XPath/Reference/Functions/id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `id` findet Knoten, die den angegebenen IDs entsprechen, und gibt eine Knotenmenge zurück, die die identifizierten Knoten enthält.

## Syntax

```plain
id( expression )
```

### Parameter

- `expression`
  - : Wenn `expression` eine Knotenmenge ist, wird der Zeichenfolgenwert jedes Knotens in der Knotenmenge als individuelle ID behandelt. Die zurückgegebene Knotenmenge enthält die Knoten, die diesen IDs entsprechen.
    Wenn `expression` eine Zeichenkette oder etwas anderes als eine Knotenmenge ist, wird `expression` als eine durch Leerzeichen getrennte Liste von IDs behandelt. Die zurückgegebene Knotenmenge enthält die Knoten, die diesen IDs entsprechen.

### Rückgabewert

Eine Knotenmenge, die die durch die angegebene ID oder IDs identifizierten Knoten enthält.

## Beschreibung

- Die DTD des XML-Dokuments bestimmt, welches Attribut eine ID ist. Siehe [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath/#unique-id)

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-id)

## Gecko-Unterstützung

Teilweise unterstützt.
