---
title: system-property
slug: Web/XPath/Functions/system-property
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Funktion `system-property` gibt ein Objekt zurück, das die angegebene System-Eigenschaft repräsentiert.

## Syntax

```plain
system-property(name)
```

### Parameter

- `name` (optional)
  - : Der Name der System-Eigenschaft. Das Argument muss zu einem String ausgewertet werden, der ein QName ist. Der QName wird mithilfe der im Gültigkeitsbereich der Ausdrucks bestehenden Namensraum-Deklarationen in einen Namen umgewandelt. Die Funktion system-property gibt ein Objekt zurück, das den Wert der durch den Namen identifizierten System-Eigenschaft repräsentiert. Wenn es keine solche System-Eigenschaft gibt, sollte der leere String zurückgegeben werden.

### Rückgabewert

Ein Objekt, das die angegebene System-Eigenschaft darstellt.

## Beschreibung

- xsl:version, eine Zahl, die die von dem Prozessor implementierte Version von XSLT angibt; für XSLT-Prozessoren, die die in diesem Dokument spezifizierte Version von XSLT implementieren, ist dies die Zahl 1.0
- xsl:vendor, ein String, der den Anbieter des XSLT-Prozessors identifiziert
- xsl:vendor-url, ein String, der eine URL enthält, die den Anbieter des XSLT-Prozessors identifiziert; typischerweise ist dies die Startseite (Home Page) der Website des Anbieters.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-system-property)

## Gecko-Unterstützung

Unterstützt.
