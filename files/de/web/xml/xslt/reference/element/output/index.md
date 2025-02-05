---
title: <xsl:output>
slug: Web/XML/XSLT/Reference/Element/output
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:output>`-Element steuert die Eigenschaften des Ausgabedokuments. Damit es in Netscape korrekt funktioniert, muss dieses Element mit dem Attribut `method` verwendet werden. Ab Version 7.0 funktioniert `method="text"` wie erwartet.

## Syntax

```xml
<xsl:output
  method="xml" | "html" | "text"
  version=STRING
  encoding=STRING
  omit-xml-declaration="yes" | "no"
  standalone="yes" | "no"
  doctype-public=STRING
  doctype-system=STRING
  cdata-section-elements=LIST-OF-NAMES
  indent="yes" | "no"
  media-type=STRING />
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `method`
  - : Gibt das Ausgabeformat an.
- `version`
  - : Gibt den Wert des Versionsattributs der XML- oder HTML-Deklaration im Ausgabedokument an. Dieses Attribut wird nur verwendet, wenn `method="html"` oder `method="xml"` ist.
- `encoding`
  - : Gibt den Wert des Attributs `encoding` im Ausgabedokument an.
- `omit-xml-declaration`
  - : Zeigt an, ob eine XML-Deklaration in die Ausgabe einbezogen werden soll. Erlaubte Werte sind `yes` oder `no`.
- `standalone` (Nicht unterstützt.)
  - : Wenn vorhanden, gibt es an, dass eine Standalone-Deklaration im Ausgabedokument vorkommen soll, und gibt deren Wert an. Erlaubte Werte sind `yes` oder `no`.
- `doctype-public`
  - : Gibt den Wert des Attributs `PUBLIC` der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des Attributs `SYSTEM` der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Abschnitte geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt sein.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob die Ausgabe eingerückt werden soll, um ihre hierarchische Struktur zu zeigen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obenstehende Kommentare.
