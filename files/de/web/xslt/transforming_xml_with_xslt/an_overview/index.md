---
title: Ein Überblick
slug: Web/XSLT/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: b74462b088bf7ee06f27038728a7f6ea39630ca3
---

{{XsltSidebar}}

[« Transforming XML with XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT)

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine vollständige Diskussion darüber geht weit über den Rahmen dieses Artikels hinaus, aber eine kurze Diskussion einiger grundlegender Konzepte wird hilfreich sein, um das Verständnis der nachfolgenden Beschreibung der Fähigkeiten von Netscape zu erleichtern.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Im Unterschied zu CSS, das seine eigene spezielle Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das allen XML-Regeln einschließlich der Wohlgeformtheit entsprechen muss. Das Modell für die Transformation ist also, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.
- Ein XSLT-Stylesheet wird als solches durch die Einfügung eines standardmäßigen XSLT-Kopfes gekennzeichnet.
  - : Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>` Element sein (eine akzeptable Alternative ist das `<xsl:transform>` Element). Dieses Element wird mindestens eine Namespace-Deklaration und das obligatorische Versionsattribut enthalten. Andere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.
- Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces sind das Thema einiges an Verwirrung in XML. Obwohl Namespaces sehr oft wie URIs erscheinen, beziehen sie sich in der Tat nicht auf eine Ressource an dieser Adresse. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für einen bekannten Satz von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die so markierten Elemente als zu dem von der W3C im XSLT-Empfehlung 1999 festgelegten Satz von Tags gehörend kennzeichnet. Ein anderer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments an. Dieser letzte Namespace ist nicht kompatibel mit dem, den die W3C letztendlich angenommen hat und wird von Netscape nicht unterstützt.

    Weil das wiederholte Tippen von `"http://www.w3.org/1999/XSL/Transform"` mühselig wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus, um dem Namespace im Stylesheet-Kopf einen Kurznamen zuzuweisen. Ein vollständiges Beispiel des öffnenden Stylesheet-Elements könnte also so aussehen.

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das xmlns-Pseudoattribut ordnet den Kurznamen xsl dem vollständigen Namespace für die Verwendung im gesamten Dokument zu, das folgt. So ist das obige Stylesheet-Element mit `xsl:` vorangestellt. Obwohl xsl der konventionell verwendete Kurznamen (als das Präfix genannt) ist, ist es nicht zwingend erforderlich und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des xsl-Präfixes aus.
- Alle XSLT-Transformationen werden an Bäumen, nicht an Dokumenten durchgeführt.

  - : Die XSLT-Transformationsmaschine, genannt der Prozessor, arbeitet nicht direkt an Dokumenten. Bevor eine Transformation stattfinden kann, müssen die primären XML-Dokument(e) und die Stylesheet-Dokument(e) durch einen Parser verarbeitet werden, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, der Baum genannt, ist das, was tatsächlich vom Prozessor manipuliert wird. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann. :Netscape verwendet eine Struktur ähnlich der W3C DOM als seine Baumstruktur, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen.

    Der Baum besteht aus einem hierarchischen Rahmenwerk von Knoten. Er kann aus sieben verschiedenen Arten von Knoten bestehen: dem einzigen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungsanweisungsknoten und Namespace-Knoten.

    An der Spitze des Baumes steht der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: er stellt das Dokument als Ganzes dar. Unterhalb des Wurzelknotens befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungsanweisungen und so weiter sein können. Einige dieser Kinder können auch Kinder haben. Und das kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen, welche Art von Knoten wo vorkommen kann: Zum Beispiel können Textknoten keine Kinder haben.

    Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

- XSLT ist eine deklarative Hochsprache.
  - : Im Wesentlichen ist ein XSLT-Stylesheet ein Satz von Regeln, genannt Vorlagen, die erklären, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert werden und in dieser spezifischen Position im Ergebnisbaum enden soll. Die Einzelheiten dazu, wie dies erreicht werden soll, werden dem Prozessor überlassen. Weil die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebeneffekte erzeugt. In diesem Punkt ist es wie Lisp oder Scheme.
- Orte im Baum werden mit XPath, einer weiteren W3C-Empfehlung, angegeben.
  - : Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum genau zu bestimmen. Um dies zu erleichtern, hat sich die W3C entschieden, eine separate Sprache, XPath, zu verwenden, die auch außerhalb des XSLT-Kontexts Verwendung findet. Der Name deutet darauf hin, dass XPath einen "Pfad" definiert, den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden, Ausdrücken, die eine Anzahl von Bedingungen enthalten können, die erfüllt werden müssen, eine Möglichkeit, Knoten zuzuordnen, und/oder einen Hinweis auf die Richtung innerhalb des Baumes. Eine ausführlichere Beschreibung der häufig in XSLT verwendeten Teile von XPath finden Sie im Referenzabschnitt.
- Potenzielle Konflikte bei der Vorlagenübereinstimmung werden durch die Verwendung einer Reihe von Kaskadenpräzedenzregeln gelöst.
  - : Im Allgemeinen hat eine spezifischere Vorlagenregel Vorrang vor einer weniger spezifischen und, wenn alle anderen Dinge gleich sind, hat eine Vorlage, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.
- Stylesheets können einem XML-Dokument über eine Verarbeitungsanweisung angehängt werden.
  - : Der einfachste Weg, anzugeben, welches XSLT-Stylesheet zur Verarbeitung eines bestimmten XML-Dokuments verwendet werden soll, ist das Einfügen einer Verarbeitungsanweisung direkt im XML-Dokument. Wenn das Stylesheet zum Beispiel inventory.xsl heißt und sich im gleichen Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungsanweisung im XML-Dokument folgendermaßen aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Diese muss im Prolog-Abschnitt des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, siehe den Abschnitt [Weiterführende Literatur](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading) am Ende dieses Artikels.
