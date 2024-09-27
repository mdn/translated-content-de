---
title: <xsl:output>
slug: Web/XSLT/Element/output
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:output>`-Element kontrolliert die Eigenschaften des Ausgabedokuments. Damit es in Netscape korrekt funktioniert, muss dieses Element mit dem `method`-Attribut verwendet werden. Ab Version 7.0 funktioniert `method="text"` wie erwartet.

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
  - : Gibt den Wert des `version`-Attributs der XML- oder HTML-Deklaration im Ausgabedokument an. Dieses Attribut wird nur verwendet, wenn `method="html"` oder `method="xml"` ist.
- `encoding`
  - : Gibt den Wert des `encoding`-Attributs im Ausgabedokument an.
- `omit-xml-declaration`
  - : Gibt an, ob eine XML-Deklaration im Output enthalten sein soll oder nicht. Akzeptable Werte sind `yes` oder `no`.
- `standalone` (Nicht unterstützt.)
  - : Wenn vorhanden, zeigt dies an, dass eine eigenständige Deklaration im Ausgabedokument erfolgen sollte und gibt deren Wert an. Akzeptable Werte sind `yes` oder `no`.
- `doctype-public`
  - : Gibt den Wert des `PUBLIC`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des `SYSTEM`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Abschnitte geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt sein.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob der Output eingerückt werden soll, um seine hierarchische Struktur darzustellen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Top-Level, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Unterstützung in Gecko

Teilweise Unterstützung. Siehe Anmerkungen oben.
