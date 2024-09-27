---
title: exsl:object-type()
slug: Web/EXSLT/exsl/object-type
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`exsl:object-type()` gibt einen String zurück, der den Typ des angegebenen Objekts angibt.

> [!NOTE]
> Die meisten [XSLT](/de/docs/Web/XSLT)-Objekttypen können sicher ineinander umgewandelt werden; jedoch verursachen bestimmte Umwandlungen Fehlerbedingungen. Insbesondere die Behandlung von etwas, das kein Knoten-Set ist, als Knoten-Set wird dies tun. Diese Funktion ermöglicht es Autoren benannter Vorlagen und Erweiterungsfunktionen, die Flexibilität bei Parameterwerten leicht zu gewährleisten.

## Syntax

```plain
exsl:object-type(object)
```

### Parameter

- `object`
  - : Das Objekt, dessen Typ zurückgegeben werden soll.

### Rückgabewert

Der Typ des Objekts, das einer der folgenden sein wird:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Spezifikationen

[EXSLT - EXSL:OBJECT-TYPE](https://exslt.github.io/exsl/functions/object-type/index.html)
