---
title: system-property
slug: Web/XML/XPath/Reference/Functions/system-property
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `system-property` gibt ein Objekt zurück, das die angegebene System-Eigenschaft repräsentiert.

## Syntax

```plain
system-property(name)
```

### Parameter

- `name` (optional)
  - : Der Name der System-Eigenschaft. Das Argument muss zu einem String ausgewertet werden, der ein QName ist. Der QName wird unter Verwendung der Namensraum-Deklarationen im Gültigkeitsbereich des Ausdrucks in einen Namen umgewandelt. Die Funktion `system-property` gibt ein Objekt zurück, das den Wert der durch den Namen identifizierten System-Eigenschaft repräsentiert. Wenn es keine solche System-Eigenschaft gibt, sollte der leere String zurückgegeben werden.

### Rückgabewert

Ein Objekt, das die angegebene System-Eigenschaft darstellt.

## Beschreibung

- `xsl:version`, eine Zahl, die die Version von XSLT angibt, die vom Prozessor implementiert wurde; für XSLT-Prozessoren, die die in diesem Dokument spezifizierte Version von XSLT implementieren, ist dies die Zahl 1.0.
- `xsl:vendor`, ein String, der den Anbieter des XSLT-Prozessors identifiziert.
- `xsl:vendor-url`, ein String, der eine URL enthält, die den Anbieter des XSLT-Prozessors identifiziert; typischerweise ist dies die Startseite (Home Page) auf der Website des Anbieters.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-system-property)

## Gecko-Unterstützung

Unterstützt.
