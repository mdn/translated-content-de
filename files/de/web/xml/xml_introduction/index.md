---
title: XML-Einführung
slug: Web/XML/XML_introduction
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

XML (Extensible Markup Language) ist eine Auszeichnungssprache ähnlich wie [HTML](/de/docs/Glossary/HTML), jedoch ohne vordefinierte Tags zur Verwendung. Stattdessen definieren Sie Ihre eigenen Tags, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Dies ist eine leistungsstarke Methode, um Daten in einem Format zu speichern, das gespeichert, durchsucht und geteilt werden kann. Am wichtigsten: Da das grundlegende Format von XML standardisiert ist, kann der Empfänger, wenn Sie XML zwischen Systemen oder Plattformen, entweder lokal oder über das Internet, teilen oder übertragen, die Daten dank der standardisierten XML-Syntax weiterhin analysieren.

Es gibt viele Sprachen, die auf XML basieren, darunter [XHTML](/de/docs/Glossary/XHTML), [MathML](/de/docs/Web/MathML), [SVG](/de/docs/Web/SVG), [RSS](/de/docs/Glossary/RSS) und [RDF](/de/docs/Glossary/RDF). Sie können auch Ihre eigene definieren.

## Struktur eines XML-Dokuments

Die gesamte Struktur von XML und XML-basierten Sprachen basiert auf [Tags](/de/docs/Glossary/tag).

### XML-Deklaration

Die XML-Deklaration ist kein Tag. Sie wird für die Übertragung der Metadaten eines Dokuments verwendet.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Attribute

- `version`
  - : Die verwendete XML-Version in diesem Dokument.
- `encoding`
  - : Die verwendete Kodierung in diesem Dokument.

### Kommentare

```html
<!-- Comment -->
```

## "Korrektes" XML (gültig und wohlgeformt)

### Korrekte Gestaltungsrichtlinien

Damit ein XML-Dokument korrekt ist, müssen die folgenden Bedingungen erfüllt sein:

- Das Dokument muss wohlgeformt sein.
- Das Dokument muss allen XML-Syntaxregeln entsprechen.
- Das Dokument muss den semantischen Regeln entsprechen, die üblicherweise in einem XML-Schema oder einer DTD (**[Document Type Definition](/de/docs/Glossary/Doctype))** festgelegt sind.

### Beispiel

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

Schauen wir uns nun eine korrigierte Version desselben Dokuments an:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

Ein Dokument, das einen undefinierten Tag enthält, ist ungültig. Zum Beispiel, wenn wir den `<warning>`-Tag niemals definiert haben, wäre das oben stehende Dokument nicht gültig.

Die meisten Browser bieten einen Debugger, der schlecht geformte XML-Dokumente identifizieren kann.

## Zeichenreferenzen

Wie HTML bietet XML [Zeichenreferenzen](/de/docs/Glossary/character_reference) für die Bezugnahme auf einige spezielle reservierte Zeichen (wie das Größer-als-Zeichen, das für Tags verwendet wird). Es gibt fünf dieser Zeichen, die Sie kennen sollten:

| Entity     | Zeichen | Beschreibung                                     |
| ---------- | ------- | ------------------------------------------------ |
| &amp;lt;   | <       | Kleiner-als-Zeichen                              |
| &amp;gt;   | >       | Größer-als-Zeichen                               |
| &amp;amp;  | &       | Kaufmanns-Und                                    |
| &amp;quot; | "       | Ein Anführungszeichen                            |
| &amp;apos; | '       | Ein Apostroph (oder einfaches Anführungszeichen) |

Auch wenn es nur 5 deklarierte Zeichenreferenzen oder Entitäten gibt, können mehr durch die [Document Type Definition](/de/docs/Glossary/Doctype) des Dokuments hinzugefügt werden. Beispielsweise können Sie eine neue `&warning;`-Entität so erstellen:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

Sie können auch numerische Zeichenreferenzen verwenden, um spezielle Zeichen anzugeben; beispielsweise ist \&#xA9; das "©"-Symbol.

## XML darstellen

XML wird normalerweise zu Beschreibungszwecken verwendet, aber es gibt Möglichkeiten, XML-Daten darzustellen. Wenn Sie nicht eine bestimmte Methode zum Rendern von XML definieren, wird das rohe XML im Browser angezeigt.

Eine Methode, XML-Ausgaben zu gestalten, besteht darin, [CSS](/de/docs/Web/CSS) anzugeben, das mit der `xml-stylesheet`-Verarbeitungsvorgabe auf das Dokument angewendet werden soll.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Es gibt auch eine weitere, leistungsstärkere Möglichkeit, XML darzustellen: die **Extensible Stylesheet Language Transformations** ([XSLT](/de/docs/Web/XSLT)), die verwendet werden können, um XML in andere Sprachen wie HTML zu transformieren. Dies macht XML unglaublich vielseitig.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## Empfehlungen

Dieser Artikel ist offensichtlich nur eine sehr kurze Einführung in das, was XML ist, mit einigen kleinen Beispielen und Verweisen, um Ihnen den Einstieg zu erleichtern. Für detailliertere Informationen über XML sollten Sie im Internet nach umfassenderen Artikeln suchen.

Das Erlernen der HyperText Markup Language ([HTML](/de/docs/Web/HTML)) wird Ihnen helfen, XML besser zu verstehen.

## Siehe auch

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
