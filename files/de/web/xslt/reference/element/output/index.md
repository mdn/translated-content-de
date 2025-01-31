---
title: <xsl:output>
slug: Web/XSLT/Reference/Element/output
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:output>`-Element steuert die Eigenschaften des Ausgabedokuments. Damit es in Netscape korrekt funktioniert, muss dieses Element zusammen mit dem `method`-Attribut verwendet werden. Ab 7.0 funktioniert `method="text"` wie erwartet.

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
  - : Spezifiziert das Ausgabeformat.
- `version`
  - : Gibt den Wert des Versionsattributs der XML- oder HTML-Deklaration im Ausgabedokument an. Dieses Attribut wird nur verwendet, wenn `method="html"` oder `method="xml"` ist.
- `encoding`
  - : Gibt den Wert des `encoding`-Attributs im Ausgabedokument an.
- `omit-xml-declaration`
  - : Gibt an, ob eine XML-Deklaration in die Ausgabe aufgenommen werden soll oder nicht. Akzeptable Werte sind `yes` oder `no`.
- `standalone` (Nicht unterstützt.)
  - : Wenn vorhanden, zeigt es an, dass eine Standalone-Deklaration im Ausgabedokument erfolgen soll und gibt deren Wert an. Akzeptable Werte sind `yes` oder `no`.
- `doctype-public`
  - : Gibt den Wert des `PUBLIC`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `doctype-system`
  - : Gibt den Wert des `SYSTEM`-Attributs der `DOCTYPE`-Deklaration im Ausgabedokument an.
- `cdata-section-elements`
  - : Listet Elemente auf, deren Textinhalte als `CDATA`-Sektionen geschrieben werden sollen. Elemente sollten durch Leerzeichen getrennt werden.
- `indent` (Nicht unterstützt.)
  - : Gibt an, ob die Ausgabe eingerückt werden soll, um ihre hierarchische Struktur anzuzeigen.
- `media-type` (Nicht unterstützt.)
  - : Gibt den MIME-Typ des Ausgabedokuments an.

### Typ

Oberste Ebene, muss das untergeordnete `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 16.

## Gecko-Unterstützung

Partielle Unterstützung. Siehe Kommentare oben.
