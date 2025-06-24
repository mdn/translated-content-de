---
title: Transformation von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die Trennung von Inhalt und Darstellung ist ein zentrales Designmerkmal von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerspiegeln und klären, ohne durch die Notwendigkeit gestört zu werden, Anhaltspunkte darüber zu liefern, wie diese Daten letztendlich dargestellt werden sollten. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datenübertragungen automatisiert erfolgen und zwischen hochgradig heterogenen Maschinen stattfinden, die durch ein Netzwerk verbunden sind.

Letztendlich muss jedoch ein Großteil der in XML-Dokumenten gespeicherten Inhalte menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und sehr flexible Benutzeroberfläche bietet, ist er ein ideales Mittel, um solche Darstellungsvarianten von XML-Inhalten bereitzustellen. Firefox ist von Grund auf mit einer Vielzahl von XML-Technologien aufgebaut und integriert alle Mechanismen, die erforderlich sind, um sowohl originale XML-Dokumente als auch die spezialisierten Stylesheets zu verarbeiten, die zur Stil- und Layoutgestaltung für die HTML-Anzeige verwendet werden. Dies reduziert die Serverlast durch clientseitige Verarbeitung.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für grundlegende Steuerung des Aussehens — Schriftarten, Farben, Position und so weiter — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform und der Name ist treffend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten umzuformen: zum einen durch Manipulation und Sortierung des Inhalts, einschließlich einer umfassenden Neuordnung, falls gewünscht, und zum anderen durch Umwandlung des Inhalts in ein anderes Format (und im Fall von Firefox liegt der Fokus darauf, es im Handumdrehen in HTML umzuwandeln, das dann vom Browser angezeigt werden kann).

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr leistungsfähige Sprache, und eine vollständige Diskussion darüber geht über den Rahmen dieses Artikels hinaus. Eine kurze Diskussion einiger grundlegender Konzepte wird jedoch hilfreich sein, um die Beschreibung von Netscapes Fähigkeiten, die folgt, zu verstehen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das allen XML-Regeln, einschließlich der Wohlgeformtheit, entsprechen muss. Das Transformationsmodell sieht also vor, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.

Ein XSLT-Stylesheet wird als solches durch die Aufnahme einer standardmäßigen XSLT-Kopfzeile gekennzeichnet. Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element wird mindestens eine Namensraumdeklaration und das obligatorische Versionsattribut enthalten. Andere Namensräume und drei optionale Attribute können ebenfalls enthalten sein.

## Der XSLT-Namensraum

Der obligatorische Namensraum für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`. Namensräume sind in XML oft verwirrend. Obwohl Namensräume sehr oft wie URIs aussehen, beziehen sie sich nicht auf eine Ressource an dieser Adresse. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für eine bekannte Menge von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die so markierten Elemente als zu der von der W3C im Jahr 1999 empfohlenen Menge von XSLT-Tags gehörend ausweist. Ein weiterer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, weist auf die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments hin. Dieser spätere Namensraum ist nicht kompatibel mit dem, den die W3C schließlich übernommen hat und wird von Netscape nicht unterstützt.

Da das wiederholte Tippen von `"http://www.w3.org/1999/XSL/Transform"` mühselig wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus zur Zuweisung eines Kurznamens zum Namensraum in der Stylesheet-Kopfzeile. Ein vollständiges Beispiel des Stylesheet-Öffnungselements könnte also folgendermaßen aussehen.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das `xmlns`-Pseudoattribut weist den Kurznamen `xsl` dem vollständigen Namensraum zu, der im gesamten folgenden Dokument verwendet werden kann. Somit ist das Stylesheet-Element oben mit `xsl:` vorangestellt. Obwohl `xsl` der konventionell verwendete Kurzname (genannt Präfix) ist, ist es nicht zwingend erforderlich und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle davon aus, dass das `xsl`-Präfix verwendet wird.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformationsengine, genannt Prozessor, arbeitet nicht direkt an Dokumenten. Bevor eine Transformation vorgenommen werden kann, müssen die primären XML-Dokumente und die Stylesheet-Dokumente durch einen Parser laufen, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, Baum genannt, wird tatsächlich vom Prozessor bearbeitet. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das auf verschiedene Weise implementiert werden kann, je nach Parser und Prozessor. Die einzige Voraussetzung betrifft die Stellung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen.

Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungshinweisknoten und Namensraumknoten.

An der Spitze des Baumes befindet sich der Wurzelknoten. Der Wurzelknoten entspricht keinem einzelnen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungshinweise usw. sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und das kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen, welche Knotentypen wo auftreten können: Zum Beispiel können Textknoten keine Kinder haben.

Das Ergebnis der Prozessoraktion ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und Knotenauswahl

Im Wesentlichen ist ein XSLT-Stylesheet eine Menge von Regeln, sogenannte Templates, die erklären, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert werden soll und an dieser spezifischen Position im Ergebnisbaum enden soll. Die Einzelheiten, wie dies erreicht werden soll, überlässt man dem Prozessor. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Seiteneffekte produziert. In dieser Hinsicht ähnelt es Lisp oder Scheme.

Transformationen hängen davon ab, dass der Prozessor einzelne Knoten im Baum genau lokalisieren kann. Um dies zu erleichtern, hat sich die W3C entschieden, eine separate Sprache zu verwenden, XPath, die auch außerhalb des XSLT-Kontextes Verwendung findet. Wie der Name schon sagt, definiert XPath einen "Pfad", dem der Prozessor durch den Baum folgen muss, um den gewünschten Knoten zu erreichen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden müssen, Ausdrücken, die eine Reihe von Bedingungen enthalten können, eine Möglichkeit, Knoten zu verknüpfen, und/oder eine Angabe der Richtung innerhalb des Baumes. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath folgt im Referenzbereich.

Potenzielle Konflikte bei der Template-Zuordnung werden durch ein Satz von kaskadierenden Vorrangregeln gelöst. Im Allgemeinen hat eine spezifischere Templateregel Vorrang vor einer weniger spezifischen, und wenn alle anderen Dinge gleich sind, hat eine Templateregel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.

Stylesheets können über eine Verarbeitungshinweis-Anweisung an ein XML-Dokument angehängt werden. Um anzuzeigen, welches XSLT-Stylesheet zur Verarbeitung eines bestimmten XML-Dokuments verwendet werden soll, fügen Sie eine Verarbeitungshinweis-Anweisung in das XML-Dokument selbst ein. Beispiel: Wenn das Stylesheet inventory.xsl heißt und sich im selben Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungshinweis-Anweisung im XML-Dokument so aussehen:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Dies muss im Prolog-Bereich des XML-Dokuments platziert werden.

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Für weiterführende Literatur

### Bücher

- **XSLT: Programmer's Reference, Second Edition**
  - **Autor**: Michael H. Kay
  - **Umfang**: 992 Seiten
  - **Verlag**: Wrox; 2. Auflage (3. Mai 2001)
  - **ISBN**: 0764543814
    - Michael Kay ist Mitglied der W3C XSL Arbeitsgruppe und Entwickler seines eigenen Open-Source-XSLT-Prozessors Saxon. Er ist auch der Autor des einzigen Buches zu diesem Thema, das eine zweite Auflage erreicht hat. Dies ist ein sehr umfangreiches Buch, gut strukturiert und erschöpfend, wenn auch manchmal ermüdend in den Details, und deckt jede mögliche Basis in der XSLT-Geschichte ab.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Umfang**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell ist ein Seniorentwickler bei IBM und ein prominenter Verfechter von XML-Technologien im Allgemeinen. Er ist Autor mehrerer Artikel und Tutorials zu verschiedenen Aspekten von XML auf IBMs umfangreicher XML-Entwicklerseite. Dieses Buch ist etwas weniger umfassend als das von Michael Kay, deckt jedoch die Grundlagen gut ab und bietet einige faszinierende Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Umfang**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206
    - Wie der Titel andeutet, handelt es sich um einen Überblick über XML im Allgemeinen. Kapitel 6 ist speziell XSLT gewidmet.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die Haupt-XSL-Seite**: <https://www.w3.org/Style/XSL/>
- **Überblick über die XSLT-Spezifikationen**: <https://www.w3.org/TR/xslt/>
- **Archiv öffentlicher Stil-(CSS und XSLT)-Diskussionen**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **Überblick über die XPath-Spezifikationen**: <https://www.w3.org/TR/xpath/>

### Artikel

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) von Don R. Day
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials/Beispiele

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)

### Sonstiges

- [Extensible Stylesheet Language (XSL)](https://xml.coverpages.org/xsl.html)
