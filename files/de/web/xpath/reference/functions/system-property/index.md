---
title: system-property
slug: Web/XPath/Reference/Functions/system-property
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `system-property` Funktion gibt ein Objekt zurück, das die angegebene System-Eigenschaft repräsentiert.

## Syntax

```plain
system-property(name)
```

### Parameter

- `name` (optional)
  - : Der Name der System-Eigenschaft. Das Argument muss zu einem String ausgewertet werden, der ein QName ist. Der QName wird unter Verwendung der im Ausdruck gültigen Namensraumdeklarationen in einen Namen umgewandelt. Die `system-property` Funktion gibt ein Objekt zurück, das den Wert der durch den Namen identifizierten System-Eigenschaft repräsentiert. Wenn keine solche System-Eigenschaft existiert, sollte der leere String zurückgegeben werden.

### Rückgabewert

Ein Objekt, das die angegebene System-Eigenschaft repräsentiert.

## Beschreibung

- `xsl:version`, eine Zahl, die die vom Prozessor implementierte Version von XSLT angibt; für XSLT-Prozessoren, die die in diesem Dokument spezifizierte Version von XSLT implementieren, ist dies die Zahl 1.0
- `xsl:vendor`, ein String, der den Anbieter des XSLT-Prozessors identifiziert
- `xsl:vendor-url`, ein String, der eine URL enthält, die den Anbieter des XSLT-Prozessors identifiziert; typisch ist dies die Homepage der Website des Anbieters.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-system-property)

## Gecko-Unterstützung

Unterstützt.
