---
title: <xsl:value-of>
slug: Web/XSLT/Reference/Element/value-of
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:value-of>`-Element wertet einen XPath-Ausdruck aus, wandelt ihn in einen String um und schreibt diesen String in den Ergebnisbaum.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Erforderliche Attribute

- `select`
  - : Gibt den XPath-Ausdruck an, der ausgewertet und in den Ausgabebaum geschrieben werden soll.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Ergebnis der Transformation nicht - der "Output" unten - daher ist dieses Attribut im Kontext im Grunde irrelevant. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z.B. `&#160` für `&nbsp`)
  - : Gibt an, ob Sonderzeichen beim Schreiben in die Ausgabe maskiert werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird zum Beispiel das Zeichen > als `>` ausgegeben, nicht als `&gt`.

### Typ

Instruktion, erscheint mit einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.6.1.

## Gecko-Unterstützung

Unterstützt, außer wie oben beschrieben.
