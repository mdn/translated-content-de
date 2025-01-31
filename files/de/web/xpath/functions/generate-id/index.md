---
title: generate-id
slug: Web/XPath/Functions/generate-id
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `generate-id`-Funktion generiert eine eindeutige ID für den ersten Knoten in einem gegebenen Knotensatz und gibt eine Zeichenkette zurück, die diese ID enthält.

## Syntax

```plain
generate-id( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Eine ID wird für den ersten Knoten in diesem Knotensatz generiert. Wenn weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette, die die generierte ID enthält.

## Beschreibung

- Dieselbe ID muss jedes Mal für denselben Knoten im aktuellen Dokument der aktuellen Transformation generiert werden.
- Die generierte ID darf in nachfolgenden Transformationen nicht dieselbe sein.

Diese Funktion ist eine XSLT-spezifische Ergänzung zu XPath. Sie ist kein Teil der grundlegenden XPath-Funktionsbibliothek.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko-Unterstützung

Unterstützt.
