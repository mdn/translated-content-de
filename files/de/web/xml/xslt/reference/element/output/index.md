---
title: <xsl:output>
slug: Web/XML/XSLT/Reference/Element/output
l10n:
  sourceCommit: 9505c8d1370343fb65affa01657f27751ab59103
---

Das `<xsl:output>`-Element steuert die Eigenschaften des Ausgabedokuments. Um in Netscape korrekt zu funktionieren, muss dieses Element mit dem Attribut `method` verwendet werden. Ab Version 7.0 funktioniert `method="text"` wie erwartet.

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
  - : Gibt den Wert des `encoding`-Attributs im Ausgabedokument an.
- `omit-xml-declaration`
  - : Gibt an, ob eine XML-Deklaration im Output enthalten sein soll oder nicht. Akzeptable Werte sind `yes` oder `no`.
- `standalone` (Nicht unterstützt.)
  - : Wenn vorhanden, gibt an, dass eine eigenständige Deklaration im Ausgabedokument erfolgen soll, und gibt deren Wert an. Akzeptable Werte sind `yes` oder `no`.
- `doctype-public`
  - : Gibt den Wert des `PUBLIC`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des `SYSTEM`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Sektionen geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt sein.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob der Output eingerückt werden soll, um seine hierarchische Struktur anzuzeigen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Oberste Ebene, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obenstehende Hinweise.
