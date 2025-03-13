---
title: Ein Überblick
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine vollständige Diskussion darüber geht weit über den Rahmen dieses Artikels hinaus. Eine kurze Diskussion einiger grundlegender Konzepte wird jedoch hilfreich sein, um das Verständnis der Beschreibung von Netscapes Fähigkeiten zu erleichtern, die folgen wird.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln, einschließlich der Wohlgeformtheit, einhalten muss. Das Modell für die Transformation ist also, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.
- Ein XSLT-Stylesheet wird durch die Aufnahme einer standardmäßigen XSLT-Überschrift als solches markiert.
  - : Das äußere Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element enthält mindestens eine Namensraumdeklaration und das obligatorische Versionsattribut. Andere Namensräume und drei optionale Attribute können ebenfalls aufgenommen werden.
- Der obligatorische Namensraum für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namensräume sind in XML Gegenstand beträchtlicher Verwirrung. Obwohl Namensräume sehr oft wie URIs erscheinen, beziehen sie sich in Wirklichkeit nicht auf eine Ressource an dieser Adresse. Vielmehr sind sie eine Möglichkeit, eine eindeutige Kennung für eine bekannte Menge von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die Elemente so kennzeichnet, dass sie zu der von der W3C im XSLT-Empfehlung von 1999 festgelegten Tag-Menge gehören. Ein weiterer, gelegentlich in Stylesheets zu findender String, `"http://www.w3.org/TR/WD-xsl"`, weist auf die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments hin. Dieser letztgenannte Namensraum ist nicht mit dem kompatibel, den das W3C letztlich übernommen hat, und wird von Netscape nicht unterstützt.

    Da das wiederholte Eingeben von `"http://www.w3.org/1999/XSL/Transform"` mühsam wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus, um im Stylesheet-Kopfzeilenbereich einen kurzen Namen für den Namensraum zuzuweisen. Ein vollständiges Beispiel für das einleitende Styleehlment könnte daher folgendermaßen aussehen.

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das xmlns-Pseudoattribut ordnet den Kurznamen xsl dem vollständigen Namensraum zu, der im gesamten folgenden Dokument verwendet wird. Daher ist das oben stehende Stylesheet-Element mit `xsl:`-präfixiert. Obwohl xsl der konventionell verwendete Kurzname (Prefix) ist, ist dies nicht obligatorisch und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des xsl-Prefixes aus.
- Alle XSLT-Transformationen werden an Bäumen durchgeführt, nicht an Dokumenten.

  - : Die XSLT-Transformationsmaschine, genannt Prozessor, arbeitet nicht direkt mit Dokumenten. Bevor eine Transformation stattfinden kann, müssen die primären XML-Dokumente und die Stylesheet-Dokumente durch einen Parser geleitet werden, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, der sogenannte Baum, wird tatsächlich vom Prozessor manipuliert. Der Baum ist ein abstrakter Datentyp, ein Konzeptmodell, das je nach Parser und Prozessor auf verschiedene Weisen implementiert werden kann. Netscape verwendet eine Struktur, die der W3C DOM als Baumstruktur ähnlich ist, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung von Objekten im Baum, deren Eigenschaften und deren Beziehungen.

    Der Baum besteht aus einem hierarchischen Rahmenwerk von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungsanweisungsknoten und Namensraumknoten.

    An der Spitze des Baumes befindet sich der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungsanweisungen usw. sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und dies kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen, welche Art von Knoten wo auftreten können: Zum Beispiel können Textknoten keine Kinder haben.

    Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um den Inhalt im Browserfenster darzustellen.

- XSLT ist eine deklarative Hochsprache.
  - : Im Wesentlichen ist ein XSLT-Stylesheet eine Sammlung von Regeln, die Vorlagen genannt werden und die deklarieren, dass ein Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert werden soll und in dieser spezifischen Position im Ergbnisbaum endet. Die Einzelheiten, wie dies erreicht werden soll, überlassen das Stylesheet dem Prozessor. Da die Ausführungsreihenfolge des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebeneffekte erzeugt. In diesem Punkt ähnelt es Lisp oder Scheme.
- Positionen im Baum werden mit XPath angegeben, einer weiteren W3C-Empfehlung.
  - : Transformationen hängen davon ab, dass der Prozessor in der Lage ist, individuelle Knoten im Baum zu lokalisieren. Um dies zu erleichtern, entschied sich das W3C, eine separate Sprache zu verwenden, XPath, die außerhalb des XSLT-Kontexts ebenfalls Verwendung findet. Wie der Name schon andeutet, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus xpath-spezifischen auszuwertenden Ausdrücken, Ausdrücken, die eine Reihe von zu erfüllenden Bedingungen, eine Möglichkeit zur Verknüpfung von Knoten und/oder eine Angabe der Richtung innerhalb des Baumes enthalten können. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath finden Sie im Referenzabschnitt.
- Potenzielle Konflikte beim Zuordnen von Vorlagen werden durch eine Reihe von vorrangigen Regeln gelöst.
  - : Im Allgemeinen hat eine spezifischere Vorlagenregel Vorrang vor einer weniger spezifischen, und wenn alle anderen Dinge gleich sind, hat eine Vorlagenregel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.
- Stylesheets können über eine Verarbeitungsanweisung mit einem XML-Dokument verknüpft werden.
  - : Um anzugeben, welches XSLT-Stylesheet für ein bestimmtes XML-Dokument verwendet werden soll, fügen Sie eine Verarbeitungsanweisung direkt im XML-Dokument ein. Wenn das Stylesheet beispielsweise inventory.xsl heißt und im selben Verzeichnis wie das XML-Dokument liegt, würde die Verarbeitungsanweisung im XML-Dokument folgendermaßen aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Diese muss im Prolog des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, siehe den [Für Weiterführende Lektüre](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)-Abschnitt am Ende dieses Artikels.
