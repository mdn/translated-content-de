---
title: id
slug: Web/XPath/Reference/Functions/id
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `id`-Funktion findet Knoten, die den angegebenen IDs entsprechen, und gibt eine Knotenmenge zurück, die die identifizierten Knoten enthält.

## Syntax

```plain
id( expression )
```

### Parameter

- `expression`
  - : Wenn `expression` eine Knotenmenge ist, wird der String-Wert jedes Knotens in der Knotenmenge als individuelle ID behandelt. Die zurückgegebene Knotenmenge sind die Knoten, die diesen IDs entsprechen.
    Wenn `expression` ein String ist oder etwas anderes als eine Knotenmenge, dann wird `expression` als durch Leerzeichen getrennte Liste von IDs behandelt. Die zurückgegebene Knotenmenge sind die Knoten, die diesen IDs entsprechen.

### Rückgabewert

Eine Knotenmenge, die den oder die durch die gegebene ID oder IDs identifizierten Knoten enthält.

## Beschreibung

- Die DTD des XML-Dokuments bestimmt, welches Attribut eine ID ist. Siehe [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath/#unique-id)

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-id)

## Gecko-Unterstützung

Teilweise unterstützt.
