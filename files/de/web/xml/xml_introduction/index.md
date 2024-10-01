---
title: XML Einführung
slug: Web/XML/XML_introduction
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

XML (Extensible Markup Language) ist eine Auszeichnungssprache ähnlich wie {{Glossary("HTML", "HTML")}}, jedoch ohne vordefinierte Tags zur Verwendung. Stattdessen definieren Sie Ihre eigenen Tags, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Dies ist eine leistungsstarke Methode, um Daten in einem Format zu speichern, das gespeichert, durchsucht und geteilt werden kann. Am wichtigsten ist, dass, da das grundlegende Format von XML standardisiert ist, wenn Sie XML über Systeme oder Plattformen hinweg freigeben oder übertragen, entweder lokal oder über das Internet, der Empfänger die Daten aufgrund der standardisierten XML-Syntax dennoch analysieren kann.

Es gibt viele Sprachen, die auf XML basieren, einschließlich {{Glossary("XHTML", "XHTML")}}, [MathML](/de/docs/Web/MathML), [SVG](/de/docs/Web/SVG), {{Glossary("RSS", "RSS")}} und {{Glossary("RDF", "RDF")}}. Sie können auch Ihre eigene definieren.

## Struktur eines XML-Dokuments

Die gesamte Struktur von XML und XML-basierten Sprachen basiert auf {{Glossary("tag", "Tags")}}.

### XML-Deklaration

Die XML-Deklaration ist kein Tag. Sie wird für die Übertragung der Metadaten eines Dokuments verwendet.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Attribute

- `version`
  - : Verwendete Version von XML in diesem Dokument.
- `encoding`
  - : Verwendete Kodierung in diesem Dokument.

### Kommentare

```html
<!-- Comment -->
```

## "Korrektes" XML (gültig und wohlgeformt)

### Korrekte Designregeln

Damit ein XML-Dokument korrekt ist, müssen die folgenden Bedingungen erfüllt sein:

- Das Dokument muss wohlgeformt sein.
- Das Dokument muss allen XML-Syntaxregeln entsprechen.
- Das Dokument muss semantischen Regeln entsprechen, die in der Regel in einem XML-Schema oder einer DTD (**{{Glossary("Doctype", "Document Type Definition")}})** festgelegt sind.

### Beispiel

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

Nun sehen wir uns eine korrigierte Version desselben Dokuments an:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

Ein Dokument, das einen undefinierten Tag enthält, ist ungültig. Zum Beispiel, wenn wir den `<warning>` Tag nie definiert hätten, wäre das Dokument oben nicht gültig.

Die meisten Browser bieten einen Debugger, der schlecht geformte XML-Dokumente identifizieren kann.

## Zeichenreferenzen

Wie HTML bietet auch XML {{Glossary("character_reference", "Zeichenreferenzen")}} für die Bezugnahme auf einige spezielle reservierte Zeichen (wie ein Größer-als-Zeichen, das für Tags verwendet wird). Es gibt fünf dieser Zeichen, die Sie kennen sollten:

| Entity     | Character | Beschreibung                                     |
| ---------- | --------- | ------------------------------------------------ |
| &amp;lt;   | <         | Kleiner-als-Zeichen                              |
| &amp;gt;   | >         | Größer-als-Zeichen                               |
| &amp;amp;  | &         | Und-Zeichen                                      |
| &amp;quot; | "         | Ein doppeltes Anführungszeichen                  |
| &amp;apos; | '         | Ein Apostroph (oder einfaches Anführungszeichen) |

Obwohl es nur 5 deklarierte Zeichenreferenzen oder Entitäten gibt, können über die {{Glossary("Doctype", "Document Type Definition")}} des Dokuments mehr hinzugefügt werden. Zum Beispiel, um eine neue `&warning;`-Entität zu erstellen, können Sie dies tun:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

Sie können auch numerische Zeichenreferenzen verwenden, um spezielle Zeichen anzugeben; zum Beispiel ist \&#xA9; das "©" Symbol.

## Anzeige von XML

XML wird normalerweise zu Beschreibungszwecken verwendet, aber es gibt Möglichkeiten, XML-Daten anzuzeigen. Wenn Sie keine spezifische Methode zur Darstellung von XML definieren, wird das rohe XML im Browser angezeigt.

Eine Möglichkeit, XML-Ausgabe zu stylen, besteht darin, [CSS](/de/docs/Web/CSS) anzugeben, das auf das Dokument angewendet wird, indem die `xml-stylesheet` Verarbeitungseinweisung verwendet wird.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Es gibt auch eine andere, leistungsfähigere Möglichkeit, XML anzuzeigen: die **Extensible Stylesheet Language Transformations** ([XSLT](/de/docs/Web/XSLT)), die verwendet werden kann, um XML in andere Sprachen wie HTML zu transformieren. Dies macht XML unglaublich vielseitig.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## Empfehlungen

Dieser Artikel ist offensichtlich nur eine sehr kurze Einführung in das, was XML ist, mit einigen kleinen Beispielen und Verweisen, um Ihnen den Einstieg zu erleichtern. Für mehr Details über XML sollten Sie im Web nach ausführlicheren Artikeln suchen.

Das Erlernen der HyperText Markup Language ([HTML](/de/docs/Web/HTML)) wird Ihnen helfen, XML besser zu verstehen.

## Siehe auch

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
