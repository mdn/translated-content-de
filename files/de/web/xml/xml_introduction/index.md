---
title: Einführung in XML
slug: Web/XML/XML_introduction
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{QuickLinksWithSubpages("/de/docs/Web/XML")}}

XML (Extensible Markup Language) ist eine Markupsprache, die ähnlich wie {{Glossary("HTML")}} ist, jedoch ohne vordefinierte Tags. Stattdessen definieren Sie Ihre eigenen Tags, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Dies ist eine leistungsstarke Möglichkeit, Daten in einem Format zu speichern, das gespeichert, durchsucht und geteilt werden kann. Das Wichtigste ist, dass das grundlegende Format von XML standardisiert ist. Wenn Sie XML zwischen Systemen oder Plattformen teilen oder übertragen, sei es lokal oder über das Internet, kann der Empfänger die Daten aufgrund der standardisierten XML-Syntax immer noch parsen.

Es gibt viele auf XML basierende Sprachen, einschließlich [XHTML](/de/docs/Glossary/XHTML), [MathML](/de/docs/Web/MathML), [SVG](/de/docs/Web/SVG), [RSS](/de/docs/Glossary/RSS) und [RDF](/de/docs/Glossary/RDF). Sie können auch Ihre eigene definieren.

## Struktur eines XML-Dokuments

Die gesamte Struktur von XML und XML-basierten Sprachen basiert auf {{Glossary("tag")}}s.

### XML-Deklaration

Die XML-Deklaration ist kein Tag. Sie wird für die Übermittlung der Metadaten eines Dokuments verwendet.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Attribute

- `version`
  - : Verwendete XML-Version in diesem Dokument.
- `encoding`
  - : Verwendete Kodierung in diesem Dokument.

### Kommentare

```html
<!-- Comment -->
```

## "Korrektes" XML (gültig und wohlgeformt)

### Korrekte Gestaltungsregeln

Damit ein XML-Dokument korrekt ist, müssen die folgenden Bedingungen erfüllt sein:

- Das Dokument muss wohlgeformt sein.
- Das Dokument muss allen XML-Syntaxregeln entsprechen.
- Das Dokument muss den semantischen Regeln entsprechen, die in einem XML-Schema oder einer DTD (**[Document Type Definition](/de/docs/Glossary/Doctype)**) festgelegt sind.

### Beispiel

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

Schauen wir nun auf eine korrigierte Version desselben Dokuments:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

Ein Dokument, das ein undefiniertes Tag enthält, ist ungültig. Wenn wir zum Beispiel das `<warning>`-Tag nie definiert hätten, wäre das obige Dokument nicht gültig.

Die meisten Browser bieten einen Debugger, der schlecht geformte XML-Dokumente identifizieren kann.

## Zeichenreferenzen

Wie HTML bietet auch XML {{glossary("character reference", "Zeichenreferenzen")}} für die Angabe einiger speziell reservierter Zeichen (wie zum Beispiel ein Größer-als-Zeichen, das für Tags verwendet wird). Es gibt fünf dieser Zeichen, die Sie kennen sollten:

| Entität    | Zeichen   | Beschreibung                                |
| ---------- | --------- | ------------------------------------------- |
| &amp;lt;   | <         | Kleiner-als-Zeichen                         |
| &amp;gt;   | >         | Größer-als-Zeichen                          |
| &amp;amp;  | &         | Kaufmanns-Und                               |
| &amp;quot; | "         | Ein Anführungszeichen                       |
| &amp;apos; | '         | Ein Apostroph (oder einfaches Anführungszeichen) |

Auch wenn nur 5 deklarierte Zeichenreferenzen, oder Entitäten, existieren, können weitere mit der [Document Type Definition](/de/docs/Glossary/Doctype) des Dokuments hinzugefügt werden. Um beispielsweise eine neue `&warning;`-Entität zu erstellen, können Sie dies tun:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

Sie können auch numerische Zeichenreferenzen verwenden, um spezielle Zeichen zu spezifizieren; zum Beispiel ist \&#xA9; das "©"-Symbol.

## Anzeige von XML

XML wird normalerweise zu Beschreibungszwecken verwendet, aber es gibt Möglichkeiten, XML-Daten anzuzeigen. Wenn Sie keinen speziellen Weg zur Darstellung des XML definieren, wird das rohe XML im Browser angezeigt.

Eine Möglichkeit, XML-Ausgaben zu formatieren, ist die Spezifikation von [CSS](/de/docs/Web/CSS), das auf das Dokument mittels der `xml-stylesheet`-Verarbeitungsanweisung angewendet wird.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Es gibt auch einen anderen, leistungsfähigeren Weg, XML anzuzeigen: die **Extensible Stylesheet Language Transformations** ([XSLT](/de/docs/Web/XSLT)), die verwendet werden können, um XML in andere Sprachen wie HTML zu transformieren. Dies macht XML unglaublich vielseitig.

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
