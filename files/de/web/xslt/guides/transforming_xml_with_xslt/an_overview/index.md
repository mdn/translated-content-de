---
title: Ein Überblick
slug: Web/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die erweiterbare Stylesheet-Sprache/Transformation ist eine sehr mächtige Sprache, und eine vollständige Diskussion darüber geht weit über den Rahmen dieses Artikels hinaus. Eine kurze Diskussion einiger grundlegender Konzepte wird jedoch hilfreich sein, um das folgende Verständnis der Fähigkeiten von Netscape zu erleichtern.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das allen XML-Regeln genügen muss, einschließlich der Wohlgeformtheit. Das Transformationsmodell besteht also darin, dass ein XML-Dokument zur Umwandlung eines anderen XML-Dokuments verwendet wird.
- Ein XSLT-Stylesheet wird als solches durch die Einbeziehung eines standardmäßigen XSLT-Headers gekennzeichnet.
  - : Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine alternative Möglichkeit ist das `<xsl:transform>`-Element). Dieses Element enthält mindestens eine Namespace-Deklaration und das obligatorische Versionsattribut. Andere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.
- Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces sind in XML oft ein verwirrendes Thema. Obwohl Namespaces häufig als URIs erscheinen, verweisen sie tatsächlich nicht auf eine Ressource an dieser Adresse. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für eine bekannte Menge von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die Elemente als zu dem von der W3C in der 1999 XSLT Empfehlung festgelegten Tagsatz zugehörig kennzeichnet. Ein anderer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Einhaltung eines früheren Arbeitsentwurfs (daher WD) des W3C-Dokuments an. Dieser letzte Namespace ist nicht mit dem kompatibel, den das W3C schließlich angenommen hat und wird von Netscape nicht unterstützt.

    Da es mühsam wäre, `"http://www.w3.org/1999/XSL/Transform"` wiederholt einzugeben und das Markup schwer lesbar zu machen, gibt es einen Standardmechanismus, um dem Namespace im Stylesheet-Header einen Kurzname zuzuweisen. Ein vollständiges Beispiel des Öffnungselements des Stylesheets könnte daher so aussehen.

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das xmlns-Pseudoattribut ordnet den Kurznamen xsl dem vollständigen Namespace für die weitere Verwendung im Dokument zu. Daher ist das obenstehende Stylesheet-Element mit `xsl:` vorangestellt. Obwohl xsl der konventionell verwendete Kurzname (das Präfix) ist, ist dies nicht zwingend erforderlich und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel setzen alle voraus, dass das xsl-Präfix verwendet wird.
- Alle XSLT-Transformationen werden an Bäumen und nicht an Dokumenten durchgeführt.

  - : Die XSLT-Transformationsmaschine, genannt Prozessor, arbeitet nicht direkt an Dokumenten. Bevor eine Transformation stattfinden kann, müssen die primären XML-Dokumente und die Stylesheet-Dokumente durch einen Parser verarbeitet werden, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, die als Baum bezeichnet wird, ist das, was tatsächlich vom Prozessor manipuliert wird. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Arten implementiert werden kann: Netscape's verwendet eine Struktur ähnlich der W3C DOM als seine Baumstruktur, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, deren Eigenschaften und Beziehungen.

    Der Baum besteht aus einem hierarchischen Gerüst von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungsanweisungsknoten und Namespace-Knoten.

    An der Spitze des Baums steht der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unter dem Wurzelknoten befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungsanweisungen usw. sein können. Einige dieser Kinder können auch wieder Kinder haben. Und das kann sich über mehrere Ebenen fortsetzen. Es gibt gewisse Beschränkungen dafür, welche Knotentypen wo vorkommen können: Zum Beispiel können Textknoten keine Kinder haben.

    Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape nutzt diesen Baum, um die Inhalte im Browserfenster darzustellen.

- XSLT ist eine deklarative Programmiersprache auf hohem Niveau.
  - : Im Wesentlichen ist ein XSLT-Stylesheet eine Reihe von Regeln, genannt Vorlagen, die erklären, dass jeder Knoten, der mit diesem spezifischen Muster übereinstimmt, auf diese spezifische Weise manipuliert und in dieser spezifischen Position im Ergebnisbaum enden sollte. Die Einzelheiten, wie dies zu erreichen ist, sind dem Prozessor überlassen. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Seiteneffekte erzeugt. In dieser Hinsicht ähnelt es Lisp oder Scheme.
- Positionen im Baum werden mit XPath spezifiziert, einer weiteren W3C-Empfehlung.
  - : Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum genau zu lokalisieren. Um dies zu erleichtern, hat das W3C beschlossen, eine separate Sprache zu verwenden, XPath, die auch außerhalb des XSLT-Kontexts verwendet werden kann. Der Name impliziert, dass XPath einen "Pfad" definiert, den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden müssen. Diese Ausdrücke können eine Reihe von zu erfüllenden Bedingungen, eine Art der Knotenzuordnung und/oder eine Richtungsangabe innerhalb des Baums enthalten. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath folgt im Abschnitt Referenzen.
- Potenzielle Konflikte in der Vorlagenzuordnung werden durch ein Set von kaskadierenden Vorrangregeln aufgelöst.
  - : Im Allgemeinen hat eine spezifischere Vorlagenregel Vorrang vor einer weniger spezifischen, und, wenn alle anderen Dinge gleich sind, hat eine später im Dokument erscheinende Vorlagenregel Vorrang vor einer, die früher erscheint.
- Stylesheets können über eine Verarbeitungsanweisung an ein XML-Dokument angehängt werden.
  - : Der einfachste Weg zu kennzeichnen, welches XSLT-Stylesheet für die Verarbeitung eines bestimmten XML-Dokuments verwendet werden soll, ist das Einfügen einer Verarbeitungsanweisung im XML-Dokument selbst. Wenn das Stylesheet beispielsweise inventory.xsl genannt wird und sich im selben Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungsanweisung im XML-Dokument folgendermaßen aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Dies muss im Prologabschnitt des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, sehen Sie den Abschnitt [Weitere Lektüre](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) am Ende dieses Artikels.
