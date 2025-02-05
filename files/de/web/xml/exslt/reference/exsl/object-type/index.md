---
title: exsl:object-type()
slug: Web/XML/EXSLT/Reference/exsl/object-type
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:object-type()` gibt einen String zurück, der den Typ des angegebenen Objekts angibt.

> [!NOTE]
> Die meisten [XSLT](/de/docs/Web/XML/XSLT)-Objekttypen können sicher ineinander umgewandelt werden; bestimmte Umwandlungen können jedoch Fehlerbedingungen hervorrufen. Insbesondere wird das Behandeln eines Objekts, das kein `node-set` ist, als `node-set` dies tun. Diese Funktion ermöglicht es den Autoren benannter Templates und Erweiterungsfunktionen, flexibel Werte für Parameter bereitzustellen.

## Syntax

```plain
exsl:object-type(object)
```

### Parameter

- `object`
  - : Das Objekt, dessen Typ zurückgegeben werden soll.

### Rückgabewert

Der Typ des Objekts, der einer der folgenden sein wird:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Spezifikationen

[EXSLT - EXSL:OBJECT-TYPE](https://exslt.github.io/exsl/functions/object-type/index.html)
