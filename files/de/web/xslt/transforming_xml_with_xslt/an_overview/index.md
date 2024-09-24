---
title: Ein Überblick
slug: Web/XSLT/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: b74462b088bf7ee06f27038728a7f6ea39630ca3
---

{{XsltSidebar}}

[« Transforming XML with XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT)

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine umfassende Diskussion darüber liegt weit außerhalb des Rahmens dieses Artikels. Ein kurzer Überblick über einige grundlegende Konzepte wird jedoch hilfreich sein, um das Verständnis der folgenden Beschreibung der Fähigkeiten von Netscape zu erleichtern.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln einhalten muss, einschließlich der Wohlgeformtheit. Das Modell für die Transformation ist also, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.
- Ein XSLT-Stylesheet wird durch die Einbeziehung einer standardisierten XSLT-Kopfzeile als solches gekennzeichnet.
  - : Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>` Element sein (eine akzeptable Alternative ist das `<xsl:transform>` Element). Dieses Element muss mindestens eine Namespace-Deklaration und das obligatorische Versionsattribut enthalten. Andere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.
- Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces sind Gegenstand vieler Verwirrungen in XML. Obwohl Namespaces oft wie URIs erscheinen, beziehen sie sich tatsächlich nicht auf eine Ressource an dieser Adresse. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für einen bekannten Satz von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die so gekennzeichneten Elemente als zu dem von der W3C in der XSLT-Empfehlung von 1999 benannten Tag-Set zugehörig bezeichnet. Ein anderer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments an. Dieser letztere Namespace ist nicht kompatibel mit dem, den die W3C schließlich angenommen hat und wird von Netscape nicht unterstützt.

    Da es mühsam wäre, `"http://www.w3.org/1999/XSL/Transform"` wiederholt zu tippen und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus zur Zuweisung eines Kurznamens zum Namespace in der Stylesheet-Kopfzeile. Ein vollständiges Beispiel für das eröffnende Stylesheet-Element könnte also so aussehen.

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das xmlns-Pseudoattribut ordnet den Kurznamen xsl dem vollständigen Namespace zu, der im gesamten folgenden Dokument verwendet wird. Das Stylesheet-Element oben wird somit mit `xsl:` vorangestellt. Obwohl xsl der konventionell verwendete Kurzname (genannt Präfix) ist, ist es nicht zwingend erforderlich, und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des xsl-Präfixes aus.
- Alle XSLT-Transformationen werden auf Bäumen, nicht auf Dokumenten, durchgeführt.

  - : Die XSLT-Transformationsmaschine, der Prozessor genannt, arbeitet nicht direkt auf Dokumenten. Bevor eine Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokument(e) durch einen Parser geleitet werden, der eine abstrakte Darstellung der Dokumentstruktur im Speicher erstellt. Diese Darstellung, der Baum genannt, wird tatsächlich vom Prozessor manipuliert. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das auf verschiedene Weise implementiert werden kann, abhängig vom Parser und vom Prozessor. Die einzigen Anforderungen betreffen die Anordnung von Objekten im Baum, deren Eigenschaften und deren Beziehungen.

    Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungsknotenanweisungen und Namespace-Knoten.

    An der Spitze des Baumes steht der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unter dem Wurzelknoten sind seine Kinder, die Elemente, Kommentare, Verarbeitungsknotenanweisungen und so weiter sein können. Einige dieser Kinder können auch wiederum Kinder haben. Und dies kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen hinsichtlich der Art der Knoten, die an welchem Ort vorkommen können: beispielsweise können Textknoten keine Kinder haben.

    Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

- XSLT ist eine hochstufige deklarative Sprache.
  - : Im Wesentlichen ist ein XSLT-Stylesheet eine Sammlung von Regeln, Templates genannt, die festlegen, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezielle Weise manipuliert und in dieser speziellen Position im Ergebnisbaum platziert werden soll. Die Einzelheiten, wie dies erreicht werden soll, werden dem Prozessor überlassen. Weil die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Seiteneffekte erzeugt. In dieser Hinsicht ähnelt es Lisp oder Scheme.
- Positionen im Baum werden mit XPath, einer weiteren W3C-Empfehlung, angegeben.
  - : Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum genau zu lokalisieren. Um dies zu erleichtern, hat die W3C beschlossen, eine separate Sprache zu verwenden, XPath, die auch außerhalb des XSLT-Kontextes verwendet wird. Wie der Name schon sagt, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden müssen, Ausdrücken, die eine Reihe von zu erfüllenden Bedingungen enthalten können, eine Möglichkeit, Knoten zu assoziieren, und/oder eine Angabe der Richtung im Baum. Eine ausführlichere Beschreibung der häufig in XSLT verwendeten XPath-Bestandteile folgt im Referenzabschnitt.
- Potentielle Konflikte beim Template-Matching werden durch die Verwendung einer Reihe von kaskadierenden Vorrangregeln gelöst.
  - : Im Allgemeinen hat eine spezifischere Templateregel Vorrang vor einer weniger spezifischen, und alles andere gleich, hat eine Templateregel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.
- Stylesheets können über eine Verarbeitungsknotenanweisung an ein XML-Dokument angehängt werden.
  - : Der einfachste Weg anzugeben, welches XSLT-Stylesheet verwendet werden soll, um ein bestimmtes XML-Dokument zu verarbeiten, ist das Einfügen einer Verarbeitungsknotenanweisung in das XML-Dokument selbst. Zum Beispiel, wenn das Stylesheet inventory.xsl heißt und im gleichen Verzeichnis wie das XML-Dokument liegt, würde die Verarbeitungsknotenanweisung im XML-Dokument so aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Dies muss im Prolog-Abschnitt des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, sehen Sie den Abschnitt [Für Weiterführende Lektüre](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading) am Ende dieses Artikels.
