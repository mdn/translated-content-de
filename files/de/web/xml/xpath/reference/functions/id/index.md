---
title: id
slug: Web/XML/XPath/Reference/Functions/id
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `id` findet Knoten, die den angegebenen IDs entsprechen, und gibt eine Knotenmenge mit den identifizierten Knoten zurück.

## Syntax

```plain
id( expression )
```

### Parameter

- `expression`
  - : Wenn `expression` eine Knotenmenge ist, wird der Zeichenfolgenwert jedes Knotens in der Knotenmenge als individuelle ID behandelt. Die zurückgegebene Knotenmenge sind die Knoten, die diesen IDs entsprechen.
    Wenn `expression` eine Zeichenfolge oder etwas anderes als eine Knotenmenge ist, wird `expression` als durch Leerzeichen getrennte Liste von IDs behandelt. Die zurückgegebene Knotenmenge sind die Knoten, die diesen IDs entsprechen.

### Rückgabewert

Eine Knotenmenge, die den durch die angegebene ID oder IDs identifizierten Knoten oder Knoten entspricht.

## Beschreibung

- Das DTD des XML-Dokuments bestimmt, welches Attribut eine ID ist. Siehe [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath-10/#unique-id)

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-id)

## Gecko-Unterstützung

Teilweise unterstützt.
