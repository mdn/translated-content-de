---
title: <xsl:output>
slug: Web/XSLT/Element/output
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:output>`-Element steuert die Eigenschaften des Ausgabedokuments. Um in Netscape korrekt zu funktionieren, muss dieses Element mit dem `method`-Attribut verwendet werden. Ab Version 7.0 funktioniert `method="text"` wie erwartet.

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
  - : Gibt den Wert des Version-Attributs der XML- oder HTML-Deklaration im Ausgabedokument an. Dieses Attribut wird nur verwendet, wenn `method="html"` oder `method="xml"` ist.
- `encoding`
  - : Gibt den Wert des `encoding`-Attributs im Ausgabedokument an.
- `omit-xml-declaration`
  - : Gibt an, ob eine XML-Deklaration im Ausgangsdokument enthalten sein soll oder nicht. Akzeptable Werte sind "`yes`" oder "`no`".
- `standalone` (Nicht unterstützt.)
  - : Falls vorhanden, gibt an, dass eine Standalone-Deklaration im Ausgabedokument erfolgen soll und welcher Wert sie hat. Akzeptable Werte sind "yes" oder "no".
- `doctype-public`
  - : Gibt den Wert des `PUBLIC`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des `SYSTEM`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Abschnitte geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt werden.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob die Ausgabe eingerückt werden soll, um ihre hierarchische Struktur anzuzeigen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Beim Top-Level muss es das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Gecko-Unterstützung

Teilweise Unterstützung. Siehe Kommentare oben.
