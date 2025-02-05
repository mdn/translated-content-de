---
title: Ein Überblick
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die eXtensible Stylesheet Language/Transform ist eine sehr leistungsfähige Sprache, und eine vollständige Diskussion darüber geht weit über den Umfang dieses Artikels hinaus. Eine kurze Besprechung einiger grundlegender Konzepte kann jedoch hilfreich sein, um die Beschreibung der Fähigkeiten von Netscape, die im Folgenden folgt, zu verstehen.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Anders als CSS, das eine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln einhalten muss, einschließlich der Wohlgeformtheit. Das Modell für die Transformation besteht also darin, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.
- Ein XSLT-Stylesheet wird als solches durch die Einbindung einer Standard-XSLT-Kopfzeile gekennzeichnet.
  - : Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element muss mindestens eine Namespace-Deklaration und das obligatorische Attribut `version` enthalten. Andere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.
- Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces sind in XML häufig ein Grund für Verwirrung. Obwohl Namespaces oft wie URIs erscheinen, handelt es sich hierbei nicht tatsächlich um Ressourcen, die unter dieser Adresse gefunden werden können. Stattdessen dienen sie dazu, eine eindeutige Kennung für eine bekannte Gruppe von Elementen festzulegen. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die so markierten Elemente als zur Menge der vom W3C in der XSLT-Empfehlung von 1999 angegebenen Tags gehörend bezeichnet. Ein anderer String, der gelegentlich in Stylesheets vorkommt, `"http://www.w3.org/TR/WD-xsl"`, weist auf die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments hin. Dieser Namespace ist jedoch nicht kompatibel mit dem, den das W3C schließlich übernommen hat, und wird von Netscape nicht unterstützt.

    Da das wiederholte Tippen von `"http://www.w3.org/1999/XSL/Transform"` mühsam wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus, um einen Kurzbezeichner für den Namespace in der Stylesheet-Kopfzeile zuzuweisen. Ein vollständiges Beispiel für das öffnende Stylesheet-Element könnte so aussehen:

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das Pseudo-Attribut `xmlns` ordnet den Kurzbezeichner `xsl` dem vollständigen Namespace für die Verwendung im gesamten folgenden Dokument zu. Daher ist das oben stehende Stylesheet-Element mit `xsl:` vorangestellt. Obwohl `xsl` der üblicherweise verwendete Kurzbezeichner (genannt Präfix) ist, ist dies nicht obligatorisch. Es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle davon aus, dass das Präfix `xsl` verwendet wird.
- Alle XSLT-Transformationen werden auf Bäumen und nicht auf Dokumenten durchgeführt.

  - : Die XSLT-Transformationseinheit, sogenannte Prozessor, arbeitet nicht direkt mit Dokumenten. Bevor die Transformation stattfinden kann, müssen die primären XML-Dokumente und die Stylesheet-Dokumente durch einen Parser laufen, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, Baum genannt, ist das eigentliche Arbeitsobjekt des Prozessors. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann. :Netscape verwendet eine Struktur ähnlich der W3C DOM als Baumstruktur, aber andere sind ebenfalls möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen.

    Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungshinweisknoten und Namespaceknoten.

    An der Spitze des Baums steht der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: Er stellt das gesamte Dokument dar. Unterhalb des Wurzelknotens befinden sich dessen Kinder, die Elemente, Kommentare, Verarbeitungshinweise usw. sein können. Einige dieser Kinder können ebenfalls Kinder haben, und dies kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Beschränkungen hinsichtlich des Vorkommens von Knotentypen: Beispielsweise können Textknoten keine Kinder haben.

    Auch das Ergebnis der Verarbeitung des Prozessors ist ein Baum. Netscape verwendet diesen Baum, um den Inhalt im Browserfenster darzustellen.

- XSLT ist eine deklarative Sprache auf hoher Ebene.
  - : Im Wesentlichen ist ein XSLT-Stylesheet eine Menge von Regeln, sogenannte Templates, die erklären, dass jeder Knoten, der mit diesem spezifischen Muster übereinstimmt, auf diese spezifische Weise manipuliert werden soll und an dieser spezifischen Position im Ergebnisbaum landen soll. Die Einzelheiten, wie dies erreicht wird, werden dem Prozessor überlassen. Da die Ausführungsreihenfolge des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebenwirkungen erzeugt. In dieser Hinsicht ist es Lisp oder Scheme ähnlich.
- Positionen im Baum werden mittels XPath angegeben, einer weiteren Empfehlung des W3C.
  - : Transformationen setzen voraus, dass der Prozessor einzelne Knoten im Baum genau bestimmen kann. Um dies zu erleichtern, hat sich das W3C für eine separate Sprache entschieden, XPath, die auch außerhalb des XSLT-Kontexts verwendet werden kann. Wie der Name impliziert, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um den gewünschten Knoten zu erreichen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die zu bewerten sind. Die Ausdrücke können eine Reihe von Bedingungen enthalten, die erfüllt sein müssen, eine Möglichkeit, Knoten zu verknüpfen, und/oder eine Angabe über die Richtung innerhalb des Baums. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath finden Sie im Referenzabschnitt.
- Potenzielle Konflikte beim Template-Matching werden durch ein Regelwerk für fallende Prioritäten gelöst.
  - : Im Allgemeinen hat eine spezifischere Template-Regel Vorrang vor einer weniger spezifischen, und wenn alle anderen Dinge gleich sind, hat eine Template-Regel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.
- Stylesheets können mittels eines Verarbeitungshinweises an ein XML-Dokument angehängt werden.
  - : Der einfachste Weg, anzugeben, welches XSLT-Stylesheet zum Verarbeiten eines bestimmten XML-Dokuments verwendet werden soll, ist das Einfügen eines Verarbeitungshinweises in das XML-Dokument selbst. Zum Beispiel, wenn das Stylesheet `inventory.xsl` heißt und sich im selben Verzeichnis wie das XML-Dokument befindet, würde der Verarbeitungshinweis im XML-Dokument so aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Dieser muss im Prolog-Bereich des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, lesen Sie den Abschnitt [Weiterführende Literatur](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) am Ende dieses Artikels.
