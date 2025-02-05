---
title: Einführung in XML
slug: Web/XML/Guides/XML_introduction
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XML (Extensible Markup Language) ist eine Auszeichnungssprache, die der {{Glossary("HTML", "HTML")}} ähnelt, jedoch ohne vordefinierte Tags. Stattdessen definieren Sie Ihre eigenen Tags, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Dies ist eine leistungsstarke Methode, um Daten in einem Format zu speichern, das gespeichert, durchsucht und geteilt werden kann. Am wichtigsten ist, dass das grundlegende Format von XML standardisiert ist. Wenn Sie also XML über Systeme oder Plattformen hinweg, entweder lokal oder über das Internet, austauschen oder übertragen, kann der Empfänger die Daten aufgrund der standardisierten XML-Syntax dennoch analysieren.

Es gibt viele auf XML basierende Sprachen, darunter {{Glossary("XHTML", "XHTML")}}, [MathML](/de/docs/Web/MathML), [SVG](/de/docs/Web/SVG), {{Glossary("RSS", "RSS")}} und {{Glossary("RDF", "RDF")}}. Sie können auch Ihre eigene Sprache definieren.

## Struktur eines XML-Dokuments

Die gesamte Struktur von XML und XML-basierten Sprachen basiert auf {{Glossary("tag", "Tag")}}s.

### XML-Deklaration

Die XML-Deklaration ist kein Tag. Sie wird verwendet, um Meta-Daten eines Dokuments zu übertragen.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Attribute

- `version`
  - : Gibt die in diesem Dokument verwendete XML-Version an.
- `encoding`
  - : Gibt die in diesem Dokument verwendete Kodierung an.

### Kommentare

```html
<!-- Comment -->
```

## "Korrektes" XML (gültig und wohlgeformt)

### Regeln für korrektes Design

Damit ein XML-Dokument korrekt ist, müssen folgende Bedingungen erfüllt sein:

- Das Dokument muss wohlgeformt sein.
- Das Dokument muss alle XML-Syntaxregeln erfüllen.
- Das Dokument muss den semantischen Regeln entsprechen, die üblicherweise in einem XML-Schema oder einer DTD (**{{Glossary("Doctype", "Document Type Definition")}})** festgelegt sind.

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

Ein Dokument, das einen undefinierten Tag enthält, ist ungültig. Wenn zum Beispiel der `<warning>`-Tag nie definiert wurde, wäre das obige Dokument nicht gültig.

Die meisten Browser bieten einen Debugger, der schlecht geformte XML-Dokumente identifizieren kann.

## Zeichenreferenzen

Wie HTML bietet auch XML {{Glossary("character_reference", "Zeichenreferenzen")}}, um auf einige spezielle reservierte Zeichen zu verweisen (wie z. B. das Größer-als-Zeichen, das für Tags verwendet wird). Es gibt fünf dieser Zeichen, die Sie kennen sollten:

| Entität    | Zeichen | Beschreibung                                     |
| ---------- | ------- | ------------------------------------------------ |
| &amp;lt;   | <       | Kleiner-als-Zeichen                              |
| &amp;gt;   | >       | Größer-als-Zeichen                               |
| &amp;amp;  | &       | Ampersand                                        |
| &amp;quot; | "       | Ein doppeltes Anführungszeichen                  |
| &amp;apos; | '       | Ein Apostroph (oder einfaches Anführungszeichen) |

Obwohl es nur 5 deklarierte Zeichenreferenzen oder Entitäten gibt, können mithilfe der {{Glossary("Doctype", "Document Type Definition")}} des Dokuments weitere hinzugefügt werden. Zum Beispiel, um eine neue `&warning;`-Entität zu erstellen, können Sie dies tun:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

Sie können auch numerische Zeichenreferenzen verwenden, um Sonderzeichen anzugeben; zum Beispiel \&#xA9; ist das "©"-Symbol.

## XML anzeigen

XML wird normalerweise für beschreibende Zwecke verwendet, aber es gibt Möglichkeiten, XML-Daten anzuzeigen. Wenn Sie keine spezifische Weise definieren, wie das XML gerendert werden soll, wird das rohe XML im Browser angezeigt.

Eine Möglichkeit, XML-Ausgaben zu gestalten, ist die Angabe von [CSS](/de/docs/Web/CSS), das auf das Dokument angewendet werden soll, mithilfe der `xml-stylesheet`-Verarbeitungsanweisung.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Es gibt auch eine andere, mächtigere Möglichkeit, XML anzuzeigen: die **Extensible Stylesheet Language Transformations** ([XSLT](/de/docs/Web/XML/XSLT)), die verwendet werden können, um XML in andere Sprachen wie HTML zu transformieren. Dies macht XML unglaublich vielseitig.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## Empfehlungen

Dieser Artikel ist selbstverständlich nur eine sehr kurze Einführung in das, was XML ist, mit einigen kleinen Beispielen und Verweisen, die Ihnen den Einstieg erleichtern sollen. Für mehr Informationen über XML sollten Sie im Internet nach ausführlicheren Artikeln suchen.

Das Lernen der HyperText Markup Language ([HTML](/de/docs/Web/HTML)) hilft Ihnen, XML besser zu verstehen.

## Siehe auch

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
