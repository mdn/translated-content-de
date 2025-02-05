---
title: <xsl:value-of>
slug: Web/XML/XSLT/Reference/Element/value-of
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:value-of>`-Element wertet einen XPath-Ausdruck aus, wandelt ihn in einen String um und schreibt diesen String in den Ergebnisbaum.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Erforderliche Attribute

- `select`
  - : Spezifiziert den XPath-Ausdruck, der ausgewertet und in den Ausgabebaum geschrieben werden soll.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Ergebnis der Transformation – im Folgenden "Ausgabe" genannt – nicht, daher ist dieses Attribut in diesem Kontext im Wesentlichen irrelevant. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z. B. `&#160` für `&nbsp`.)
  - : Gibt an, ob spezielle Zeichen maskiert werden, wenn sie in die Ausgabe geschrieben werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn beispielsweise `yes` eingestellt ist, wird das Zeichen > als `>` ausgegeben, nicht als `&gt`.

### Typ

Anweisung, erscheint zusammen mit einer Vorlage (`template`).

## Spezifikationen

XSLT, Abschnitt 7.6.1.

## Gecko-Unterstützung

Unterstützt mit Ausnahme der oben genannten Hinweise.
