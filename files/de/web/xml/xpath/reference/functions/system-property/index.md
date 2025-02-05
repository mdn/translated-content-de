---
title: system-property
slug: Web/XML/XPath/Reference/Functions/system-property
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `system-property` gibt ein Objekt zurück, das die angegebene System-Eigenschaft repräsentiert.

## Syntax

```plain
system-property(name)
```

### Parameter

- `name` (optional)
  - : Der Name der System-Eigenschaft. Das Argument muss in eine Zeichenkette ausgewertet werden, die ein QName ist. Der QName wird unter Verwendung der im Gültigkeitsbereich des Ausdrucks definierten Namespace-Deklarationen in einen Namen erweitert. Die Funktion `system-property` gibt ein Objekt zurück, welches den Wert der durch den Namen identifizierten System-Eigenschaft repräsentiert. Falls eine solche System-Eigenschaft nicht existiert, sollte ein leerer String zurückgegeben werden.

### Rückgabewert

Ein Objekt, das die angegebene System-Eigenschaft repräsentiert.

## Beschreibung

- xsl:version, eine Zahl, die die Version von XSLT angibt, die vom Prozessor implementiert wird; für XSLT-Prozessoren, die die Version von XSLT gemäß diesem Dokument implementieren, ist dies die Zahl 1.0.
- xsl:vendor, eine Zeichenkette, die den Anbieter des XSLT-Prozessors identifiziert.
- xsl:vendor-url, eine Zeichenkette, die eine URL enthält, die den Anbieter des XSLT-Prozessors identifiziert; typischerweise ist dies die Startseite (Homepage) der Website des Anbieters.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-system-property)

## Gecko-Unterstützung

Unterstützt.
