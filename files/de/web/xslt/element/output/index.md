---
title: <xsl:output>
slug: Web/XSLT/Element/output
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:output>`-Element steuert die Merkmale des Ausgabedokuments. Um in Netscape korrekt zu funktionieren, muss dieses Element mit dem `method`-Attribut verwendet werden. Seit Version 7.0 funktioniert `method="text"` wie erwartet.

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
  - : Legt den Wert des `encoding`-Attributs im Ausgabedokument fest.
- `omit-xml-declaration`
  - : Gibt an, ob eine XML-Deklaration in die Ausgabe eingeschlossen werden soll oder nicht. Erlaubte Werte sind `yes` oder `no`.
- `standalone` (Nicht unterstützt.)
  - : Wenn vorhanden, gibt an, dass eine Standalone-Deklaration im Ausgabedokument erfolgen soll und gibt deren Wert an. Erlaubte Werte sind `yes` oder `no`.
- `doctype-public`
  - : Gibt den Wert des `PUBLIC`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des `SYSTEM`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Abschnitte geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt sein.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob die Ausgabe eingerückt werden soll, um ihre hierarchische Struktur anzuzeigen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Top-Level, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe obige Anmerkungen.
